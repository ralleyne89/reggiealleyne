import { Link, useLocation } from "react-router-dom";
import {
  BriefcaseBusiness,
  Home,
  MessageCircle,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useLiquidGlass } from "@/lib/liquidGlass";
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

/** Moves the glass highlight to the pointer; the CSS fades it in and out. */
const trackGlassPointer = (event: PointerEvent<HTMLElement>) => {
  if (event.pointerType !== "mouse") return;
  const nav = event.currentTarget;
  const rect = nav.getBoundingClientRect();
  nav.style.setProperty("--glass-x", `${event.clientX - rect.left}px`);
  nav.style.setProperty("--glass-y", `${event.clientY - rect.top}px`);
  nav.style.setProperty("--glass-glow", "1");
};

const releaseGlassPointer = (event: PointerEvent<HTMLElement>) => {
  event.currentTarget.style.setProperty("--glass-glow", "0");
};

const getNavItemKey = (item: NavItem) =>
  item.kind === "route" ? item.path : `action:${item.title}`;

type GlassNavProps = { className?: string; children: ReactNode };

/**
 * The nav pill. In Chromium its backdrop is bent at the rim by an SVG
 * displacement map sized to the pill; elsewhere it keeps the CSS blur.
 */
const GlassNav = ({ className, children }: GlassNavProps) => {
  const ref = useRef<HTMLElement>(null);
  const { filterId, map, strength } = useLiquidGlass(ref);
  const refract = map
    ? `url(#${filterId}) saturate(1.7) brightness(0.46)`
    : undefined;

  return (
    <motion.nav
      ref={ref}
      initial={{ scale: 0.94, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      aria-label="Primary navigation"
      onPointerMove={trackGlassPointer}
      onPointerLeave={releaseGlassPointer}
      data-refract={map ? "true" : undefined}
      style={refract ? { backdropFilter: refract, WebkitBackdropFilter: refract } : undefined}
      className={cn(
        "liquid-glass liquid-glass-nav pointer-events-auto flex h-[3.35rem] min-w-0 max-w-[calc(100vw-1.5rem)] items-center gap-1 rounded-full p-1.5",
        className,
      )}
    >
      {map ? (
        <svg className="liquid-glass-defs" aria-hidden="true" focusable="false">
          <filter
            id={filterId}
            x="0"
            y="0"
            width={map.width}
            height={map.height}
            filterUnits="userSpaceOnUse"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feImage href={map.href} x="0" y="0" width={map.width} height={map.height} result="map" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.4" result="soft" />
            <feDisplacementMap
              in="soft"
              in2="map"
              scale={strength}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
      ) : null}
      {children}
    </motion.nav>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [hidden, setHidden] = useState(false);

  // Desktop: the nav slides away while reading down and returns on the way up.
  useEffect(() => {
    let lastY = window.scrollY;
    let travel = 0;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;
      // Smooth scrolling arrives in small steps, so act on distance travelled
      // in one direction rather than on any single step.
      travel = Math.sign(delta) === Math.sign(travel) ? travel + delta : delta;
      if (y < 140 || travel < -24) setHidden(false);
      else if (travel > 48) setHidden(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setHidden(false);
  }, [location.pathname]);

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

  const navItemClassName = (isActive: boolean, surface: NavSurface) =>
    cn(
      "portfolio-nav-item relative inline-flex h-10 min-h-10 items-center justify-center overflow-hidden rounded-full border border-transparent px-3 py-2 text-sm font-semibold transition-colors duration-200",
      surface === "mobile" &&
        "h-[3.6rem] min-h-[3.6rem] min-w-0 flex-1 flex-col gap-1 rounded-[1.35rem] px-1 py-1.5 text-[0.7rem]",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
      isActive
        ? "liquid-glass-control liquid-glass-nav-control text-zinc-50"
        : "text-zinc-200 hover:text-zinc-50",
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
            surface === "mobile" && "h-[1.45rem] w-[1.45rem]",
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
              surface === "mobile" && "max-w-full text-[0.68rem] leading-none",
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
    <GlassNav className={className}>
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
    </GlassNav>
  );

  return (
    <>
      <motion.header
        className="mobile-shell-top pointer-events-none fixed inset-x-0 top-0 z-50 hidden px-3 sm:px-6 sm:pt-4 md:block"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: hidden ? 0 : 1, y: hidden ? "-130%" : 0 }}
        transition={{ duration: hidden ? 0.28 : 0.42, ease: [0.16, 1, 0.3, 1] }}
        onFocusCapture={() => setHidden(false)}
      >
        <div className="mx-auto flex w-full justify-center">
          {navPill("shrink-0", true)}
        </div>
      </motion.header>

      <div className="mobile-shell-bottom pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-2 md:hidden">
        {navPill(
          "h-[4.75rem] w-full min-w-0 max-w-[26rem] justify-between gap-0.5 rounded-[1.9rem] p-2.5",
          false,
          "mobile",
        )}
      </div>
    </>
  );
};

export default Navbar;
