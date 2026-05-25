import { useTranslations } from "next-intl";
import { WavyLine } from "@/components/ui/DecorativePatterns";

const placeholderIcons = [
  { src: "/images/icon-fabric.png", alt: "Stoffe" },
  { src: "/images/icon-sewing-machine.png", alt: "Nähmaschine" },
  { src: "/images/icon-buttons.png", alt: "Knöpfe" },
  { src: "/images/icon-needles.png", alt: "Nadeln" },
  { src: "/images/icon-measuring-tape.png", alt: "Maßband" },
  { src: "/images/icon-pincushion.png", alt: "Nadelkissen" },
];

export default function GallerySection() {
  const t = useTranslations("Gallery");

  return (
    <section id="gallery" className="relative py-16 sm:py-24">
      <WavyLine className="absolute top-0 left-0 w-full h-4 text-fru-peach/30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-fru-dark mb-10">
          {t("title")}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {placeholderIcons.map(({ src, alt }, i) => (
            <div
              key={i}
              className="aspect-square bg-fru-peach/15 rounded-xl flex items-center justify-center border-2 border-dashed border-fru-peach/30 hover:border-fru-purple/40 hover:bg-fru-peach/25 transition-colors p-6"
            >
              <div className="text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 invert opacity-40 object-contain"
                />
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
