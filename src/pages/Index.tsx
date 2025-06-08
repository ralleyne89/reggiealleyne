import { useEffect } from "react";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SkillsSection from "@/components/home/SkillsSection";
import AboutSection from "@/components/home/AboutSection";
import EducationSection from "@/components/home/EducationSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const revealElements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Initial check

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <TestimonialsSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
