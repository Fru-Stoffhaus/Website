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
  return pageMetadata({ locale, namespace: "AGB", slug: "agb" });
}

export default async function AgbPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {locale === "de" ? <AgbDE /> : <AgbEN />}
    </div>
  );
}

function AgbDE() {
  return (
    <article className="legal-prose max-w-none">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mb-8">
        Allgemeine Geschäftsbedingungen
      </h1>

      <h2>1. Geltungsbereich und Vertragspartner</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
        Bestellungen, die über E-Mail, WhatsApp, Instagram, Facebook oder andere
        Kontaktmöglichkeiten bei {STORE_INFO.name} aufgegeben werden.
      </p>
      <p>
        Vertragspartner ist:
        <br />
        {STORE_INFO.legalName}, Inhaberin: {STORE_INFO.owner}
        <br />
        {STORE_INFO.address.street}, {STORE_INFO.address.postalCode}{" "}
        {STORE_INFO.address.city}, {STORE_INFO.address.country}
        <br />
        {STORE_INFO.companyRegister}
        <br />
        UID-Nummer: {STORE_INFO.uid}
        <br />
        E-Mail:{" "}
        <a href={`mailto:${STORE_INFO.contact.email}`}>
          {STORE_INFO.contact.email}
        </a>
      </p>
      <p>
        Abweichende Bedingungen der Kundin oder des Kunden werden nicht
        Vertragsbestandteil, es sei denn, wir stimmen ihrer Geltung ausdrücklich
        schriftlich zu.
      </p>

      <h2>2. Bestellung und Vertragsabschluss</h2>
      <p>
        Die Darstellung unserer Waren auf dieser Website und in sozialen Medien
        stellt kein verbindliches Angebot dar, sondern eine unverbindliche
        Einladung zur Bestellung.
      </p>
      <ul>
        <li>
          Die Kundin oder der Kunde übermittelt die Bestellwünsche per Nachricht
          oder E-Mail.
        </li>
        <li>
          Wir beraten persönlich und besprechen gemeinsam die Details der
          Bestellung.
        </li>
        <li>
          Ein Vertrag kommt zustande, sobald wir die Bestellung bestätigt und die
          Rechnung übermittelt haben.
        </li>
      </ul>

      <h2>3. Preise und Zahlung</h2>
      <p>
        Alle Preise verstehen sich in Euro und beinhalten die gesetzliche
        Umsatzsteuer von 20 %. Versandkosten werden gesondert ausgewiesen.
      </p>
      <p>
        Die Zahlung erfolgt per Überweisung im Voraus. Die Kundin oder der Kunde
        erhält eine Rechnung mit allen für die Überweisung notwendigen
        Informationen. Die Ware wird nach vollständigem Zahlungseingang
        versendet.
      </p>

      <h2>4. Versand und Lieferung</h2>
      <ul>
        <li>
          Der Versand erfolgt mit {SHIPPING.carrier} innerhalb Österreichs, nach
          Wahl an die Lieferadresse oder an einen {SHIPPING.carrier} Paketshop.
        </li>
        <li>Die Versandkosten betragen {SHIPPING.cost}.</li>
        <li>
          Ab einem Bestellwert von {SHIPPING.freeFrom} erfolgt der Versand
          innerhalb Österreichs versandkostenfrei.
        </li>
        <li>
          Ein Versand außerhalb Österreichs ist auf Anfrage möglich. Die
          Versandkosten werden in diesem Fall vor Vertragsabschluss individuell
          bekannt gegeben.
        </li>
        <li>
          Die Lieferzeit beginnt nach Zahlungseingang und beträgt innerhalb
          Österreichs in der Regel ca. {SHIPPING.deliveryDays} Werktage.
        </li>
      </ul>
      <p>
        Bei Verbrauchergeschäften geht die Gefahr des zufälligen Untergangs oder
        der zufälligen Verschlechterung der Ware erst mit der Übergabe an die
        Kundin oder den Kunden über.
      </p>

      <h2>5. Zuschnitt von Meterware</h2>
      <p>
        Stoffe und andere Meterwaren werden nach den individuellen Wünschen der
        Kundin oder des Kunden zugeschnitten. Bitte beachten Sie:
      </p>
      <ul>
        <li>
          Bei zugeschnittener Meterware sind handelsübliche Toleranzen bei Länge
          und Breite möglich.
        </li>
        <li>
          Farb- und Strukturdarstellungen auf Fotos und Bildschirmen können vom
          Original abweichen. Solche Abweichungen stellen keinen Mangel dar.
        </li>
        <li>
          Unsere Stoffe sind teilweise Einzel- und Restbestände. Die
          Verfügbarkeit der gewünschten Menge bleibt bis zur Bestätigung der
          Bestellung vorbehalten.
        </li>
        <li>
          Nach Kundenwunsch zugeschnittene Meterware ist vom Widerrufsrecht
          ausgenommen (siehe Punkt 6).
        </li>
      </ul>

      <h2>6. Widerrufsrecht</h2>
      <p>
        Verbraucherinnen und Verbraucher haben bei Fernabsatzverträgen ein
        vierzehntägiges Widerrufsrecht. Für nach Kundenwunsch zugeschnittene
        Meterware besteht gemäß § 18 Abs. 1 Z 3 FAGG kein Widerrufsrecht.
      </p>
      <p>
        Alle Einzelheiten sowie das Muster-Widerrufsformular finden Sie in
        unserer <Link href="/widerrufsbelehrung">Widerrufsbelehrung</Link>.
      </p>

      <h2>7. Gewährleistung und Haftung</h2>
      <p>
        Es gelten die gesetzlichen Gewährleistungsbestimmungen nach ABGB und
        Verbrauchergewährleistungsgesetz. Die Gewährleistungsfrist beträgt für
        bewegliche Sachen zwei Jahre ab Übergabe.
      </p>
      <p>
        Wir haften für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Diese
        Haftungsbeschränkung gilt nicht für Personenschäden sowie für Schäden,
        für die nach zwingenden gesetzlichen Bestimmungen – insbesondere nach dem
        Produkthaftungsgesetz – gehaftet wird.
      </p>

      <h2>8. Eigentumsvorbehalt</h2>
      <p>
        Die gelieferte Ware bleibt bis zur vollständigen Bezahlung Eigentum von{" "}
        {STORE_INFO.legalName}.
      </p>

      <h2>9. Streitbeilegung</h2>
      <p>
        Wir sind bemüht, allfällige Unstimmigkeiten direkt und unkompliziert zu
        klären. Bitte wenden Sie sich zunächst an{" "}
        <a href={`mailto:${STORE_INFO.contact.email}`}>
          {STORE_INFO.contact.email}
        </a>
        .
      </p>
      <p>
        Verbraucherinnen und Verbraucher können sich darüber hinaus an die
        Schlichtungsstelle{" "}
        <a
          href="https://www.ombudsstelle.at"
          target="_blank"
          rel="noopener noreferrer"
        >
          Internet Ombudsstelle
        </a>{" "}
        wenden. Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
      </p>

      <h2>10. Schlussbestimmungen</h2>
      <p>
        Es gilt österreichisches Recht unter Ausschluss der Verweisungsnormen des
        internationalen Privatrechts und des UN-Kaufrechts. Bei
        Verbrauchergeschäften bleiben zwingende Verbraucherschutzbestimmungen des
        Staates, in dem die Kundin oder der Kunde ihren bzw. seinen gewöhnlichen
        Aufenthalt hat, unberührt.
      </p>
      <p>
        Sollten einzelne Bestimmungen dieser Allgemeinen Geschäftsbedingungen
        unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen
        Bestimmungen unberührt.
      </p>

      <p className="text-sm text-fru-dark/50 mt-12">Stand: August 2026</p>
    </article>
  );
}

