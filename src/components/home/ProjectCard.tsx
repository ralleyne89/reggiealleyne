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
    <motion.div
      className={`bg-secondary rounded-3xl overflow-hidden group ${
        featured ? "col-span-2 row-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>

        {/* Removed the floating button that was here */}
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-heading font-semibold text-text-light mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-text-muted text-sm line-clamp-3">{description}</p>

        <Link
          to={`/project/${slug}`}
          className="inline-flex items-center text-primary text-sm font-medium mt-4 relative overflow-hidden group animated-underline"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
