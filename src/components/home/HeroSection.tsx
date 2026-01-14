import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {
    opacity: 0,
  },
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
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.9], [0, 100]);

  return (
    <motion.div
      ref={targetRef}
      className="h-screen max-h-screen w-full pt-28 relative overflow-hidden bg-white flex flex-col justify-center"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10 flex-1 flex flex-col justify-center"
        style={{
          opacity,
          scale,
          y,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <p className="text-primary font-medium text-sm md:text-base tracking-wide uppercase mb-3">
                Product Designer & Creative Technologist
              </p>
              <h1 className="font-display text-display-xl font-bold leading-tight text-gray-900">
                <span className="text-primary">Reggie Alleyne</span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-body-lg mb-4 max-w-xl mx-auto lg:mx-0 mt-4 leading-relaxed"
            >
              Building adaptive AI systems and scalable interfaces that bridge the gap between human intent and machine logic.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-gray-500 text-body-sm mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Specializing in <span className="text-primary font-medium">0→1 Product Architecture</span>, <span className="text-primary font-medium">Design Systems</span>, and <span className="text-primary font-medium">React Prototyping</span>.
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
                className="bg-transparent border border-gray-300 text-gray-900 px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:border-primary transition-colors duration-300"
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
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            {/* Main Profile Container */}
            <div className="relative">
              {/* Profile Image with Modern Frame */}
              <div className="relative rounded-3xl overflow-hidden w-full h-[400px] border border-gray-200 shadow-2xl">
                <img
                  src="/images/1686931266900.jpeg"
                  alt="Reggie Alleyne - UI/UX Designer"
                  className="w-full h-full object-cover"
                />

                {/* Subtle overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Floating Status Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded-full px-3 py-2 border border-white/20"
                  initial={{
                    opacity: 0,
                    y: -20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.5,
                  }}
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
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.2,
                    duration: 0.5,
                  }}
                >
                  <span className="text-white text-xs font-medium">
                    📍 Los Angeles, CA
                  </span>
                </motion.div>

                {/* Interactive Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center"
                  whileHover={{
                    opacity: 1,
                  }}
                >
                  <motion.div
                    className="text-white text-center"
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                    }}
                    whileHover={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
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
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/30 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 1,
                }}
              />

              {/* Geometric Accent */}
              <motion.div
                className="absolute top-1/2 -left-8 w-3 h-3 bg-primary rounded-full"
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <div className="text-gray-500 text-sm mb-2">Scroll Down</div>
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-1">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
