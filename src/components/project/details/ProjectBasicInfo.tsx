interface ProjectBasicInfoProps {
  role: string;
  duration: string;
  year: string;
}

const ProjectBasicInfo = ({ role, duration, year }: ProjectBasicInfoProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[#9b87f5]">Role</h3>
        <p className="text-[rgba(153,153,153,1)]">{role}</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[#9b87f5]">Duration</h3>
        <p className="text-[rgba(153,153,153,1)]">{duration}</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[#9b87f5]">Year</h3>
        <p className="text-[rgba(153,153,153,1)]">{year}</p>
      </div>
    </div>
  );
};

export default ProjectBasicInfo;