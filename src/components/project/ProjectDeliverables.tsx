
interface ProjectDeliverablesProps {
  deliverables: string[];
  images: string[];
}

const ProjectDeliverables = ({ deliverables, images }: ProjectDeliverablesProps) => {
  if (!deliverables.length && !images.length) {
    return null;
  }
  
  return (
    <>
      {deliverables.length > 0 && (
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

      {images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-video overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)]"
            >
              <img 
                src={image} 
                alt={`Project visual ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectDeliverables;
