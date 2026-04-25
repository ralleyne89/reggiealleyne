
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Turnstile from "@/components/contact/Turnstile";
import {
  CONTACT_EMAIL,
  createContactMailtoHref,
  isTurnstileConfigured,
} from "@/config/contact";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const fieldClassName =
    "liquid-glass-field min-h-12 w-full rounded-xl px-4 py-3 text-white placeholder:text-white/45 focus:outline-none";

  const resetTurnstile = () => {
    setTurnstileToken("");
    setTurnstileResetKey((currentKey) => currentKey + 1);
  };

  const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const nameInput = formElement.elements.namedItem("name") as HTMLInputElement;
    const emailInput = formElement.elements.namedItem("email") as HTMLInputElement;
    const messageInput = formElement.elements.namedItem("message") as HTMLTextAreaElement;
    const honeypotInput = formElement.elements.namedItem("honeypot") as HTMLInputElement | null;
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
      turnstileToken,
      honeypot: honeypotInput?.value ?? ""
    };
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!isTurnstileConfigured) {
      window.location.href = createContactMailtoHref(formData);
      toast.success("Opening a prepared email draft.");
      formElement.reset();
      return;
    }
    if (!formData.turnstileToken) {
      toast.error("Please complete verification");
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
      resetTurnstile();
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-slate-950 pb-20 pt-28 text-white sm:pb-24 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:96px_96px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-primary-light">
            Get in touch
          </p>
          <h2 className="max-w-xl break-words font-display text-[2.25rem] font-semibold leading-tight text-white [text-wrap:balance] sm:text-display-md">
            Have a project in mind or want to discuss potential collaborations?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
            I'd love to hear from you. Send a note about the problem, the team,
            or the prototype you are trying to make real.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex min-w-0 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-left transition-colors hover:border-primary/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary-light">
                <Mail size={19} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-slate-400">Email</span>
                <span className="block break-all font-semibold text-white transition-colors group-hover:text-primary-light">
                  {CONTACT_EMAIL}
                </span>
              </span>
              <ArrowUpRight className="ml-auto hidden h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-primary-light sm:block" />
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/ralleyne89"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-16 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 font-semibold text-slate-200 transition-colors hover:border-primary/40 hover:text-white"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/reggiealleyne"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-16 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 font-semibold text-slate-200 transition-colors hover:border-primary/40 hover:text-white"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-3 text-sm font-semibold text-white">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-primary-light" />
                Los Angeles, CA
              </span>
              <span className="inline-flex items-center gap-2">
                <MessageSquare size={15} className="text-primary-light" />
                Remote collaboration worldwide
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="min-w-0 rounded-2xl border border-white/12 bg-white/[0.06] p-4 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:p-6 lg:p-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-primary-light">
                Start a conversation
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                Tell me what you are building.
              </h3>
            </div>
            <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white sm:flex">
              <Send size={18} />
            </span>
          </div>

          <form onSubmit={handleContactFormSubmit} className="min-w-0 space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                Name
              </label>
              <input type="text" id="name" name="name" required placeholder="Your full name" className={fieldClassName} />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>
              <input type="email" id="email" name="email" required placeholder="your@email.com" className={fieldClassName} />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea id="message" name="message" rows={5} required placeholder="Tell me about your project or what you'd like to discuss..." className={`${fieldClassName} min-h-36 resize-y`}></textarea>
            </div>

            <input aria-hidden="true" autoComplete="off" className="hidden" name="honeypot" tabIndex={-1} type="text" />

            {isTurnstileConfigured ? (
              <Turnstile
                className="flex justify-center"
                resetKey={turnstileResetKey}
                onVerify={setTurnstileToken}
                onExpire={() => setTurnstileToken("")}
                onError={() => {
                  setTurnstileToken("");
                  toast.error("Verification failed. Please try again.");
                }}
              />
            ) : (
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm leading-6 text-slate-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                <span>Submitting opens a prepared email draft with your message.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting
                ? "Sending..."
                : isTurnstileConfigured
                  ? "Send Message"
                  : "Open Email Draft"}
              <Send size={17} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
