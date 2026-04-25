import React, { useState } from "react";
import { Download, Handshake, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import type { ContactFormData } from "./ContactForm";
import { toast } from "sonner";

const ContactCard = () => {
  const { toast: uiToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleEmailMe = async (formData: ContactFormData) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: formData,
        }
      );

      if (error) throw error;

      uiToast({
        title: "Email Sent!",
        description: "I'll get back to you as soon as possible.",
      });
      setIsOpen(false);
    } catch (error) {
      console.error("Error sending email:", error);
      uiToast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send email. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResumeDownload = () => {
    try {
      // Using the fetch API to download the file
      fetch(
        "https://drive.google.com/uc?export=download&id=1pK4gD27rABnUArntEHFJLVUu3WyCLBQb"
      )
        .then((response) => response.blob())
        .then((blob) => {
          // Create a blob URL for the file
          const url = window.URL.createObjectURL(blob);
          // Create a temporary link element
          const link = document.createElement("a");
          link.href = url;
          link.download = "Reggie_Alleyne_Resume.pdf"; // Set the filename
          document.body.appendChild(link);
          link.click(); // Trigger the download
          // Clean up
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          toast.success("Resume downloaded successfully!");
        })
        .catch((error) => {
          console.error("Error downloading resume:", error);
          toast.error("Failed to download resume. Please try again later.");
        });
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast.error("Failed to download resume. Please try again later.");
    }
  };

  return (
    <div className="bg-[rgba(16,16,16,1)] border w-full p-5 rounded-xl border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-primary/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:-translate-y-1">
      <div className="flex w-full flex-col items-center mb-6">
        <div className="self-stretch flex items-center justify-center gap-2 text-sm text-[rgba(153,153,153,1)] font-medium px-2.5 py-1.5">
          <Handshake className="w-4 h-4 text-primary" />
          <span>Let's Work Together</span>
        </div>
        <div className="text-[rgba(230,230,230,1)] text-xl font-semibold">
          Build a sharper AI product experience.
        </div>
      </div>
      <div className="w-full space-y-3">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button className="bg-[rgba(25,25,25,1)] w-full gap-2.5 p-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[rgba(30,30,30,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner border border-gray-700">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-gray-200 font-medium">Email Me</span>
            </button>
          </DialogTrigger>
          <DialogContent className="bg-secondary-dark border-gray-700 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-white text-xl font-semibold">
                Send me a message
              </DialogTitle>
            </DialogHeader>
            <ContactForm onSubmit={handleEmailMe} isLoading={isLoading} />
          </DialogContent>
        </Dialog>
        <button
          onClick={handleResumeDownload}
          className="bg-[rgba(25,25,25,1)] w-full gap-2.5 p-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[rgba(30,30,30,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner border border-gray-700"
        >
          <Download className="w-4 h-4 text-primary" />
          <span className="text-gray-200 font-medium">Download Resume</span>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
