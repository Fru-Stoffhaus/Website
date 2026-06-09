import Image from "next/image";
import { useTranslations } from "next-intl";
import { WavyLine } from "@/components/ui/DecorativePatterns";

const photos = [
  { src: "/images/gallery-shop-sewingmachine.jpg", alt: "Stoffhaus FRU – Geschäft in Wiener Neustadt mit Nähmaschine und Stoffregalen" },
  { src: "/images/gallery-shop-shelves.jpg", alt: "Stoffregale mit großer Stoffauswahl im Stoffhaus FRU in Wiener Neustadt" },
  { src: "/images/gallery-fabrics-floral.jpg", alt: "Bunte gemusterte Stoffe als Meterware – Blumen- und Fruchtmotive" },
  { src: "/images/gallery-fabrics-bolts.jpg", alt: "Große Auswahl an Stoffballen und Meterware in vielen Farben" },
  { src: "/images/gallery-fabrics-pastel.jpg", alt: "Stoffe mit zarten Mustern – Regenbögen, Blumen und Kirschen" },
  { src: "/images/gallery-shop-interior.jpg", alt: "Stoffregale und Nähzubehör im Stoffhaus FRU" },
  { src: "/images/gallery-fabrics-kids.jpg", alt: "Kinderstoffe mit Motiven – Boote, Enten, Traktoren und Faultiere" },
  { src: "/images/gallery-scissors.jpg", alt: "Auswahl an Scheren und Schneiderscheren als Nähzubehör" },
  { src: "/images/gallery-shop-notions.jpg", alt: "Bänder, Kurzwaren und Nähzubehör im Geschäft" },
  { src: "/images/gallery-interfacing.jpg", alt: "Vlieseline und Einlagen auf Meterware" },
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
          {photos.map(({ src, alt }, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-xl bg-fru-peach/15"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
