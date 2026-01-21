import React from "react";
import { motion } from "framer-motion";
import { LucideIcon, Lightbulb, Scale } from "lucide-react";

export interface StrategicDecision {
  decision: string;
  alternative: string;
  reasoning: string;
  icon?: LucideIcon;
}

export interface StrategicDecisionsProps {
  title?: string;
  introduction?: string;
  decisions: StrategicDecision[];
}

const StrategicDecisions: React.FC<StrategicDecisionsProps> = ({
  title = "Strategic Decisions",
  introduction,
  decisions
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {introduction && (
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
              {introduction}
            </p>
          )}
        </motion.div>

        <div className="grid gap-6">
          {decisions.map((item, index) => {
            const Icon = item.icon || Scale;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">
                          We chose
                        </span>
                        <span className="font-semibold text-gray-900">
                          {item.decision}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Instead of
                        </span>
                        <span className="text-gray-500 line-through">
                          {item.alternative}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {item.reasoning}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default StrategicDecisions;
