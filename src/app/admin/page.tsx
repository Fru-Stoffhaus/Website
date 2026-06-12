import { isAuthed } from "@/lib/admin-auth";
import { getBannerFresh } from "@/lib/banner";
import { login, logout, saveBanner } from "./actions";

export const dynamic = "force-dynamic";

const inputClass =
  "mt-1 w-full rounded-lg border border-fru-dark/20 px-3 py-2 focus:border-fru-purple focus:outline-none focus:ring-1 focus:ring-fru-purple";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; saved?: string }>;
}) {
  const sp = await searchParams;
  const authed = await isAuthed();

  if (!authed) {
    return (
      <main className="max-w-sm mx-auto px-4 py-20">
        <h1 className="font-heading text-2xl font-bold text-fru-purple mb-6">
          Banner verwalten
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

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-heading text-2xl font-bold text-fru-purple">
          Banner verwalten
        </h1>
        <form action={logout}>
          <button className="text-sm text-fru-dark/60 hover:text-fru-dark underline">
            Abmelden
          </button>
        </form>
      </div>
      <p className="mb-6 text-sm text-fru-dark/70">
        Text leer lassen = kein Banner. Bei Text erscheint das lila Banner oben
        auf der Seite. Zeilenumbrüche werden übernommen.
      </p>

      {sp.saved && (
        <p className="mb-6 rounded-lg bg-green-100 text-green-800 px-3 py-2 text-sm">
          Gespeichert. Die Änderung ist live.
        </p>
      )}

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
