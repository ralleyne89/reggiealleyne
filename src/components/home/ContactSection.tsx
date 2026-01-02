
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
    <section id="contact" className="bg-gray-900 relative py-[80px]">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4" initial={{
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

          <motion.p className="text-gray-400" initial={{
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div className="bg-secondary rounded-xl p-6 border border-gray-700" initial={{
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
            <h3 className="text-xl font-heading font-semibold text-white mb-4">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:reggiealleyne89@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
                    reggiealleyne89@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Social</p>
                  <div className="flex gap-3 mt-1">
                    <a href="https://github.com/ralleyne89" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                      GitHub
                    </a>
                    <a href="https://linkedin.com/in/reggiealleyne" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
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
            <form onSubmit={handleContactFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-white block mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" required placeholder="Your full name" className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary" />
              </div>

              <div>
                <label htmlFor="email" className="text-white block mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary" />
              </div>

              <div>
                <label htmlFor="message" className="text-white block mb-2">
                  Message
                </label>
                <textarea id="message" name="message" rows={4} required placeholder="Tell me about your project or what you'd like to discuss..." className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-lg font-medium shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-shadow">
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
