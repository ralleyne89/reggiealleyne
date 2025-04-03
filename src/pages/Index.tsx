import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllProjects } from '@/services/api';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Code, Palette, Layout, Monitor, ArrowUpRight, ChevronRight, Mail, 
  Star, User, CalendarDays, BookOpen, Award, Briefcase, Coffee, PenTool,
  Lightbulb, Rocket, Target, Users
} from 'lucide-react';
import ServiceCard from '@/components/home/ServiceCard';
import ProjectCard from '@/components/home/ProjectCard';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const buttonVariants = {
  hover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.95 }
};

const roleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

const Index = () => {
  const navigate = useNavigate();
  const targetRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["UI/UX Designer", "Frontend Developer", "Graphic Designer"];
  
  // Role text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  // Further adjusted to make the effect happen even later
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.9], [0, 100]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Initialize scroll reveal effect
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      try {
        console.log('Fetching all projects from Index page');
        return await getAllProjects();
      } catch (err) {
        console.error('Error fetching projects from Index:', err);
        return []; // Return empty array to prevent UI crashes
      }
    },
    retry: 1
  });

  // Find the TECH NOIR project for the featured spot
  const techNoirProject = projects?.find(project => project.id === 3);
  const tutorDProject = projects?.find(project => project.id === 2);
  
  // Service data with updated images
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences with a focus on usability and visual appeal",
      icon: <PenTool className="text-primary" size={20} />,
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Frontend Development",
      description: "Building responsive and performant user interfaces using modern web technologies",
      icon: <Code className="text-primary" size={20} />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Prototyping",
      description: "Bringing ideas to life with interactive prototypes to validate concepts before development",
      icon: <Lightbulb className="text-primary" size={20} />,
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2000&auto=format&fit=crop"
    }
  ];
  
  // Skills data with updated icons
  const skills = [
    { name: "UI Design", image: "/lovable-uploads/1e5262b7-f4b4-42b2-a5b8-75ae974c6893.png" },
    { name: "UX Research", image: "/lovable-uploads/abd0fcfb-d3c7-4ea0-9f8c-05c8cf2759e9.png" },
    { name: "Prototyping", image: "/lovable-uploads/d2647713-1d34-4235-8a9a-0e0b5b3645bd.png" },
    { name: "Frontend Dev", image: "/lovable-uploads/430a2d53-8e58-4b70-8af0-4055ce165684.png" },
    { name: "Design Systems", image: "/lovable-uploads/748d7e06-f545-44ba-842c-6401bf2284d1.png" }
  ];
  
  // Education data - Updated with correct information
  const education = [
    {
      year: "2014",
      title: "Bachelor of Arts in Graphic Design",
      school: "Art Institute of Los Angeles",
      description: "Studied UX/UI design principles, interaction design, and frontend development"
    },
    {
      year: "2016",
      title: "UX Design Certification",
      school: "General Assembly",
      description: "Advanced certification in user experience design methodologies"
    },
    {
      year: "2018",
      title: "Fullstack Web Development",
      school: "UCLA Extension",
      description: "Mastered React.js, TypeScript, and modern frontend technologies"
    }
  ];
  
  // Testimonials data updated with professionals instead of clients
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Design Director",
      company: "TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Reggie's design work is exceptional. His ability to translate complex requirements into intuitive interfaces made our product stand out.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Project Lead",
      company: "InnovateLab",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Working with Reggie was a pleasure. His technical skills and eye for design created a seamless development experience for our team.",
      rating: 5
    },
    {
      name: "Amanda Lopez",
      role: "Senior Engineer",
      company: "CreativeAgency",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      text: "Reggie is an excellent collaborator. His designs are not just beautiful but also highly implementable from an engineering perspective.",
      rating: 4.5
    }
  ];
  
  // Project case studies - Replacing blog posts
  const caseStudies = [
    {
      title: "User Experience Overhaul",
      excerpt: "How I improved conversion rates by 35% through strategic UX improvements",
      image: "/lovable-uploads/d2ac6921-78b3-46b5-bbb2-7022018530ad.png",
      tag: "UX Optimization",
      metric: "+35% Conversion"
    },
    {
      title: "Mobile-First Approach",
      excerpt: "Creating responsive designs that work flawlessly across all devices",
      image: "/lovable-uploads/cb582645-1a6e-4846-8a2e-72b2dffd49a8.png",
      tag: "Responsive Design",
      metric: "4.8/5 User Rating"
    },
    {
      title: "Design System Implementation",
      excerpt: "How I created a scalable design system that improved development efficiency by 40%",
      image: "/lovable-uploads/b9b62216-4a0c-4367-bdab-32f608350015.png",
      tag: "Design Systems",
      metric: "40% Dev Efficiency"
    }
  ];

  // Featured clients - Another section to replace blog content
  const featuredClients = [
    {
      name: "TechCorp Inc.",
      logo: "https://placehold.co/100x50/333/white?text=TechCorp",
      industry: "Software"
    },
    {
      name: "HealthTrack",
      logo: "https://placehold.co/100x50/333/white?text=HealthTrack",
      industry: "Healthcare"
    },
    {
      name: "FinSolutions",
      logo: "https://placehold.co/100x50/333/white?text=FinSolutions",
      industry: "Finance"
    },
    {
      name: "MediaPulse",
      logo: "https://placehold.co/100x50/333/white?text=MediaPulse",
      industry: "Media"
    },
    {
      name: "EduLearn",
      logo: "https://placehold.co/100x50/333/white?text=EduLearn",
      industry: "Education"
    },
    {
      name: "RetailNow",
      logo: "https://placehold.co/100x50/333/white?text=RetailNow",
      industry: "Retail"
    }
  ];

  const handleProjectClick = (project) => {
    if (!project) return;
    
    if (project.slug) {
      navigate(`/project/${project.slug}`);
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  const handleSubmitContactForm = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });
      
      if (error) throw error;

      toast.success("Email sent! I'll get back to you as soon as possible.");
      e.target.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Failed to send email. Please try again later.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        ref={targetRef}
        className="min-h-screen w-full pt-28 pb-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #161623, #0c0c14)"
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-white">
                  I'm <span className="text-primary">Reggie Alleyne</span>, 
                  <br />
                  <span className="h-[50px] md:h-[60px] lg:h-[70px] inline-flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={roleIndex}
                        variants={roleVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="inline-block"
                      >
                        {roles[roleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </h1>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 mt-6"
              >
                I transform complex problems into intuitive experiences that drive business growth and delight users.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#projects"
                  className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 shadow-lg shadow-primary/20"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  View My Work
                  <ArrowRight size={18} />
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="bg-secondary border border-gray-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:border-primary transition-colors duration-300"
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
                  
                  <motion.div
                    className="absolute bottom-6 right-6 bg-primary rounded-full p-4 cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowUpRight size={24} className="text-white" />
                  </motion.div>
                </div>
                
                <div className="mt-4 px-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-heading font-semibold text-lg">Reggie Alleyne</h3>
                      <p className="text-primary text-sm">UI/UX Designer</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <span className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full">
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
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
            {/* Updated Stats items */}
            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">10+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            
            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">100+</div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
            
            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">40+</div>
              <div className="text-gray-400 text-sm">UI/UX Solutions</div>
            </div>
            
            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">12+</div>
              <div className="text-gray-400 text-sm">Design Tools</div>
            </div>
            
            <div className="hidden sm:block bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">25+</div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
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
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary-dark relative">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              My <span className="text-primary">Expertise</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Innovative solutions tailored to meet your design and development needs, with a focus on creating exceptional user experiences.
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
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-secondary-dark relative">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Featured <span className="text-primary">Works</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Browse through my carefully crafted projects showcasing my passion for creating beautiful and functional digital experiences.
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
                  featured={project.id === 3} // TECH NOIR is featured
                  index={index}
                />
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/works" 
                className="inline-flex items-center gap-2 bg-secondary border border-gray-700 text-white px-6 py-3 rounded-full font-medium hover:border-primary transition-colors duration-300"
              >
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary-dark relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Beautiful and <span className="text-primary">unique digital</span> experiences
              </h2>
              
              <p className="text-gray-400 mb-8">
                I specialize in creating engaging user interfaces and experiences that not only look great but also perform exceptionally well. My goal is to craft digital solutions that help businesses connect with their users in meaningful ways.
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
                      <img src={skill.image} alt={skill.name} className="w-6 h-6" />
                    </div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {caseStudies.map((study, index) => (
                <motion.div 
                  key={index}
                  className={`bg-secondary rounded-xl overflow-hidden ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-2 left-2 bg-primary/80 text-white text-xs px-2 py-1 rounded">
                      {study.tag}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-gray-400 text-xs mb-2 flex items-center">
                      <Target size={12} className="mr-1" />
                      {study.metric}
                    </div>
                    <h3 className="text-white font-medium mb-2 line-clamp-2">
                      {study.title}
                    </h3>
                    {index === 0 && (
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{study.excerpt}</p>
                    )}
                    <a href="#" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline">
                      View Case Study
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="py-20 bg-secondary-dark relative">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
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
              My educational background and training that have shaped my design and development skills.
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
                
                <h3 className="text-xl font-heading font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-primary mb-3 text-sm">{item.school}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
                
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-secondary-dark relative">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
