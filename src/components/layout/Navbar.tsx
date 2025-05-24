import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const detectBackgroundColor = () => {
      // Get the navbar height to check what's behind it
      const navbarHeight = 80; // Approximate navbar height
      const checkPoint = navbarHeight + 10; // Check slightly below navbar

      // Get element at the center of the screen, just below navbar
      const centerX = window.innerWidth / 2;
      const elementBelow = document.elementFromPoint(centerX, checkPoint);

      if (elementBelow) {
        // Get computed styles of the element
        const styles = window.getComputedStyle(elementBelow);
        const backgroundColor = styles.backgroundColor;

        // Check if it's a dark background
        let isDark = false;

        // Check for explicit dark backgrounds
        if (
          backgroundColor &&
          backgroundColor !== "rgba(0, 0, 0, 0)" &&
          backgroundColor !== "transparent"
        ) {
          // Parse RGB values
          const rgbMatch = backgroundColor.match(
            /rgba?\((\d+),\s*(\d+),\s*(\d+)/
          );
          if (rgbMatch) {
            const [, r, g, b] = rgbMatch.map(Number);
            // Calculate luminance
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            isDark = luminance < 0.5;
          }
        }

        // Check for dark class names or IDs that indicate dark sections
        let currentElement = elementBelow;
        while (currentElement && currentElement !== document.body) {
          const className = currentElement.className || "";
          const id = currentElement.id || "";

          if (
            className.includes("bg-secondary") ||
            className.includes("bg-gray-900") ||
            className.includes("bg-black") ||
            className.includes("dark") ||
            id.includes("dark")
          ) {
            isDark = true;
            break;
          }

          if (
            className.includes("bg-white") ||
            className.includes("bg-gray-50") ||
            className.includes("light")
          ) {
            isDark = false;
            break;
          }

          currentElement = currentElement.parentElement;
        }

        setIsDarkBackground(isDark);
      }
    };

    // Initial check
    detectBackgroundColor();

    // Check on scroll
    const handleScroll = () => {
      detectBackgroundColor();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", detectBackgroundColor, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", detectBackgroundColor);
    };
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
    { title: "Work", path: "/works" },
    { title: "About", path: "/about" },
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
      className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5 transition-all duration-300"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <Link
            to="/"
            className={isDarkBackground ? "text-white" : "text-black"}
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <img
                src={isDarkBackground ? "/ra-logo-white.svg" : "/ra-logo.svg"}
                alt="Reggie Alleyne Logo"
                className="h-10 w-10 transition-all duration-300"
              />
              <p
                className={`font-bold text-lg drop-shadow-sm transition-colors duration-300 ${
                  isDarkBackground ? "text-white" : "text-black"
                }`}
              >
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
                      : isDarkBackground
                      ? "text-gray-200 hover:text-white font-medium"
                      : "text-gray-800 hover:text-black font-medium"
                  }`}
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className={`md:hidden focus:outline-none drop-shadow-sm transition-colors duration-300 ${
              isDarkBackground ? "text-white" : "text-black"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5"
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
                        : isDarkBackground
                        ? "text-gray-200 hover:text-white font-medium"
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
