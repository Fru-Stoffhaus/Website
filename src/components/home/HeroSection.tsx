import Image from "next/image";
import { useTranslations } from "next-intl";
import { SnipsIcon, FabricIcon, NeedleThreadIcon, ButtonsIcon } from "@/components/ui/CraftIcons";
import { WavyLine, DashedLine } from "@/components/ui/DecorativePatterns";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative bg-fru-peach overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-[3%] w-28 h-28 rotate-[-20deg] opacity-30 hidden sm:block">
          <SnipsIcon dark />
        </div>
        <div className="absolute bottom-4 left-[6%] w-32 h-32 rotate-[15deg] opacity-25 hidden md:block">
          <FabricIcon dark />
        </div>
        <div className="absolute top-8 right-[4%] w-24 h-24 rotate-[10deg] opacity-30 hidden sm:block">
          <ButtonsIcon dark />
        </div>
        <div className="absolute bottom-6 right-[8%] w-28 h-28 rotate-[-30deg] opacity-25 hidden md:block">
          <NeedleThreadIcon dark />
        </div>
        <WavyLine className="absolute bottom-0 left-0 w-full h-4 text-fru-purple/20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <DashedLine className="w-32 h-2 text-fru-purple/40 mb-4 mx-auto md:mx-0" />
            <p className="font-heading text-xs sm:text-sm tracking-[0.3em] text-fru-dark/70 mb-4">
              {t("tagline")}
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-fru-dark mb-6">
              {t("welcome")}{" "}
              <span className="font-lot text-fru-dark">F</span>
              <span className="font-lot text-fru-dark">R</span>
              <span className="font-lot text-fru-dark">U</span>
            </h1>
            <p className="text-lg sm:text-xl text-fru-dark/80 max-w-xl">
              {t("subtitle")}
            </p>
            <DashedLine className="w-40 h-2 text-fru-purple/40 mt-6 mx-auto md:mx-0" />
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/images/fru-opening.jpg"
              alt="Stoffhaus FRU – Eröffnung am 5. Juni, 10% Willkommensrabatt"
              width={400}
              height={500}
              className="rounded-2xl shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
