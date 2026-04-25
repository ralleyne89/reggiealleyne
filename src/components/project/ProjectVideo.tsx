import { EditorialSection } from "./EditorialProjectLayout";

interface ProjectVideoProps {
  videoUrl: string;
  projectTitle?: string;
}

const ProjectVideo = ({
  videoUrl,
  projectTitle = "Project",
}: ProjectVideoProps) => {
  const isGoogleDriveLink = videoUrl.includes("drive.google.com/file/d/");

  const getEmbedUrl = (url: string) => {
    if (isGoogleDriveLink) {
      const fileIdMatch = url.match(/\/d\/(.+?)\/view/);
      if (fileIdMatch?.[1]) {
        return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
      }
    }

    return url;
  };

  if (!videoUrl) return null;

  return (
    <EditorialSection
      eyebrow="Demo"
      title="See it in motion."
      description={`A short video walkthrough of the ${projectTitle} experience.`}
      className="border-b border-gray-200"
    >
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-sm">
        <div className="aspect-video w-full">
          <iframe
            src={getEmbedUrl(videoUrl)}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${projectTitle} project demo`}
          />
        </div>
      </div>
    </EditorialSection>
  );
};

export default ProjectVideo;
