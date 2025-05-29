
import React from "react";
import ProjectOverviewComponent from "../common/ProjectOverview";
import { doggyDateData } from "@/projects/doggy-date/data/doggyDateData";

const IntegratedOverview = () => {
  return <ProjectOverviewComponent {...doggyDateData.overview} />;
};

export default IntegratedOverview;
