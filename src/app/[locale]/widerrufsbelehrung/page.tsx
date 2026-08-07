import { setRequestLocale } from "next-intl/server";
import { STORE_INFO } from "@/lib/constants";
import { pageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    namespace: "Widerruf",
    slug: "widerrufsbelehrung",
  });
}

export default async function WiderrufPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {locale === "de" ? <WiderrufDE /> : <WiderrufEN />}
    </div>
  );
}

/** Highlighted box for the model withdrawal form. */
function FormBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-fru-dark/10 bg-white/60 px-6 py-5 text-sm leading-relaxed text-fru-dark/80">
      {children}
    </div>
  );
}

function WiderrufDE() {
  return (
    <article className="legal-prose max-w-none">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mb-8">
        Widerrufsbelehrung
      </h1>

      <p>
        Diese Widerrufsbelehrung gilt für Verbraucherinnen und Verbraucher bei
        Verträgen, die im Fernabsatz geschlossen werden – also für Bestellungen
        per E-Mail, WhatsApp, Instagram oder Facebook.
      </p>

      <h2>1. Widerrufsrecht</h2>
      <p>
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
        diesen Vertrag zu widerrufen.
      </p>
      <p>
        Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder
        eine von Ihnen benannte dritte Person, die nicht der Beförderer ist, die
        Waren in Besitz genommen haben bzw. hat. Haben Sie mehrere Waren im
        Rahmen einer einheitlichen Bestellung bestellt, die getrennt geliefert
        werden, so läuft die Frist ab dem Tag, an dem Sie die letzte Ware in
        Besitz genommen haben.
      </p>

      <h2>2. Ausübung des Widerrufsrechts</h2>
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer
        eindeutigen Erklärung per E-Mail über Ihren Entschluss, diesen Vertrag zu
        widerrufen, informieren:
      </p>
      <p>
        {STORE_INFO.legalName}
        <br />
        {STORE_INFO.owner}
        <br />
        {STORE_INFO.address.street}
        <br />
        {STORE_INFO.address.postalCode} {STORE_INFO.address.city}
        <br />
        {STORE_INFO.address.country}
        <br />
        E-Mail:{" "}
        <a href={`mailto:${STORE_INFO.contact.email}`}>
          {STORE_INFO.contact.email}
        </a>
      </p>
      <p>
        Sie können dafür das unten stehende Muster-Widerrufsformular verwenden,
        das jedoch nicht vorgeschrieben ist.
      </p>
      <p>
        Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
        über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
        absenden.
      </p>

      <h2>3. Folgen des Widerrufs</h2>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die
        wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit
        Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine
        andere Art der Lieferung als die von uns angebotene, günstigste
        Standardlieferung gewählt haben), unverzüglich und spätestens binnen
        vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
        Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
      </p>
      <p>
        Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei
        der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen
        wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen
        wegen dieser Rückzahlung Entgelte berechnet.
      </p>
      <p>
        Wir können die Rückzahlung verweigern, bis wir die Waren wieder
        zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie
        die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt
        ist.
      </p>

      <h2>4. Rücksendung und Rücksendekosten</h2>
      <p>
        Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen
        vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses
        Vertrags unterrichten, an die oben genannte Adresse zurückzusenden oder
        zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der
        Frist von vierzehn Tagen absenden.
      </p>
      <p>
        <strong>
          Die unmittelbaren Kosten der Rücksendung der Waren tragen Sie.
        </strong>
      </p>
      <p>
        Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn
        dieser Wertverlust auf einen zur Prüfung der Beschaffenheit,
        Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit
        ihnen zurückzuführen ist.
      </p>

      <h2>5. Ausnahmen vom Widerrufsrecht</h2>
      <p>
        Das Widerrufsrecht besteht nach § 18 FAGG unter anderem nicht bei
        folgenden Verträgen:
      </p>
      <ul>
        <li>
          <strong>
            Verträge über Waren, die nach Kundenspezifikationen angefertigt
            werden oder eindeutig auf die persönlichen Bedürfnisse zugeschnitten
            sind.
          </strong>{" "}
          Dazu zählt insbesondere <strong>zugeschnittene Meterware</strong>, die
          nach Kundenwunsch – etwa in einer bestimmten Länge – zugeschnitten
          wurde. Ein Widerruf ist für diese Ware daher ausgeschlossen.
        </li>
        <li>
          Verträge über versiegelte Waren, die aus Gründen des Gesundheitsschutzes
          oder der Hygiene nicht zur Rückgabe geeignet sind, wenn die Versiegelung
          nach der Lieferung entfernt wurde.
        </li>
        <li>
          Verträge über Waren, die nach der Lieferung aufgrund ihrer
          Beschaffenheit untrennbar mit anderen Gütern vermischt wurden.
        </li>
      </ul>
      <p>
        Nicht zugeschnittene, unbenutzte Ware in Originalzustand – etwa
        Nähzubehör, Kurzwaren oder ganze Ballen – ist vom Widerrufsrecht
        selbstverständlich nicht ausgenommen.
      </p>

      <h2>6. Muster-Widerrufsformular</h2>
      <p>
        Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular
        aus und senden Sie es an uns zurück.
      </p>
      <FormBox>
        <p>
          An {STORE_INFO.legalName}, {STORE_INFO.address.street},{" "}
          {STORE_INFO.address.postalCode} {STORE_INFO.address.city},{" "}
          {STORE_INFO.address.country}, E-Mail: {STORE_INFO.contact.email}
        </p>
        <p>
          Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
          Vertrag über den Kauf der folgenden Waren (*):
        </p>
        <p>_______________________________________________</p>
        <p>Bestellt am (*) / erhalten am (*): _____________________</p>
        <p>Name des/der Verbraucher(s): _____________________</p>
        <p>Anschrift des/der Verbraucher(s): _____________________</p>
        <p>
          Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):
          _____________________
        </p>
        <p>Datum: _____________________</p>
        <p>(*) Unzutreffendes streichen.</p>
      </FormBox>

      <p className="text-sm text-fru-dark/50 mt-12">Stand: August 2026</p>
    </article>
  );
}

