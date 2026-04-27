import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { CONTACT_EMAIL } from "@/config/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/reggiealleyne",
      label: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/ralleyne89",
      label: "View code on GitHub",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: `mailto:${CONTACT_EMAIL}`,
      label: "Send me an email",
    },
  ];
  const quickLinks = [
    {
      name: "Work",
      href: "/works",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Playground",
      href: "/playground",
    },
    {
      name: "Contact",
      href: "/#contact",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-900 px-4 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:88px_88px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl py-12 sm:py-16">
        <div className="border-b border-white/10 pb-10">
          <div className="min-w-0">
            <Link to="/" className="mb-6 inline-flex">
              <img
                src="/images/RA_logo_white.png"
                alt="Reggie Alleyne Logo"
                className="h-14 w-auto"
              />
            </Link>

            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold uppercase text-primary-light">
              <Sparkles size={14} />
              Product Designer & AI Technologist
            </p>
            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <h2 className="max-w-3xl break-words font-display text-[2rem] font-semibold leading-tight text-white [text-wrap:balance] sm:text-heading-xl">
                Designing AI interfaces, dashboards, and product systems people
                can inspect and use.
              </h2>
              <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                I bring product strategy, UX/UI craft, and frontend fluency to
                complex tools that need to feel legible, useful, and buildable.
              </p>
            </div>
          </div>
        </div>

        <div className="grid min-w-0 gap-10 py-10 md:grid-cols-[1.1fr_0.7fr_1fr]">
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase text-slate-400">
              Connect
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-slate-300 transition-colors hover:border-primary/45 hover:bg-white/[0.08] hover:text-white"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase text-slate-400">
              Quick Links
            </h3>
            <nav className="grid gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-semibold text-slate-300 transition-colors hover:text-primary-light"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase text-slate-400">
              Working From
            </h3>
            <div className="grid gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-3">
                <MapPin size={16} className="text-primary-light" />
                Los Angeles, CA
              </span>
              <span className="inline-flex items-center gap-3">
                <Globe2 size={16} className="text-primary-light" />
                Remote collaboration worldwide
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Reggie Alleyne.</p>
          <p>Product Designer & AI Technologist.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
