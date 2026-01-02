import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Brain,
  Workflow,
  Sparkles,
  Code,
  Palette,
  Layout,
  Smartphone,
  Users,
  Shield,
  Search,
  Repeat,
  Heart,
  BookOpen,
} from "lucide-react";

const SkillsSection = () => {
  const expertiseSkills = [
    {
      name: "UI/UX Design",
      icon: <Code className="h-6 w-6 text-primary" />,
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
      icon: <Search className="h-6 w-6 text-primary" />,
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

  return (
    <section id="skills" className="py-20 bg-secondary-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-heading font-bold text-text-light mb-4"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            What I Bring to <span className="text-primary">Every Project</span>
          </motion.h2>

          <motion.p
            className="text-text-muted"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            As a UI/UX Designer, I combine deep expertise, proven
            methodologies, streamlined processes, and specialized experience to
            deliver solutions that work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Expertise Section */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
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
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
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
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
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
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
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
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
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
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
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
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
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
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
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
  );
};

export default SkillsSection;
