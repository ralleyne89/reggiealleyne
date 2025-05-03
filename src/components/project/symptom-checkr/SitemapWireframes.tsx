import React from "react";
import SitemapWireframesComponent from "../common/SitemapWireframes";
import { symptomCheckrSitemapData } from "@/projects/symptom-checkr/data/symptomCheckrData";

const SitemapWireframes = () => {
  return <SitemapWireframesComponent {...symptomCheckrSitemapData} />;
};

export default SitemapWireframes;
