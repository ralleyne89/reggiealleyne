
import React from "react";
import ProjectOverviewComponent from "../common/ProjectOverview";
import { techNoirData } from "@/projects/tech-noir/data/techNoirData";

const IntegratedOverview = () => {
  return <ProjectOverviewComponent {...techNoirData.overview} />;
};

export default IntegratedOverview;
