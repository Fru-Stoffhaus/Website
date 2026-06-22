import { isAuthed } from "@/lib/admin-auth";
import { getBannerFresh } from "@/lib/banner";
import { getHeroImageFresh } from "@/lib/hero";
import { login, logout, saveBanner, saveHeroImage } from "./actions";

export const dynamic = "force-dynamic";

const inputClass =
  "mt-1 w-full rounded-lg border border-fru-dark/20 px-3 py-2 focus:border-fru-purple focus:outline-none focus:ring-1 focus:ring-fru-purple";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{
    error?: string;
    saved?: string;
    detail?: string;
    tok?: string;
  }>;
}) {
  const sp = await searchParams;
  const authed = await isAuthed();

  if (!authed) {
    return (
      <main className="max-w-sm mx-auto px-4 py-20">
        <h1 className="font-heading text-2xl font-bold text-fru-purple mb-6">
          Verwaltung
        </h1>
        {sp.error && (
          <p className="mb-4 rounded-lg bg-red-100 text-red-800 px-3 py-2 text-sm">
            Falsches Passwort.
          </p>
        )}
        <form action={login} className="space-y-4">
          <label className="block text-sm font-medium">
            Passwort
            <input
              type="password"
              name="password"
              required
              autoFocus
              className={inputClass}
            />
          </label>
          <button className="w-full rounded-lg bg-fru-purple text-white font-heading font-semibold py-2.5 hover:opacity-90 transition">
            Anmelden
          </button>
        </form>
      </main>
    );
  }

  const banner = await getBannerFresh();
  const heroImage = await getHeroImageFresh();

  const errorMessages: Record<string, string> = {
    image: "Bitte eine Bilddatei auswählen.",
    imagetype: "Nur JPG-, PNG- oder WebP-Bilder sind erlaubt.",
    imagesize: "Das Bild ist zu groß (max. 8 MB).",
    upload: "Upload fehlgeschlagen.",
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-heading text-2xl font-bold text-fru-purple">
          Verwaltung
        </h1>
        <form action={logout}>
          <button className="text-sm text-fru-dark/60 hover:text-fru-dark underline">
            Abmelden
          </button>
        </form>
      </div>

      {sp.saved && (
        <p className="mb-6 rounded-lg bg-green-100 text-green-800 px-3 py-2 text-sm">
          {sp.saved === "image"
            ? "Bild gespeichert. Die Änderung ist live."
            : "Gespeichert. Die Änderung ist live."}
        </p>
      )}
      {sp.error && errorMessages[sp.error] && (
        <div className="mb-6 rounded-lg bg-red-100 text-red-800 px-3 py-2 text-sm">
          <p>{errorMessages[sp.error]}</p>
          {sp.tok && (
            <p className="mt-1 text-xs">
              BLOB_READ_WRITE_TOKEN am Server:{" "}
              {sp.tok === "1" ? "vorhanden" : "FEHLT"}
            </p>
          )}
          {sp.detail && (
            <p className="mt-1 font-mono text-xs break-all">{sp.detail}</p>
          )}
        </div>
      )}

      {/* Hero image upload */}
      <section className="mb-12">
        <h2 className="font-heading text-lg font-semibold text-fru-dark mb-1">
          Startseiten-Bild
        </h2>
        <p className="mb-4 text-sm text-fru-dark/70">
          Das Bild neben „Willkommen bei FRU“. JPG, PNG oder WebP, max. 8 MB.
        </p>
        <div className="flex items-start gap-5">
          <div className="w-32 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImage}
              alt="Aktuelles Startseiten-Bild"
              className="w-full h-auto rounded-lg border border-fru-dark/15"
            />
            <p className="mt-1 text-xs text-fru-dark/50 text-center">aktuell</p>
          </div>
          <form action={saveHeroImage} className="flex-1 space-y-3">
            <input
              type="file"
              name="image"
              accept="image/jpeg,image/png,image/webp"
              required
              className="block w-full text-sm text-fru-dark/80 file:mr-3 file:rounded-lg file:border-0 file:bg-fru-purple/10 file:px-4 file:py-2 file:text-fru-purple file:font-medium hover:file:bg-fru-purple/20"
            />
            <button className="rounded-lg bg-fru-purple text-white font-heading font-semibold px-6 py-2.5 hover:opacity-90 transition">
              Bild hochladen
            </button>
          </form>
        </div>
      </section>

      <hr className="mb-10 border-fru-dark/10" />

      <h2 className="font-heading text-lg font-semibold text-fru-dark mb-1">
        Banner
      </h2>
      <p className="mb-6 text-sm text-fru-dark/70">
        Text leer lassen = kein Banner. Bei Text erscheint das lila Banner oben
        auf der Seite. Zeilenumbrüche werden übernommen.
      </p>

      <form action={saveBanner} className="space-y-6">
        <label className="block">
          <span className="text-sm font-semibold">Deutsch 🇩🇪</span>
          <textarea
            name="de"
            rows={4}
            defaultValue={banner.de}
            placeholder="z. B. Liebe Kunden, am Donnerstag bleibt das Geschäft geschlossen."
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold">English 🇬🇧</span>
          <textarea
            name="en"
            rows={4}
            defaultValue={banner.en}
            placeholder="e.g. Dear customers, the shop is closed on Thursday."
            className={inputClass}
          />
        </label>

        <button className="rounded-lg bg-fru-purple text-white font-heading font-semibold px-6 py-2.5 hover:opacity-90 transition">
          Speichern
        </button>
      </form>
    </main>
  );
}
