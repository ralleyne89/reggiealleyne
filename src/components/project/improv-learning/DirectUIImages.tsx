import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface DirectUIImagesProps {
  handleImageClick: (imageSrc: string) => void;
}

const DirectUIImages: React.FC<DirectUIImagesProps> = ({
  handleImageClick,
}) => {
  const images = [
    {
      src: "/images/973f2c83-3ea0-443a-b54c-7f2a59dfbee0.png",
      alt: "IMPROV Learning Co-branded Landing Page Desktop View",
      title: "Co-branded Desktop Landing Page",
    }
  ];

  return (
    <motion.section
      className="mb-16"
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Interface Design
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The final co-branded design features a clean, trust-focused layout with prominent GEICO branding to establish credibility for IMPROV Learning, clear benefit communication, and strategic use of orange CTAs for maximum visibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto cursor-pointer transition-transform duration-300 group-hover:scale-105 object-contain bg-white"
                      onClick={() => handleImageClick(image.src)}
                    />
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                      <p className="font-medium">{image.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default DirectUIImages;
