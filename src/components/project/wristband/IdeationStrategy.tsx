
import React from "react";
import IdeationStrategyComponent from "../common/IdeationStrategy";
import { wristbandIdeationData } from "@/projects/wristband/data/wristbandData";

const IdeationStrategy = () => {
  return <IdeationStrategyComponent {...wristbandIdeationData} />;
};

export default IdeationStrategy;
