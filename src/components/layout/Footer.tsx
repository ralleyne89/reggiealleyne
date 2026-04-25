import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Coffee } from "lucide-react";
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
      url: "mailto:reggiealleyne89@gmail.com",
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
      name: "Contact",
      href: "/#contact",
    },
  ];
  return (
    <footer className="relative overflow-hidden bg-secondary-dark px-4">
      {/* Main Footer Content */}
      <div className="mx-auto w-full max-w-7xl px-0 py-8 sm:px-4">
        <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Brand Section */}
          <div className="min-w-0 lg:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/images/RA_logo_white.png"
                alt="Reggie Alleyne Logo"
                className="h-12 w-auto"
              />
            </Link>

            <p className="mb-8 max-w-md text-base leading-7 text-gray-300 sm:text-lg sm:leading-relaxed">
              Bridging the gap between human intent and machine logic. Product
              Designer & AI Technologist specializing in Human-in-the-Loop AI
              design.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-xl border-2 border-gray-600 bg-secondary-dark text-gray-300 transition-all duration-300 hover:border-white hover:bg-gray-800 hover:text-white"
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  {social.icon}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {social.label}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-0 lg:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <nav className="space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Status & Contact */}
          <div className="min-w-0 lg:col-span-4">
            <h3 className="text-white font-semibold text-lg mb-6">
              Let's Connect
            </h3>

            {/* Status Indicators */}
            <div className="mb-8 space-y-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative shrink-0">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                  <div className="absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full bg-green-400 opacity-75"></div>
                </div>
                <span className="text-gray-300 text-sm">
                  Available for new projects
                </span>
              </div>

              <div className="flex min-w-0 items-center gap-3">
                <MapPin size={12} className="shrink-0 text-primary" />
                <span className="text-gray-400 text-sm">Los Angeles, CA</span>
              </div>

              <div className="flex min-w-0 items-center gap-3">
                <Coffee size={12} className="shrink-0 text-primary" />
                <span className="text-gray-400 text-sm">
                  Remote collaboration worldwide
                </span>
              </div>
            </div>

            {/* Contact Email */}
            <div className="min-w-0 rounded-xl border-2 border-gray-600 bg-secondary-dark p-4 transition-colors duration-300 hover:border-white">
              <p className="text-gray-400 text-xs mb-1">Get in touch</p>
              <a
                href="mailto:reggiealleyne89@gmail.com"
                className="break-all font-medium text-primary transition-colors duration-200 hover:text-primary-light"
              >
                reggiealleyne89@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto w-full max-w-7xl px-4 py-6">
          <div className="flex justify-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Reggie Alleyne.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/3 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/3 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
};
export default Footer;
