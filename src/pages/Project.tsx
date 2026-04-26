import { lazy, Suspense, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import Footer from "@/components/layout/Footer";
import { getProject } from "@/services/api";
import { motion } from "framer-motion";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectDetails from "@/components/project/ProjectDetails";
import ProjectProcess from "@/components/project/ProjectProcess";
import ProjectDeliverables from "@/components/project/ProjectDeliverables";
import ProjectVideo from "@/components/project/ProjectVideo";
import ProjectConclusion from "@/components/project/ProjectConclusion";
import CaseStudyAtGlance from "@/components/project/CaseStudyAtGlance";
import { ProjectType } from "@/types/project";

const SymptomCheckrCaseStudy = lazy(() =>
  import("@/projects/symptom-checkr").then((module) => ({
    default: module.SymptomCheckrCaseStudy,
  })),
);
const TutorDCaseStudy = lazy(() =>
  import("@/projects/tutor-d").then((module) => ({
    default: module.TutorDCaseStudy,
  })),
);
const TechNoirCaseStudy = lazy(() =>
  import("@/projects/tech-noir").then((module) => ({
    default: module.TechNoirCaseStudy,
  })),
);
const CllctveCaseStudy = lazy(() =>
  import("@/projects/cllctve").then((module) => ({
    default: module.CllctveCaseStudy,
  })),
);
const BobsBigBreakCaseStudy = lazy(() =>
  import("@/projects/bobs-big-break").then((module) => ({
    default: module.BobsBigBreakCaseStudy,
  })),
);
const ChillVibesCaseStudy = lazy(() =>
  import("@/projects/chill-vibes").then((module) => ({
    default: module.ChillVibesCaseStudy,
  })),
);
const WristbandCaseStudy = lazy(() =>
  import("@/projects/wristband").then((module) => ({
    default: module.WristbandCaseStudy,
  })),
);
const ImprovLearningCaseStudy = lazy(() =>
  import("@/projects/improv-learning").then((module) => ({
    default: module.ImprovLearningCaseStudy,
  })),
);
const DoggyDateCaseStudy = lazy(() =>
  import("@/projects/doggy-date").then((module) => ({
    default: module.DoggyDateCaseStudy,
  })),
);
const LitmusAICaseStudy = lazy(() =>
  import("@/projects/litmus-ai").then((module) => ({
    default: module.LitmusAICaseStudy,
  })),
);
const VaultJSValidateCaseStudy = lazy(() =>
  import("@/projects/vaultjs-validate").then((module) => ({
    default: module.VaultJSValidateCaseStudy,
  })),
);
const ScentStackCaseStudy = lazy(() =>
  import("@/projects/scent-stack").then((module) => ({
    default: module.ScentStackCaseStudy,
  })),
);

const CaseStudyFallback = () => (
  <div className="mx-auto max-w-7xl px-6 py-12">
    <div className="h-48 animate-pulse rounded-2xl bg-gray-100" />
  </div>
);

const caseStudySlugs = new Set([
  "symptom-checkr",
  "tutor-d",
  "tech-noir",
  "cllctve-platform",
  "bobs-big-break",
  "chill-vibes-music-player",
  "wristband",
  "improv-learning",
  "doggy-date",
  "litmus-ai",
  "vaultjs-validate",
  "scent-stack",
]);

const Project = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const navigate = useNavigate();
  const [showHeaderImage, setShowHeaderImage] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);

    // Handle invalid slug
    if (!slug) {
      toast.error("Project ID is missing");
      navigate("/works");
      return;
    }
  }, [slug, navigate]);

  // Fetch project data
  const {
    data: project,
    isLoading,
    error
  } = useQuery({
    queryKey: ["project", slug],
    queryFn: async () => {
      try {
        // Determine if slug is numeric or string
        const isNumeric = !isNaN(Number(slug));
        const project = await getProject(isNumeric ? Number(slug) : slug);
        if (!project) {
          toast.error(`Project not found: ${slug}`);
          throw new Error(`Project not found: ${slug}`);
        }
        return project;
      } catch (err) {
        console.error("Error fetching project:", err);
        throw err;
      }
    },
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

    const isNumericSlug = !Number.isNaN(Number(slug));
    if (isNumericSlug && slug !== project.slug) {
      navigate(`/project/${project.slug}`, { replace: true });
    }
  }, [slug, project?.slug, navigate]);

  const renderCaseStudy = () => {
    const currentSlug = project?.slug || slug;

    switch (currentSlug) {
      case "tutor-d":
        return <TutorDCaseStudy />;
      case "cllctve-platform":
        return <CllctveCaseStudy />;
      case "symptom-checkr":
        return <SymptomCheckrCaseStudy />;
      case "tech-noir":
        return <TechNoirCaseStudy />;
      case "bobs-big-break":
        return <BobsBigBreakCaseStudy />;
      case "chill-vibes-music-player":
        return <ChillVibesCaseStudy />;
      case "wristband":
        return <WristbandCaseStudy />;
      case "improv-learning":
        return <ImprovLearningCaseStudy />;
      case "doggy-date":
        return <DoggyDateCaseStudy />;
      case "litmus-ai":
        return <LitmusAICaseStudy />;
      case "vaultjs-validate":
        return <VaultJSValidateCaseStudy />;
      case "scent-stack":
        return <ScentStackCaseStudy />;
      default:
        return (
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Case Study Coming Soon
              </h1>
              <p className="text-gray-600">
                This case study is currently being developed.
              </p>
            </div>
          </div>
        );
    }
  };

  // Handle loading state
  if (isLoading) {
    return <div className="min-h-screen bg-white px-4 pt-24 text-text-primary">
        <div className="mx-auto w-full max-w-7xl">
          <div className="animate-pulse">
            <div className="h-[60vh] bg-gray-200 rounded-lg mb-12"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-32 bg-gray-200 rounded"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
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
          <button onClick={() => navigate("/works")} className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            Return to Works
          </button>
        </div>
      </div>;
  }

  // Destructure project properties
  const {
    title,
    description,
    image,
    tags = [],
    role,
    duration,
    year,
    teamSize,
    methodologies,
    summary,
    problem,
    solution,
    challenge,
    process,
    deliverables = [],
    images = [],
    videoUrl,
    githubUrl,
    liveUrl,
    prototypeUrl,
    conclusion = {
      impact: "",
      learnings: "",
      nextSteps: ""
    },
    technicalHighlights,
    keyAchievements
  } = project as ProjectType;
  const projectSlug = project.slug || slug || "";
  const showCaseStudy = caseStudySlugs.has(projectSlug);

  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.3
  }} className="min-h-screen bg-white pb-24 text-text-primary md:pb-0">
      {showHeaderImage && <ProjectHeader image={image} tags={tags} title={title} description={description} role={role} duration={duration} year={year} teamSize={teamSize} githubUrl={githubUrl} liveUrl={liveUrl} prototypeUrl={prototypeUrl} projectSlug={project.slug} />}

      <div className="w-full">
        <CaseStudyAtGlance project={project} />
        {showCaseStudy ? <>
            <Suspense fallback={<CaseStudyFallback />}>
              {renderCaseStudy()}
            </Suspense>
          </> : <>
            <ProjectDetails role={role} duration={duration} year={year} teamSize={teamSize} methodologies={methodologies} githubUrl={githubUrl} liveUrl={liveUrl} prototypeUrl={prototypeUrl} summary={summary} problem={problem} solution={solution} projectSlug={project.slug} />

            <ProjectProcess challenge={challenge} problem={problem} process={process} methodologies={methodologies} technicalHighlights={technicalHighlights} keyAchievements={keyAchievements} />

            <ProjectDeliverables deliverables={deliverables} images={images} projectId={project.slug || project.id} />

            {videoUrl && <ProjectVideo videoUrl={videoUrl} projectTitle={title} />}
          </>}
      </div>

      {/* Only show ProjectConclusion for non-case study projects */}
      {!showCaseStudy && <ProjectConclusion conclusion={conclusion} liveUrl={liveUrl} prototypeUrl={prototypeUrl} projectSlug={project.slug} />}

      <Footer />
    </motion.div>;
};
export default Project;
