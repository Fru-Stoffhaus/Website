import { getLocale } from "next-intl/server";
import { FAQ } from "@/lib/faq";

export default async function FaqJsonLd() {
  const locale = await getLocale();
  const items = FAQ[locale === "en" ? "en" : "de"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => {
      const answer = [item.a, ...(item.list ?? []), item.after]
        .filter(Boolean)
        .join(" ");
      return {
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
