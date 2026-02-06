import React from "react";
import { motion } from "framer-motion";
import { Brain, Database, TrendingUp } from "lucide-react";

export interface AIProductThinkingProps {
  title?: string;
  challenge: string;
  dataStrategy: string;
  successMetric: string;
}

const AIProductThinking: React.FC<AIProductThinkingProps> = ({
  title = "The AI Challenge",
  challenge,
  dataStrategy,
  successMetric,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Brain className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary">
            {title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* The Challenge */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide">
              <Brain className="w-4 h-4" />
              <span>The Challenge</span>
            </div>
            <p className="text-text-secondary leading-relaxed">
              {challenge}
            </p>
          </div>

          {/* Data Strategy */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide">
              <Database className="w-4 h-4" />
              <span>Data Strategy</span>
            </div>
            <p className="text-text-secondary leading-relaxed">
              {dataStrategy}
            </p>
          </div>

          {/* Success Metric */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide">
              <TrendingUp className="w-4 h-4" />
              <span>Success Metric</span>
            </div>
            <p className="text-text-secondary leading-relaxed">
              {successMetric}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AIProductThinking;
