import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, TestTube } from "lucide-react";
const KeyActions = () => {
  const keyActions = [{
    icon: Lightbulb,
    title: "Game Concept Development",
    description: "Defined the core idle game mechanics and user journey through whiteboarding sessions",
    impact: "Clear game economy structure from day one"
  }, {
    icon: Palette,
    title: "Character & UI Design",
    description: "Created custom Bob character art, branding assets, and intuitive interface components",
    impact: "Cohesive visual identity and brand recognition"
  }, {
    icon: Code,
    title: "Full-Stack Implementation",
    description: "Built React frontend with Bulma styling and Node.js/MongoDB backend for data persistence",
    impact: "Scalable architecture supporting real-time gameplay"
  }, {
    icon: TestTube,
    title: "Game Balance Testing",
    description: "Iteratively tested and refined progression mechanics to optimize player engagement",
    impact: "Balanced active vs. passive income streams"
  }];
  return <motion.section initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Key Actions That Moved the Needle
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Four critical initiatives that transformed the initial concept into a fully functional game prototype.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keyActions.map((action, index) => {
          const IconComponent = action.icon;
          return <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {action.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {action.description}
                    </p>
                    
                  </div>
                </div>
              </motion.div>;
        })}
        </div>
      </div>
    </motion.section>;
};
export default KeyActions;