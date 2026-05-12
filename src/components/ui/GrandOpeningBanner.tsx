import { useTranslations } from "next-intl";

export default function GrandOpeningBanner() {
  const t = useTranslations("GrandOpening");

  return (
    <div className="bg-fru-purple text-white py-3 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p className="font-heading font-bold text-sm sm:text-base tracking-wide">
          &#10022; {t("title")} &#10022;
        </p>
        <p className="text-xs sm:text-sm text-white/80 mt-0.5">
          {t("subtitle")}
        </p>
      </div>
    </div>
  );
}
