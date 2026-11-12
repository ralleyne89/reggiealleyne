import Footer from "@/components/layout/Footer";
import HomeLoader from "@/components/home/HomeLoader";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import PlaygroundPreviewSection from "@/components/home/PlaygroundPreviewSection";
import StatementSection from "@/components/home/StatementSection";
import ContactSection from "@/components/home/ContactSection";
import { HOME_ROUTE_META } from "@/config/routeMeta";
import { usePageMeta } from "@/lib/pageMeta";

const Index = () => {
  usePageMeta(HOME_ROUTE_META);

  return (
    <>
      <HomeLoader />
      <main>
        <HeroSection />
        <FeaturedProjectsSection />
        <StatementSection />
        <PlaygroundPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
