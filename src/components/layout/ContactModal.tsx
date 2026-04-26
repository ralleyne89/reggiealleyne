import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
      const { error } = await supabase.functions.invoke(
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
      <DialogContent className="liquid-glass liquid-glass-dark max-h-[calc(100dvh-1rem)] max-w-md overflow-y-auto rounded-[2rem] border-white/15 p-4 text-white shadow-2xl shadow-black/30 sm:p-7">
        <DialogHeader>
          <DialogTitle className="text-white text-xl font-semibold">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-white/72">
            Tell me what you are building. I'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        <ContactForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          onFallbackSubmit={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
