import React from "react";
import { motion } from "framer-motion";

export interface PersonaDetail {
  label: string;
  value: string;
}

export interface PersonaItem {
  text: string;
}

export interface PersonaSection {
  title: string;
  items: PersonaItem[];
}

export interface UserPersonaProps {
  title?: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  details: PersonaDetail[];
  goals: PersonaItem[];
  frustrations: PersonaItem[];
  needs: PersonaItem[];
}

const UserPersona: React.FC<UserPersonaProps> = ({
  title = "User Persona",
  imageSrc,
  imageAlt,
  name,
  details,
  goals,
  frustrations,
  needs,
}) => {
  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Persona Image */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="rounded-lg w-full mb-6"
              />

              <h3 className="text-2xl font-semibold text-white mb-6">{name}</h3>

              <div className="space-y-4">
                {details.map((detail, index) => (
                  <div key={index}>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">
                      {detail.label}
                    </p>
                    <p className="text-white text-lg">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Persona Details */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Goals */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white pb-3 border-b border-gray-800">
                  Goals
                </h4>
                <ul className="space-y-3">
                  {goals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed">
                        {goal.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Frustrations */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white pb-3 border-b border-gray-800">
                  Frustrations
                </h4>
                <ul className="space-y-3">
                  {frustrations.map((frustration, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed">
                        {frustration.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Needs */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white pb-3 border-b border-gray-800">
                  Needs
                </h4>
                <ul className="space-y-3">
                  {needs.map((need, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed">
                        {need.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default UserPersona;
