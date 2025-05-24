import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "@/services/api";
import { Link, useNavigate } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Code,
  Palette,
  Mail,
  BookOpen,
  Target,
  Users,
  Pen,
  Layout,
  Smartphone,
  Zap,
  Search,
  Repeat,
  Heart,
  Shield,
  Sparkles,
  Brain,
  Workflow,
  Lightbulb,
  Gamepad2,
  Coffee,
} from "lucide-react";
import ProjectCard from "@/components/home/ProjectCard";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.95 },
};

const Index = () => {
  const navigate = useNavigate();
  const targetRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.9], [0, 100]);

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

  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      try {
        console.log("Fetching all projects from Index page");
        return await getAllProjects();
      } catch (err) {
        console.error("Error fetching projects from Index:", err);
        return []; // Return empty array to prevent UI crashes
      }
    },
    retry: 1,
  });

  // Comprehensive Skills Data
  const expertiseSkills = [
    {
      name: "UI/UX Design",
      icon: <Pen className="h-6 w-6 text-primary" />,
      description:
        "Creating intuitive interfaces with thoughtful user experiences",
    },
    {
      name: "Frontend Development",
      icon: <Code className="h-6 w-6 text-primary" />,
      description: "React, TypeScript, and modern web technologies",
    },
    {
      name: "Design Systems",
      icon: <Layout className="h-6 w-6 text-primary" />,
      description: "Scalable component libraries and design tokens",
    },
    {
      name: "Prototyping",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      description: "High-fidelity interactive prototypes and wireframes",
    },
    {
      name: "User Research",
      icon: <Users className="h-6 w-6 text-primary" />,
      description: "User interviews, usability testing, and data analysis",
    },
    {
      name: "Accessibility",
      icon: <Shield className="h-6 w-6 text-primary" />,
      description: "WCAG compliance and inclusive design practices",
    },
  ];

  const methodologySkills = [
    {
      name: "User-Centered Design",
      icon: <Users className="h-6 w-6 text-primary" />,
      description: "Prioritizing user needs throughout the design process",
    },
    {
      name: "Design Thinking",
      icon: <Brain className="h-6 w-6 text-primary" />,
      description: "Empathy-driven problem solving and innovation",
    },
    {
      name: "Agile Methodology",
      icon: <Workflow className="h-6 w-6 text-primary" />,
      description: "Iterative development and cross-functional collaboration",
    },
    {
      name: "Data-Driven Decisions",
      icon: <Target className="h-6 w-6 text-primary" />,
      description: "Analytics and metrics to validate design choices",
    },
  ];

  const processSteps = [
    {
      name: "Research & Discovery",
      icon: <Search className="h-6 w-6 text-primary" />,
      description: "Understanding problems before jumping to solutions",
    },
    {
      name: "Design & Prototype",
      icon: <Palette className="h-6 w-6 text-primary" />,
      description: "Creating testable solutions and user experiences",
    },
    {
      name: "Build & Implement",
      icon: <Code className="h-6 w-6 text-primary" />,
      description: "Translating designs into production-ready code",
    },
    {
      name: "Test & Iterate",
      icon: <Repeat className="h-6 w-6 text-primary" />,
      description: "Continuous improvement based on user feedback",
    },
  ];

  const uniqueExperiences = [
    {
      name: "Healthcare UX",
      icon: <Heart className="h-6 w-6 text-primary" />,
      description: "Making complex medical data accessible and trustworthy",
    },
    {
      name: "Education Technology",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      description: "Learning tools that work in real classroom environments",
    },
    {
      name: "Design-to-Code Fluency",
      icon: <Zap className="h-6 w-6 text-primary" />,
      description:
        "Bridging the gap between design vision and technical reality",
    },
    {
      name: "Rapid Prototyping",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      description: "Turning ideas into testable prototypes in days, not weeks",
    },
  ];

  // About Me Data
  const aboutMeValues = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Building AI Tools That Don't Suck",
      description:
        "I'm fascinated by AI's potential to solve real problems—not just generate more content. I want to design interfaces that make AI feel helpful, not overwhelming.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Leading Through Collaboration",
      description:
        "I believe the best ideas come from diverse perspectives. I'm the designer who asks developers 'what if we tried this?' and actually listens to the answer.",
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Solving Problems, Not Just Making Mockups",
      description:
        "I dig deep into user research, prototype rapidly, and iterate based on real feedback. Pretty designs are great, but usable ones change lives.",
    },
  ];

  const interests = [
    {
      icon: <Gamepad2 className="w-6 h-6 text-primary" />,
      title: "Gaming",
      description: "From indie gems to AAA titles",
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Anime",
      description: "Studio Ghibli to Attack on Titan",
    },
    {
      icon: <Coffee className="w-6 h-6 text-primary" />,
      title: "Sushi",
      description: "Always hunting for the best spots",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Learning",
      description: "New tools, frameworks, and techniques",
    },
  ];

  const education = [
    {
      year: "2014",
      title: "Graphic Design",
      school: "Art Institute of California – Los Angeles",
      description:
        "Studied graphic design principles, design thinking, and interaction design",
    },
    {
      year: "2016",
      title: "UX/UI Design",
      school: "General Assembly",
      description: "Certification in user experience design methodologies",
    },
    {
      year: "2020",
      title: "Fullstack Web Development",
      school: "UCLA Extension",
      description: "Comprehensive full stack web development program",
    },
  ];

  const caseStudies = [
    {
      title: "User Experience Overhaul",
      excerpt:
        "How I improved conversion rates by 35% through strategic UX improvements",
      image: "/lovable-uploads/d2ac6921-78b3-46b5-bbb2-7022018530ad.png",
      tag: "UX Optimization",
      metric: "+35% Conversion",
    },
    {
      title: "Mobile-First Approach",
      excerpt:
        "Creating responsive designs that work flawlessly across all devices",
      image: "/lovable-uploads/cb582645-1a6e-4846-8a2e-72b2dffd49a8.png",
      tag: "Responsive Design",
      metric: "4.8/5 User Rating",
    },
    {
      title: "Design System Implementation",
      excerpt:
        "How I created a scalable design system that improved development efficiency by 40%",
      image: "/lovable-uploads/b9b62216-4a0c-4367-bdab-32f608350015.png",
      tag: "Design Systems",
      metric: "40% Dev Efficiency",
    },
  ];

  const featuredClients = [
    {
      name: "TechCorp Inc.",
      logo: "https://placehold.co/100x50/333/white?text=TechCorp",
      industry: "Software",
    },
    {
      name: "HealthTrack",
      logo: "https://placehold.co/100x50/333/white?text=HealthTrack",
      industry: "Healthcare",
    },
    {
      name: "FinSolutions",
      logo: "https://placehold.co/100x50/333/white?text=FinSolutions",
      industry: "Finance",
    },
    {
      name: "MediaPulse",
      logo: "https://placehold.co/100x50/333/white?text=MediaPulse",
      industry: "Media",
    },
    {
      name: "EduLearn",
      logo: "https://placehold.co/100x50/333/white?text=EduLearn",
      industry: "Education",
    },
    {
      name: "RetailNow",
      logo: "https://placehold.co/100x50/333/white?text=RetailNow",
      industry: "Retail",
    },
  ];

  const handleProjectClick = (project) => {
    if (!project) return;

    if (project.slug) {
      navigate(`/project/${project.slug}`);
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  const handleContactFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const nameInput = formElement.elements.namedItem(
      "name"
    ) as HTMLInputElement;
    const emailInput = formElement.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const messageInput = formElement.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;

    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: formData,
        }
      );

      if (error) throw error;

      toast.success("Message sent! I'll get back to you as soon as possible.");
      formElement.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        ref={targetRef}
        className="min-h-screen w-full pt-28 pb-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #111827, #0F172A)",
        }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

        <motion.div
          className="container mx-auto px-4 relative z-10"
          style={{ opacity, scale, y }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-text-light">
                  I'm <span className="text-primary">Reggie Alleyne</span>,
                  <br />
                  <span className="text-text-light">
                    Principal Designer who{" "}
                    <span className="text-primary">codes</span>
                  </span>
                </h1>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-text-muted text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 mt-6"
              >
                Bridging the gap between vision and execution in the Tech world
                for over a decade.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#projects"
                  className="bg-gradient-to-r from-primary to-primary-dark text-text-light px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 shadow-lg shadow-primary/20"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  View My Work
                  <ArrowRight size={18} />
                </motion.a>

                <motion.a
                  href="#contact"
                  className="bg-transparent border border-gray-600 text-text-light px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:border-primary transition-colors duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative mx-auto max-w-sm lg:max-w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main Profile Container */}
              <div className="relative">
                {/* Profile Image with Modern Frame */}
                <div className="relative rounded-3xl overflow-hidden w-full h-[400px] border border-white/10 shadow-2xl">
                  <img
                    src="/lovable-uploads/1686931266900.jpeg"
                    alt="Reggie Alleyne - Principal Designer"
                    className="w-full h-full object-cover"
                  />

                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Floating Status Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded-full px-3 py-2 border border-white/20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <div className="absolute inset-0 w-2 h-2 rounded-full border border-green-400 animate-ping"></div>
                      </div>
                      <span className="text-white text-xs font-medium">
                        Available for work
                      </span>
                    </div>
                  </motion.div>

                  {/* Location Badge */}
                  <motion.div
                    className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md rounded-full px-3 py-2 border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    <span className="text-white text-xs font-medium">
                      📍 Los Angeles, CA
                    </span>
                  </motion.div>

                  {/* Interactive Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center"
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="text-white text-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-sm font-medium mb-1">
                        Let's create something amazing
                      </div>
                      <div className="text-xs opacity-80">Hover to connect</div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Floating Design Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/30 rounded-full blur-lg"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 10, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                />

                {/* Geometric Accent */}
                <motion.div
                  className="absolute top-1/2 -left-8 w-3 h-3 bg-primary rounded-full"
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 md:mt-24 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-2xl">
              <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                <div className="text-3xl font-heading font-bold text-white mb-1">
                  100+
                </div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>

              <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                <div className="text-3xl font-heading font-bold text-white mb-1">
                  25+
                </div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>

              <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                <div className="text-3xl font-heading font-bold text-white mb-1">
                  10+
                </div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="text-gray-400 text-sm mb-2">Scroll Down</div>
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-1">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      <section id="projects" className="py-20 bg-secondary-dark relative">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold text-text-light mb-4 reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Featured <span className="text-primary">Work</span>
            </motion.h2>

            <motion.p
              className="text-text-muted reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Browse through my carefully crafted projects showcasing my passion
              for creating beautiful and functional digital experiences.
            </motion.p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-secondary rounded-3xl h-80"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(() => {
                // Filter for only the 3 specific projects: Symptom Checker (9), CLLCTVE (1), Tutor D (2)
                const featuredProjectIds = [9, 1, 2]; // Symptom Checker, CLLCTVE, Tutor D
                const featuredProjects = featuredProjectIds
                  .map((id) => projects?.find((project) => project.id === id))
                  .filter((project) => project !== undefined);

                return featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    slug={project.slug || project.id.toString()}
                    tags={project.tags}
                    featured={false}
                    index={index}
                  />
                ));
              })()}
            </div>
          )}

          <div className="mt-12 text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/works"
                className="inline-flex items-center gap-2 bg-secondary border border-secondary-light text-text-light px-6 py-3 rounded-full font-medium hover:border-primary transition-colors duration-300"
              >
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-secondary-dark relative">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold text-text-light mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              What I Bring to{" "}
              <span className="text-primary">Every Project</span>
            </motion.h2>

            <motion.p
              className="text-text-muted"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              As a Principal Designer who codes, I combine deep expertise,
              proven methodologies, streamlined processes, and specialized
              experience to deliver solutions that work.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Expertise Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Zap className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">
                  Core Expertise
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {expertiseSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-secondary p-4 rounded-xl border border-gray-800 hover:border-primary/20 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Methodology Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Brain className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">
                  Methodology
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {methodologySkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-secondary p-4 rounded-xl border border-gray-800 hover:border-primary/20 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Process Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Workflow className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">
                  My Process
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="bg-secondary p-4 rounded-xl border border-gray-800 hover:border-primary/20 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">
                          {step.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Unique Experiences Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Sparkles className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">
                  Unique Digital Experiences
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {uniqueExperiences.map((experience, index) => (
                  <motion.div
                    key={index}
                    className="bg-secondary p-4 rounded-xl border border-gray-800 hover:border-primary/20 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {experience.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">
                          {experience.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Hey, I'm <span className="text-primary">Reggie</span>.
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Nice to meet you.
              </p>
            </motion.div>

            {/* About Content */}
            <motion.div
              className="space-y-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a{" "}
                <span className="text-primary font-semibold">
                  Principal UX/UI Designer
                </span>{" "}
                who codes—because sometimes the best way to solve a design
                problem is to build it yourself. With 10+ years of experience
                turning complex problems into delightful user experiences, I've
                learned that great design isn't just about making things pretty
                (though I do love a good color palette).
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Born and raised in LA, I'm a family man who believes the best
                solutions come from understanding people—whether that's users
                struggling with healthcare navigation or teammates trying to
                ship features on deadline. I've spent my career in{" "}
                <span className="text-primary">Education and Healthcare</span>,
                building tools that actually matter to people's lives.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                But here's the thing—I'm dreaming bigger. I want to design for
                the industries that first made me fall in love with great
                experiences:{" "}
                <span className="text-primary font-semibold">
                  gaming and anime
                </span>
                . There's something magical about creating worlds and characters
                that people connect with emotionally. Plus, who wouldn't want
                their work to involve more mechs and fewer medical forms?
              </p>
            </motion.div>

            {/* What I'm About */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">
                What I'm About
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aboutMeValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-secondary-dark p-6 rounded-xl border border-gray-800 hover:border-primary/20 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          {value.title}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">
                When I'm Not Designing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="bg-secondary-dark p-6 rounded-xl border border-gray-800 hover:border-primary/20 transition-colors text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      {interest.icon}
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      {interest.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {interest.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What I'm Looking For */}
            <motion.div
              className="bg-secondary-dark rounded-xl p-8 border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-6 text-center">
                What I'm Looking For
              </h3>

              <div className="space-y-4 max-w-3xl mx-auto">
                <p className="text-gray-300 leading-relaxed">
                  I want to join a team that's{" "}
                  <span className="text-primary font-semibold">
                    building something meaningful
                  </span>
                  —whether that's the next great gaming experience, an AI tool
                  that actually helps people, or a platform that brings
                  communities together.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  I thrive in environments where{" "}
                  <span className="text-primary">collaboration beats ego</span>,
                  where we ship fast but think deeply, and where "that's how
                  we've always done it" isn't a valid argument. Give me complex
                  problems, tight deadlines, and a team that's not afraid to
                  experiment.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Bonus points if you're in{" "}
                  <span className="text-primary font-semibold">
                    gaming, entertainment, or AI
                  </span>
                  . Double bonus if you have a good coffee machine and don't
                  mind the occasional anime reference in Slack.
                </p>
              </div>

              <div className="text-center mt-8">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Build Something Great
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-secondary-dark relative">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold text-text-light mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              My <span className="text-primary">Experience</span>
            </motion.h2>

            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              My educational background and training that have shaped my design
              and development skills.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="bg-secondary rounded-3xl p-6 relative overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full inline-block mb-4">
                  {item.year}
                </div>

                <h3 className="text-xl font-heading font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-primary mb-3 text-sm">{item.school}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>

                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary-dark relative">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Get in <span className="text-primary">Touch</span>
            </motion.h2>

            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Have a project in mind or want to discuss potential
              collaborations? I'd love to hear from you!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-secondary rounded-xl p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-heading font-semibold text-white mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:reggiealleyne89@gmail.com"
                      className="text-white hover:text-primary transition-colors"
                    >
                      reggiealleyne89@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Social</p>
                    <div className="flex gap-3 mt-1">
                      <a
                        href="https://github.com/ralleyne89"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/reggiealleyne"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <form onSubmit={handleContactFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-white block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-white block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-white block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-lg font-medium shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-shadow"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
