import Footer from "@/components/layout/Footer";
import HomeLoader from "@/components/home/HomeLoader";
import HeroSection from "@/components/home/HeroSection";
import HomeMarquee from "@/components/home/HomeMarquee";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import ProofBand from "@/components/home/ProofBand";
import PlaygroundPreviewSection from "@/components/home/PlaygroundPreviewSection";
import ToolStackSection from "@/components/home/ToolStackSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <>
      <HomeLoader />
      <HeroSection />
      <HomeMarquee />
      <FeaturedProjectsSection />
      <ProofBand />
      <PlaygroundPreviewSection />
      <ToolStackSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
