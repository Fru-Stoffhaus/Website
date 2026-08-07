export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://fru.co.at";

// Google Ads conversion tracking. Only loaded after the visitor accepts
// marketing cookies (see CookieConsent + GoogleAds components).
export const GOOGLE_ADS = {
  id: "AW-18271749219",
  // "Oldalmegtekintés" (page view) conversion action label.
  conversionLabel: "I25ECPz5scscEOOI04hE",
} as const;

export const STORE_INFO = {
  name: "Stoffhaus FRU",
  legalName: "FRU e.U.",
  owner: "Fruzsina Tóth",
  uid: "ATU83216538",
  companyRegister: "FN 637754z, Landesgericht Eisenstadt",
  address: {
    street: "Allerheiligengasse 12",
    postalCode: "2700",
    city: "Wiener Neustadt",
    region: "Niederösterreich",
    country: "Österreich",
    countryCode: "AT",
  },
  contact: {
    email: "info@fru.co.at",
    phone: "+43 660 5534141",
    // Same number as `phone`, in the digits-only form wa.me expects.
    whatsapp: "https://wa.me/436605534141",
  },
  social: {
    facebook: "https://www.facebook.com/share/18u5oFdvcs/",
    instagram: "https://www.instagram.com/stoffhaus_fru",
  },
  hours: {
    weekday: { morning: "9:00 – 11:00", afternoon: "12:00 – 17:00" },
    saturday: "9:00 – 14:00",
  },
  coordinates: {
    lat: 47.812,
    lng: 16.243,
  },
  tagline: "STOFFE · NÄHZUBEHÖR · KREATIVITÄT",
} as const;

// Shipping terms for mail orders. Kept in one place so the Bestellung & Versand
// page, the AGB and the FAQ can never drift apart.
// NOTE: `freeFrom` is also spelled out in the BestellungVersand.description
// meta text in messages/de.json and messages/en.json — update those too.
export const SHIPPING = {
  carrier: "DPD",
  cost: "6,90 €",
  freeFrom: "70 €",
  deliveryDays: "2–4",
} as const;
