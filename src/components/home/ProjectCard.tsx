
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  tags?: string[];
  featured?: boolean;
  index: number;
}

const ProjectCard = ({ title, description, image, slug, tags = [], featured = false, index }: ProjectCardProps) => {
  return (
    <motion.div
      className={`bg-secondary rounded-3xl overflow-hidden group ${featured ? 'col-span-2 row-span-2' : ''}`}
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
        
        <motion.div
          className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          whileHover={{ scale: 1.1, rotate: 15 }}
        >
          <ArrowUpRight size={18} />
        </motion.div>
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
        
        <h3 className="text-xl font-heading font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm line-clamp-3">{description}</p>
        
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