function WiderrufEN() {
  return (
    <article className="legal-prose max-w-none">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mb-8">
        Withdrawal Policy
      </h1>

      <p>
        This withdrawal policy applies to consumers entering into distance
        contracts – that is, for orders placed by email, WhatsApp, Instagram or
        Facebook.
      </p>

      <h2>1. Right of withdrawal</h2>
      <p>
        You have the right to withdraw from this contract within fourteen days
        without giving any reason.
      </p>
      <p>
        The withdrawal period is fourteen days from the day on which you, or a
        third party named by you who is not the carrier, take possession of the
        goods. If you ordered several goods in one order that are delivered
        separately, the period runs from the day on which you take possession of
        the last item.
      </p>

      <h2>2. Exercising the right of withdrawal</h2>
      <p>
        To exercise your right of withdrawal, you must inform us of your decision
        to withdraw from this contract by means of a clear statement sent by
        email:
      </p>
      <p>
        {STORE_INFO.legalName}
        <br />
        {STORE_INFO.owner}
        <br />
        {STORE_INFO.address.street}
        <br />
        {STORE_INFO.address.postalCode} {STORE_INFO.address.city}
        <br />
        Austria
        <br />
        Email:{" "}
        <a href={`mailto:${STORE_INFO.contact.email}`}>
          {STORE_INFO.contact.email}
        </a>
      </p>
      <p>
        You may use the model withdrawal form below, although this is not
        mandatory.
      </p>
      <p>
        To meet the withdrawal deadline, it is sufficient for you to send your
        communication concerning the exercise of the right of withdrawal before
        the withdrawal period has expired.
      </p>

      <h2>3. Consequences of withdrawal</h2>
      <p>
        If you withdraw from this contract, we shall reimburse to you all
        payments received from you, including the costs of delivery (with the
        exception of the supplementary costs resulting from your choice of a type
        of delivery other than the least expensive type of standard delivery
        offered by us), without undue delay and in any event not later than
        fourteen days from the day on which we are informed about your decision
        to withdraw from this contract.
      </p>
      <p>
        We will carry out such reimbursement using the same means of payment as
        you used for the initial transaction, unless you have expressly agreed
        otherwise; in any event, you will not incur any fees as a result of such
        reimbursement.
      </p>
      <p>
        We may withhold reimbursement until we have received the goods back or
        you have supplied evidence of having sent back the goods, whichever is
        the earliest.
      </p>

      <h2>4. Return and return costs</h2>
      <p>
        You shall send back the goods or hand them over to us at the address
        given above without undue delay and in any event not later than fourteen
        days from the day on which you communicate your withdrawal from this
        contract to us. The deadline is met if you send back the goods before the
        period of fourteen days has expired.
      </p>
      <p>
        <strong>You will have to bear the direct cost of returning the goods.</strong>
      </p>
      <p>
        You are only liable for any diminished value of the goods resulting from
        the handling other than what is necessary to establish the nature,
        characteristics and functioning of the goods.
      </p>

      <h2>5. Exceptions to the right of withdrawal</h2>
      <p>
        Pursuant to § 18 FAGG (Austrian Distance and Off-Premises Contracts Act),
        the right of withdrawal does not apply, among others, to:
      </p>
      <ul>
        <li>
          <strong>
            Contracts for goods made to the consumer&apos;s specifications or
            clearly personalised.
          </strong>{" "}
          This includes in particular <strong>fabric cut to length</strong> at
          the customer&apos;s request. Withdrawal is therefore excluded for such
          goods.
        </li>
        <li>
          Contracts for sealed goods which are not suitable for return due to
          health protection or hygiene reasons and were unsealed after delivery.
        </li>
        <li>
          Contracts for goods which, after delivery, are inseparably mixed with
          other items due to their nature.
        </li>
      </ul>
      <p>
        Uncut, unused goods in their original condition – such as sewing
        accessories, haberdashery or whole bolts – are of course not excluded
        from the right of withdrawal.
      </p>

      <h2>6. Model withdrawal form</h2>
      <p>
        If you wish to withdraw from the contract, please complete this form and
        send it back to us.
      </p>
      <FormBox>
        <p>
          To {STORE_INFO.legalName}, {STORE_INFO.address.street},{" "}
          {STORE_INFO.address.postalCode} {STORE_INFO.address.city}, Austria,
          email: {STORE_INFO.contact.email}
        </p>
        <p>
          I/We (*) hereby give notice that I/We (*) withdraw from my/our (*)
          contract of sale of the following goods (*):
        </p>
        <p>_______________________________________________</p>
        <p>Ordered on (*) / received on (*): _____________________</p>
        <p>Name of consumer(s): _____________________</p>
        <p>Address of consumer(s): _____________________</p>
        <p>
          Signature of consumer(s) (only if this form is notified on paper):
          _____________________
        </p>
        <p>Date: _____________________</p>
        <p>(*) Delete as appropriate.</p>
      </FormBox>

      <p className="text-sm text-fru-dark/50 mt-12">Last updated: August 2026</p>
    </article>
  );
}
