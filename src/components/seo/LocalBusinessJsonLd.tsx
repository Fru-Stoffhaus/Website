import { STORE_INFO } from "@/lib/constants";

export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: STORE_INFO.name,
    description:
      "Fachgeschäft für Stoffe, Nähzubehör und kreative Materialien in Wiener Neustadt",
    telephone: STORE_INFO.contact.phone,
    email: STORE_INFO.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: STORE_INFO.address.street,
      addressLocality: STORE_INFO.address.city,
      postalCode: STORE_INFO.address.postalCode,
      addressCountry: STORE_INFO.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: STORE_INFO.coordinates.lat,
      longitude: STORE_INFO.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "11:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "12:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [STORE_INFO.social.facebook, STORE_INFO.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
