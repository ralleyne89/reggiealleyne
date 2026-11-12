import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import PlaygroundPreviewSection from "@/components/home/PlaygroundPreviewSection";
import ToolStackSection from "@/components/home/ToolStackSection";
import ContactSection from "@/components/home/ContactSection";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const Index = () => {
  usePageMetadata("/");
  return (
    <>
      <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <FeaturedProjectsSection />
      <PlaygroundPreviewSection />
      <ToolStackSection />
      <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
