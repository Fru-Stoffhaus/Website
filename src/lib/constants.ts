export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://fru.co.at";

export const STORE_INFO = {
  name: "Stoffhaus FRU",
  legalName: "FRU e.U.",
  owner: "Fruzsina Tóth",
  uid: "ATU83216538",
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
