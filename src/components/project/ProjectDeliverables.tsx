
interface ProjectDeliverablesProps {
  deliverables: string[];
  images: string[];
  projectId?: string | number;
}

const ProjectDeliverables = ({ deliverables, images, projectId }: ProjectDeliverablesProps) => {
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
  
  return (
    <div className="mb-16">
      {deliverables?.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((deliverable, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4"
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
          <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Project Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {uniqueImages.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-video overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:border-[#9b87f5]"
              >
                <img 
                  src={image} 
                  alt={`Project visual ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`Image failed to load: ${image}`);
                    // Replace with a placeholder image
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDeliverables;
