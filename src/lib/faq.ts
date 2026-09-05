import { STORE_INFO } from "@/lib/constants";

const EMAIL = STORE_INFO.contact.email;

export type FaqItem = {
  q: string;
  /** Plain-text answer used for JSON-LD and as the base copy for rendering. */
  a: string;
  /** Optional bullet list rendered after the answer text. */
  list?: string[];
  /** Optional trailing sentence rendered after the list. */
  after?: string;
  /** When true, the email address in `a`/`after` is rendered as a mailto link. */
  email?: boolean;
  /** Optional internal link, rendered as its own paragraph after `after`. */
  link?: { before: string; href: string; label: string };
};

export const FAQ: Record<"de" | "en", FaqItem[]> = {
  de: [
    {
      q: "Werden Workshops angeboten?",
      a: "Ja, Workshops sind bereits in Planung und werden künftig in verschiedenen Themen angeboten, darunter Kurse für Kinder, Anfänger und Upcycling-Workshops. Sobald Termine feststehen, werden diese bekannt gegeben.",
    },
    {
      q: "Gibt es Parkmöglichkeiten in der Nähe?",
      a: "Ja. In unserer Straße befindet sich eine Kurzparkzone, und in der Nähe stehen Parkautomaten zur Verfügung. Da die verfügbaren Plätze jedoch begrenzt sind, empfehlen wir bei Bedarf die nahegelegenen Parkgaragen. In nur wenigen Gehminuten erreichen Sie:",
      list: [
        "Stadtparkgarage (ca. 5 Minuten)",
        "Theatergarage (ca. 5 Minuten)",
        "Parkplatz Singergasse (ca. 5 Minuten)",
      ],
      after: "Auch der Hauptbahnhof Wiener Neustadt ist nur etwa 10 Gehminuten vom Geschäft entfernt.",
    },
    {
      q: "Gibt es einen Onlineshop?",
      a: `Derzeit haben wir noch keinen Onlineshop. Wenn Sie etwas entdeckt haben, das Ihnen gefällt, können Sie Ihre Bestellung gerne per E-Mail oder Nachricht bei uns aufgeben. E-Mail: ${EMAIL}`,
      email: true,
      link: {
        before:
          "Weitere Informationen zu Bestellung, Zahlung und Versand finden Sie im Bereich ",
        href: "/bestellung-versand",
        label: "Bestellung & Versand",
      },
    },
    {
      q: "Kann man mit Karte bezahlen?",
      a: "Ja, Kartenzahlung ist bei uns im Geschäft selbstverständlich möglich. Bei Bestellungen mit Versand erfolgt die Zahlung per Überweisung.",
    },
    {
      q: "Gibt es einen Mengenrabatt?",
      a: `Ja, gerne erstellen wir auf Anfrage ein individuelles Angebot bei ganzen Ballen oder größeren Mengen. Bitte einfach eine E-Mail an ${EMAIL} senden.`,
      email: true,
    },
    {
      q: "Bieten Sie Näh- oder Änderungsarbeiten an?",
      a: "Nein, wir bieten keine Näh- oder Änderungsservices an. Sehr gerne beraten wir jedoch bei der Auswahl von Stoffen, Materialien und beim Design eurer Projekte.",
    },
    {
      q: "Bieten Sie Nähmaschinenservice und Reparaturen an?",
      a: "Ja. Unser Geschäft ist Annahmestelle für Service und Reparaturen aller Nähmaschinenmarken – Sie geben Ihre Maschine einfach bei uns in der Allerheiligengasse 12 ab. Der Fachservice erfolgt durch das Nähcenter Egelwolf.",
    },
  ],
  en: [
    {
      q: "Are workshops offered?",
      a: "Yes, workshops are already being planned and will be offered on various topics in the future, including courses for children, beginners, and upcycling workshops. Dates will be announced as soon as they are confirmed.",
    },
    {
      q: "Is there parking nearby?",
      a: "Yes. There is a short-term parking zone on our street, and parking ticket machines are available nearby. As the available spaces are limited, however, we recommend the nearby parking garages if needed. Just a few minutes' walk away you will find:",
      list: [
        "Stadtparkgarage (approx. 5 minutes)",
        "Theatergarage (approx. 5 minutes)",
        "Singergasse car park (approx. 5 minutes)",
      ],
      after: "Wiener Neustadt main station is also only about a 10-minute walk from the store.",
    },
    {
      q: "Is there an online shop?",
      a: `We do not have an online shop yet. If you have spotted something you like, you are welcome to place your order with us by email or message. Email: ${EMAIL}`,
      email: true,
      link: {
        before:
          "You can find more information about ordering, payment and shipping under ",
        href: "/bestellung-versand",
        label: "Ordering & Shipping",
      },
    },
    {
      q: "Can I pay by card?",
      a: "Yes, card payment is of course possible in our store. For orders that are shipped, payment is made by bank transfer.",
    },
    {
      q: "Is there a bulk discount?",
      a: `Yes, we are happy to prepare an individual offer on request for whole bolts or larger quantities. Simply send an email to ${EMAIL}.`,
      email: true,
    },
    {
      q: "Do you offer sewing or alteration services?",
      a: "No, we do not offer sewing or alteration services. However, we are very happy to advise you on the selection of fabrics and materials and on the design of your projects.",
    },
    {
      q: "Do you offer sewing machine service and repairs?",
      a: "Yes. Our shop is a drop-off point for service and repairs of all sewing machine brands – simply bring your machine to us at Allerheiligengasse 12. The expert service is carried out by Nähcenter Egelwolf.",
    },
  ],
};
