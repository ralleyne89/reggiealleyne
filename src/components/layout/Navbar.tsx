import { useEffect, useState, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BriefcaseBusiness,
  Home,
  MessageCircle,
  PanelsTopLeft,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ContactModal from "./ContactModal";

type NavRouteItem = {
  kind: "route";
  title: string;
  path: string;
  icon: LucideIcon;
  labelWidth: number;
  mobileLabelWidth?: number;
};

type NavActionItem = {
  kind: "action";
  title: string;
  icon: LucideIcon;
  labelWidth: number;
  mobileLabelWidth?: number;
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
    labelWidth: 44,
    mobileLabelWidth: 42,
  },
  {
    kind: "route",
    title: "Work",
    path: "/work",
    icon: BriefcaseBusiness,
    labelWidth: 42,
    mobileLabelWidth: 42,
  },
  {
    kind: "route",
    title: "Services",
    path: "/services",
    icon: PanelsTopLeft,
    labelWidth: 68,
    mobileLabelWidth: 58,
  },
  {
    kind: "route",
    title: "Playground",
    path: "/playground",
    icon: Sparkles,
    labelWidth: 86,
    mobileLabelWidth: 70,
  },
  {
    kind: "route",
    title: "About",
    path: "/about",
    icon: UserRound,
    labelWidth: 52,
    mobileLabelWidth: 50,
  },
];

const MotionLink = motion.create(Link);

const itemTransition = {
  width: { type: "spring", stiffness: 260, damping: 31, mass: 0.78 },
  opacity: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
  marginLeft: { type: "spring", stiffness: 260, damping: 31, mass: 0.78 },
} as const;

const getNavItemKey = (item: NavItem) =>
  item.kind === "route" ? item.path : `action:${item.title}`;

const getSurfaceNavItemKey = (item: NavItem, surface: NavSurface) =>
  `${surface}:${getNavItemKey(item)}`;

const getNavItemLabelWidth = (item: NavItem, surface: NavSurface) =>
  surface === "mobile" && item.mobileLabelWidth
    ? item.mobileLabelWidth
    : item.labelWidth;

const getNavItemStyle = (item: NavItem, surface: NavSurface) =>
  ({
    "--portfolio-nav-label-gap": surface === "mobile" ? "0.45rem" : "0.5rem",
    "--portfolio-nav-label-width": `${getNavItemLabelWidth(item, surface)}px`,
  }) as CSSProperties;

const Navbar = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [hoveredNavKey, setHoveredNavKey] = useState<string | null>(null);
  const [focusedNavKey, setFocusedNavKey] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setContactModalOpen(false);
    setHoveredNavKey(null);
    setFocusedNavKey(null);
  }, [location]);

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  const navItems: NavItem[] = [
    ...routeNavItems,
    {
      kind: "action",
      title: "Contact",
      icon: MessageCircle,
      labelWidth: 62,
      mobileLabelWidth: 54,
      onSelect: openContactModal,
      isActive: contactModalOpen,
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
      "portfolio-nav-item relative inline-flex h-10 min-h-10 min-w-11 max-w-[9rem] items-center justify-center overflow-hidden rounded-full border border-transparent px-3 py-2 text-sm font-semibold transition-colors duration-200",
      surface === "mobile" &&
        "h-12 min-h-12 min-w-10 max-w-[8.75rem] px-2 text-[0.82rem]",
      "focus:outline-none focus-visible:ring-0",
      isActive
        ? "liquid-glass-control liquid-glass-nav-control text-zinc-50 shadow-sm"
        : "text-zinc-400 hover:bg-white/10 hover:text-zinc-50",
    );

  const renderNavItemContent = (
    item: NavItem,
    isExpanded: boolean,
    surface: NavSurface,
  ) => {
    const Icon = item.icon;
    const labelWidth = getNavItemLabelWidth(item, surface);

    return (
      <>
        <Icon
          aria-hidden="true"
          className={cn(
            "h-[1.18rem] w-[1.18rem] shrink-0 transition-colors duration-200",
            surface === "mobile" && "h-5 w-5",
          )}
          strokeWidth={2.2}
        />

        <motion.span
          initial={false}
          animate={{
            width: isExpanded ? `${labelWidth}px` : "0px",
            opacity: isExpanded ? 1 : 0,
            marginLeft: isExpanded
              ? surface === "mobile"
                ? "0.45rem"
                : "0.5rem"
              : "0rem",
          }}
          transition={itemTransition}
          className="portfolio-nav-item__label flex max-w-[6rem] items-center overflow-hidden"
          aria-hidden={!isExpanded}
        >
          <span
            className={cn(
              "portfolio-nav-item__label-text truncate text-xs font-semibold leading-5 transition-opacity duration-200",
              surface === "mobile" && "text-[0.8rem]",
              isExpanded ? "opacity-100" : "opacity-0",
            )}
            title={item.title}
          >
            {item.title}
          </span>
        </motion.span>
      </>
    );
  };

  const renderNavItem = (item: NavItem, surface: NavSurface) => {
    const isActive =
      item.kind === "route" ? isActivePath(item.path) : item.isActive;
    const itemKey = getNavItemKey(item);
    const surfaceItemKey = getSurfaceNavItemKey(item, surface);
    const itemStyle = getNavItemStyle(item, surface);
    const activeInteractionKey = hoveredNavKey ?? focusedNavKey;
    const hasSurfaceInteraction = activeInteractionKey?.startsWith(`${surface}:`);
    const isInteracting = activeInteractionKey === surfaceItemKey;
    const isExpanded = isInteracting || (isActive && !hasSurfaceInteraction);
    const interactionHandlers = {
      onMouseEnter: () => setHoveredNavKey(surfaceItemKey),
      onMouseLeave: () =>
        setHoveredNavKey((currentKey) =>
          currentKey === surfaceItemKey ? null : currentKey,
        ),
      onFocus: () => setFocusedNavKey(surfaceItemKey),
      onBlur: () =>
        setFocusedNavKey((currentKey) =>
          currentKey === surfaceItemKey ? null : currentKey,
        ),
    };

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
          style={itemStyle}
          {...interactionHandlers}
        >
          {renderNavItemContent(item, isExpanded, surface)}
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
        style={itemStyle}
        onClick={item.onSelect}
        {...interactionHandlers}
      >
        {renderNavItemContent(item, isExpanded, surface)}
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
        "liquid-glass liquid-glass-nav pointer-events-auto flex h-[3.35rem] min-w-[20rem] max-w-[calc(100vw-1.5rem)] items-center gap-1 rounded-full p-1.5 shadow-xl",
        className,
      )}
    >
      {showLogo ? (
        <MotionLink
          to="/"
          className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-100 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-0"
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
          "h-16 w-full min-w-0 max-w-[24rem] justify-between gap-1 rounded-[2rem] p-2",
          false,
          "mobile",
        )}
      </div>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </>
  );
};

export default Navbar;
