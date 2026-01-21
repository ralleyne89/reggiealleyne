import React from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

export interface Tradeoff {
  built: string;
  rejected: string;
  reasoning: string;
}

export interface TradeoffsVisualizedProps {
  title?: string;
  introduction?: string;
  tradeoffs: Tradeoff[];
}

const TradeoffsVisualized: React.FC<TradeoffsVisualizedProps> = ({
  title = "Trade-offs: What We Built vs. What We Cut",
  introduction,
  tradeoffs
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gray-50"
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

        <div className="space-y-6">
          {tradeoffs.map((tradeoff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* What We Built */}
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 bg-green-50/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                      What We Built
                    </span>
                  </div>
                  <p className="text-gray-900 font-medium text-lg">
                    {tradeoff.built}
                  </p>
                </div>

                {/* What We Didn't Build */}
                <div className="p-6 bg-gray-50/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <X className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      What We Cut
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium text-lg line-through decoration-gray-300">
                    {tradeoff.rejected}
                  </p>
                </div>
              </div>

              {/* Reasoning */}
              <div className="px-6 py-4 bg-gray-100/50 border-t border-gray-200">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-semibold text-gray-900">Why: </span>
                    {tradeoff.reasoning}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TradeoffsVisualized;
