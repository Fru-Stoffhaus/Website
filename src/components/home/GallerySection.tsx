import { useTranslations } from "next-intl";

export default function GallerySection() {
  const t = useTranslations("Gallery");

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-fru-dark mb-10">
          {t("title")}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-fru-peach/20 rounded-xl flex items-center justify-center border-2 border-dashed border-fru-peach/40"
            >
              <div className="text-center p-4">
                <svg
                  className="w-10 h-10 mx-auto text-fru-peach/60 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                  />
                </svg>
                <p className="text-xs text-fru-dark/40 font-heading">
                  {t("comingSoon")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
