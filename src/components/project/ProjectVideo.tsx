import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';
interface ProjectVideoProps {
  videoUrl: string;
  projectTitle?: string;
}
const ProjectVideo = ({
  videoUrl,
  projectTitle = "Project"
}: ProjectVideoProps) => {
  // Check if the URL is a Google Drive video link
  const isGoogleDriveLink = videoUrl && videoUrl.includes('drive.google.com/file/d/');

  // Convert Google Drive view URL to embed URL
  const getEmbedUrl = (url: string) => {
    if (isGoogleDriveLink) {
      // Extract file ID from URL
      const fileIdMatch = url.match(/\/d\/(.+?)\/view/);
      if (fileIdMatch && fileIdMatch[1]) {
        return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
      }
    }
    return url;
  };
  if (!videoUrl) return null;
  const embedUrl = getEmbedUrl(videoUrl);
  return <section className="mb-16">
      <div className="bg-white">
        <div className="px-[24px]">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Project Demo
          </h2>
          
          <div className="rounded-xl p-8 px-0 py-0 bg-white">
            <div className="flex items-center gap-3 mb-6">
              
              
            </div>
            
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-200">
              <iframe src={embedUrl} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={`${projectTitle} Project Demo`}></iframe>
            </div>
            
            <p className="text-gray-700 text-sm mt-4 text-center">
              Video mockup demonstration of the {projectTitle} application
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ProjectVideo;