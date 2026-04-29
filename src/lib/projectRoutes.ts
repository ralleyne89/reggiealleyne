import type { ProjectType } from "@/types/project";

export const SITE_ORIGIN = "https://reggiealleyne.lovable.app";

export const CLLCTVE_PROJECT_CANONICAL_SLUG = "cllctve-platform";
export const CLLCTVE_PROJECT_CANONICAL_PATH = `/project/${CLLCTVE_PROJECT_CANONICAL_SLUG}`;

export const CLLCTVE_PROJECT_ROUTE_ALIASES = [
  "/project/1",
  "/project/cllctve",
];

const projectRouteAliases: Record<string, string> = {
  "1": CLLCTVE_PROJECT_CANONICAL_SLUG,
  cllctve: CLLCTVE_PROJECT_CANONICAL_SLUG,
};

export const getCanonicalProjectRouteSlug = (routeSlug?: string) => {
  const normalizedSlug = routeSlug?.trim().replace(/^\/+|\/+$/g, "");

  if (!normalizedSlug) {
    return undefined;
  }

  return projectRouteAliases[normalizedSlug] || normalizedSlug;
};

export const getProjectRouteSegment = (
  project: Pick<ProjectType, "id" | "slug">,
) => getCanonicalProjectRouteSlug(project.slug || String(project.id)) || String(project.id);

export const getProjectPath = (project: Pick<ProjectType, "id" | "slug">) =>
  `/project/${getProjectRouteSegment(project)}`;

export const getProjectCanonicalUrl = (
  project: Pick<ProjectType, "id" | "slug">,
) => `${SITE_ORIGIN}${getProjectPath(project)}`;
