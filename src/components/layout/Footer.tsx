import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Globe2, Linkedin, Mail, MapPin } from "lucide-react";
import { CONTACT_EMAIL } from "@/config/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/reggiealleyne",
      label: "Connect on LinkedIn",
      external: true,
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/ralleyne89",
      label: "View code on GitHub",
      external: true,
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: `mailto:${CONTACT_EMAIL}`,
      label: "Send me an email",
      external: false,
    },
  ];
  const quickLinks = [
    {
      name: "Work",
      href: "/work",
    },
    {
      name: "Services",
      href: "/services",
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
    <footer
      id="footer"
      className="site-footer relative overflow-hidden border-t border-border bg-[linear-gradient(180deg,oklch(var(--color-surface-soft)),oklch(var(--color-surface-raised)))] px-4 text-text-primary"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-5 py-6 sm:py-7">
        <div className="flex min-w-0 flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <Link to="/" className="inline-flex shrink-0" aria-label="Reggie Alleyne home">
              <img
                src="/images/RA_logo_black.png"
                alt="Reggie Alleyne Logo"
                loading="lazy"
                decoding="async"
                className="h-9 w-auto"
              />
            </Link>
            <span className="h-8 w-px bg-border" />
            <p className="max-w-[16rem] text-xs font-semibold uppercase leading-5 text-text-muted sm:max-w-none">
              UX/UI Designer & AI Technologist
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-text-secondary"
          >
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="transition-colors hover:text-primary focus-visible:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary-light text-text-secondary transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-4 text-xs leading-5 text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Reggie Alleyne</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" />
              Los Angeles, CA
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe2 size={14} className="text-primary" />
              Remote collaboration worldwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
