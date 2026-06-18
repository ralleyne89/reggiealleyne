import Footer from "@/components/layout/Footer";
import HomeLoader from "@/components/home/HomeLoader";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <>
      <HomeLoader />
      <HeroSection />
      <FeaturedProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
