import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Code,
  Palette,
  Heart,
  Gamepad2,
  Coffee,
  Zap,
  Users,
  Target,
  Lightbulb,
  Brain,
  Layers,
  Search,
  Accessibility,
  Sparkles,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Core Competencies for LLM/AI SEO parsing
  const coreCompetencies = [
    { icon: Brain, label: "Gen AI Prototyping", description: "Building AI-powered interfaces and adaptive systems" },
    { icon: Layers, label: "Design Systems", description: "Scalable component libraries and design tokens" },
    { icon: Search, label: "User Research", description: "Qualitative & quantitative research methods" },
    { icon: Sparkles, label: "0-1 Product Design", description: "From concept to shipped product" },
    { icon: Accessibility, label: "Accessibility (WCAG)", description: "Inclusive design for all users" },
    { icon: Code, label: "React Prototyping", description: "Functional prototypes, not just mockups" },
  ];

  const interests = [
    {
      icon: Gamepad2,
      label: "Gaming",
      description: "From indie gems to AAA titles",
    },
    {
      icon: Heart,
      label: "Anime",
      description: "Studio Ghibli to Attack on Titan",
    },
    {
      icon: Coffee,
      label: "Sushi",
      description: "Always hunting for the best spots",
    },
    {
      icon: Target,
      label: "Learning",
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
    <div className="min-h-screen bg-white text-text-primary">
      {/* Header */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-4xl"
          >
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
              Product Designer & AI Technologist
            </p>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 text-text-primary">
              Reggie Alleyne
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="mx-auto max-w-4xl space-y-16">
          
          {/* The Philosophy - NEW SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-heading font-bold text-text-primary border-b border-gray-200 pb-3">
              The Philosophy
            </h2>
            
            <div className="bg-secondary rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                Building AI Tools That Don't Suck
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                Most AI interfaces treat algorithms like magic—black boxes that spit out answers without explanation. 
                This creates a fundamental problem: users can't trust what they can't understand.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                I design for <span className="text-primary font-semibold">algorithmic transparency</span>. 
                When an AI makes a recommendation, users should see the reasoning chain. When it's uncertain, 
                it should say so. When it needs more data, it should ask—not guess.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                The goal isn't to humanize AI or make it feel "friendly." It's to make AI <span className="text-primary font-semibold">legible</span>—so 
                humans can make informed decisions about when to trust it and when to override it.
              </p>
            </div>
          </motion.section>

          {/* The Process - NEW SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-heading font-bold text-text-primary border-b border-gray-200 pb-3">
              The Process
            </h2>
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-sm">
                  <Palette className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold text-text-primary">Design</p>
                    <p className="text-sm text-text-muted">Research → Prototype</p>
                  </div>
                </div>
                <div className="hidden md:block text-2xl text-gray-400">⇄</div>
                <div className="md:hidden text-2xl text-gray-400">↕</div>
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-sm">
                  <Code className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold text-text-primary">Code</p>
                    <p className="text-sm text-text-muted">Build → Validate</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-text-secondary mt-6 max-w-xl mx-auto">
                Coding isn't separate from design—it's a design validation tool. The fastest way to test 
                if an interaction works is to build it. I prototype in React, not just Figma.
              </p>
            </div>
          </motion.section>

          {/* Core Competencies - NEW SECTION for LLM/AI SEO */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <h2 className="text-2xl font-heading font-bold mb-8 text-text-primary border-b border-gray-200 pb-3">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreCompetencies.map((competency, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 border border-gray-200 hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <competency.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">
                        {competency.label}
                      </h3>
                      <p className="text-sm text-text-muted">{competency.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-heading font-bold text-text-primary border-b border-gray-200 pb-3">
              Background
            </h2>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              10+ years designing for <span className="text-primary font-semibold">Education and Healthcare</span>—industries 
              where bad UX has real consequences. I've built tools for teachers managing 30 students, 
              patients navigating health anxiety, and HR leaders trying to assess AI literacy at scale.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              Born and raised in LA, I'm a family man who believes the best
              solutions come from understanding people—whether that's users
              struggling with healthcare navigation or teammates trying to ship
              features on deadline.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              <span className="text-primary font-semibold">Passion for Immersive Interfaces:</span>{" "}
              My background in gaming and anime inspires my approach to spatial computing 
              and highly interactive UI. These industries taught me that the best experiences 
              feel invisible—they just work.
            </p>
          </motion.section>

          {/* What I'm About */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-heading font-bold text-text-primary border-b border-gray-200 pb-3">
              What I'm About
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    Humanizing Algorithmic Intelligence
                  </h3>
                  <p className="text-text-secondary">
                    I'm fascinated by the "Black Box" problem in AI. How do we design 
                    interfaces that make machine learning legible to humans? How do we 
                    build trust when the algorithm is smarter than the user?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    Leading Through Collaboration
                  </h3>
                  <p className="text-text-secondary">
                    I believe the best ideas come from diverse perspectives. I'm
                    the designer who asks developers "what if we tried this?"
                    and actually listens to the answer.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    Shipping Over Perfection
                  </h3>
                  <p className="text-text-secondary">
                    I dig deep into user research, prototype rapidly, and
                    iterate based on real feedback. Pretty designs are great,
                    but shipped products change lives.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Interests */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-heading font-bold mb-8 text-text-primary border-b border-gray-200 pb-3">
              When I'm Not Designing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-lg p-6 border border-gray-200 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <interest.icon className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-text-primary">
                      {interest.label}
                    </h3>
                  </div>
                  <p className="text-text-secondary">{interest.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* What I'm Looking For */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative min-w-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-2xl shadow-slate-950/20 sm:p-8 lg:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(139,92,246,0.18),transparent_35%),linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-light to-transparent" />

            <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
              <div className="min-w-0">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase leading-none text-primary-light">
                  <Sparkles size={14} />
                  Opportunity fit
                </div>

                <h2 className="break-words font-display text-[2rem] font-semibold leading-tight text-white [text-wrap:balance] sm:text-heading-xl">
                  What I'm Looking For
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  I want to join a team that's{" "}
                  <span className="font-semibold text-primary-light">
                    building something meaningful
                  </span>
                  —especially AI products, platform tools, and experiences
                  where trust and clarity determine whether the product works.
                </p>

                <Link
                  to="/#contact"
                  className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-black/20 transition-colors hover:bg-primary-light hover:text-white sm:w-auto"
                >
                  Let's Build Something Great
                  <ArrowRight size={18} />
                </Link>
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
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <h2 className="text-2xl font-heading font-bold mb-4 text-text-primary">
              Let's Build Something Great
            </h2>
            <p className="text-text-secondary mb-8">
              Ready to create experiences that people actually love using?
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Get In Touch
            </Link>
          </motion.section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
