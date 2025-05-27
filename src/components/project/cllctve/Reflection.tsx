
import React from "react";
import ReflectionComponent from "../common/Reflection";
import { cllctveReflectionData } from "@/projects/cllctve/data/cllctveData";

const Reflection = () => {
  return <ReflectionComponent {...cllctveReflectionData} />;
};

export default Reflection;
