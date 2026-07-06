import { setRequestLocale, getTranslations } from "next-intl/server";
import { STORE_INFO } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Datenschutz" });
  return {
    title: `${t("title")} – ${STORE_INFO.name}`,
    alternates: {
      canonical: `/${locale}/datenschutz`,
      languages: {
        de: "/de/datenschutz",
        en: "/en/datenschutz",
        "x-default": "/de/datenschutz",
      },
    },
  };
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {locale === "de" ? <DatenschutzDE /> : <DatenschutzEN />}
    </div>
  );
}

function DatenschutzDE() {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mb-8">
        Datenschutzerklärung
      </h1>

      <h2>1. Verantwortliche Stelle</h2>
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

      <h2>2. Erhobene Daten</h2>
      <p>
        Beim Besuch unserer Website werden automatisch folgende Daten in
        Server-Logfiles gespeichert, die Ihr Browser übermittelt:
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Browsertyp und Browserversion</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL (die zuvor besuchte Seite)</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
      </ul>
      <p>
        Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht
        mit anderen Datenquellen zusammengeführt. Die Speicherung erfolgt auf
        Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
        technisch einwandfreien Darstellung und Sicherheit der Website).
      </p>

      <h2>3. Cookies</h2>
      <p>
        Unsere Website verwendet technisch notwendige Cookies sowie – nur mit
        Ihrer Einwilligung – Marketing-Cookies. Technisch notwendige Cookies
        sind für den ordnungsgemäßen Betrieb der Website erforderlich (z. B.
        Speicherung der Spracheinstellung sowie Ihrer Cookie-Auswahl).
      </p>
      <p>
        Marketing-Cookies (siehe Punkt 4 – Google Ads) werden ausschließlich
        gesetzt, wenn Sie diese im Cookie-Banner aktiv akzeptieren
        („Alle akzeptieren"). Wählen Sie „Nur notwendige", werden keine
        Marketing-Cookies gesetzt und keine entsprechenden Skripte geladen.
        Ihre Auswahl können Sie jederzeit ändern, indem Sie die in Ihrem
        Browser gespeicherten Cookies löschen.
      </p>
      <p>
        Rechtsgrundlage: §165 Abs. 3 TKG 2021 – für technisch notwendige
        Cookies ist keine Einwilligung erforderlich. Für Marketing-Cookies
        erfolgt die Verarbeitung auf Grundlage Ihrer Einwilligung (Art. 6 Abs.
        1 lit. a DSGVO).
      </p>

      <h2>4. Google Ads Conversion-Tracking</h2>
      <p>
        Diese Website nutzt Google Ads, den Online-Werbedienst der Google
        Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland). Zur
        Erfolgsmessung unserer Werbeanzeigen setzen wir das Google Ads
        Conversion-Tracking ein. Gelangen Sie über eine unserer Anzeigen auf
        die Website, wird ein Cookie gesetzt, anhand dessen Google und wir
        erkennen können, dass ein Nutzer auf eine Anzeige geklickt und die
        Website besucht hat. Diese Informationen werden ausschließlich statistisch
        und nicht personenbezogen ausgewertet.
      </p>
      <p>
        Das Conversion-Tracking wird erst nach Ihrer ausdrücklichen Einwilligung
        geladen. Wählen Sie im Cookie-Banner „Alle akzeptieren", werden die
        entsprechenden Skripte und Cookies von Google aktiviert. Lehnen Sie ab
        bzw. wählen Sie „Nur notwendige", werden keine Google-Ads-Skripte
        geladen und keine Daten an Google übermittelt. Sie können Ihre
        Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie
        die gespeicherten Cookies in Ihrem Browser löschen.
      </p>
      <p>
        Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Im Zuge der
        Verarbeitung kann es zu einer Übermittlung von Daten an Google in die
        USA kommen. Weitere Informationen finden Sie in der{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von Google
        </a>
        .
      </p>

      <h2>5. Google Maps</h2>
      <p>
        Diese Website nutzt den Kartendienst Google Maps der Firma Google Inc.
        Die Karte wird erst nach Ihrer aktiven Zustimmung (Klick auf „Karte
        laden") geladen. Erst dann werden Daten an Google übermittelt.
      </p>
      <p>
        Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Weitere
        Informationen finden Sie in der{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von Google
        </a>
        .
      </p>

      <h2>6. Links zu sozialen Medien</h2>
      <p>
        Unsere Website enthält Links zu unseren Profilen auf Facebook und
        Instagram. Es handelt sich um einfache Hyperlinks – beim Besuch unserer
        Website werden keine Daten an Meta Platforms, Inc. oder andere
        Drittanbieter übermittelt. Eine Datenübertragung findet erst statt, wenn
        Sie aktiv auf einen dieser Links klicken und die jeweilige Plattform
        besuchen.
      </p>

      <h2>7. Fotos und Bildmaterial</h2>
      <p>
        Auf dieser Website werden Fotos unseres Geschäfts, unserer Produkte
        und gegebenenfalls von Veranstaltungen veröffentlicht. Sofern Personen
        auf Fotos erkennbar sind, erfolgt die Veröffentlichung nur mit deren
        ausdrücklicher Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Betroffene
        Personen können ihre Einwilligung jederzeit widerrufen – in diesem
        Fall werden die betreffenden Fotos umgehend entfernt.
      </p>
      <p>
        Zur Ausübung Ihres Widerrufsrechts wenden Sie sich bitte an:{" "}
        <a href={`mailto:${STORE_INFO.contact.email}`}>
          {STORE_INFO.contact.email}
        </a>
      </p>

      <h2>8. Videoüberwachung</h2>
      <p>
        Zum Schutz von Personen, Eigentum sowie zur Verhinderung und Aufklärung
        von Diebstählen und Sachbeschädigungen werden Teile unserer
        Geschäftsräume in {STORE_INFO.address.street},{" "}
        {STORE_INFO.address.postalCode} {STORE_INFO.address.city}{" "}
        videoüberwacht. Auf die Videoüberwachung wird durch deutlich sichtbare
        Hinweisschilder am Eingang aufmerksam gemacht.
      </p>
      <p>
        <strong>Verantwortlicher:</strong> {STORE_INFO.legalName},{" "}
        {STORE_INFO.owner}, {STORE_INFO.address.street},{" "}
        {STORE_INFO.address.postalCode} {STORE_INFO.address.city} (siehe auch
        Punkt 1).
      </p>
      <p>
        <strong>Zweck der Verarbeitung:</strong> Schutz von Personen und
        Eigentum, Prävention und Aufklärung von Diebstählen, Einbrüchen,
        Vandalismus und sonstigen sicherheitsrelevanten Vorfällen.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse).
      </p>
      <p>
        <strong>Berechtigtes Interesse:</strong> Gewährleistung der Sicherheit
        von Kundinnen und Kunden, Mitarbeitenden und Unternehmenswerten sowie
        die Beweissicherung im Anlassfall.
      </p>
      <p>
        <strong>Speicherdauer:</strong> Die Videoaufzeichnungen werden
        grundsätzlich für maximal 72 Stunden gespeichert und anschließend
        automatisch gelöscht, sofern keine Aufbewahrung zur Beweissicherung
        erforderlich ist.
      </p>
      <p>
        <strong>Empfänger der Daten:</strong> Eine Weitergabe erfolgt nur,
        soweit dies gesetzlich erforderlich ist oder zur Durchsetzung bzw.
        Abwehr von Rechtsansprüchen notwendig ist. Empfänger können
        insbesondere Behörden, Gerichte, Versicherungen oder Rechtsvertreter
        sein.
      </p>
      <p>
        Ihre Rechte als betroffene Person sowie Ihr Beschwerderecht bei der
        Datenschutzbehörde gelten auch für die Videoüberwachung – siehe Punkt 10
        und Punkt 11.
      </p>

      <h2>9. Hosting</h2>
      <p>
        Diese Website wird bei Vercel Inc. (San Francisco, USA) gehostet. Beim
        Besuch unserer Website werden Ihre personenbezogenen Daten (z. B.
        IP-Adresse) auf Servern von Vercel verarbeitet.
      </p>
      <p>
        Datenübertragung in die USA: Die Übertragung erfolgt auf Grundlage des
        Angemessenheitsbeschlusses der EU-Kommission zum EU-U.S. Data Privacy
        Framework. Vercel ist unter dem Data Privacy Framework zertifiziert.
      </p>

      <h2>10. Ihre Rechte</h2>
      <p>
        Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer
        personenbezogenen Daten:
      </p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
        <a href={`mailto:${STORE_INFO.contact.email}`}>
          {STORE_INFO.contact.email}
        </a>
      </p>

      <h2>11. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu
        beschweren:
      </p>
      <p>
        Österreichische Datenschutzbehörde
        <br />
        Barichgasse 40-42
        <br />
        1030 Wien
        <br />
        <a
          href="https://www.dsb.gv.at"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.dsb.gv.at
        </a>
      </p>

      <h2>12. Speicherdauer</h2>
      <p>
        Server-Logfiles werden nach maximal 30 Tagen gelöscht. Der Cookie zur
        Spracheinstellung wird nur für die Dauer der Browser-Sitzung
        gespeichert. Marketing-Cookies von Google Ads werden entsprechend den
        Vorgaben von Google gespeichert (in der Regel bis zu 90 Tage) und können
        von Ihnen jederzeit im Browser gelöscht werden.
      </p>

      <p className="text-sm text-fru-dark/50 mt-12">
        Stand: Juli 2026
      </p>
    </article>
  );
}

