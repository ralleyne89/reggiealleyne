
import React, { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllProjects } from '@/services/api';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Palette, Layout, Monitor, ArrowUpRight, ChevronRight, Mail, Star, User, CalendarDays, BookOpen, Award } from 'lucide-react';
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

const Index = () => {
  const navigate = useNavigate();
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
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
  
  // Service data
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences with a focus on usability and visual appeal",
      icon: <Palette className="text-primary" size={20} />,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Frontend Development",
      description: "Building responsive and performant user interfaces using modern web technologies",
      icon: <Code className="text-primary" size={20} />,
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Prototyping",
      description: "Bringing ideas to life with interactive prototypes to validate concepts before development",
      icon: <Layout className="text-primary" size={20} />,
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2000&auto=format&fit=crop"
    }
  ];
  
  // Skills data
  const skills = [
    { name: "UI Design", image: "/lovable-uploads/1e5262b7-f4b4-42b2-a5b8-75ae974c6893.png" },
    { name: "UX Research", image: "/lovable-uploads/abd0fcfb-d3c7-4ea0-9f8c-05c8cf2759e9.png" },
    { name: "Prototyping", image: "/lovable-uploads/d2647713-1d34-4235-8a9a-0e0b5b3645bd.png" },
    { name: "Frontend Dev", image: "/lovable-uploads/430a2d53-8e58-4b70-8af0-4055ce165684.png" },
    { name: "Design Systems", image: "/lovable-uploads/748d7e06-f545-44ba-842c-6401bf2284d1.png" }
  ];
  
  // Education data
  const education = [
    {
      year: "2013",
      title: "Bachelor of Arts in Digital Media",
      school: "Art Institute of Los Angeles",
      description: "Studied UX/UI design principles, interaction design, and frontend development"
    },
    {
      year: "2015",
      title: "UX Design Certification",
      school: "Interaction Design Foundation",
      description: "Advanced certification in user experience design methodologies"
    },
    {
      year: "2018",
      title: "Frontend Development",
      school: "Udemy",
      description: "Mastered React.js, TypeScript, and modern frontend technologies"
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Reggie's design work transformed our product. The UI is now intuitive, visually appealing, and our user engagement metrics have improved by 45%.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Working with Reggie was a game-changer for our startup. He understood our vision and delivered a design that exceeded our expectations.",
      rating: 5
    },
    {
      name: "Amanda Lopez",
      role: "Marketing Director",
      company: "CreativeAgency",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      text: "Reggie is not just a designer but a strategic partner. His insights helped us create a product that truly resonates with our target audience.",
      rating: 4.5
    }
  ];
  
  // Blog posts data
  const blogPosts = [
    {
      title: "UX Case Study: Redesigning the Health at Home Experience",
      excerpt: "An in-depth look at how I improved user engagement and satisfaction for a healthcare app",
      image: "/lovable-uploads/d2ac6921-78b3-46b5-bbb2-7022018530ad.png",
      date: "Apr 15, 2023",
      category: "UX Design"
    },
    {
      title: "Why Thoughtful Micro-interactions Matter",
      excerpt: "Exploring how small interactive details can have a big impact on user experience",
      image: "/lovable-uploads/cb582645-1a6e-4846-8a2e-72b2dffd49a8.png",
      date: "Mar 22, 2023",
      category: "UI Design"
    },
    {
      title: "From Sketch to Production: A Design System Journey",
      excerpt: "How I created a scalable design system that improved development efficiency by 40%",
      image: "/lovable-uploads/b9b62216-4a0c-4367-bdab-32f608350015.png",
      date: "Feb 10, 2023",
      category: "Design Systems"
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
                  <br />UI/UX Designer
                </h1>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
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
            {/* Stats items */}
            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">10+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            
            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">50+</div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
            
            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">30+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            
            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">12+</div>
              <div className="text-gray-400 text-sm">Design Tools</div>
            </div>
            
            <div className="hidden sm:block bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5">
              <div className="text-3xl font-heading font-bold text-white mb-1">4.9</div>
              <div className="text-gray-400 text-sm">Client Rating</div>
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
              {blogPosts.map((post, index) => (
                <motion.div 
                  key={index}
                  className={`bg-secondary rounded-xl overflow-hidden ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-2 left-2 bg-primary/80 text-white text-xs px-2 py-1 rounded">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-gray-400 text-xs mb-2">{post.date}</div>
                    <h3 className="text-white font-medium mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    {index === 0 && (
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    )}
                    <a href="#" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline">
                      Read More
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
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Happy <span className="text-primary">Clients Say</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Feedback from clients I've had the pleasure of working with on various projects.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-secondary rounded-3xl p-6 relative overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-2 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-600'} ${i === Math.floor(testimonial.rating) && testimonial.rating % 1 > 0 ? 'fill-yellow-400 fill-[50%]' : ''}`}
                      fill={i < Math.floor(testimonial.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 text-sm italic">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section id="blog" className="py-20 bg-secondary-dark relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="md:max-w-xl"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center md:text-left">
                Latest <span className="text-primary">Blog Update</span>
              </h2>
              <p className="text-gray-400 text-center md:text-left">
                I share my thoughts and insights on design, development, and industry trends.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-primary font-medium animated-underline mt-4 md:mt-0"
              >
                View All Posts
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div 
                key={index}
                className="bg-secondary rounded-3xl overflow-hidden relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
                  
                  <motion.div
                    className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center">
                      <CalendarDays size={12} className="mr-1" />
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-heading font-semibold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary text-sm font-medium relative overflow-hidden animated-underline"
                  >
                    Read Full Article
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary-dark relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Let's <span className="text-primary">Connect</span> there
              </h2>
              
              <p className="text-gray-400 mb-8">
                Have a project in mind or just want to chat about design? I'm always open to discussing new ideas and opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <a href="mailto:reggiealleyne89@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                      reggiealleyne89@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <User className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Social Media</h3>
                    <div className="flex gap-3 mt-2">
                      <a href="https://linkedin.com/in/reggiealleyne" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <motion.div whileHover={{ y: -3 }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </motion.div>
                      </a>
                      
                      <a href="https://github.com/ralleyne89" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <motion.div whileHover={{ y: -3 }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </motion.div>
                      </a>
                      
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <motion.div whileHover={{ y: -3 }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </motion.div>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Monitor className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Portfolio</h3>
                    <a href="/works" className="text-gray-400 hover:text-primary transition-colors">
                      Check out my latest work
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-secondary rounded-3xl p-6 md:p-8 border border-white/5"
            >
              <h3 className="text-2xl font-heading font-semibold text-white mb-6">Send me a message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-secondary-light border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-secondary-light border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">Your Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-secondary-light border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
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
