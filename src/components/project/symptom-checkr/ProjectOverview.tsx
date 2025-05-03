import React from "react";
import ProjectOverviewComponent from "../common/ProjectOverview";
import { symptomCheckrOverviewData } from "@/projects/symptom-checkr/data/symptomCheckrData";

const ProjectOverview = () => {
  return <ProjectOverviewComponent {...symptomCheckrOverviewData} />;
};

export default ProjectOverview;
