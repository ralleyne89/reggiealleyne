
import React from "react";
import ReflectionComponent from "../common/Reflection";
import { techNoirData } from "@/projects/tech-noir/data/techNoirData";

const Reflection = () => {
  const reflectionData = {
    title: "Project Reflection",
    content: techNoirData.reflection.description[0],
    insights: [
      {
        title: "Key Takeaways",
        description: techNoirData.reflection.keyTakeaways.join(", ")
      },
      {
        title: "Future Considerations", 
        description: techNoirData.reflection.futureConsiderations.join(", ")
      }
    ]
  };

  return <ReflectionComponent {...reflectionData} />;
};

export default Reflection;
