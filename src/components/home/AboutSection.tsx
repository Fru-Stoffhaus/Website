import { useTranslations } from "next-intl";
import { PincushionIcon, SafetyPinsIcon, RulerIcon } from "@/components/ui/CraftIcons";
import { LoopyLine, DashedLine } from "@/components/ui/DecorativePatterns";

export default function AboutSection() {
  const t = useTranslations("About");

  return (
    <section id="about" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-[3%] w-28 h-28 rotate-[15deg] opacity-25 hidden md:block">
          <PincushionIcon dark />
        </div>
        <div className="absolute bottom-10 right-[4%] w-24 h-24 rotate-[-10deg] opacity-25 hidden md:block">
          <SafetyPinsIcon dark />
        </div>
        <div className="absolute top-16 right-[2%] w-20 h-20 rotate-[30deg] opacity-20 hidden lg:block">
          <RulerIcon dark />
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mb-2">
          {t("title")}
        </h2>
        <LoopyLine className="w-48 h-6 text-fru-peach/60 mx-auto mb-8" />
        <p className="text-base sm:text-lg leading-relaxed text-fru-dark/80">
          {t("text")}
        </p>
        <DashedLine className="w-32 h-2 text-fru-peach/40 mx-auto mt-8" />
      </div>
    </section>
  );
}
