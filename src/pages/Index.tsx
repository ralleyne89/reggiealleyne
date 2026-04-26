import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import PlaygroundPreviewSection from "@/components/home/PlaygroundPreviewSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <PlaygroundPreviewSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
