import { setRequestLocale, getTranslations } from "next-intl/server";
import { STORE_INFO } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Impressum" });
  return { title: `${t("title")} – ${STORE_INFO.name}` };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {locale === "de" ? <ImpressumDE /> : <ImpressumEN />}
    </div>
  );
}

function ImpressumDE() {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mb-8">
        Impressum
      </h1>

      <h2>Informationspflicht laut Gesetz</h2>
      <p>
        Informationspflicht laut §5 E-Commerce Gesetz, §14
        Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut
        §25 Mediengesetz.
      </p>

      <h2>Unternehmensbezeichnung</h2>
      <p>
        <strong>{STORE_INFO.legalName}</strong>
        <br />
        Inhaberin: {STORE_INFO.owner}
      </p>

      <h2>Unternehmensgegenstand</h2>
      <p>Einzelhandel mit Stoffen, Nähzubehör und kreativen Materialien</p>

      <h2>Unternehmensform</h2>
      <p>Einzelunternehmen (e.U.)</p>

      <h2>Firmenbuchnummer</h2>
      <p>FN 637754z, Landesgericht Eisenstadt</p>

      <h2>UID-Nummer</h2>
      <p>{STORE_INFO.uid}</p>

      <h2>Anschrift</h2>
      <p>
        {STORE_INFO.address.street}
        <br />
        {STORE_INFO.address.postalCode} {STORE_INFO.address.city}
        <br />
        {STORE_INFO.address.country}
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail:{" "}
        <a href={`mailto:${STORE_INFO.contact.email}`}>
          {STORE_INFO.contact.email}
        </a>
        <br />
        Telefon:{" "}
        <a href={`tel:${STORE_INFO.contact.phone.replace(/\s/g, "")}`}>
          {STORE_INFO.contact.phone}
        </a>
      </p>

      <h2>Mitgliedschaft</h2>
      <p>Mitglied der WKO Niederösterreich</p>

      <h2>Berufsrecht</h2>
      <p>
        Gewerbeordnung:{" "}
        <a
          href="https://www.ris.bka.gv.at"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.ris.bka.gv.at
        </a>
      </p>

      <h2>Gewerbebehörde</h2>
      <p>Magistrat der Stadt Wiener Neustadt</p>

      <h2>Medieninhaber und Herausgeber</h2>
      <p>
        {STORE_INFO.owner}
        <br />
        Unternehmensgegenstand: Präsentation des Unternehmens {STORE_INFO.name}{" "}
        und seiner Produkte und Dienstleistungen.
      </p>

      <h2>Online-Streitbeilegung</h2>
      <p>
        Verbraucher/innen haben die Möglichkeit, Beschwerden an die
        Online-Streitbeilegungsplattform der EU zu richten:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr
        </a>
        . Sie können allfällige Beschwerde auch an die oben angegebene
        E-Mail-Adresse richten.
      </p>

      <h2>Geltungsbereich</h2>
      <p>
        Dieses Impressum gilt auch für folgende Social-Media-Auftritte:
      </p>
      <ul>
        <li>
          Facebook:{" "}
          <a
            href={STORE_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            {STORE_INFO.name} auf Facebook
          </a>
        </li>
        <li>
          Instagram:{" "}
          <a
            href={STORE_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            @stoffhaus_fru
          </a>
        </li>
      </ul>

      <h2>Urheberrecht / Bildrechte</h2>
      <p>
        Alle auf dieser Website veröffentlichten Inhalte (Texte, Bilder,
        Grafiken, Logos) unterliegen dem Urheberrecht der Betreiberin, soweit
        nicht Urheberrechte Dritter bestehen. Die Verwendung, Vervielfältigung
        oder Verbreitung von Inhalten dieser Website bedarf der ausdrücklichen
        schriftlichen Zustimmung der Betreiberin.
      </p>
      <p>
        Fotos auf dieser Website wurden von der Betreiberin erstellt oder mit
        Genehmigung der Rechteinhaber verwendet. Sollten Sie eine
        Urheberrechtsverletzung bemerken, bitten wir um einen entsprechenden
        Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
        betroffene Inhalte umgehend entfernen.
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
        für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
        sind ausschließlich deren Betreiber verantwortlich.
      </p>
    </article>
  );
}

function ImpressumEN() {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mb-8">
        Legal Notice (Impressum)
      </h1>

      <p>
        <em>
          Legal notice according to Austrian law: §5 E-Commerce Act, §14
          Business Code, §63 Trade Regulations, and §25 Media Act.
        </em>
      </p>

      <h2>Company</h2>
      <p>
        <strong>{STORE_INFO.legalName}</strong>
        <br />
        Owner: {STORE_INFO.owner}
      </p>

      <h2>Business Activity</h2>
      <p>Retail sale of fabrics, sewing supplies, and creative materials</p>

      <h2>Legal Form</h2>
      <p>Sole proprietorship (Einzelunternehmen, e.U.)</p>

      <h2>Commercial Register</h2>
      <p>FN 637754z, Regional Court Eisenstadt (Landesgericht Eisenstadt)</p>

      <h2>VAT ID</h2>
      <p>{STORE_INFO.uid}</p>

      <h2>Address</h2>
      <p>
        {STORE_INFO.address.street}
        <br />
        {STORE_INFO.address.postalCode} {STORE_INFO.address.city}
        <br />
        Austria
      </p>

      <h2>Contact</h2>
      <p>
        Email:{" "}
        <a href={`mailto:${STORE_INFO.contact.email}`}>
          {STORE_INFO.contact.email}
        </a>
        <br />
        Phone:{" "}
        <a href={`tel:${STORE_INFO.contact.phone.replace(/\s/g, "")}`}>
          {STORE_INFO.contact.phone}
        </a>
      </p>

      <h2>Professional Memberships</h2>
      <p>Member of WKO Lower Austria (Austrian Chamber of Commerce)</p>

      <h2>Regulatory Authority</h2>
      <p>Magistrate of the City of Wiener Neustadt</p>

      <h2>Media Owner and Publisher</h2>
      <p>
        {STORE_INFO.owner}
        <br />
        Purpose: Presentation of {STORE_INFO.name} and its products and
        services.
      </p>

      <h2>Online Dispute Resolution</h2>
      <p>
        Consumers have the option to submit complaints to the EU Online Dispute
        Resolution platform:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr
        </a>
        . Alternatively, you may direct complaints to the email address provided
        above.
      </p>

      <h2>Scope</h2>
      <p>
        This legal notice also applies to the following social media profiles:
      </p>
      <ul>
        <li>
          Facebook:{" "}
          <a
            href={STORE_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            {STORE_INFO.name} on Facebook
          </a>
        </li>
        <li>
          Instagram:{" "}
          <a
            href={STORE_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            @stoffhaus_fru
          </a>
        </li>
      </ul>

      <h2>Copyright / Image Rights</h2>
      <p>
        All content published on this website (texts, images, graphics, logos)
        is subject to the copyright of the operator, unless third-party
        copyrights apply. Any use, reproduction, or distribution of content
        from this website requires the express written consent of the operator.
      </p>
      <p>
        Photos on this website were taken by the operator or used with
        permission of the respective rights holders. If you notice a copyright
        infringement, please notify us accordingly. Upon becoming aware of any
        legal violations, we will remove the affected content immediately.
      </p>

      <h2>Disclaimer</h2>
      <p>
        Despite careful content review, we assume no liability for the content
        of external links. The operators of linked pages are solely responsible
        for their content.
      </p>
    </article>
  );
}
