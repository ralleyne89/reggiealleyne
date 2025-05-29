
import React from "react";
import IdeationStrategyComponent from "../common/IdeationStrategy";
import { techNoirData } from "@/projects/tech-noir/data/techNoirData";

const IdeationStrategy = () => {
  return <IdeationStrategyComponent {...techNoirData.strategy} />;
};

export default IdeationStrategy;
