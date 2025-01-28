interface ProjectProcessProps {
  challenge: string;
  process: string[];
}

const ProjectProcess = ({ challenge, process }: ProjectProcessProps) => {
  return (
    <>
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[rgba(230,230,230,1)]">The Challenge</h2>
        <p className="text-[rgba(153,153,153,1)] max-w-3xl">{challenge}</p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((step, index) => (
            <div 
              key={index}
              className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] transition-all duration-300"
            >
              <span className="text-[#9b87f5] text-sm mb-2 block">Step {index + 1}</span>
              <h3 className="text-[rgba(230,230,230,1)] font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectProcess;