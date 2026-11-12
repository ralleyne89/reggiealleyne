import Footer from "@/components/layout/Footer";
import HomeLoader from "@/components/home/HomeLoader";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import PlaygroundPreviewSection from "@/components/home/PlaygroundPreviewSection";
import StatementSection from "@/components/home/StatementSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <>
      <HomeLoader />
      <HeroSection />
      <FeaturedProjectsSection />
      <StatementSection />
      <PlaygroundPreviewSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
