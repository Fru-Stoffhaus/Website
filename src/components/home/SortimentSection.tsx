import { useLocale, useTranslations } from "next-intl";
import { SORTIMENT } from "@/lib/sortiment";
import { FabricIcon, ButtonsIcon } from "@/components/ui/CraftIcons";
import { WavyLine, DottedLine } from "@/components/ui/DecorativePatterns";

export default function SortimentSection() {
  const t = useTranslations("Sortiment");
  const locale = useLocale();
  const categories = SORTIMENT[locale === "en" ? "en" : "de"];

  return (
    <section
      id="sortiment"
      className="relative py-16 sm:py-24 bg-fru-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[3%] w-28 h-28 rotate-[-12deg] opacity-20 hidden md:block">
          <FabricIcon dark />
        </div>
        <div className="absolute bottom-12 right-[3%] w-24 h-24 rotate-[14deg] opacity-20 hidden md:block">
          <ButtonsIcon dark />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark text-center mb-2">
          {t("title")}
        </h2>
        <WavyLine className="w-48 h-6 text-fru-peach/60 mx-auto mb-10" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.heading}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-fru-dark/5"
            >
              <h3 className="font-heading text-xl font-semibold text-fru-purple mb-4">
                {category.heading}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-fru-dark/80"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fru-peach"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <DottedLine className="w-32 h-2 text-fru-peach/40 mx-auto mt-10" />
      </div>
    </section>
  );
}
