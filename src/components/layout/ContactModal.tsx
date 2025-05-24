import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "@/components/profile/ContactForm";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { ContactFormData } from "@/components/profile/ContactForm";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: ContactFormData) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: formData,
        }
      );

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "I'll get back to you as soon as possible.",
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send email. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-secondary-dark border-gray-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white text-xl font-semibold">
            Get in Touch
          </DialogTitle>
        </DialogHeader>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          Have a project in mind or want to discuss potential collaborations?
          I'd love to hear from you!
        </p>
        <ContactForm onSubmit={handleSubmit} isLoading={isLoading} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
