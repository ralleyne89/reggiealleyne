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
  Layers,
  Monitor,
  ArrowUpRight,
  ChevronRight,
  Mail,
  Star,
  User,
  CalendarDays,
  BookOpen,
  Award,
  Briefcase,
  Coffee,
  PenTool,
  Lightbulb,
  Rocket,
  Target,
  Users,
  Pen,
  FileSpreadsheet,
  Layout,
  Smartphone,
  Database,
  Zap,
  Flag,
  ArrowUp,
  MessageSquare,
  Search,
  Repeat,
} from "lucide-react";
import ServiceCard from "@/components/home/ServiceCard";
import ProjectCard from "@/components/home/ProjectCard";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import DesignPrinciples from "@/components/home/DesignPrinciples";

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

  const techNoirProject = projects?.find((project) => project.id === 3);
  const tutorDProject = projects?.find((project) => project.id === 2);

  const services = [
    {
      title: "Design-to-Code Fluency",
      description:
        "I speak both languages fluently—translating complex UX challenges into clean, maintainable code without the usual handoff headaches",
      icon: <Code className="text-primary" size={20} />,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "Healthcare UX Expertise",
      description:
        "Crafting interfaces that make complex medical data accessible to both clinicians and patients—where clarity isn't just nice, it's critical",
      icon: <PenTool className="text-primary" size={20} />,
      image:
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "Education-Focused Design",
      description:
        "Building learning tools that actually work in real classrooms—where teacher time is precious and student engagement is everything",
      icon: <Lightbulb className="text-primary" size={20} />,
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "Rapid Prototyping",
      description:
        "Turning abstract ideas into testable prototypes in days, not weeks—because seeing beats explaining every time",
      icon: <Zap className="text-primary" size={20} />,
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Design Systems Architecture",
      description:
        "Building component libraries that scale with your product—where developers actually want to use what designers create",
      icon: <Layers className="text-primary" size={20} />,
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "User-Centered Process",
      description:
        "Leading research-driven design that starts with real people, not assumptions—because the best solutions come from understanding the problem first",
      icon: <Users className="text-primary" size={20} />,
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop",
    },
  ];

  const skills = [
    { name: "UI Design", icon: <Pen className="h-6 w-6 text-primary" /> },
    { name: "UX Research", icon: <Users className="h-6 w-6 text-primary" /> },
    {
      name: "Prototyping",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
    },
    { name: "Frontend Dev", icon: <Code className="h-6 w-6 text-primary" /> },
    {
      name: "Design Systems",
      icon: <Layout className="h-6 w-6 text-primary" />,
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
                  className="bg-secondary border border-secondary-light text-text-light px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:border-primary transition-colors duration-300"
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
              <div className="bg-secondary/50 backdrop-blur-md rounded-3xl p-4 border border-white/5 shadow-xl">
                <div className="relative rounded-2xl overflow-hidden w-full h-[400px]">
                  <img
                    src="/lovable-uploads/1686931266900.jpeg"
                    alt="Reggie Alleyne"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
                </div>

                <div className="mt-4 px-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-text-light font-heading font-semibold text-lg">
                        Reggie Alleyne
                      </h3>
                      <p className="text-primary text-sm">Principal Designer</p>
                    </div>

                    <div className="flex gap-2">
                      <span className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5">
                        <div className="relative">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                          <div className="absolute inset-0 w-1.5 h-1.5 rounded-full border border-green-500 animate-ping"></div>
                        </div>
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </div>

          <motion.div
            className="mt-16 md:mt-24 grid grid-cols-2 sm:grid-cols-3 gap-6 md:grid-cols-5 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">
                10+
              </div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>

            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">
                100+
              </div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>

            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">
                30+
              </div>
              <div className="text-gray-400 text-sm">UI/UX Solutions</div>
            </div>

            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">
                12+
              </div>
              <div className="text-gray-400 text-sm">Design Tools</div>
            </div>

            <div className="hidden sm:block bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">
                25+
              </div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
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

      <section id="services" className="py-20 bg-secondary-dark relative">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold text-text-light mb-4 reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              How I <span className="text-primary">Work</span>
            </motion.h2>

            <motion.p
              className="text-text-muted reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              As a Principal Designer who codes, I bridge the gap between design
              and development— creating solutions that look great, work
              flawlessly, and actually ship on time.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                index={index}
              />
            ))}
          </div>

          <div className="mt-20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-lg mr-3">
                    <Search className="text-primary h-6 w-6" />
                  </span>
                  My Process
                </h3>
                <div className="space-y-6">
                  <div className="bg-secondary p-4 rounded-xl border border-gray-800">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <h4 className="text-white font-medium">
                        Research & Discovery
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm pl-11">
                      I dig deep to understand the real problem before jumping
                      to solutions—talking to users, analyzing data, and mapping
                      out the technical landscape.
                    </p>
                  </div>

                  <div className="bg-secondary p-4 rounded-xl border border-gray-800">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <h4 className="text-white font-medium">
                        Design & Prototype
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm pl-11">
                      I create high-fidelity designs and working prototypes that
                      let stakeholders experience the solution before a single
                      line of production code is written.
                    </p>
                  </div>

                  <div className="bg-secondary p-4 rounded-xl border border-gray-800">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <h4 className="text-white font-medium">
                        Build & Implement
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm pl-11">
                      I bridge the design-development gap by writing clean,
                      component-based code that brings designs to life exactly
                      as intended—no translation loss.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-lg mr-3">
                    <Target className="text-primary h-6 w-6" />
                  </span>
                  My Approach
                </h3>
                <div className="space-y-4">
                  <div className="bg-secondary p-4 rounded-xl border border-gray-800">
                    <p className="text-white">
                      <span className="text-primary font-bold">
                        User-Centered:
                      </span>{" "}
                      Every decision starts with the people who'll actually use
                      the product—their needs drive everything.
                    </p>
                  </div>

                  <div className="bg-secondary p-4 rounded-xl border border-gray-800">
                    <p className="text-white">
                      <span className="text-primary font-bold">
                        Data-Informed:
                      </span>{" "}
                      I balance intuition with analytics, using real-world
                      metrics to validate design decisions and measure success.
                    </p>
                  </div>

                  <div className="bg-secondary p-4 rounded-xl border border-gray-800">
                    <p className="text-white">
                      <span className="text-primary font-bold">
                        Systems Thinking:
                      </span>{" "}
                      I build scalable design systems and component libraries
                      that grow with your product and maintain consistency.
                    </p>
                  </div>

                  <div className="bg-secondary p-4 rounded-xl border border-gray-800">
                    <p className="text-white">
                      <span className="text-primary font-bold">
                        Accessibility First:
                      </span>{" "}
                      I design for everyone—ensuring products work for people of
                      all abilities because inclusive design is just good
                      design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Featured <span className="text-primary">Works</span>
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
                <div key={n} className="bg-secondary rounded-3xl h-72"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects?.slice(0, 6).map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  slug={project.slug || project.id.toString()}
                  tags={project.tags}
                  featured={project.id === 3}
                  index={index}
                />
              ))}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-light mb-4">
                <span className="text-primary">Technical</span> skills that set
                me apart
              </h2>

              <p className="text-text-muted mb-8">
                My dual expertise in design and development allows me to create
                solutions that are both visually compelling and technically
                sound. Here are the key skills I bring to every project:
              </p>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-secondary p-4 rounded-xl flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="text-text-light font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <DesignPrinciples />
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
                    <User className="text-primary" size={18} />
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
