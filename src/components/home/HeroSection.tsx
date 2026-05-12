import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative bg-fru-peach overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          <circle cx="100" cy="80" r="60" stroke="#74257e" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="700" cy="320" r="80" stroke="#335640" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M300 50 L320 100 L280 100 Z" stroke="#74257e" strokeWidth="1" fill="none" />
          <path d="M500 350 Q550 300 600 350" stroke="#335640" strokeWidth="1" fill="none" />
          <line x1="150" y1="300" x2="250" y2="250" stroke="#2a2735" strokeWidth="0.5" strokeDasharray="8 4" />
          <line x1="600" y1="50" x2="650" y2="150" stroke="#2a2735" strokeWidth="0.5" strokeDasharray="8 4" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
        <p className="font-heading text-xs sm:text-sm tracking-[0.3em] text-fru-dark/70 mb-4">
          {t("tagline")}
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-fru-dark mb-6">
          {t("welcome")}
        </h1>
        <p className="text-lg sm:text-xl text-fru-dark/80 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="inline-block w-12 h-px bg-fru-purple/40" />
          <svg className="w-6 h-6 text-fru-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121A3 3 0 109.879 9.879m4.242 4.242L9.88 9.88m4.242 4.242l2.121 2.121M9.879 9.879L7.757 7.757M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="inline-block w-12 h-px bg-fru-purple/40" />
        </div>
      </div>
    </section>
  );
}
