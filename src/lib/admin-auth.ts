import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE = "fru_admin";

// Constant-time string comparison that won't throw on length mismatch.
function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

// The cookie stores a hash of the password (not the password itself), so the
// secret never travels back to the client in readable form.
function tokenFor(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

export function checkPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD ?? "";
  if (!expected) return false;
  return safeEqual(input, expected);
}

export async function isAuthed(): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const store = await cookies();
  const token = store.get(COOKIE)?.value ?? "";
  return safeEqual(token, tokenFor(expected));
}

export async function setAuthCookie(): Promise<void> {
  const expected = process.env.ADMIN_PASSWORD ?? "";
  const store = await cookies();
  store.set(COOKIE, tokenFor(expected), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}

export async function clearAuthCookie(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE);
}
