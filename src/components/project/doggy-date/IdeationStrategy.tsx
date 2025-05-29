
import React from "react";
import IdeationStrategyComponent from "../common/IdeationStrategy";
import { doggyDateData } from "@/projects/doggy-date/data/doggyDateData";

const IdeationStrategy = () => {
  return <IdeationStrategyComponent {...doggyDateData.strategy} />;
};

export default IdeationStrategy;
