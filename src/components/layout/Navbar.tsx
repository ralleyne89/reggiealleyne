import { Link, useLocation } from "react-router-dom";
import {
  BriefcaseBusiness,
  Home,
  MessageCircle,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type NavRouteItem = {
  kind: "route";
  title: string;
  path: string;
  icon: LucideIcon;
};

type NavActionItem = {
  kind: "action";
  title: string;
  icon: LucideIcon;
  onSelect: () => void;
  isActive: boolean;
};

type NavItem = NavRouteItem | NavActionItem;
type NavSurface = "desktop" | "mobile";

const routeNavItems: NavRouteItem[] = [
  {
    kind: "route",
    title: "Home",
    path: "/",
    icon: Home,
  },
  {
    kind: "route",
    title: "Work",
    path: "/work",
    icon: BriefcaseBusiness,
  },
  // Services temporarily hidden — re-add this entry to restore the nav link.
  // {
  //   kind: "route",
  //   title: "Services",
  //   path: "/services",
  //   icon: PanelsTopLeft,
  //   labelWidth: 68,
  //   mobileLabelWidth: 58,
  // },
  {
    kind: "route",
    title: "Playground",
    path: "/playground",
    icon: Sparkles,
  },
  {
    kind: "route",
    title: "About",
    path: "/about",
    icon: UserRound,
  },
];

const MotionLink = motion.create(Link);

const getNavItemKey = (item: NavItem) =>
  item.kind === "route" ? item.path : `action:${item.title}`;

const Navbar = () => {
  const location = useLocation();

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const navItems: NavItem[] = [
    ...routeNavItems,
    {
      kind: "route",
      title: "Contact",
      path: "/#contact",
      icon: MessageCircle,
    },
  ];

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

  const navItemClassName = (isActive: boolean, surface: NavSurface) =>
    cn(
      "portfolio-nav-item relative inline-flex h-10 min-h-10 items-center justify-center overflow-hidden rounded-full border border-transparent px-3 py-2 text-sm font-semibold transition-colors duration-200",
      surface === "mobile" &&
        "h-12 min-h-12 min-w-0 flex-1 flex-col gap-0.5 px-1 py-1 text-[0.65rem]",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
      isActive
        ? "liquid-glass-control liquid-glass-nav-control text-zinc-50 shadow-sm"
        : "text-zinc-400 hover:bg-white/10 hover:text-zinc-50",
    );

  const renderNavItemContent = (
    item: NavItem,
    surface: NavSurface,
  ) => {
    const Icon = item.icon;

    return (
      <>
        <Icon
          aria-hidden="true"
          className={cn(
            "h-[1.18rem] w-[1.18rem] shrink-0 transition-colors duration-200",
            surface === "mobile" && "h-[1.05rem] w-[1.05rem]",
          )}
          strokeWidth={2.2}
        />

        <span
          className={cn(
            "portfolio-nav-item__label flex max-w-[6rem] items-center overflow-hidden",
            surface === "desktop" && "ml-2",
          )}
        >
          <span
            className={cn(
              "portfolio-nav-item__label-text truncate text-xs font-semibold leading-5 transition-opacity duration-200",
              surface === "mobile" && "max-w-full text-[0.62rem] leading-none",
            )}
            title={item.title}
          >
            {item.title}
          </span>
        </span>
      </>
    );
  };

  const renderNavItem = (item: NavItem, surface: NavSurface) => {
    const isActive =
      item.kind === "route" ? isActivePath(item.path) : item.isActive;
    const itemKey = getNavItemKey(item);

    if (item.kind === "route") {
      return (
        <MotionLink
          key={itemKey}
          to={item.path}
          aria-label={item.title}
          aria-current={isActive ? "page" : undefined}
          title={item.title}
          whileTap={{ scale: 0.97 }}
          className={navItemClassName(isActive, surface)}
        >
          {renderNavItemContent(item, surface)}
        </MotionLink>
      );
    }

    return (
      <motion.button
        key={itemKey}
        type="button"
        aria-label={item.title}
        aria-pressed={isActive}
        title={item.title}
        whileTap={{ scale: 0.97 }}
        className={navItemClassName(isActive, surface)}
        onClick={item.onSelect}
      >
        {renderNavItemContent(item, surface)}
      </motion.button>
    );
  };

  const navPill = (
    className?: string,
    showLogo = false,
    surface: NavSurface = "desktop",
  ) => (
    <motion.nav
      initial={{ scale: 0.94, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      aria-label="Primary navigation"
      className={cn(
        "liquid-glass liquid-glass-nav pointer-events-auto flex h-[3.35rem] min-w-0 max-w-[calc(100vw-1.5rem)] items-center gap-1 rounded-full p-1.5 shadow-xl",
        className,
      )}
    >
      {showLogo ? (
        <MotionLink
          to="/"
          className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-100 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          aria-label="Reggie Alleyne home"
          title="Reggie Alleyne home"
          whileTap={{ scale: 0.97 }}
        >
          <motion.img
            src="/images/RA_logo_white.png"
            alt=""
            aria-hidden="true"
            className="h-7 w-auto"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 480, damping: 24 }}
          />
        </MotionLink>
      ) : null}

      {navItems.map((item) => renderNavItem(item, surface))}
    </motion.nav>
  );

  return (
    <>
      <motion.header
        className="mobile-shell-top pointer-events-none fixed inset-x-0 top-0 z-50 hidden px-3 sm:px-6 sm:pt-4 md:block"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="mx-auto flex w-full justify-center">
          {navPill("shrink-0", true)}
        </div>
      </motion.header>

      <div className="mobile-shell-bottom pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-2 md:hidden">
        {navPill(
          "h-16 w-full min-w-0 max-w-[24rem] justify-between gap-0.5 rounded-[2rem] p-2",
          false,
          "mobile",
        )}
      </div>
    </>
  );
};

export default Navbar;
