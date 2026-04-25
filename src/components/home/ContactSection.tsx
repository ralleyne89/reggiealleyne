
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Users } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const nameInput = formElement.elements.namedItem("name") as HTMLInputElement;
    const emailInput = formElement.elements.namedItem("email") as HTMLInputElement;
    const messageInput = formElement.elements.namedItem("message") as HTMLTextAreaElement;
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    };
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.functions.invoke("send-contact-email", {
        body: formData
      });
      if (error) throw error;
      toast.success("Message sent! I'll get back to you as soon as possible.");
      formElement.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 bg-gray-900 py-16 sm:py-[80px]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-xl text-center sm:mb-16">
          <motion.h2 className="mb-4 break-words font-heading text-3xl font-bold text-white md:text-4xl" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
            Get in <span className="text-primary">Touch</span>
          </motion.h2>

          <motion.p className="text-base leading-7 text-gray-400" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
            Have a project in mind or want to discuss potential
            collaborations? I'd love to hear from you!
          </motion.p>
        </div>

        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <motion.div className="min-w-0 rounded-xl border border-white/70 bg-secondary p-4 shadow-xl shadow-black/10 sm:p-6" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
            <h3 className="text-xl font-heading font-semibold text-gray-950 mb-4">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="text-primary" size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:reggiealleyne89@gmail.com" className="break-all text-gray-700 transition-colors hover:text-primary">
                    reggiealleyne89@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Users className="text-primary" size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Social</p>
                  <div className="flex gap-3 mt-1">
                    <a href="https://github.com/ralleyne89" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                      GitHub
                    </a>
                    <a href="https://linkedin.com/in/reggiealleyne" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
            <form onSubmit={handleContactFormSubmit} className="min-w-0 space-y-4">
              <div>
                <label htmlFor="name" className="text-white block mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" required placeholder="Your full name" className="w-full rounded-lg border border-gray-700 bg-secondary px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none" />
              </div>

              <div>
                <label htmlFor="email" className="text-white block mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" className="w-full rounded-lg border border-gray-700 bg-secondary px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none" />
              </div>

              <div>
                <label htmlFor="message" className="text-white block mb-2">
                  Message
                </label>
                <textarea id="message" name="message" rows={4} required placeholder="Tell me about your project or what you'd like to discuss..." className="w-full rounded-lg border border-gray-700 bg-secondary px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="min-h-12 w-full rounded-lg bg-gradient-to-r from-primary to-primary-dark px-6 py-3 font-medium text-white shadow-md shadow-primary/20 transition-shadow hover:shadow-lg hover:shadow-primary/30">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
