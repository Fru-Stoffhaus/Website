import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("About");

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mb-6">
          {t("title")}
        </h2>
        <div className="w-16 h-1 bg-fru-peach mx-auto mb-8 rounded-full" />
        <p className="text-base sm:text-lg leading-relaxed text-fru-dark/80">
          {t("text")}
        </p>
      </div>
    </section>
  );
}
