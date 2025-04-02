
import React from 'react';
import { Download, MessageSquare } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const ProfileActions = () => {
  const handleResumeDownload = async () => {
    try {
      const fileName = 'Reginald Alleyne Resume 2025';
      
      // First check if the file exists
      const { data: fileExists } = await supabase
        .storage
        .from('documents')
        .list('', {
          limit: 1,
          search: fileName
        });

      if (!fileExists || fileExists.length === 0) {
        toast.error('Resume is currently unavailable. Please try again later.');
        return;
      }

      // Get the actual file name from the list results
      const actualFileName = fileExists[0].name;

      const { data, error } = await supabase.storage
        .from('documents')
        .download(actualFileName);

      if (error) {
        console.error('Download error:', error);
        throw error;
      }

      // Create a URL for the downloaded blob
      const url = window.URL.createObjectURL(data);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'reggie-alleyne-resume.pdf'; // The name that will be used when saving
      
      // Append to document, click, and cleanup
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Cleanup the blob URL
      window.URL.revokeObjectURL(url);
      
      toast.success('Resume downloaded successfully!');
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast.error('Failed to download resume. Please try again later.');
    }
  };

  return (
    <div className="flex w-full gap-3 text-[13px] font-medium mt-[30px] flex-col sm:flex-row">
      <button 
        onClick={handleResumeDownload}
        className="bg-gradient-to-r from-purple/20 to-purple/30 text-white flex items-center gap-2.5 justify-center flex-1 shrink basis-[0%] px-2.5 py-4 rounded-xl transition-all duration-300 hover:from-purple/40 hover:to-purple/50 hover:shadow-glow hover:scale-[1.02] active:scale-95"
      >
        <Download className="w-4 h-4 text-purple" />
        <span>Resume</span>
      </button>
      <button className="bg-gradient-to-r from-teal/20 to-teal/30 text-white gap-2.5 flex items-center justify-center flex-1 shrink px-2.5 py-4 rounded-xl transition-all duration-300 hover:from-teal/40 hover:to-teal/50 hover:shadow-glow-teal hover:scale-[1.02] active:scale-95">
        <MessageSquare className="w-4 h-4 text-teal" />
        <span>WhatsApp Me</span>
      </button>
    </div>
  );
};

export default ProfileActions;
