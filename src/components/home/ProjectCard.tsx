import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  tags?: string[];
  featured?: boolean;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  slug,
  tags = [],
  featured = false,
  index,
}: ProjectCardProps) => {
  return (
    <Link to={`/project/${slug}`}>
      <motion.div
        className={`bg-white rounded-3xl overflow-hidden group cursor-pointer h-80 flex flex-col border border-gray-200 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-lg ${
          featured ? "col-span-2 row-span-2" : ""
        }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -5 }}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          {/* YouTube-style play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Impact metric badge */}
          <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
            CASE STUDY
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.slice(0, 2).map((tag, i) => (
              <span
                key={i}
                className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-heading font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
            {title}
          </h3>

          <p className="text-text-secondary text-sm line-clamp-2 flex-grow">
            {description}
          </p>

          {/* Call-to-action hint */}
          <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
