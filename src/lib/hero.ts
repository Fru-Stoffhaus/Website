import { Redis } from "@upstash/redis";
import { unstable_cache } from "next/cache";

// The hero image shown next to "Willkommen bei Stoffhaus FRU".
// We store the Vercel Blob URL of the uploaded image in Redis; the actual
// bytes live in Blob storage. When nothing has been uploaded yet we fall
// back to the original file shipped in /public.
export const DEFAULT_HERO_IMAGE = "/images/fru-geoeffnet.jpg";

const KEY = "hero-image";

// Mirrors the client helper in banner.ts — accepts either the KV_REST_API_*
// or UPSTASH_REDIS_REST_* env vars injected by the Vercel integration.
function client(): Redis | null {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

// Cached read for the public site. Tagged "hero" so a save invalidates it
// instantly via revalidateTag while keeping pages fast otherwise.
export const getHeroImage = unstable_cache(
  async (): Promise<string> => {
    const redis = client();
    if (!redis) return DEFAULT_HERO_IMAGE;
    const url = await redis.get<string>(KEY);
    return url || DEFAULT_HERO_IMAGE;
  },
  ["fru-hero-image"],
  { tags: ["hero"] },
);

// Uncached read for the admin editor so it always shows the latest image.
export async function getHeroImageFresh(): Promise<string> {
  const redis = client();
  if (!redis) return DEFAULT_HERO_IMAGE;
  const url = await redis.get<string>(KEY);
  return url || DEFAULT_HERO_IMAGE;
}

export async function setHeroImage(url: string): Promise<void> {
  const redis = client();
  if (!redis) {
    throw new Error(
      "Hero image storage is not configured (missing KV_REST_API_URL / KV_REST_API_TOKEN).",
    );
  }
  await redis.set(KEY, url);
}
