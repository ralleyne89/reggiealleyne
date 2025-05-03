import React from "react";
import ReflectionComponent from "../common/Reflection";
import { symptomCheckrReflectionData } from "@/projects/symptom-checkr/data/symptomCheckrData";

const Reflection = () => {
  return <ReflectionComponent {...symptomCheckrReflectionData} />;
};

export default Reflection;
