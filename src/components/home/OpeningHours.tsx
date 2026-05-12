import { useTranslations } from "next-intl";

export default function OpeningHours() {
  const t = useTranslations("Hours");

  return (
    <section className="py-16 sm:py-24 bg-fru-green text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-10">
          {t("title")}
        </h2>

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
    </section>
  );
}