function AgbEN() {
  return (
    <article className="legal-prose max-w-none">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mb-8">
        Terms and Conditions
      </h1>

      <h2>1. Scope and contracting party</h2>
      <p>
        These terms and conditions apply to all orders placed with{" "}
        {STORE_INFO.name} by email, WhatsApp, Instagram, Facebook or any other
        means of contact.
      </p>
      <p>
        The contracting party is:
        <br />
        {STORE_INFO.legalName}, owner: {STORE_INFO.owner}
        <br />
        {STORE_INFO.address.street}, {STORE_INFO.address.postalCode}{" "}
        {STORE_INFO.address.city}, Austria
        <br />
        Company register: FN 637754z, Eisenstadt Regional Court
        <br />
        VAT ID: {STORE_INFO.uid}
        <br />
        Email:{" "}
        <a href={`mailto:${STORE_INFO.contact.email}`}>
          {STORE_INFO.contact.email}
        </a>
      </p>
      <p>
        Deviating terms of the customer do not become part of the contract unless
        we expressly agree to their validity in writing.
      </p>

      <h2>2. Orders and conclusion of contract</h2>
      <p>
        The presentation of our goods on this website and on social media does
        not constitute a binding offer, but a non-binding invitation to place an
        order.
      </p>
      <ul>
        <li>The customer sends us their order request by message or email.</li>
        <li>
          We advise the customer personally and discuss the details of the order
          together.
        </li>
        <li>
          A contract is concluded as soon as we have confirmed the order and
          issued the invoice.
        </li>
      </ul>

      <h2>3. Prices and payment</h2>
      <p>
        All prices are in euros and include the statutory Austrian VAT of 20 %.
        Shipping costs are shown separately.
      </p>
      <p>
        Payment is made by bank transfer in advance. The customer receives an
        invoice containing all information required for the transfer. Goods are
        dispatched once payment has been received in full.
      </p>

      <h2>4. Shipping and delivery</h2>
      <ul>
        <li>
          We ship with {SHIPPING.carrier} within Austria, either to the delivery
          address or to a {SHIPPING.carrier} parcel shop.
        </li>
        <li>Shipping costs are {SHIPPING.cost}.</li>
        <li>
          From an order value of {SHIPPING.freeFrom}, shipping within Austria is
          free of charge.
        </li>
        <li>
          Shipping outside Austria is possible on request. In that case the
          shipping costs are communicated individually before the contract is
          concluded.
        </li>
        <li>
          The delivery period begins once payment has been received and usually
          takes approx. {SHIPPING.deliveryDays} working days within Austria.
        </li>
      </ul>
      <p>
        In consumer transactions, the risk of accidental loss or deterioration of
        the goods passes to the customer only upon handover to the customer.
      </p>

      <h2>5. Cutting of fabric by the metre</h2>
      <p>
        Fabrics and other goods sold by the metre are cut according to the
        customer&apos;s individual wishes. Please note:
      </p>
      <ul>
        <li>
          Customary tolerances in length and width are possible for cut fabric.
        </li>
        <li>
          Colour and texture as shown in photos and on screens may differ from
          the original. Such deviations do not constitute a defect.
        </li>
        <li>
          Some of our fabrics are single items or remnants. Availability of the
          desired quantity is subject to confirmation of the order.
        </li>
        <li>
          Fabric cut to the customer&apos;s specifications is excluded from the
          right of withdrawal (see section 6).
        </li>
      </ul>

      <h2>6. Right of withdrawal</h2>
      <p>
        Consumers have a fourteen-day right of withdrawal for distance contracts.
        Pursuant to § 18 (1) no. 3 FAGG, there is no right of withdrawal for
        fabric cut to the customer&apos;s specifications.
      </p>
      <p>
        All details and the model withdrawal form can be found in our{" "}
        <Link href="/widerrufsbelehrung">withdrawal policy</Link>.
      </p>

      <h2>7. Warranty and liability</h2>
      <p>
        The statutory warranty provisions of the Austrian Civil Code (ABGB) and
        the Consumer Warranty Act apply. The warranty period for movable goods is
        two years from handover.
      </p>
      <p>
        We are liable for damages only in cases of intent and gross negligence.
        This limitation of liability does not apply to personal injury or to
        damages for which liability is mandatory by law, in particular under the
        Austrian Product Liability Act.
      </p>

      <h2>8. Retention of title</h2>
      <p>
        The delivered goods remain the property of {STORE_INFO.legalName} until
        payment has been made in full.
      </p>

      <h2>9. Dispute resolution</h2>
      <p>
        We aim to resolve any disagreements directly and without complication.
        Please contact us first at{" "}
        <a href={`mailto:${STORE_INFO.contact.email}`}>
          {STORE_INFO.contact.email}
        </a>
        .
      </p>
      <p>
        Consumers may also contact the Austrian conciliation body{" "}
        <a
          href="https://www.ombudsstelle.at"
          target="_blank"
          rel="noopener noreferrer"
        >
          Internet Ombudsstelle
        </a>
        . We are neither obliged nor willing to participate in dispute resolution
        proceedings before a consumer arbitration board.
      </p>

      <h2>10. Final provisions</h2>
      <p>
        Austrian law applies, excluding the conflict-of-law rules of private
        international law and the UN Convention on Contracts for the
        International Sale of Goods. In consumer transactions, mandatory consumer
        protection provisions of the country in which the customer has their
        habitual residence remain unaffected.
      </p>
      <p>
        Should individual provisions of these terms and conditions be or become
        invalid, the validity of the remaining provisions shall remain
        unaffected.
      </p>

      <p className="text-sm text-fru-dark/50 mt-12">Last updated: August 2026</p>
    </article>
  );
}
