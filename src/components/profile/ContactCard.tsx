
import React, { useState } from 'react';
import { Download, Handshake, Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from './ContactForm';
import type { ContactFormData } from './ContactForm';
import { toast } from 'sonner';

const ContactCard = () => {
  const { toast: uiToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleEmailMe = async (formData: ContactFormData) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });
      
      if (error) throw error;

      uiToast({
        title: "Email Sent!",
        description: "I'll get back to you as soon as possible.",
      });
      setIsOpen(false);
    } catch (error) {
      console.error('Error sending email:', error);
      uiToast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send email. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
    <div className="bg-[rgba(16,16,16,1)] border w-full p-5 rounded-xl border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="flex w-full flex-col items-center mb-6">
        <div className="self-stretch flex items-center justify-center gap-2 text-sm text-[rgba(153,153,153,1)] font-medium px-2.5 py-1.5">
          <Handshake className="w-4 h-4 text-[#916CE7]" />
          <span>Let's Work Together</span>
        </div>
        <div className="text-[rgba(230,230,230,1)] text-xl font-semibold">
          Let's Make Magic Happen Together!
        </div>
      </div>
      <div className="w-full space-y-3">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button className="bg-[rgba(25,25,25,1)] w-full gap-2.5 p-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[rgba(30,30,30,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner">
              <Mail className="w-4 h-4 text-[#916CE7]" />
              <span className="text-[rgba(204,204,204,1)] font-medium">Email Me</span>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Send me a message</DialogTitle>
            </DialogHeader>
            <ContactForm onSubmit={handleEmailMe} isLoading={isLoading} />
          </DialogContent>
        </Dialog>
        <button 
          onClick={handleResumeDownload}
          className="bg-[rgba(25,25,25,1)] w-full gap-2.5 p-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[rgba(30,30,30,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner"
        >
          <Download className="w-4 h-4 text-[#916CE7]" />
          <span className="text-[rgba(204,204,204,1)] font-medium">Download Resume</span>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
