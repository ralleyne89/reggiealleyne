import type { ProjectType } from "@/types/project";
import ReviewerSnapshot from "./ReviewerSnapshot";

interface CaseStudyAtGlanceProps {
  project: ProjectType;
}

const CaseStudyAtGlance = ({ project }: CaseStudyAtGlanceProps) => {
  return <ReviewerSnapshot project={project} />;
};

export default CaseStudyAtGlance;
