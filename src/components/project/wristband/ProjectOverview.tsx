
import React from "react";
import ProjectOverviewComponent from "../common/ProjectOverview";
import { wristbandOverviewData } from "@/projects/wristband/data/wristbandData";

const ProjectOverview = () => {
  return <ProjectOverviewComponent {...wristbandOverviewData} />;
};

export default ProjectOverview;
