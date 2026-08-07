import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL, STORE_INFO } from "@/lib/constants";

/**
 * Metadata for a static page that lives under the same slug in every locale.
 *
 * The canonical URL and the hreflang alternates are both derived from `slug`,
 * so they cannot drift apart — a mismatch here previously made Google treat
 * the legal pages as duplicates of the home page.
 */
export async function pageMetadata({
  locale,
  namespace,
  slug,
  descriptionKey,
}: {
  locale: string;
  namespace: string;
  /** Path segment without a locale prefix or leading slash, e.g. "impressum". */
  slug: string;
  /** Key inside `namespace` holding the meta description, when the page has one. */
  descriptionKey?: string;
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const path = (forLocale: string) => `/${forLocale}/${slug}`;

  const title = `${t("title")} – ${STORE_INFO.name}`;
  const description = descriptionKey ? t(descriptionKey) : undefined;

  // Declaring `openGraph` below replaces the layout's block outright rather
  // than merging into it, so pages without their own description still need
  // one here — otherwise og:description would silently disappear.
  const site = await getTranslations({ locale, namespace: "Metadata" });
  const ogDescription = description ?? site("description");

  return {
    title,
    ...(description ? { description } : {}),
    alternates: {
      canonical: path(locale),
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, path(l)])),
        "x-default": path(routing.defaultLocale),
      },
    },
    // Without this the page would inherit the locale layout's Open Graph
    // block, so sharing a sub-page anywhere (WhatsApp, Instagram, Facebook)
    // would show the home page's title and link back to the home page.
    openGraph: {
      title,
      description: ogDescription,
      url: `${SITE_URL}${path(locale)}`,
      siteName: STORE_INFO.name,
      locale: locale === "de" ? "de_AT" : "en_US",
      type: "website",
    },
  };
}
