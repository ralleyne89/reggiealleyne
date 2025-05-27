
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

  return (
    <motion.section
      className="mb-20 bg-white py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sitemap */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
              {sitemapTitle}
            </h3>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <div className="flex flex-col items-center space-y-6">
                {primaryItem && (
                  <>
                    <div className="bg-primary/10 border border-primary/20 text-primary px-6 py-3 rounded-xl font-semibold text-lg">
                      {primaryItem.name}
                    </div>
                    <div className="w-px h-8 bg-gray-400"></div>
                  </>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {secondaryItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white border border-gray-200 text-gray-900 px-4 py-3 rounded-xl font-medium text-center hover:border-primary/30 hover:bg-gray-50 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {item.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Wireframes */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
              {wireframesTitle}
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {wireframesDescription}
            </p>

            <div className="space-y-8">
              {wireframeImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-gray-900">
                    {image.title}
                  </h4>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-primary/30 transition-colors duration-300">
                    <img
                      src={image.imageSrc}
                      alt={image.imageAlt}
                      className="w-full rounded-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SitemapWireframes;
