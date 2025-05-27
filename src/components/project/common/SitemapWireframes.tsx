import React from "react";
import { motion } from "framer-motion";
export interface SitemapItem {
  name: string;
  isPrimary?: boolean;
}
export interface WireframeImage {
  title: string;
  imageSrc: string;
  imageAlt: string;
}
export interface SitemapWireframesProps {
  title?: string;
  sitemapTitle?: string;
  sitemapItems: SitemapItem[];
  wireframesTitle?: string;
  wireframesDescription: string;
  wireframeImages: WireframeImage[];
}
const SitemapWireframes: React.FC<SitemapWireframesProps> = ({
  title = "Sitemap & Wireframes",
  sitemapTitle = "Sitemap",
  sitemapItems,
  wireframesTitle = "Wireframes",
  wireframesDescription,
  wireframeImages
}) => {
  // Find the primary item (usually "Home")
  const primaryItem = sitemapItems.find(item => item.isPrimary);
  // Filter out secondary items
  const secondaryItems = sitemapItems.filter(item => !item.isPrimary);
  return;
};
export default SitemapWireframes;