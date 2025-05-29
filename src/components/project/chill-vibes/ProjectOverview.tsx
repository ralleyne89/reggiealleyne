
import React from "react";
import ProjectOverviewComponent from "../common/ProjectOverview";
import { chillVibesOverviewData } from "@/projects/chill-vibes/data/chillVibesData";

const ProjectOverview = () => {
  return <ProjectOverviewComponent {...chillVibesOverviewData} />;
};

export default ProjectOverview;
