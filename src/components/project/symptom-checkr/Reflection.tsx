import React from "react";
import ReflectionComponent from "../common/Reflection";
import { symptomCheckrReflectionData } from "@/data/projects/symptomCheckrData";

const Reflection = () => {
  return <ReflectionComponent {...symptomCheckrReflectionData} />;
};

export default Reflection;
