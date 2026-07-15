import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight } from "lucide-react";
import Marquee from "@/components/motion/Marquee";
import { getAllProjects } from "@/services/api";
import { getAllPredefinedProjectsSync } from "@/services/api/predefinedProjects";
import {
  isFeaturedProject,
  isPrimaryWorksProject,
  orderFeaturedProjects,
  sortProjectsNewestFirst,
} from "@/config/portfolioCuration";
import { getProjectPath } from "@/lib/projectRoutes";
import type { ProjectType } from "@/types/project";

type NextProjectTakeoverProps = {
  project: ProjectType;
};

/**
 * Full-bleed next-project handoff at the end of every case study: marquee
 * strip, oversized title, background image that scales on hover, whole
 * surface is the link.
 */
const NextProjectTakeover = ({ project }: NextProjectTakeoverProps) => {
  const { data: projects = [] } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
    placeholderData: getAllPredefinedProjectsSync,
    retry: 1,
  });

  const nextProject = useMemo(() => {
    const ring = [
      ...orderFeaturedProjects(projects),
      ...sortProjectsNewestFirst(
        projects.filter(
          (candidate) =>
            isPrimaryWorksProject(candidate) && !isFeaturedProject(candidate),
        ),
      ),
    ];

    if (ring.length === 0) {
      return null;
    }

    const currentIndex = ring.findIndex(
      (candidate) => candidate.slug === project.slug,
    );

    return ring[(currentIndex + 1) % ring.length] ?? null;
  }, [project.slug, projects]);

  if (!nextProject || nextProject.slug === project.slug) {
    return null;
  }

  return (
    <Link
      to={getProjectPath(nextProject)}
      aria-label={`Next case study: ${nextProject.title}`}
      data-cursor-label="Next project"
      className="group relative block overflow-hidden border-t border-white/10 bg-gray-950 text-white"
    >
      <div className="border-b border-white/10 py-4">
        <Marquee speed={60} groupClassName="gap-6 pr-6">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-purple-200">
            Next case study
          </span>
          <span aria-hidden="true" className="text-xs text-purple-300/70">
            ✦
          </span>
        </Marquee>
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
        >
          <img
            src={nextProject.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="h-full w-full scale-105 object-cover opacity-25 transition-[transform,opacity] duration-700 ease-[var(--ease-out)] group-hover:scale-110 group-hover:opacity-40"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/30" />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-purple-200">
            {[nextProject.year, nextProject.category || nextProject.tags?.[0]]
              .filter(Boolean)
              .join(" / ")}
          </p>
          <span className="flex items-start gap-4 font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold uppercase leading-[0.95] tracking-tight text-white transition-transform duration-500 ease-[var(--ease-overshoot)] group-hover:translate-x-3 [text-wrap:balance]">
            {nextProject.title}
            <ArrowUpRight
              aria-hidden="true"
              className="mt-2 h-[0.55em] w-[0.55em] shrink-0 text-purple-300 transition-transform duration-500 ease-[var(--ease-overshoot)] group-hover:-translate-y-2 group-hover:translate-x-2"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default NextProjectTakeover;
