
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={18} />, 
      url: 'https://linkedin.com/in/reggiealleyne' 
    },
    { 
      name: 'GitHub', 
      icon: <Github size={18} />, 
      url: 'https://github.com/ralleyne89' 
    },
    { 
      name: 'Email', 
      icon: <Mail size={18} />, 
      url: 'mailto:reggiealleyne89@gmail.com' 
    }
  ];

  return (
    <footer className="bg-secondary relative pt-20 pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/reggie-logo-2025.PNG" 
                alt="Reggie Alleyne Logo" 
                className="h-10 brightness-200 filter"
              />
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-md">
              UI/UX Designer specializing in creating beautiful and functional digital experiences that drive business growth and delight users.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-light text-gray-400 p-2 rounded-full hover:text-primary hover:bg-primary/10 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Los Angeles, CA</li>
              <li>reggiealleyne89@gmail.com</li>
              <li>Available for remote work</li>
            </ul>
            
            <motion.button
              className="mt-6 bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Reggie Alleyne. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
