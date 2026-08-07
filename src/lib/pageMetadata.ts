import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { STORE_INFO } from "@/lib/constants";

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

  return {
    title: `${t("title")} – ${STORE_INFO.name}`,
    ...(descriptionKey ? { description: t(descriptionKey) } : {}),
    alternates: {
      canonical: path(locale),
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, path(l)])),
        "x-default": path(routing.defaultLocale),
      },
    },
  };
}
