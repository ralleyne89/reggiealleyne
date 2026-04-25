interface ProjectTeamInfoProps {
  teamSize: string;
}

const ProjectTeamInfo = ({ teamSize }: ProjectTeamInfoProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-primary mb-3">Team Size</h3>
      <p className="text-[rgba(153,153,153,1)]">{teamSize}</p>
    </div>
  );
};

export default ProjectTeamInfo;
