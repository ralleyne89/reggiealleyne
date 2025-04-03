
import { Eye } from 'lucide-react';
import { useState } from 'react';

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
  
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="mb-16">
      {deliverables?.length > 0 && (
        <div className="mb-16 bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((deliverable, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-[rgba(25,25,25,0.8)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4 hover:border-[rgba(155,135,245,0.3)] hover:shadow-[0_0_15px_rgba(155,135,245,0.15)] transition-all duration-300"
              >
                <div className="h-2 w-2 rounded-full bg-[#9b87f5]"></div>
                <span className="text-[rgba(230,230,230,1)]">{deliverable}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {uniqueImages.length > 0 && !isDoggyDateProject && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Project Visuals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {uniqueImages.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-video overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] group cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:border-[#9b87f5]"
                onClick={() => handleImageClick(image)}
              >
                <img 
                  src={image} 
                  alt={`Project visual ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    console.error(`Image failed to load: ${image}`);
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeModal}>
              <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={e => e.stopPropagation()}>
                <img 
                  src={selectedImage} 
                  alt="Full size project visual" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.error(`Modal image failed to load: ${selectedImage}`);
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <button 
                  className="absolute top-4 right-4 bg-[#9b87f5] text-white w-10 h-10 rounded-full flex items-center justify-center"
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
