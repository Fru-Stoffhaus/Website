import { setRequestLocale } from "next-intl/server";
import AnnouncementBanner from "@/components/ui/AnnouncementBanner";
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
      <AnnouncementBanner />
      <HeroSection />
      <OpeningHours />
      <ContactSection />
      <AboutSection />
      <GallerySection />
      <SocialButtons />
      <LocalBusinessJsonLd />
    </>
  );
}
