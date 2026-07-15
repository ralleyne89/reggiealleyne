import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { CONTACT_EMAIL } from "@/config/contact";
import { RESUME_DOWNLOAD_NAME, RESUME_URL } from "@/config/resume";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-slate-950 pb-20 pt-28 text-white sm:pb-24 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:96px_96px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl justify-center px-4 text-center sm:px-6 lg:px-8">
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
          <h2 className="mx-auto max-w-3xl break-words font-display text-[3rem] font-semibold leading-[0.98] text-white [text-wrap:balance] sm:text-[4rem] lg:text-[5rem]">
            Let&apos;s work together.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Email me with the project, the goal, and the part you want help
            shaping.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex min-w-0 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center transition-colors hover:border-primary/40 hover:bg-white/[0.07] sm:col-span-2 sm:flex-row"
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
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-16 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 font-semibold text-slate-200 transition-colors hover:border-primary/40 hover:text-white"
            >
              <FileText size={18} />
              View resume
            </a>
            <a
              href={RESUME_URL}
              download={RESUME_DOWNLOAD_NAME}
              className="flex min-h-16 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 font-semibold text-slate-200 transition-colors hover:border-primary/40 hover:text-white"
            >
              <Download size={18} />
              Download
            </a>

            <a
              href="https://github.com/ralleyne89"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-16 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 font-semibold text-slate-200 transition-colors hover:border-primary/40 hover:text-white"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/reggiealleyne"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-16 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 font-semibold text-slate-200 transition-colors hover:border-primary/40 hover:text-white"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center justify-center gap-3 text-sm font-semibold text-white">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-slate-400">
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
      </div>
    </section>
  );
};

export default ContactSection;
