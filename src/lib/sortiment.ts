export type SortimentCategory = {
  heading: string;
  items: string[];
};

export const SORTIMENT: Record<"de" | "en", SortimentCategory[]> = {
  de: [
    {
      heading: "Stoffe",
      items: [
        "Baumwoll-Canvas",
        "Baumwoll-Popeline",
        "Leinen",
        "Viskose",
        "Seide",
      ],
    },
    {
      heading: "Jersey & Sweat",
      items: [
        "Baumwoll-Jersey",
        "Bambus-Jersey",
        "Sommersweat",
        "Bündchenstoffe",
      ],
    },
    {
      heading: "Besondere Qualitäten",
      items: [
        "Möbel/Dekostoffe (nur kleine Bestände)",
        "Outdoorstoffe",
        "Wasserdichte Stoffe",
      ],
    },
    {
      heading: "Nachhaltige Auswahl",
      items: ["Zertifizierte Stoffe", "Deadstock-Designerstoffe"],
    },
    {
      heading: "Nähzubehör",
      items: [
        "Vlieseline",
        "Mettler Garne",
        "Prym Nähzubehör",
        "Veno Produkte",
        "Burda Schnitte",
        "Reißverschluss-Meterware",
        "Taschengurte",
        "Taschen-Hardware",
      ],
    },
  ],
  en: [
    {
      heading: "Fabrics",
      items: [
        "Cotton canvas",
        "Cotton poplin",
        "Linen",
        "Viscose",
        "Silk",
      ],
    },
    {
      heading: "Jersey & Sweat",
      items: [
        "Cotton jersey",
        "Bamboo jersey",
        "Summer sweat (French terry)",
        "Ribbing & cuff fabrics",
      ],
    },
    {
      heading: "Special Qualities",
      items: [
        "Furnishing/decor fabrics (limited stock only)",
        "Outdoor fabrics",
        "Waterproof fabrics",
      ],
    },
    {
      heading: "Sustainable Selection",
      items: ["Certified fabrics", "Deadstock designer fabrics"],
    },
    {
      heading: "Sewing Supplies",
      items: [
        "Vlieseline interfacing",
        "Mettler threads",
        "Prym sewing notions",
        "Veno products",
        "Burda patterns",
        "Zipper by the metre",
        "Bag straps",
        "Bag hardware",
      ],
    },
  ],
};
