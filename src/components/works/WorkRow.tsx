import { type PointerEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProjectPath } from "@/lib/projectRoutes";
import type { ProjectType } from "@/types/project";

type WorkRowProps = {
  project: ProjectType;
  index: number;
  title?: string;
  eyebrow?: string;
  summary?: string;
  size?: "large" | "compact";
};

const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
  const row = event.currentTarget;
  const rect = row.getBoundingClientRect();
  row.style.setProperty(
    "--preview-shift-y",
    `${event.clientY - rect.top - rect.height / 2}px`,
  );
  row.style.setProperty(
    "--preview-shift-x",
    `${Math.max(-24, Math.min(24, event.clientX - rect.left - rect.width * 0.72))}px`,
  );
};

const handlePointerLeave = (event: PointerEvent<HTMLAnchorElement>) => {
  const row = event.currentTarget;
  row.style.setProperty("--preview-shift-y", "0px");
  row.style.setProperty("--preview-shift-x", "2rem");
};

/**
 * Editorial work list row: oversized outlined title that fills with accent on
 * hover, mono index + meta column, and a cursor-following image preview on
 * desktop. Mobile falls back to a thumbnail strip.
 */
const WorkRow = ({
  project,
  index,
  title,
  eyebrow,
  summary,
  size = "large",
}: WorkRowProps) => {
  const displayTitle = title || project.title;
  const displayEyebrow =
    eyebrow || project.category || project.tags?.[0] || "Product design";

  return (
    <Link
      to={getProjectPath(project)}
      className="portfolio-work-row group"
      data-cursor-label="View case study"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className={cn(
          "relative z-10 grid min-w-0 gap-2 sm:grid-cols-[3.5rem_minmax(0,1fr)_11rem] sm:items-center",
          size === "large" ? "py-7 sm:py-9" : "py-5 sm:py-6",
        )}
      >
        <span
          aria-hidden="true"
          className="hidden font-mono text-sm font-medium tracking-[0.18em] text-text-muted sm:block"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0">
          <p
            className={cn(
              "portfolio-work-row__title",
              size === "compact" && "portfolio-work-row__title--compact",
            )}
          >
            {displayTitle}
          </p>
          {summary ? (
            <p className="mt-3 max-w-xl text-sm leading-6 text-text-secondary">
              {summary}
            </p>
          ) : null}
        </div>

        <div className="hidden min-w-0 text-right sm:block">
          <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] text-primary">
            {displayEyebrow}
          </p>
          <p className="mt-2 text-xs font-semibold leading-5 text-text-muted">
            {[project.year, project.role].filter(Boolean).join(" · ")}
          </p>
        </div>
      </div>

      <div className="portfolio-work-row__preview" aria-hidden="true">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          sizes="21rem"
          onError={(event) => {
            event.currentTarget.src = "/placeholder.svg";
          }}
        />
      </div>

      <div className="relative z-10 -mt-2 flex min-w-0 items-center justify-between gap-4 pb-5 sm:hidden">
        <div className="aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            sizes="7rem"
            onError={(event) => {
              event.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" />
      </div>
    </Link>
  );
};

export default WorkRow;
