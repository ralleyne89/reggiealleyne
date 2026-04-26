import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BriefcaseBusiness,
  Home,
  Menu,
  MoreHorizontal,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ContactModal from "./ContactModal";

interface NavLinkItem {
  title: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  { title: "Home", path: "/" },
  { title: "Work", path: "/works" },
  { title: "Playground", path: "/playground" },
  { title: "About", path: "/about" },
];

const mobilePrimaryLinks = navLinks.slice(0, 2);
const mobileSecondaryLinks = navLinks.slice(2);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const isSecondaryActive = mobileSecondaryLinks.some((item) =>
    isActivePath(item.path),
  );

  const openContactModal = () => {
    setIsOpen(false);
    setContactModalOpen(true);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0 },
  };

  const linkClassName = (isActive: boolean) =>
    [
      "relative inline-flex min-h-10 items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors",
      isActive
        ? "liquid-glass-control liquid-glass-nav-control text-gray-950 shadow-sm"
        : "text-gray-800 hover:text-gray-950",
    ].join(" ");

  return (
    <>
      <motion.header
        className="mobile-shell-top pointer-events-none fixed inset-x-0 top-0 z-50 hidden px-3 sm:px-6 sm:pt-4 md:block"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="mx-auto w-full max-w-[64rem]">
          <nav className="liquid-glass liquid-glass-nav pointer-events-auto mx-auto flex min-h-14 max-w-[64rem] items-center justify-between gap-4 rounded-full px-3 py-2 sm:min-h-16 sm:px-5">
            <Link
              to="/"
              className="relative z-10 inline-flex shrink-0 items-center rounded-full px-2 py-1 text-gray-900"
              aria-label="Reggie Alleyne home"
            >
              <motion.img
                src="/images/RA_logo_black.png"
                alt="Reggie Alleyne Logo"
                className="h-8 w-auto sm:h-9"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 480, damping: 24 }}
              />
            </Link>

            <div className="hidden shrink-0 items-center md:flex">
              <ul className="flex items-center gap-1 rounded-full border border-white/35 bg-white/30 p-1 shadow-inner shadow-white/20 backdrop-blur-xl">
                {navLinks.map((item) => {
                  const isActive = isActivePath(item.path);

                  return (
                    <motion.li key={item.path} variants={itemVariants}>
                      <Link
                        to={item.path}
                        aria-current={isActive ? "page" : undefined}
                        className={linkClassName(isActive)}
                      >
                        {item.title}
                      </Link>
                    </motion.li>
                  );
                })}
                <motion.li variants={itemVariants}>
                  <button
                    type="button"
                    onClick={openContactModal}
                    className="relative inline-flex min-h-10 items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:text-gray-950"
                  >
                    Contact
                  </button>
                </motion.li>
              </ul>
            </div>

            <motion.button
              type="button"
              className="liquid-glass-control liquid-glass-nav-control relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-950 md:hidden"
              onClick={() => setIsOpen((value) => !value)}
              whileTap={{ scale: 0.94 }}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </motion.button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-more-menu"
            className="mobile-more-panel pointer-events-none fixed inset-x-0 z-50 px-3 md:hidden"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <div className="liquid-glass liquid-glass-nav pointer-events-auto mx-auto max-w-sm rounded-[1.5rem] p-2.5">
              <ul className="grid gap-1">
                {mobileSecondaryLinks.map((item) => {
                  const isActive = isActivePath(item.path);

                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        aria-current={isActive ? "page" : undefined}
                        className={[
                          "block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                          isActive
                            ? "liquid-glass-control liquid-glass-nav-control text-gray-950"
                            : "text-gray-700 hover:bg-white/45 hover:text-gray-950",
                        ].join(" ")}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <button
                    type="button"
                    onClick={openContactModal}
                    className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold text-gray-700 transition-colors hover:bg-white/45 hover:text-gray-950"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.nav
        className="mobile-shell-bottom pointer-events-none fixed inset-x-0 bottom-0 z-50 px-3 md:hidden"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.24 }}
        aria-label="Primary mobile navigation"
      >
        <div className="liquid-glass liquid-glass-nav pointer-events-auto mx-auto grid max-w-sm grid-cols-3 gap-1 rounded-full p-1.5">
          {mobilePrimaryLinks.map((item) => {
            const isActive = isActivePath(item.path);
            const Icon = item.path === "/" ? Home : BriefcaseBusiness;

            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative flex min-h-14 flex-col items-center justify-center rounded-full px-3 text-[0.72rem] font-semibold leading-none transition-colors",
                  isActive
                    ? "liquid-glass-control liquid-glass-nav-control text-gray-950 shadow-sm"
                    : "text-gray-600 hover:text-gray-950",
                ].join(" ")}
              >
                <Icon aria-hidden="true" size={19} strokeWidth={2.2} />
                <span className="mt-1">{item.title}</span>
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className={[
              "relative flex min-h-14 flex-col items-center justify-center rounded-full px-3 text-[0.72rem] font-semibold leading-none transition-colors",
              isOpen || isSecondaryActive
                ? "liquid-glass-control liquid-glass-nav-control text-gray-950 shadow-sm"
                : "text-gray-600 hover:text-gray-950",
            ].join(" ")}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-more-menu"
          >
            {isOpen ? (
              <X aria-hidden="true" size={19} strokeWidth={2.2} />
            ) : (
              <MoreHorizontal aria-hidden="true" size={20} strokeWidth={2.2} />
            )}
            <span className="mt-1">More</span>
          </button>
        </div>
      </motion.nav>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </>
  );
};

export default Navbar;
