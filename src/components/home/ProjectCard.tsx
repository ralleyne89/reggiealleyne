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
  eyebrow?: string;
  impactSummary?: string;
  reviewerSignal?: string;
  role?: string;
  year?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  slug,
  tags = [],
  eyebrow,
  impactSummary,
  reviewerSignal,
  role,
  year,
  index,
}: ProjectCardProps) => {
  return (
    <Link to={`/project/${slug}`}>
      <motion.div
        className="group flex h-full min-h-[24rem] min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:min-h-[28rem]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            sizes="(min-width: 1024px) 360px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="liquid-glass-control liquid-glass-interactive rounded-full p-4 text-primary transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>

          <div className="liquid-glass-control absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-gray-950">
            Case study
          </div>
        </div>

        <div className="flex min-w-0 flex-grow flex-col p-4 sm:p-6">
          <p className="mb-3 text-xs font-semibold uppercase leading-5 text-primary">
            {eyebrow || "Product design"}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag, i) => (
              <span
                key={i}
                className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mb-3 break-words font-display text-xl leading-tight text-text-primary transition-colors duration-300 group-hover:text-primary sm:text-heading-md">
            {title}
          </h3>

          <p className="text-sm leading-6 text-text-secondary">
            {impactSummary || description}
          </p>

          {(role || year) && (
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-gray-500">
              {role ? (
                <span className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1">
                  {role}
                </span>
              ) : null}
              {year ? (
                <span className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1">
                  {year}
                </span>
              ) : null}
            </div>
          )}

          {reviewerSignal ? (
            <p className="mt-4 border-l-2 border-primary/30 pl-3 text-sm leading-6 text-gray-500">
              {reviewerSignal}
            </p>
          ) : null}

          <div className="mt-auto flex min-h-11 items-center pt-5 text-sm font-semibold text-primary sm:pt-6">
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
