
import React from "react";
import ReflectionComponent from "../common/Reflection";
import { improvLearningReflectionData } from "@/projects/improv-learning/data/improvLearningData";

const Reflection = () => {
  return <ReflectionComponent {...improvLearningReflectionData} />;
};

export default Reflection;
