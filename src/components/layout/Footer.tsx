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
    <footer className="bg-secondary-dark relative overflow-hidden px-[16px]">
      {/* Main Footer Content */}
      <div className="container mx-auto py-[32px] px-[16px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/images/RA_logo_white.png"
                alt="Reggie Alleyne Logo"
                className="h-12 w-auto"
              />
            </Link>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              Bridging the gap between human intent and machine logic. Product Designer & AI Technologist specializing in Human-in-the-Loop AI design.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative flex items-center justify-center w-12 h-12 bg-secondary-dark border-2 border-gray-600 rounded-xl text-gray-300 hover:text-white hover:border-white hover:bg-gray-800 transition-all duration-300"
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
          <div className="lg:col-span-3">
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
          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold text-lg mb-6">
              Let's Connect
            </h3>

            {/* Status Indicators */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-gray-300 text-sm">
                  Available for new projects
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={12} className="text-primary" />
                <span className="text-gray-400 text-sm">Los Angeles, CA</span>
              </div>

              <div className="flex items-center gap-3">
                <Coffee size={12} className="text-primary" />
                <span className="text-gray-400 text-sm">
                  Remote collaboration worldwide
                </span>
              </div>
            </div>

            {/* Contact Email */}
            <div className="bg-secondary-dark border-2 border-gray-600 rounded-xl p-4 hover:border-white transition-colors duration-300">
              <p className="text-gray-400 text-xs mb-1">Get in touch</p>
              <a
                href="mailto:reggiealleyne89@gmail.com"
                className="text-primary hover:text-primary-light transition-colors duration-200 font-medium"
              >
                reggiealleyne89@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
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
