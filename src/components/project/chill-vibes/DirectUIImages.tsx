
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
interface DirectUIImagesProps {
  handleImageClick: (imageSrc: string) => void;
}
const DirectUIImages: React.FC<DirectUIImagesProps> = ({
  handleImageClick
}) => {
  const images = [{
    src: "/images/a6e65372-edc9-4098-aa00-82ee5a49def0.png",
    alt: "Chill Vibes Music Player Interface",
    title: "Main Interface"
  }, {
    src: "/images/668e3d64-e2f9-4f31-9499-72d8db2269f0.png",
    alt: "Chill Vibes Login Page",
    title: "Login Page"
  }];
  return <motion.section className="mb-16" initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} viewport={{
    once: true,
    amount: 0.3
  }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Interface Design</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The final interface design emphasizes simplicity and elegance, creating an immersive music experience with intuitive controls and beautiful visual aesthetics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {images.map((image, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={image.src} alt={image.alt} className="w-full h-auto cursor-pointer transition-transform duration-300 group-hover:scale-105 object-contain bg-gray-900" onClick={() => handleImageClick(image.src)} />
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                      <p className="font-medium">{image.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </motion.section>;
};
export default DirectUIImages;
