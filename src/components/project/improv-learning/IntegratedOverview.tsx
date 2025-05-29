
import React from "react";
import ProjectOverviewComponent from "../common/ProjectOverview";
import { improvLearningOverviewData } from "@/projects/improv-learning/data/improvLearningData";

const IntegratedOverview = () => {
  return <ProjectOverviewComponent {...improvLearningOverviewData} />;
};

export default IntegratedOverview;
