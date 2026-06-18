import Footer from "@/components/layout/Footer";
import HomeLoader from "@/components/home/HomeLoader";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import PlaygroundPreviewSection from "@/components/home/PlaygroundPreviewSection";
import ToolStackSection from "@/components/home/ToolStackSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <>
      <HomeLoader />
      <HeroSection />
      <FeaturedProjectsSection />
      <PlaygroundPreviewSection />
      <ToolStackSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
