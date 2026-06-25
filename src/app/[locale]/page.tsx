import { setRequestLocale } from "next-intl/server";
import AnnouncementBanner from "@/components/ui/AnnouncementBanner";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import OpeningHours from "@/components/home/OpeningHours";
import SortimentSection from "@/components/home/SortimentSection";
import GallerySection from "@/components/home/GallerySection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import SocialButtons from "@/components/home/SocialButtons";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

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
      <SortimentSection />
      <GallerySection />
      <FAQSection />
      <SocialButtons />
      <LocalBusinessJsonLd />
      <FaqJsonLd />
    </>
  );
}
