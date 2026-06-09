import { useTranslations } from "next-intl";
import { ZigzagLine } from "@/components/ui/DecorativePatterns";

export default function GrandOpeningBanner() {
  const t = useTranslations("GrandOpening");

  return (
    <div className="relative bg-fru-purple text-white py-3 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <p className="font-heading font-bold text-sm sm:text-base tracking-wide">
          &#10022; {t("title")} &#10022;
        </p>
        {t("subtitle") && (
          <p className="text-xs sm:text-sm text-white/80 mt-0.5">
            {t("subtitle")}
          </p>
        )}
      </div>
      <ZigzagLine className="absolute bottom-0 left-0 w-full h-3 text-white/15" />
    </div>
  );
}
