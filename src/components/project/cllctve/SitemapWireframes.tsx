
import React from "react";
import SitemapWireframesComponent from "../common/SitemapWireframes";
import { cllctveSitemapData } from "@/projects/cllctve/data/cllctveData";

const SitemapWireframes = () => {
  return <SitemapWireframesComponent {...cllctveSitemapData} />;
};

export default SitemapWireframes;
