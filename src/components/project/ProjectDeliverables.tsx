
import { Eye, Check, Image } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ProjectDeliverablesProps {
  deliverables: string[];
  images: string[];
  projectId?: string | number;
}

const ProjectDeliverables = ({ deliverables, images, projectId }: ProjectDeliverablesProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Return null only if both arrays are empty
  if (!deliverables?.length && !images?.length) {
    return null;
  }
  
  // Filter out any duplicate images by their URLs
  const uniqueImages = images?.filter((image, index, self) => 
    self.findIndex(img => img === image) === index
  ) || [];
  
  // Check if this is the Doggy Date project (id: 4 or slug: doggy-date)
  const isDoggyDateProject = projectId === 4 || projectId === 'doggy-date';
  // Check if this is the Chill Vibes project (id: 7 or slug: chill-vibes-music-player)
  const isChillVibesProject = projectId === 7 || projectId === 'chill-vibes-music-player';
  
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="mb-16">
      {deliverables?.length > 0 && (
        <Card className="mb-16 bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Project Deliverables</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {deliverables.map((deliverable, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4 hover:border-primary/20 hover:bg-[rgba(155,135,245,0.05)] transition-all duration-300"
                >
                  <div className="bg-[rgba(155,135,245,0.1)] p-2 rounded-full">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-[rgba(200,200,200,0.9)]">{deliverable}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {uniqueImages.length > 0 && !isDoggyDateProject && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Image className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">Project Visuals</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {uniqueImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-video overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:border-primary"
                onClick={() => handleImageClick(image)}
              >
                <img 
                  src={image} 
                  alt={`Project visual ${index + 1}`}
                  className={`w-full h-full ${isChillVibesProject ? 'object-contain' : 'object-cover'} transition-transform duration-700 group-hover:scale-110`}
                  onError={(e) => {
                    console.error(`Image failed to load: ${image}`);
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary text-white font-medium px-4 py-2 rounded-full flex items-center gap-2">
                    <Eye size={16} />
                    View Full Size
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Modal for full-size image view */}
          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" 
              onClick={closeModal}
            >
              <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={e => e.stopPropagation()}>
                <img 
                  src={selectedImage} 
                  alt="Full size project visual" 
                  className={`w-full h-full ${isChillVibesProject ? 'object-contain' : 'object-cover'}`}
                  onError={(e) => {
                    console.error(`Modal image failed to load: ${selectedImage}`);
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <button 
                  className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center"
                  onClick={closeModal}
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDeliverables;
