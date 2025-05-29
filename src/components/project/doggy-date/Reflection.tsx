
import React from "react";
import ReflectionComponent from "../common/Reflection";
import { doggyDateData } from "@/projects/doggy-date/data/doggyDateData";

const Reflection = () => {
  const reflectionData = {
    title: "Project Reflection",
    content: doggyDateData.reflection.description[0],
    insights: [
      {
        title: "Key Takeaways",
        description: doggyDateData.reflection.keyTakeaways.join(", ")
      },
      {
        title: "Future Considerations", 
        description: doggyDateData.reflection.futureConsiderations.join(", ")
      }
    ]
  };

  return <ReflectionComponent {...reflectionData} />;
};

export default Reflection;
