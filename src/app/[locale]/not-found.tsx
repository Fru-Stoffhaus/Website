import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-heading text-6xl font-bold text-fru-purple mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl font-bold text-fru-dark mb-2">
          {t("title")}
        </h2>
        <p className="text-fru-dark/60 mb-8">{t("description")}</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-fru-purple text-white rounded-full font-heading font-semibold hover:bg-fru-purple-light transition-colors"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
