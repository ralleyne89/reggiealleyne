
import { useEffect, useState } from "react";
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
import { SymptomCheckrCaseStudy } from "@/projects/symptom-checkr";
import { TutorDCaseStudy } from "@/projects/tutor-d";
import { TechNoirCaseStudy } from "@/projects/tech-noir";
import { CllctveCaseStudy } from "@/projects/cllctve";
import { BobsBigBreakCaseStudy } from "@/projects/bobs-big-break";
import { ChillVibesCaseStudy } from "@/projects/chill-vibes";
import { WristbandCaseStudy } from "@/projects/wristband";
import { ProjectType } from "@/types/project";

const Project = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [showHeaderImage, setShowHeaderImage] = useState(true);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

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
    error,
  } = useQuery({
    queryKey: ["project", slug],
    queryFn: async () => {
      try {
        // Determine if slug is numeric or string
        const isNumeric = !isNaN(Number(slug));
        console.log(
          `Fetching project with ${isNumeric ? "ID" : "slug"}: ${slug}`
        );
        const project = await getProject(isNumeric ? Number(slug) : slug);
        console.log("Fetched project:", project);

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
    retry: 1,
  });

  useEffect(() => {
    // Special handling for projects that might need to hide the header image
    if (project?.title === "Bob's Big Break") {
      setShowHeaderImage(true);
    }

    // Check if this is a project with a full case study
    if (
      project?.slug === "symptom-checkr" ||
      project?.slug === "tutor-d" ||
      project?.slug === "tech-noir" ||
      project?.slug === "cllctve-platform" ||
      project?.slug === "bobs-big-break" ||
      project?.slug === "chill-vibes-music-player"
    ) {
      setShowCaseStudy(true);
    } else {
      setShowCaseStudy(false);
    }
  }, [project]);

  const renderCaseStudy = () => {
    switch (slug) {
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
    return (
      <div className="min-h-screen bg-white text-text-primary pt-24 px-4">
        <div className="container mx-auto">
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
      </div>
    );
  }

  // Handle error state
  if (error || !project) {
    console.error("Project error:", error);
    return (
      <div className="min-h-screen bg-white text-text-primary pt-24 px-4">
        <div className="container mx-auto">
          <p className="text-red-500 mb-4">
            Error loading project:{" "}
            {error instanceof Error ? error.message : "Unknown error"}
          </p>
          <button
            onClick={() => navigate("/works")}
            className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Return to Works
          </button>
        </div>
      </div>
    );
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
    conclusion = { impact: "", learnings: "", nextSteps: "" },
    technicalHighlights,
    keyAchievements,
  } = project as ProjectType;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white text-text-primary min-h-screen"
    >
      {showHeaderImage && (
        <ProjectHeader
          image={image}
          tags={tags}
          title={title}
          description={description}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 py-12">
        {showCaseStudy ? (
          <>
            {renderCaseStudy()}
          </>
        ) : (
          <>
            <ProjectDetails
              role={role}
              duration={duration}
              year={year}
              teamSize={teamSize}
              methodologies={methodologies}
              githubUrl={githubUrl}
              liveUrl={liveUrl}
              prototypeUrl={prototypeUrl}
              summary={summary}
              problem={problem}
              solution={solution}
              projectSlug={project.slug}
            />

            <ProjectProcess
              challenge={challenge}
              problem={problem}
              process={process}
              methodologies={methodologies}
              technicalHighlights={technicalHighlights}
              keyAchievements={keyAchievements}
            />

            <ProjectDeliverables
              deliverables={deliverables}
              images={images}
              projectId={project.slug || project.id}
            />

            {videoUrl && (
              <ProjectVideo videoUrl={videoUrl} projectTitle={title} />
            )}
          </>
        )}
      </div>

      {/* Only show ProjectConclusion for non-case study projects */}
      {!showCaseStudy && (
        <ProjectConclusion
          conclusion={conclusion}
          liveUrl={liveUrl}
          prototypeUrl={prototypeUrl}
          projectSlug={project.slug}
        />
      )}

      <Footer />
    </motion.div>
  );
};

export default Project;
