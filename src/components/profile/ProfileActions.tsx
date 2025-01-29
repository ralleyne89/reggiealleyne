import React from 'react';
import { Download } from 'lucide-react';
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

      const { data, error } = await supabase.storage
        .from('documents')
        .download(fileName);

      if (error) {
        throw error;
      }

      // Create a URL for the downloaded blob
      const url = window.URL.createObjectURL(data);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'reggie-alleyne-resume.pdf';
      
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
    <div className="flex w-full gap-3 text-[13px] text-[rgba(204,204,204,1)] font-medium mt-[30px] flex-col sm:flex-row">
      <button 
        onClick={handleResumeDownload}
        className="bg-[rgba(31,31,31,1)] flex items-center gap-2.5 justify-center flex-1 shrink basis-[0%] px-2.5 py-4 rounded-xl transition-all duration-300 hover:bg-[rgba(40,40,40,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner"
      >
        <Download className="w-4 h-4 text-[#916CE7]" />
        <span>Resume</span>
      </button>
      <button className="bg-[rgba(31,31,31,1)] gap-2.5 flex-1 shrink px-2.5 py-4 rounded-xl transition-all duration-300 hover:bg-[rgba(40,40,40,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner">
        WhatsApp Me
      </button>
    </div>
  );
};

export default ProfileActions;