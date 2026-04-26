import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
  Target,
  Gamepad2,
  Heart,
  Coffee,
  Lightbulb,
  Sparkles,
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

  const opportunitySignals = [
    "Trust-first AI products",
    "Platform tools",
    "Creative systems",
    "Healthcare, education, entertainment",
  ];

  const collaborationSignals = [
    {
      label: "Best fit",
      value: "Product teams turning ambiguity into something buildable",
    },
    {
      label: "Working style",
      value: "Evidence, fast prototypes, and thoughtful critique",
    },
    {
      label: "Leverage",
      value: "Making complex technology feel useful and human",
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
            <div className="mb-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-normal text-primary">
                  How I Work
                </p>
                <h3 className="break-words font-display text-[2rem] leading-tight text-gray-900 [text-wrap:balance] sm:text-heading-xl">
                  Make the product logic visible before polishing the interface.
                </h3>
              </div>
              <p className="text-base leading-7 text-gray-600 sm:text-lg">
                I use prototypes, critique, and systems thinking to turn fuzzy
                AI behavior into product decisions a team can trust.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-w-0 overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(139,92,246,0.26),transparent_38%),linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:auto,64px_64px,64px_64px]" />
                <div className="relative">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase text-primary-light">
                    <Sparkles size={14} />
                    Operating model
                  </div>
                  <h4 className="break-words font-display text-3xl font-semibold leading-tight text-white [text-wrap:balance]">
                    Prototype the risk, then refine the system.
                  </h4>
                  <p className="mt-4 leading-7 text-slate-300">
                    The goal is not more screens. It is sharper evidence:
                    which behavior earns trust, which pattern scales, and
                    which product decision is ready to ship.
                  </p>

                  <div className="mt-8 grid gap-3 text-sm">
                    {["Frame the ambiguity", "Build the behavior", "Pressure-test the trust"].map(
                      (step, index) => (
                        <div
                          key={step}
                          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20 font-semibold text-primary-light">
                            0{index + 1}
                          </span>
                          <span className="font-semibold text-slate-100">
                            {step}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="grid min-w-0 gap-4">
                {aboutMeValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="group min-w-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-primary/25 sm:p-6"
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
                    <div className="flex min-w-0 gap-4">
                      <span className="pt-1 text-sm font-semibold text-primary/70">
                        0{index + 1}
                      </span>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                        {value.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="mb-2 break-words text-lg font-semibold text-gray-900">
                          {value.title}
                        </h4>
                        <p className="leading-7 text-gray-600">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
              Hobbies
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
            className="relative min-w-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-2xl shadow-slate-950/20 sm:p-8 lg:p-10"
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
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(139,92,246,0.18),transparent_35%),linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-light to-transparent" />

            <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
              <div className="min-w-0">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase leading-none text-primary-light">
                  <Sparkles size={14} />
                  Opportunity fit
                </div>

                <h3 className="break-words font-display text-[2rem] font-semibold leading-tight text-white [text-wrap:balance] sm:text-heading-xl">
                  What I'm Looking For
                </h3>

                <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  I want to join a team that's{" "}
                  <span className="font-semibold text-primary-light">
                    building something meaningful
                  </span>
                  —especially AI products, platform tools, and experiences
                  where trust and clarity determine whether the product works.
                </p>

                <motion.a
                  href="#contact"
                  className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-black/20 transition-colors hover:bg-primary-light hover:text-white sm:w-auto"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Let's Build Something Great
                  <ArrowRight size={18} />
                </motion.a>
              </div>

              <div className="min-w-0 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="space-y-5">
                  {collaborationSignals.map((signal) => (
                    <div key={signal.label} className="flex gap-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                      <div>
                        <p className="text-sm font-semibold uppercase text-primary-light">
                          {signal.label}
                        </p>
                        <p className="mt-1 leading-7 text-slate-300">
                          {signal.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-7 leading-7 text-slate-300">
                  Give me ambiguous systems, a real user problem, and partners
                  who want to make the product better together.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {opportunitySignals.map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-slate-200"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
