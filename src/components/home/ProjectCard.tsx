import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  eyebrow?: string;
  impactSummary?: string;
  role?: string;
  year?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  href,
  eyebrow,
  impactSummary,
  role,
  year,
  index,
}: ProjectCardProps) => {
  return (
    <Link to={href}>
      <motion.div
        className="group flex h-full min-h-[24rem] min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:min-h-[28rem]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="px-3 pt-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 shadow-[0_14px_34px_rgba(15,23,42,0.1)]">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              sizes="(min-width: 1024px) 360px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="liquid-glass-control liquid-glass-interactive transform scale-75 rounded-full p-4 text-primary transition-transform duration-300 group-hover:scale-100">
                <ArrowUpRight className="h-6 w-6" />
              </div>
            </div>

            <div className="liquid-glass-control absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-gray-950">
              Case study
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-grow flex-col p-4 sm:p-6">
          <p className="mb-3 text-xs font-semibold uppercase leading-5 text-primary">
            {eyebrow || "Product design"}
          </p>

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
