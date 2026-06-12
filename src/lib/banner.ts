import { Redis } from "@upstash/redis";
import { unstable_cache } from "next/cache";

export type BannerData = { de: string; en: string };

const EMPTY: BannerData = { de: "", en: "" };
const KEY = "banner";

// Returns a Redis client if the KV env vars are present, otherwise null.
// The Vercel Upstash integration injects either KV_REST_API_* or
// UPSTASH_REDIS_REST_* — we accept both so it works with any setup.
function client(): Redis | null {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

// Cached read for the public site. Tagged "banner" so a save can invalidate
// it instantly via revalidateTag while keeping pages fast the rest of the time.
export const getBanner = unstable_cache(
  async (): Promise<BannerData> => {
    const redis = client();
    if (!redis) return EMPTY;
    const data = await redis.get<BannerData>(KEY);
    return { de: data?.de ?? "", en: data?.en ?? "" };
  },
  ["fru-banner"],
  { tags: ["banner"] },
);

// Uncached read for the admin editor so it always shows the latest saved text.
export async function getBannerFresh(): Promise<BannerData> {
  const redis = client();
  if (!redis) return EMPTY;
  const data = await redis.get<BannerData>(KEY);
  return { de: data?.de ?? "", en: data?.en ?? "" };
}

export async function setBanner(data: BannerData): Promise<void> {
  const redis = client();
  if (!redis) {
    throw new Error(
      "Banner storage is not configured (missing KV_REST_API_URL / KV_REST_API_TOKEN).",
    );
  }
  await redis.set(KEY, data);
}
