import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Layers } from "lucide-react";

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
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Layers className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>
          </div>

          <div className="mb-8">
            <h3 className="text-xl text-white font-semibold mb-4">{sitemapTitle}</h3>
            <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
              <div className="flex flex-col items-center">
                {primaryItem && (
                  <>
                    <div className="bg-primary/20 text-primary px-6 py-3 rounded-lg font-medium mb-4">
                      {primaryItem.name}
                    </div>
                    <div className="w-px h-8 bg-gray-600"></div>
                  </>
                )}
                <div className={`grid grid-cols-1 md:grid-cols-${Math.min(secondaryItems.length, 4)} gap-4 w-full`}>
                  {secondaryItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center border border-[#9B87F5]"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-white font-semibold mb-4">
              {wireframesTitle}
            </h3>
            <p className="text-[rgba(200,200,200,0.9)] mb-6">
              {wireframesDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {wireframeImages.map((image, index) => (
                <div key={index}>
                  <h4 className="text-primary font-medium mb-3">
                    {image.title}
                  </h4>
                  <img
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className="rounded-lg border border-gray-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SitemapWireframes;
