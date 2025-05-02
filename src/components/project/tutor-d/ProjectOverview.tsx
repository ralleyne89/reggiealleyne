import React from "react";
import ProjectOverviewComponent from "../common/ProjectOverview";
import { tutorDOverviewData } from "@/data/projects/tutorDData";

const ProjectOverview = () => {
  return <ProjectOverviewComponent {...tutorDOverviewData} />;
};

export default ProjectOverview;
