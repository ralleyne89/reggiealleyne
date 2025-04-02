
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      // Increase threshold for scroll effect to happen later
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Portfolio', path: '/works' },
    { title: 'Contact', path: '/#contact' }
  ];
  
  const handleResumeDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = '/reggie-alleyne-resume.pdf';
      link.download = 'reggie-alleyne-resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('Resume downloading...');
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast.error('Download failed. Please try again.');
    }
  };
  
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled 
          ? 'bg-[#161623]/90 backdrop-blur-lg border-b border-[#7E69AB]/20' 
          : 'bg-transparent'
      } transition-all duration-300`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-white">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 500 }}
            >
              <img 
                src="/lovable-uploads/reggie-logo-2025.PNG" 
                alt="Reggie Alleyne"
                className="h-9 w-auto"
              />
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link 
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) 
                      ? 'bg-[#7E69AB] text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-[#7E69AB]/20'
                  }`}
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
            
            {/* Resume download button moved to the main navigation */}
            <motion.li variants={itemVariants}>
              <motion.button
                onClick={handleResumeDownload}
                className="flex items-center gap-2 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:from-[#7E69AB] hover:to-[#9b87f5] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Download size={16} />
                Resume
              </motion.button>
            </motion.li>
          </ul>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-[#161623]/95 backdrop-blur-lg border-b border-[#7E69AB]/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={item.path}
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) 
                        ? 'bg-[#7E69AB] text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-[#7E69AB]/20'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <button 
                  onClick={handleResumeDownload}
                  className="flex items-center gap-2 w-full px-4 py-2 text-center bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white rounded-md text-sm font-medium"
                >
                  <Download size={16} />
                  Download Resume
                </button>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
