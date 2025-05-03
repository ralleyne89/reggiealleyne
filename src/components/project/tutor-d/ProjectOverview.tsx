import React from "react";
import ProjectOverviewComponent from "@/projects/shared/ProjectOverview";
import { tutorDOverviewData } from "@/projects/tutor-d/data/tutorDData";

const ProjectOverview = () => {
  return <ProjectOverviewComponent {...tutorDOverviewData} />;
};

export default ProjectOverview;
