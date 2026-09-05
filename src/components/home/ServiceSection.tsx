import Image from "next/image";
import { useTranslations } from "next-intl";
import { STORE_INFO } from "@/lib/constants";
import { SewingMachineIcon, MeasuringTapeIcon } from "@/components/ui/CraftIcons";
import { DashedLine, LoopyLine } from "@/components/ui/DecorativePatterns";

/**
 * The sewing machine service is a permanent offer, so the poster lives in
 * /public and is paired with real text — the announcement slot in the hero
 * (uploadable at /admin) stays free for whatever is currently going on.
 */
export default function ServiceSection() {
  const t = useTranslations("Service");
  const { address } = STORE_INFO;

  return (
    <section id="service" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-[4%] w-28 h-28 rotate-[12deg] opacity-20 hidden md:block">
          <SewingMachineIcon dark />
        </div>
        <div className="absolute bottom-8 left-[3%] w-24 h-24 rotate-[-18deg] opacity-20 hidden lg:block">
          <MeasuringTapeIcon dark />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* The image column narrows at md: at exactly 768px the heading's
            longest word ("Nähmaschinenservice") cannot shrink any further, and
            a wider image pushes it past the section's overflow-hidden edge. */}
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[240px] lg:max-w-[340px] flex-shrink-0">
            <Image
              src="/images/naehmaschinenservice.png"
              alt={t("imageAlt")}
              width={400}
              height={500}
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <span className="inline-block rounded-full bg-fru-peach/40 px-4 py-1 font-heading text-xs uppercase tracking-[0.2em] text-fru-dark">
              {t("badge")}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mt-4 mb-2">
              {t("title")}
            </h2>
            <LoopyLine className="w-40 h-6 text-fru-peach/60 mb-5 mx-auto md:mx-0" />

            <p className="text-base sm:text-lg leading-relaxed text-fru-dark/80">
              {t("intro")}
            </p>

            <ul className="mt-6 space-y-2 inline-block text-left">
              {[t("point1"), t("point2"), t("point3")].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0 text-fru-green"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-fru-dark/80">{point}</span>
                </li>
              ))}
            </ul>

            <address className="mt-6 not-italic text-fru-dark/70">
              {STORE_INFO.name} · {address.street}
              <br />
              {address.postalCode} {address.city}
            </address>

            <p className="mt-5 font-heading text-sm uppercase tracking-wider text-fru-dark/60">
              {t("partnerLabel")}{" "}
              <span className="font-bold text-fru-purple">
                {t("partnerName")}
              </span>
            </p>

            <DashedLine className="w-32 h-2 text-fru-peach/40 mt-8 mx-auto md:mx-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
