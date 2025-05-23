import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  index: number;
  link?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  image,
  index,
  link = "#",
}: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-secondary rounded-3xl p-6 h-full flex flex-col relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5 }}
    >
      {image && (
        <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {icon && (
        <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-heading font-semibold text-text-light mb-2">
        {title}
      </h3>
      <p className="text-text-muted text-sm mb-4 flex-grow">{description}</p>

      {/* Removed the "Learn More" link that was here */}

      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default ServiceCard;
