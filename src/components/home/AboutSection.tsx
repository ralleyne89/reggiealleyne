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

  return (
    <section id="about" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
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
            <h2 className="font-display text-display-md text-gray-900 mb-6">
              Hey, I'm <span className="text-primary italic">Reggie</span>.
            </h2>
            <p className="text-body-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Nice to meet you.
            </p>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-8 mb-16"
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
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a{" "}
              <span className="text-primary font-semibold">UI/UX Designer</span>{" "}
              who codes—because sometimes the best way to solve a design problem
              is to build it yourself. With 10+ years of experience turning
              complex problems into delightful user experiences, I've learned
              that great design isn't just about making things pretty it's about 
              creating solutions that work.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Born and raised in LA, I'm a family man who believes the best
              solutions come from understanding people—whether that's users
              struggling with healthcare navigation or teammates trying to ship
              features on deadline. I've spent my career in{" "}
              <span className="text-primary">Education and Healthcare</span>,
              building tools that actually matter to people's lives.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              But here's the thing—I'm dreaming bigger. I want to design for the
              industries that first made me fall in love with great experiences:{" "}
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
            <h3 className="font-display text-heading-xl text-gray-900 mb-12 text-center">
              What I'm About
            </h3>

            <div className="space-y-8">
              {aboutMeValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-primary/20 transition-colors shadow-sm"
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
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
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
            <h3 className="font-display text-heading-xl text-gray-900 mb-8 text-center">
              When I'm Not Designing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-colors text-center shadow-sm"
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
            className="bg-secondary-dark rounded-xl p-8 border border-gray-700"
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
            <h3 className="font-display text-heading-xl text-white mb-6 text-center">
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
                where we ship fast but think deeply, and where "that's how we've
                always done it" isn't a valid argument. Give me complex
                problems, tight deadlines, and a team that's not afraid to
                experiment.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Bonus points if you're in{" "}
                <span className="text-primary font-semibold">
                  gaming, entertainment, or AI
                </span>
                . Double bonus if you have a good coffee machine and don't mind
                the occasional anime reference in Slack.
              </p>
            </div>

            <div className="text-center mt-8">
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
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
