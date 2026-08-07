import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { STORE_INFO, SHIPPING } from "@/lib/constants";
import { pageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    namespace: "BestellungVersand",
    slug: "bestellung-versand",
    descriptionKey: "description",
  });
}

export default async function BestellungVersandPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {locale === "de" ? <BestellungDE /> : <BestellungEN />}
    </div>
  );
}

/** Email + WhatsApp call-to-action buttons, shared by both locales. */
function ContactButtons({ email, whatsapp }: { email: string; whatsapp: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 my-6">
      <a
        href={`mailto:${STORE_INFO.contact.email}`}
        className="btn-cta inline-flex items-center justify-center gap-2 rounded-full bg-fru-purple px-6 py-3 font-heading text-sm uppercase tracking-wider transition-colors hover:bg-fru-purple-light"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        {email}
      </a>
      <a
        href={STORE_INFO.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta inline-flex items-center justify-center gap-2 rounded-full bg-fru-green px-6 py-3 font-heading text-sm uppercase tracking-wider transition-colors hover:bg-fru-green-light"
      >
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.99 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}

function BestellungDE() {
  return (
    <article className="legal-prose max-w-none">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mb-8">
        Bestellung &amp; Versand
      </h1>

      <p>
        Sie haben etwas Schönes entdeckt, können aber nicht persönlich bei uns
        vorbeikommen? Kein Problem!
      </p>
      <p>
        Schreiben Sie uns einfach per E-Mail, Instagram-Nachricht oder WhatsApp,
        was Sie gerne bestellen möchten. Wir beraten Sie gerne persönlich und
        besprechen gemeinsam alle Details Ihrer Bestellung.
      </p>

      <h2>Kontakt</h2>
      <ContactButtons
        email={STORE_INFO.contact.email}
        whatsapp={STORE_INFO.contact.whatsapp}
      />
      <p>
        Sie erreichen uns auch über{" "}
        <a
          href={STORE_INFO.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        oder{" "}
        <a
          href={STORE_INFO.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        .
      </p>

      <h2>Ablauf</h2>
      <ol>
        <li>Sie schreiben uns eine Nachricht oder E-Mail mit Ihren Wünschen.</li>
        <li>Wir besprechen gemeinsam alle Details zur Bestellung.</li>
        <li>
          Sie erhalten eine Rechnung mit den notwendigen Zahlungsinformationen.
        </li>
        <li>
          Nach Zahlungseingang wird Ihre Bestellung sorgfältig verpackt und
          versendet.
        </li>
      </ol>

      <h2>Zahlung</h2>
      <p>
        Die Zahlung erfolgt per Überweisung. Sie erhalten die Rechnung mit allen
        notwendigen Informationen zur Überweisung. Alle Preise verstehen sich in
        Euro inklusive 20 % Umsatzsteuer.
      </p>

      <h2>Versand</h2>
      <p>
        Der Versand erfolgt mit {SHIPPING.carrier} innerhalb Österreichs – bequem
        nach Hause oder an einen {SHIPPING.carrier} Paketshop.
      </p>
      <ul>
        <li>Versandkosten: {SHIPPING.cost}</li>
        <li>Ab {SHIPPING.freeFrom} Bestellwert versandkostenfrei</li>
      </ul>
      <p>
        Ein Versand außerhalb Österreichs ist auf Anfrage möglich. Die
        Versandkosten teilen wir Ihnen in diesem Fall vor Ihrer Bestellung mit.
      </p>

      <h2>Lieferzeit</h2>
      <p>
        Der Versand erfolgt nach Zahlungseingang. Die Lieferzeit innerhalb
        Österreichs beträgt in der Regel ca. {SHIPPING.deliveryDays} Werktage.
      </p>

      <h2>Widerrufsrecht</h2>
      <p>
        Als Verbraucherin oder Verbraucher steht Ihnen bei Bestellungen im
        Fernabsatz ein vierzehntägiges Widerrufsrecht zu. Bitte beachten Sie,
        dass für nach Ihren Wünschen zugeschnittene Meterware kein
        Widerrufsrecht besteht.
      </p>
      <p>
        Alle Einzelheiten finden Sie in unserer{" "}
        <Link href="/widerrufsbelehrung">Widerrufsbelehrung</Link>. Es gelten
        unsere <Link href="/agb">Allgemeinen Geschäftsbedingungen</Link>.
      </p>
    </article>
  );
}

function BestellungEN() {
  return (
    <article className="legal-prose max-w-none">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mb-8">
        Ordering &amp; Shipping
      </h1>

      <p>
        Have you spotted something lovely but cannot visit us in person? No
        problem!
      </p>
      <p>
        Simply write to us by email, Instagram message or WhatsApp and tell us
        what you would like to order. We are happy to advise you personally and
        discuss all the details of your order together.
      </p>

      <h2>Contact</h2>
      <ContactButtons
        email={STORE_INFO.contact.email}
        whatsapp={STORE_INFO.contact.whatsapp}
      />
      <p>
        You can also reach us via{" "}
        <a
          href={STORE_INFO.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        or{" "}
        <a
          href={STORE_INFO.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        .
      </p>

      <h2>How it works</h2>
      <ol>
        <li>You send us a message or email with your wishes.</li>
        <li>We discuss all the details of the order together.</li>
        <li>You receive an invoice with the necessary payment information.</li>
        <li>
          Once payment has been received, your order is carefully packed and
          shipped.
        </li>
      </ol>

      <h2>Payment</h2>
      <p>
        Payment is made by bank transfer. You will receive an invoice containing
        all the information required for the transfer. All prices are in euros
        and include 20 % Austrian VAT.
      </p>

      <h2>Shipping</h2>
      <p>
        We ship with {SHIPPING.carrier} within Austria – conveniently to your
        home or to a {SHIPPING.carrier} parcel shop.
      </p>
      <ul>
        <li>Shipping costs: {SHIPPING.cost}</li>
        <li>Free shipping from {SHIPPING.freeFrom} order value</li>
      </ul>
      <p>
        Shipping outside Austria is possible on request. In that case we will
        inform you of the shipping costs before you place your order.
      </p>

      <h2>Delivery time</h2>
      <p>
        Orders are dispatched once payment has been received. Delivery within
        Austria usually takes approx. {SHIPPING.deliveryDays} working days.
      </p>

      <h2>Right of withdrawal</h2>
      <p>
        As a consumer you have a fourteen-day right of withdrawal for distance
        purchases. Please note that there is no right of withdrawal for
        fabric cut to your individual specifications.
      </p>
      <p>
        You can find all details in our{" "}
        <Link href="/widerrufsbelehrung">withdrawal policy</Link>. Our{" "}
        <Link href="/agb">terms and conditions</Link> apply.
      </p>
    </article>
  );
}
