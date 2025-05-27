
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, User, Clock, Calendar, Users, Code, Gamepad2 } from "lucide-react";

const IntegratedOverview = () => {
  const projectDetails = [
    {
      icon: User,
      label: "Role",
      value: "UI/UX Designer & Web Developer"
    },
    {
      icon: Clock,
      label: "Duration",
      value: "2 weeks"
    },
    {
      icon: Calendar,
      label: "Year",
      value: "2020"
    },
    {
      icon: Users,
      label: "Team Size",
      value: "2 members"
    }
  ];

  const toolDetails = [
    {
      icon: Code,
      label: "Frontend",
      value: "React, Bulma CSS"
    },
    {
      icon: Code,
      label: "Backend",
      value: "Node.js, Express, MongoDB"
    },
    {
      icon: Gamepad2,
      label: "Game Type",
      value: "Incremental Clicker"
    }
  ];

  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Description */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
            Project Overview
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
              Bob's Big Break is an incremental clicker game designed for short attention spans and mobile-friendly interaction. 
              Players help Bob, a scrappy entrepreneur, earn Coins through hustles or by hiring hustlers for passive income.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
              The game addresses those moments in life when your brain needs a break—but your hustle doesn't. 
              Whether it's a tired commuter on the way home, a parent entertaining a curious child, or a user waiting on a phone call, 
              this game provides low-effort, high-reward entertainment.
            </p>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
              Project Info
            </h3>

            <div className="space-y-6">
              {projectDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg mt-1">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm font-medium mb-1 uppercase tracking-wider">
                        {detail.label}
                      </p>
                      <p className="text-gray-900 text-lg">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Tools & Platform */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
              Tools & Tech
            </h3>

            <div className="space-y-6">
              {toolDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg mt-1">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm font-medium mb-1 uppercase tracking-wider">
                        {detail.label}
                      </p>
                      <p className="text-gray-900 text-lg">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h4>
              <div className="space-y-3">
                <a
                  href="https://bobsbigbreak.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Play the Game
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default IntegratedOverview;
