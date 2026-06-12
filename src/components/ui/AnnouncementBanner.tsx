import { getLocale } from "next-intl/server";
import { getBanner } from "@/lib/banner";
import { ZigzagLine } from "@/components/ui/DecorativePatterns";

// Purple announcement banner shown at the very top of the site.
// Renders nothing when the current locale's message is empty.
export default async function AnnouncementBanner() {
  const locale = await getLocale();
  const banner = await getBanner();
  const text = (locale === "en" ? banner.en : banner.de).trim();

  if (!text) return null;

  return (
    <div className="relative bg-fru-purple text-white py-3 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <p className="font-heading font-bold text-sm sm:text-base tracking-wide whitespace-pre-line">
          {text}
        </p>
      </div>
      <ZigzagLine className="absolute bottom-0 left-0 w-full h-3 text-white/15" />
    </div>
  );
}
