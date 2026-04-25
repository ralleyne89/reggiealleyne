
import { ProjectType } from '@/types/project';
import BentoFeaturedProjects from '@/components/home/BentoFeaturedProjects';

interface FeaturedProjectsProps {
  projects?: ProjectType[];
  isLoading: boolean;
  error: Error | null;
}

const FeaturedProjects = ({ projects, isLoading, error }: FeaturedProjectsProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[rgba(16,16,16,1)] border w-full p-5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-primary/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
      <BentoFeaturedProjects 
        projects={projects}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default FeaturedProjects;