function DatenschutzEN() {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mb-8">
        Privacy Policy
      </h1>

      <h2>1. Data Controller</h2>
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

      <h2>2. Data Collected</h2>
      <p>
        When you visit our website, the following data is automatically stored in
        server log files as transmitted by your browser:
      </p>
      <ul>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Referrer URL (previously visited page)</li>
        <li>Date and time of access</li>
      </ul>
      <p>
        This data cannot be attributed to specific individuals and is not merged
        with other data sources. Storage is based on Art. 6(1)(f) GDPR
        (legitimate interest in the technically flawless presentation and
        security of the website).
      </p>

      <h2>3. Cookies</h2>
      <p>
        Our website uses technically necessary cookies and – only with your
        consent – marketing cookies. Technically necessary cookies are required
        for the proper operation of the website (e.g., storing your language
        preference and your cookie choice).
      </p>
      <p>
        Marketing cookies (see section 4 – Google Ads) are only set if you
        actively accept them in the cookie banner (&quot;Accept all&quot;). If
        you choose &quot;Necessary only&quot;, no marketing cookies are set and
        no corresponding scripts are loaded. You can change your choice at any
        time by deleting the cookies stored in your browser.
      </p>
      <p>
        Legal basis: §165(3) TKG 2021 (Austrian Telecommunications Act) – no
        consent is required for technically necessary cookies. Marketing cookies
        are processed on the basis of your consent (Art. 6(1)(a) GDPR).
      </p>

      <h2>4. Google Ads Conversion Tracking</h2>
      <p>
        This website uses Google Ads, the online advertising service of Google
        Ireland Limited (Gordon House, Barrow Street, Dublin 4, Ireland). To
        measure the success of our advertisements, we use Google Ads conversion
        tracking. If you reach our website via one of our ads, a cookie is set
        that allows Google and us to recognise that a user clicked an ad and
        visited the website. This information is evaluated on a statistical,
        non-personal basis only.
      </p>
      <p>
        Conversion tracking is only loaded after your express consent. If you
        select &quot;Accept all&quot; in the cookie banner, the corresponding
        Google scripts and cookies are activated. If you decline or choose
        &quot;Necessary only&quot;, no Google Ads scripts are loaded and no data
        is transmitted to Google. You may withdraw your consent at any time with
        effect for the future by deleting the cookies stored in your browser.
      </p>
      <p>
        Legal basis: Art. 6(1)(a) GDPR (consent). Processing may involve a
        transfer of data to Google in the USA. For more information, see{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&apos;s Privacy Policy
        </a>
        .
      </p>

      <h2>5. Google Maps</h2>
      <p>
        This website uses the Google Maps service by Google Inc. The map is only
        loaded after your active consent (clicking &quot;Load Map&quot;). Only
        then is data transmitted to Google.
      </p>
      <p>
        Legal basis: Art. 6(1)(a) GDPR (consent). For more information, see{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&apos;s Privacy Policy
        </a>
        .
      </p>

      <h2>6. Social Media Links</h2>
      <p>
        Our website contains links to our profiles on Facebook and Instagram.
        These are simple hyperlinks – no data is transmitted to Meta Platforms,
        Inc. or other third parties when you visit our website. Data transfer
        only occurs when you actively click on one of these links and visit the
        respective platform.
      </p>

      <h2>7. Photos and Images</h2>
      <p>
        This website publishes photos of our store, our products, and
        occasionally events. If individuals are recognizable in photos,
        publication only occurs with their express consent (Art. 6(1)(a) GDPR).
        Individuals may withdraw their consent at any time – in which case the
        respective photos will be removed promptly.
      </p>
      <p>
        To exercise your right of withdrawal, please contact:{" "}
        <a href={`mailto:${STORE_INFO.contact.email}`}>
          {STORE_INFO.contact.email}
        </a>
      </p>

      <h2>8. Video Surveillance</h2>
      <p>
        To protect persons and property and to prevent and investigate theft and
        property damage, parts of our business premises at{" "}
        {STORE_INFO.address.street}, {STORE_INFO.address.postalCode}{" "}
        {STORE_INFO.address.city} are subject to video surveillance. The
        surveillance is clearly indicated by visible notices at the entrance.
      </p>
      <p>
        <strong>Controller:</strong> {STORE_INFO.legalName},{" "}
        {STORE_INFO.owner}, {STORE_INFO.address.street},{" "}
        {STORE_INFO.address.postalCode} {STORE_INFO.address.city} (see also
        section 1).
      </p>
      <p>
        <strong>Purpose of processing:</strong> Protection of persons and
        property; prevention and investigation of theft, burglary, vandalism,
        and other security-relevant incidents.
      </p>
      <p>
        <strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interest).
      </p>
      <p>
        <strong>Legitimate interest:</strong> Ensuring the safety of customers,
        staff, and company assets, as well as preserving evidence in the event
        of an incident.
      </p>
      <p>
        <strong>Retention period:</strong> Video recordings are generally
        stored for a maximum of 72 hours and then automatically deleted, unless
        retention is required to preserve evidence.
      </p>
      <p>
        <strong>Recipients of the data:</strong> Data is only disclosed where
        legally required or necessary to assert or defend against legal claims.
        Recipients may in particular include authorities, courts, insurers, or
        legal representatives.
      </p>
      <p>
        Your rights as a data subject and your right to lodge a complaint with
        the data protection authority also apply to the video surveillance –
        see sections 10 and 11.
      </p>

      <h2>9. Hosting</h2>
      <p>
        This website is hosted by Vercel Inc. (San Francisco, USA). When
        visiting our website, your personal data (e.g., IP address) is processed
        on Vercel servers.
      </p>
      <p>
        Data transfer to the USA: The transfer is based on the EU
        Commission&apos;s adequacy decision for the EU-U.S. Data Privacy
        Framework. Vercel is certified under the Data Privacy Framework.
      </p>

      <h2>10. Your Rights</h2>
      <p>
        You have the following rights regarding your personal data:
      </p>
      <ul>
        <li>Right of access (Art. 15 GDPR)</li>
        <li>Right to rectification (Art. 16 GDPR)</li>
        <li>Right to erasure (Art. 17 GDPR)</li>
        <li>Right to restriction of processing (Art. 18 GDPR)</li>
        <li>Right to data portability (Art. 20 GDPR)</li>
        <li>Right to object (Art. 21 GDPR)</li>
      </ul>
      <p>
        To exercise your rights, please contact:{" "}
        <a href={`mailto:${STORE_INFO.contact.email}`}>
          {STORE_INFO.contact.email}
        </a>
      </p>

      <h2>11. Right to Lodge a Complaint</h2>
      <p>
        You have the right to lodge a complaint with the competent supervisory
        authority:
      </p>
      <p>
        Austrian Data Protection Authority (Datenschutzbehörde)
        <br />
        Barichgasse 40-42
        <br />
        1030 Vienna, Austria
        <br />
        <a
          href="https://www.dsb.gv.at"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.dsb.gv.at
        </a>
      </p>

      <h2>12. Data Retention</h2>
      <p>
        Server log files are deleted after a maximum of 30 days. The language
        preference cookie is stored only for the duration of the browser session.
        Google Ads marketing cookies are stored in accordance with Google&apos;s
        specifications (generally up to 90 days) and can be deleted by you in your
        browser at any time.
      </p>

      <p className="text-sm text-fru-dark/50 mt-12">
        Last updated: July 2026
      </p>
    </article>
  );
}
