import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectConclusionProps {
  conclusion: {
    impact: string;
    learnings: string;
    nextSteps: string;
  };
}

const ProjectConclusion = ({ conclusion }: ProjectConclusionProps) => {
  return (
    <div className="w-full bg-[rgba(5,5,5,1)] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-[rgba(255,255,255,0.1)]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[rgba(5,5,5,1)] px-6 text-lg text-[#9b87f5] font-medium">
              Project Conclusion
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-8 hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#9b87f5]">Impact</h3>
            <p className="text-[rgba(153,153,153,1)]">{conclusion.impact}</p>
          </div>

          <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-8 hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#9b87f5]">Key Learnings</h3>
            <p className="text-[rgba(153,153,153,1)]">{conclusion.learnings}</p>
          </div>

          <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-8 hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#9b87f5]">Next Steps</h3>
            <p className="text-[rgba(153,153,153,1)]">{conclusion.nextSteps}</p>
          </div>
        </div>

        <div className="mt-16 pb-32 flex items-center justify-center gap-4">
          <Link 
            to="/works" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#9b87f5] rounded-lg hover:bg-[#7E69AB] transition-colors duration-300"
          >
            View More Projects
          </Link>
          <a 
            href="https://prototype-url.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-[#9b87f5] border-2 border-[#9b87f5] rounded-lg hover:bg-[#9b87f5] hover:text-white transition-all duration-300 gap-2"
          >
            View Prototype <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectConclusion;