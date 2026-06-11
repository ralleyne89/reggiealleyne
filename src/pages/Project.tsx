import { useEffect, useState } from "react";
import { scrollToTop } from "@/components/layout/SmoothScroll";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import Footer from "@/components/layout/Footer";
import { getProject } from "@/services/api";
import {
  getPredefinedProjectById,
  getPredefinedProjectBySlug,
} from "@/services/api/predefinedProjects";
import { motion } from "framer-motion";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectEssentials from "@/components/project/ProjectEssentials";
import ProjectNarrative from "@/components/project/ProjectNarrative";
import ProjectAudienceJourney from "@/components/project/ProjectAudienceJourney";
import ProjectInterfaceEvidence from "@/components/project/ProjectInterfaceEvidence";
import { ProjectType } from "@/types/project";
import {
  getCanonicalProjectRouteSlug,
  getProjectCanonicalUrl,
  getProjectPath,
} from "@/lib/projectRoutes";

const setMetaContent = (
  selector: string,
  createElement: () => HTMLMetaElement,
  value: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  const created = !element;

  if (!element) {
    element = createElement();
    document.head.appendChild(element);
  }

  const previousContent = element.getAttribute("content");
  element.setAttribute("content", value);

  return () => {
    if (created) {
      element?.remove();
      return;
    }

    if (previousContent === null) {
      element?.removeAttribute("content");
      return;
    }

    element?.setAttribute("content", previousContent);
  };
};

const setCanonicalHref = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  const created = !element;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  const previousHref = element.getAttribute("href");
  element.setAttribute("href", href);

  return () => {
    if (created) {
      element?.remove();
      return;
    }

    if (previousHref === null) {
      element?.removeAttribute("href");
      return;
    }

    element?.setAttribute("href", previousHref);
  };
};

const createMetaByName = (name: string) => {
  const element = document.createElement("meta");
  element.setAttribute("name", name);
  return element;
};

const createMetaByProperty = (property: string) => {
  const element = document.createElement("meta");
  element.setAttribute("property", property);
  return element;
};

const Project = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const navigate = useNavigate();
  const [showHeaderImage, setShowHeaderImage] = useState(true);
  const canonicalRouteSlug = getCanonicalProjectRouteSlug(slug);
  const getLocalProjectPlaceholder = () => {
    const lookupSlug = canonicalRouteSlug || slug;
    if (!lookupSlug) return undefined;

    const numericId = Number(lookupSlug);
    if (!Number.isNaN(numericId)) {
      return getPredefinedProjectById(numericId) || undefined;
    }

    return getPredefinedProjectBySlug(lookupSlug) || undefined;
  };

  useEffect(() => {
    scrollToTop();

    // Handle invalid slug
    if (!slug) {
      toast.error("Project ID is missing");
      navigate("/work");
      return;
    }
  }, [slug, navigate]);

  useEffect(() => {
    if (!slug || !canonicalRouteSlug || slug === canonicalRouteSlug) return;

    navigate(`/project/${canonicalRouteSlug}`, { replace: true });
  }, [slug, canonicalRouteSlug, navigate]);

  // Fetch project data
  const {
    data: project,
    isLoading,
    error
  } = useQuery({
    queryKey: ["project", canonicalRouteSlug || slug],
    queryFn: async () => {
      try {
        const lookupSlug = canonicalRouteSlug || slug;
        if (!lookupSlug) {
          throw new Error("Project ID is missing");
        }

        // Determine if slug is numeric or string
        const isNumeric = !isNaN(Number(lookupSlug));
        const project = await getProject(isNumeric ? Number(lookupSlug) : lookupSlug);
        if (!project) {
          toast.error(`Project not found: ${lookupSlug}`);
          throw new Error(`Project not found: ${lookupSlug}`);
        }
        return project;
      } catch (err) {
        console.error("Error fetching project:", err);
        throw err;
      }
    },
    enabled: Boolean(slug),
    placeholderData: getLocalProjectPlaceholder,
    retry: 1
  });
  useEffect(() => {
    // Special handling for projects that might need to hide the header image
    if (project?.title === "Bob's Big Break") {
      setShowHeaderImage(true);
    }
  }, [project]);

  useEffect(() => {
    if (!slug || !project?.slug) return;

    const currentPath = `/project/${slug}`;
    const canonicalPath = getProjectPath(project);
    const isNumericSlug = !Number.isNaN(Number(slug));
    const isAliasedSlug = canonicalRouteSlug !== slug;

    if ((isNumericSlug || isAliasedSlug) && currentPath !== canonicalPath) {
      navigate(canonicalPath, { replace: true });
    }
  }, [slug, canonicalRouteSlug, project, navigate]);

  useEffect(() => {
    if (!project) return;

    const title = `${project.title} | Reggie Alleyne`;
    const description =
      project.fullDescription || project.description || project.summary;
    const canonicalUrl = getProjectCanonicalUrl(project);
    const previousTitle = document.title;
    const restoreMetadata = [
      setCanonicalHref(canonicalUrl),
      setMetaContent(
        'meta[name="description"]',
        () => createMetaByName("description"),
        description,
      ),
      setMetaContent(
        'meta[property="og:title"]',
        () => createMetaByProperty("og:title"),
        title,
      ),
      setMetaContent(
        'meta[property="og:description"]',
        () => createMetaByProperty("og:description"),
        description,
      ),
      setMetaContent(
        'meta[property="og:url"]',
        () => createMetaByProperty("og:url"),
        canonicalUrl,
      ),
      setMetaContent(
        'meta[name="twitter:title"]',
        () => createMetaByName("twitter:title"),
        title,
      ),
      setMetaContent(
        'meta[name="twitter:description"]',
        () => createMetaByName("twitter:description"),
        description,
      ),
    ];

    document.title = title;

    return () => {
      document.title = previousTitle;
      restoreMetadata.forEach((restore) => restore());
    };
  }, [project]);

  // Handle loading state
  if (isLoading) {
    return <div className="min-h-screen bg-white px-4 pt-24 text-text-primary">
        <div className="mx-auto w-full max-w-7xl">
          <div className="animate-pulse rounded-2xl border border-gray-200 bg-slate-50 p-5 sm:p-8">
            <div className="mb-5 h-4 w-28 rounded-full bg-slate-200"></div>
            <div className="mb-4 h-10 w-full max-w-2xl rounded bg-slate-200"></div>
            <div className="mb-8 h-4 w-full max-w-xl rounded bg-slate-200"></div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.2fr_0.8fr]">
              <div className="min-h-[18rem] rounded-xl bg-slate-200"></div>
              <div className="space-y-4">
                <div className="h-24 rounded-xl bg-slate-200"></div>
                <div className="h-24 rounded-xl bg-slate-200"></div>
                <div className="h-24 rounded-xl bg-slate-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }

  // Handle error state
  if (error || !project) {
    console.error("Project error:", error);
    return <div className="min-h-screen bg-white px-4 pt-24 text-text-primary">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-red-500 mb-4">
            Error loading project:{" "}
            {error instanceof Error ? error.message : "Unknown error"}
          </p>
          <button onClick={() => navigate("/work")} className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            Return to Work
          </button>
        </div>
      </div>;
  }

  // Destructure project properties
  const {
    title,
    description,
    image,
    year,
  } = project as ProjectType;
  const typeLabel = project.category || project.tags?.[0] || "Project";

  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.3
  }} className="min-h-screen bg-white pb-24 text-text-primary md:pb-0">
      {showHeaderImage && (
        <ProjectHeader
          image={image}
          title={title}
          description={description}
          year={year}
          typeLabel={typeLabel}
        />
      )}

      <div className="w-full">
        <ProjectEssentials project={project as ProjectType} />
        <ProjectAudienceJourney project={project as ProjectType} />
        <ProjectNarrative project={project as ProjectType} />
        <ProjectInterfaceEvidence project={project as ProjectType} />
      </div>

      <Footer />
    </motion.div>;
};
export default Project;
