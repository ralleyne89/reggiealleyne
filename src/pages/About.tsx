import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Code,
  Palette,
  Heart,
  Gamepad2,
  Coffee,
  Zap,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { icon: Palette, label: "UX/UI Design", years: "10+" },
    { icon: Code, label: "Frontend Dev", years: "5+" },
    { icon: Lightbulb, label: "Problem Solving", years: "∞" },
    { icon: Users, label: "Team Leadership", years: "8+" },
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
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 text-text-primary">
              Hey, I'm Reggie.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Nice to meet you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl space-y-16">
          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              I'm a{" "}
              <span className="text-primary font-semibold">
                Principal UX/UI Designer
              </span>{" "}
              who codes—because sometimes the best way to solve a design problem
              is to build it yourself. With 10+ years of experience turning
              complex problems into delightful user experiences, I've learned
              that great design isn't just about making things pretty (though I
              do love a good color palette).
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              Born and raised in LA, I'm a family man who believes the best
              solutions come from understanding people—whether that's users
              struggling with healthcare navigation or teammates trying to ship
              features on deadline. I've spent my career in{" "}
              <span className="text-primary">Education and Healthcare</span>,
              building tools that actually matter to people's lives.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              But here's the thing—I'm dreaming bigger. I want to design for the
              industries that first made me fall in love with great experiences:{" "}
              <span className="text-primary font-semibold">
                gaming and anime
              </span>
              . There's something magical about creating worlds and characters
              that people connect with emotionally. Plus, who wouldn't want
              their work to involve more mechs and fewer medical forms?
            </p>
          </motion.section>

          {/* Skills Grid */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-heading font-bold mb-8 text-text-primary">
              What I Bring to the Table
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-lg p-6 text-center group hover:bg-secondary-light transition-colors border border-gray-200"
                >
                  <skill.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-text-primary mb-1">
                    {skill.label}
                  </h3>
                  <p className="text-sm text-text-muted">{skill.years} years</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* What I'm About */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-heading font-bold text-text-primary">
              What I'm About
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    Building AI Tools That Don't Suck
                  </h3>
                  <p className="text-text-secondary">
                    I'm fascinated by AI's potential to solve real problems—not
                    just generate more content. I want to design interfaces that
                    make AI feel helpful, not overwhelming.
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
                    Solving Problems, Not Just Making Mockups
                  </h3>
                  <p className="text-text-secondary">
                    I dig deep into user research, prototype rapidly, and
                    iterate based on real feedback. Pretty designs are great,
                    but usable ones change lives.
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
            <h2 className="text-2xl font-heading font-bold mb-8 text-text-primary">
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
            className="bg-secondary-dark rounded-xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-heading font-bold mb-6 text-white">
              What I'm Looking For
            </h2>

            <div className="space-y-4">
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
