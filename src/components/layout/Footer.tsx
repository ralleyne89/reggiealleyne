import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[rgba(15,15,15,1)] border-t border-[rgba(35,35,35,1)] mt-10 py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(204,204,204,1)] hover:text-[#916CE7] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(204,204,204,1)] hover:text-[#916CE7] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-[rgba(204,204,204,1)] hover:text-[#916CE7] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/" className="text-[rgba(204,204,204,1)] hover:text-[#916CE7] transition-colors">
              Home
            </Link>
            <Link to="/works" className="text-[rgba(204,204,204,1)] hover:text-[#916CE7] transition-colors">
              Works
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-[rgba(153,153,153,1)] text-sm">
            © {currentYear} Your Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;