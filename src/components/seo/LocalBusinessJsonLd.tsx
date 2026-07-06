import { STORE_INFO, SITE_URL } from "@/lib/constants";

export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${SITE_URL}/#store`,
    name: STORE_INFO.name,
    description:
      "Stoffgeschäft für hochwertige Stoffe, Nähzubehör und kreative Materialien in Wiener Neustadt, Niederösterreich",
    url: SITE_URL,
    keywords:
      "Stoffe, Stoffgeschäft, Nähzubehör, Stoffe kaufen, Meterware, Wiener Neustadt, Niederösterreich",
    telephone: STORE_INFO.contact.phone,
    email: STORE_INFO.contact.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    image: [
      `${SITE_URL}/images/gallery-shop-interior.jpg`,
      `${SITE_URL}/images/gallery-shop-shelves.jpg`,
      `${SITE_URL}/images/gallery-fabrics-bolts.jpg`,
    ],
    logo: `${SITE_URL}/images/fru-brand.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: STORE_INFO.address.street,
      addressLocality: STORE_INFO.address.city,
      addressRegion: STORE_INFO.address.region,
      postalCode: STORE_INFO.address.postalCode,
      addressCountry: STORE_INFO.address.countryCode,
    },
    areaServed: [
      { "@type": "City", name: "Wiener Neustadt" },
      { "@type": "AdministrativeArea", name: "Niederösterreich" },
    ],
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
