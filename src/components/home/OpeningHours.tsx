import { useTranslations } from "next-intl";
import { SewingMachineIcon, MeasuringTapeIcon } from "@/components/ui/CraftIcons";
import { ZigzagLine, DottedLine } from "@/components/ui/DecorativePatterns";

export default function OpeningHours() {
  const t = useTranslations("Hours");

  return (
    <section id="hours" className="relative py-16 sm:py-24 bg-fru-green text-white overflow-hidden">
      <ZigzagLine className="absolute top-0 left-0 w-full h-5 text-white/15" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 right-[5%] w-36 h-36 rotate-[10deg] opacity-25 hidden sm:block">
          <SewingMachineIcon />
        </div>
        <div className="absolute bottom-12 left-[4%] w-32 h-32 rotate-[-10deg] opacity-25 hidden sm:block">
          <MeasuringTapeIcon />
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-2">
          {t("title")}
        </h2>
        <DottedLine className="w-48 h-2 text-white/30 mx-auto mb-10" />

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className="font-heading font-semibold text-lg">
                {t("mondayFriday")}
              </span>
              <div className="text-right">
                <p className="text-lg">{t("morningHours")}</p>
                <p className="text-lg">{t("afternoonHours")}</p>
              </div>
            </div>
            <p className="text-sm text-white/60 italic text-center">
              {t("lunchBreak")}
            </p>

            <div className="border-t border-white/20 pt-4 flex justify-between items-center">
              <span className="font-heading font-semibold text-lg">
                {t("saturday")}
              </span>
              <span className="text-lg">{t("saturdayHours")}</span>
            </div>

            <div className="border-t border-white/20 pt-4 flex justify-between items-center">
              <span className="font-heading font-semibold text-lg">
                {t("sunday")}
              </span>
              <span className="text-lg text-white/60">{t("closed")}</span>
            </div>
          </div>
        </div>
      </div>

      <ZigzagLine className="absolute bottom-0 left-0 w-full h-5 text-white/15" />
    </section>
  );
}
