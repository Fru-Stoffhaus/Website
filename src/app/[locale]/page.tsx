import { setRequestLocale } from "next-intl/server";
import GrandOpeningBanner from "@/components/ui/GrandOpeningBanner";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import OpeningHours from "@/components/home/OpeningHours";
import GallerySection from "@/components/home/GallerySection";
import ContactSection from "@/components/home/ContactSection";
import SocialButtons from "@/components/home/SocialButtons";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <GrandOpeningBanner />
      <HeroSection />
      <AboutSection />
      <OpeningHours />
      <GallerySection />
      <ContactSection />
      <SocialButtons />
      <LocalBusinessJsonLd />
    </>
  );
}
