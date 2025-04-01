
interface ProjectSolutionProps {
  solution: string;
}

const ProjectSolution = ({ solution }: ProjectSolutionProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#9b87f5] mb-3">Solution</h3>
      <p className="text-[rgba(153,153,153,1)]">{solution}</p>
    </div>
  );
};

export default ProjectSolution;
