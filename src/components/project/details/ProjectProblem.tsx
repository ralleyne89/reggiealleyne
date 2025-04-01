
interface ProjectProblemProps {
  problem: string;
}

const ProjectProblem = ({ problem }: ProjectProblemProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#9b87f5] mb-3">Problem</h3>
      <p className="text-[rgba(153,153,153,1)]">{problem}</p>
    </div>
  );
};

export default ProjectProblem;
