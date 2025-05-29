import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const location = useLocation();

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
    { title: "Work", path: "/works" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "#", onClick: handleContactClick },
  ];

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
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-black/5 transition-all duration-300"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="text-black">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              {/* <img
                src="/ra-logo.svg"
                alt="Reggie Alleyne Logo"
                className="h-10 w-10 transition-all duration-300"

              /> */}
              <p className="font-bold text-lg drop-shadow-sm transition-colors duration-300 text-black">
                REGGIE ALLEYNE
              </p>
            </motion.div>
          </Link>

          <ul className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link
                  to={item.path}
                  onClick={item.onClick}
                  className={`px-4 py-2 text-sm font-medium transition-colors animated-underline drop-shadow-sm ${
                    location.pathname === item.path ||
                    (item.path !== "/" &&
                      location.pathname.startsWith(item.path))
                      ? "text-primary font-semibold"
                      : "text-gray-800 hover:text-black font-medium"
                  }`}
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="md:hidden focus:outline-none drop-shadow-sm transition-colors duration-300 text-black"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-black/5"
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
                    className={`block px-4 py-2 text-sm font-medium transition-colors animated-underline drop-shadow-sm ${
                      location.pathname === item.path ||
                      (item.path !== "/" &&
                        location.pathname.startsWith(item.path))
                        ? "text-primary font-semibold"
                        : "text-gray-800 hover:text-black font-medium"
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
