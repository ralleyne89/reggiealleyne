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
  wireframeImages,
}) => {
  // Find the primary item (usually "Home")
  const primaryItem = sitemapItems.find((item) => item.isPrimary);
  // Filter out secondary items
  const secondaryItems = sitemapItems.filter((item) => !item.isPrimary);

  return (
    <section className="py-8 bg-gray-50 rounded-xl">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sitemap */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
              {sitemapTitle}
            </h3>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
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
                    <div
                      key={index}
                      className="bg-white border border-gray-200 text-gray-900 px-4 py-3 rounded-xl font-medium text-center hover:border-primary/30 hover:bg-gray-50 transition-colors duration-300"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Wireframes */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
              {wireframesTitle}
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {wireframesDescription}
            </p>

            <div className="space-y-8">
              {wireframeImages.map((image, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {image.title}
                  </h4>
                  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-primary/30 transition-colors duration-300">
                    <img
                      src={image.imageSrc}
                      alt={image.imageAlt}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SitemapWireframes;
