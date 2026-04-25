import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Users,
  Target,
  Gamepad2,
  Heart,
  Coffee,
  Lightbulb,
} from "lucide-react";

const AboutSection = () => {
  const aboutMeValues = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Designing AI Tools People Can Trust",
      description:
        "I focus on making AI behavior legible: clear inputs, visible confidence, useful explanations, and interfaces that keep people in control.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Leading Through Collaboration",
      description:
        "I work closely with engineering and product partners, using prototypes to make tradeoffs concrete before teams overcommit.",
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Solving Problems, Not Just Making Mockups",
      description:
        "I use research, systems thinking, and fast React prototypes to move from product ambiguity to decisions teams can build around.",
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

  return (
    <section id="about" className="relative bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-12 text-center sm:mb-16"
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
            <h2 className="mb-5 break-words font-display text-[2.1rem] leading-tight text-gray-900 [text-wrap:balance] sm:mb-6 sm:text-display-md">
              I design at the intersection of{" "}
              <span className="text-primary italic">AI, systems, and trust</span>.
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-body-lg sm:leading-relaxed">
              My strongest work translates complex product logic into interfaces
              people can understand quickly.
            </p>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="mb-12 space-y-6 sm:mb-16 sm:space-y-8"
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
            <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-relaxed">
              I'm a{" "}
              <span className="text-primary font-semibold">product designer who codes</span>{" "}
              with 10+ years of experience turning complex workflows into clear,
              usable product experiences. I use code as a design material when a
              prototype needs to prove behavior, feasibility, or interaction quality.
            </p>

            <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-relaxed">
              My background spans{" "}
              <span className="text-primary">education, healthcare, AI, and creator platforms</span>.
              Those domains taught me to design for trust, explainability, and
              adoption rather than polish alone.
            </p>

            <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-relaxed">
              The portfolio now foregrounds the work most relevant to AI and
              product-design teams: adaptive assessment, platform strategy, and
              explainable AI in high-stakes contexts.
            </p>
          </motion.div>

          {/* What I'm About */}
          <motion.div
            className="mb-16"
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
            <h3 className="mb-8 break-words text-center font-display text-3xl leading-tight text-gray-900 sm:mb-12 sm:text-heading-xl">
              How I Work
            </h3>

            <div className="space-y-8">
              {aboutMeValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="min-w-0 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-primary/20 sm:p-8"
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
                  <div className="flex min-w-0 items-start gap-4 sm:gap-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12">
                      {value.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-3 break-words text-lg font-semibold text-gray-900 sm:text-xl">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
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
            <h3 className="mb-8 break-words text-center font-display text-3xl leading-tight text-gray-900 sm:text-heading-xl">
              Personal Signals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="min-w-0 rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-colors hover:border-primary/20 sm:p-6"
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
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {interest.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What I'm Looking For */}
          <motion.div
            className="min-w-0 rounded-xl border border-gray-700 bg-secondary-dark p-5 sm:p-8"
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
              delay: 0.8,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <h3 className="mb-6 break-words text-center font-display text-3xl leading-tight text-white sm:text-heading-xl">
              What I'm Looking For
            </h3>

            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-gray-300 leading-relaxed">
                I want to join a team that's{" "}
                <span className="text-primary font-semibold">
                  building something meaningful
                </span>
                —especially AI products, platform tools, and experiences where
                trust and clarity determine whether the product works.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I thrive with teams that value evidence, fast prototypes, and
                thoughtful critique. Give me ambiguous systems, a real user
                problem, and partners who want to make the product better
                together.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I am especially interested in{" "}
                <span className="text-primary font-semibold">
                  AI, creative tools, education, healthcare, and entertainment
                </span>
                , where strong UX can make complex technology feel useful and
                human.
              </p>
            </div>

            <div className="text-center mt-8">
              <motion.a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto sm:px-8"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                Let's Build Something Great
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
