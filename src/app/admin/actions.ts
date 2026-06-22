"use server";

import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { put } from "@vercel/blob";
import {
  checkPassword,
  setAuthCookie,
  clearAuthCookie,
  isAuthed,
} from "@/lib/admin-auth";
import { setBanner } from "@/lib/banner";
import { setHeroImage } from "@/lib/hero";

export async function login(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  if (!checkPassword(password)) {
    redirect("/admin?error=1");
  }
  await setAuthCookie();
  redirect("/admin");
}

export async function logout() {
  await clearAuthCookie();
  redirect("/admin");
}

export async function saveBanner(formData: FormData) {
  if (!(await isAuthed())) {
    redirect("/admin?error=auth");
  }
  const de = String(formData.get("de") ?? "");
  const en = String(formData.get("en") ?? "");
  await setBanner({ de, en });
  // Invalidate the cached public read so the change appears immediately.
  revalidateTag("banner");
  redirect("/admin?saved=1");
}

const MAX_IMAGE_BYTES = 8 * 1024 * 1024; // 8 MB
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function saveHeroImage(formData: FormData) {
  if (!(await isAuthed())) {
    redirect("/admin?error=auth");
  }
  const file = formData.get("image");
  if (!(file instanceof File) || file.size === 0) {
    redirect("/admin?error=image");
  }
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    redirect("/admin?error=imagetype");
  }
  if (file.size > MAX_IMAGE_BYTES) {
    redirect("/admin?error=imagesize");
  }

  // Upload to Vercel Blob with a random suffix so each upload gets a unique
  // URL (avoids stale CDN caching of a fixed filename). Wrapped so a missing
  // BLOB_READ_WRITE_TOKEN (or any Blob error) shows a friendly message
  // instead of crashing with a server-side exception.
  let url: string;
  try {
    const result = await put(`hero/willkommen.${extFor(file.type)}`, file, {
      access: "public",
      addRandomSuffix: true,
      contentType: file.type,
    });
    url = result.url;
  } catch {
    redirect("/admin?error=upload");
  }

  await setHeroImage(url);
  revalidateTag("hero");
  redirect("/admin?saved=image");
}

function extFor(type: string): string {
  if (type === "image/png") return "png";
  if (type === "image/webp") return "webp";
  return "jpg";
}
