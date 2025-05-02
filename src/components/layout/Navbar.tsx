import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  interface NavItem {
    title: string;
    path: string;
    onClick?: (e: React.MouseEvent) => void;
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setContactModalOpen(true);
  };

  const navItems: NavItem[] = [
    { title: "Home", path: "/" },
    { title: "Portfolio", path: "/works" },
    { title: "Contact", path: "#", onClick: handleContactClick },
  ];

  const handleResumeDownload = () => {
    try {
      fetch(
        "https://drive.google.com/uc?export=download&id=1pK4gD27rABnUArntEHFJLVUu3WyCLBQb"
      )
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "Reggie_Alleyne_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          toast.success("Resume downloaded successfully!");
        })
        .catch((error) => {
          console.error("Error downloading resume:", error);
          toast.error("Failed to download resume. Please try again later.");
        });
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast.error("Failed to download resume. Please try again later.");
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-[#161623]/90 backdrop-blur-lg border-b border-[#7E69AB]/20"
          : "bg-transparent"
      } transition-all duration-300`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="text-white">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <img
                src="/lovable-uploads/d5f791c1-7299-4a0a-80e0-9e27c0362510.png"
                alt="Reggie Alleyne"
                className="h-10 w-auto"
              />
            </motion.div>
          </Link>

          <ul className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link
                  to={item.path}
                  onClick={item.onClick}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    location.pathname === item.path ||
                    (item.path !== "/" &&
                      location.pathname.startsWith(item.path))
                      ? "bg-[#7E69AB] text-white"
                      : "text-gray-300 hover:text-white hover:bg-[#7E69AB]/20"
                  }`}
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}

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

          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-[#161623]/95 backdrop-blur-lg border-b border-[#7E69AB]/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
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
                      location.pathname === item.path ||
                      (item.path !== "/" &&
                        location.pathname.startsWith(item.path))
                        ? "bg-[#7E69AB] text-white"
                        : "text-gray-300 hover:text-white hover:bg-[#7E69AB]/20"
                    }`}
                    onClick={(e) => {
                      setIsOpen(false);
                      if (item.onClick) {
                        item.onClick(e);
                      }
                    }}
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

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </motion.header>
  );
};

export default Navbar;
