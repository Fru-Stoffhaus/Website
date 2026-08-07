import type { MetadataRoute } from "next";
import { SITE_URL as baseUrl } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["de", "en"];
  const pages = [
    "",
    "/bestellung-versand",
    "/impressum",
    "/datenschutz",
    "/agb",
    "/widerrufsbelehrung",
  ];

  // Bestellung & Versand is a content page, the rest are legal boilerplate.
  const priorityFor = (page: string) => {
    if (page === "") return 1;
    return page === "/bestellung-versand" ? 0.8 : 0.5;
  };

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: priorityFor(page),
    }))
  );
}
