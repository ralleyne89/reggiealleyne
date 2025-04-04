
import React from 'react';
import { Download } from 'lucide-react';
import { toast } from 'sonner';

const ProfileActions = () => {
  const handleResumeDownload = async () => {
    try {
      // Direct link to the resume PDF
      const resumeUrl = "https://drive.google.com/uc?export=download&id=1YRYQ_4FHtQRqLIzJTQeZQZ4kHJ3D8r7n";
      
      // Create temporary link element
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'reggie-alleyne-resume.pdf'; // The name that will be used when saving
      link.target = '_blank'; // Open in new tab
      
      // Append to document, click, and cleanup
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Resume downloading...');
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast.error('Failed to download resume. Please try again later.');
    }
  };

  return (
    <div className="flex w-full gap-3 text-[13px] text-[rgba(204,204,204,1)] font-medium mt-[30px] flex-col sm:flex-row">
      <button 
        onClick={handleResumeDownload}
        className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white flex items-center gap-2.5 justify-center flex-1 shrink basis-[0%] px-2.5 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95 active:shadow-inner"
      >
        <Download className="w-4 h-4 text-white" />
        <span>Download Resume</span>
      </button>
      <button className="bg-[rgba(31,31,31,1)] gap-2.5 flex-1 shrink px-2.5 py-4 rounded-xl transition-all duration-300 hover:bg-[rgba(40,40,40,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner">
        WhatsApp Me
      </button>
    </div>
  );
};

export default ProfileActions;
