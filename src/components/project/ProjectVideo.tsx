
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

interface ProjectVideoProps {
  videoUrl: string;
}

const ProjectVideo = ({ videoUrl }: ProjectVideoProps) => {
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

  return (
    <div className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Video className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">Project Demo</h2>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Tech Noir Project Demo"
            ></iframe>
          </div>
          
          <p className="text-[rgba(200,200,200,0.9)] text-sm mt-4 text-center">
            Video mockup demonstration of the Tech Noir application
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectVideo;
