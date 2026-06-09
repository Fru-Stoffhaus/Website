import type { MetadataRoute } from "next";
import { SITE_URL as baseUrl } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["de", "en"];
  const pages = ["", "/impressum", "/datenschutz"];

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.5,
    }))
  );
}
