"use server";

import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import {
  checkPassword,
  setAuthCookie,
  clearAuthCookie,
  isAuthed,
} from "@/lib/admin-auth";
import { setBanner } from "@/lib/banner";

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
