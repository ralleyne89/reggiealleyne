import React from "react";
import { motion } from "framer-motion";
import { X, Lightbulb, AlertTriangle } from "lucide-react";

export interface Alternative {
  option: string;
  rejected: string;
  learning: string;
}

export interface AlternativesConsideredProps {
  title?: string;
  introduction?: string;
  alternatives: Alternative[];
}

const AlternativesConsidered: React.FC<AlternativesConsideredProps> = ({
  title = "The Roads Not Taken",
  introduction,
  alternatives
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alternatives.map((alt, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Rejected Option Header */}
              <div className="p-4 bg-red-50/50 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                    Considered & Rejected
                  </span>
                </div>
                <p className="text-gray-900 font-medium line-through decoration-red-300 decoration-2">
                  {alt.option}
                </p>
              </div>

              {/* Why Rejected */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">{alt.rejected}</p>
                </div>
              </div>

              {/* Key Learning */}
              <div className="p-4 bg-green-50/30">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-green-700 uppercase tracking-wide block mb-1">
                      Key Learning
                    </span>
                    <p className="text-gray-700 text-sm">{alt.learning}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AlternativesConsidered;
