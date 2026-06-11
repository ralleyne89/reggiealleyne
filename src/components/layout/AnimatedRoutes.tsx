import { lazy, Suspense } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  CLLCTVE_PROJECT_CANONICAL_PATH,
  CLLCTVE_PROJECT_ROUTE_ALIASES,
} from "@/lib/projectRoutes";

const Index = lazy(() => import("@/pages/Index"));
const Works = lazy(() => import("@/pages/Works"));
const Services = lazy(() => import("@/pages/Services"));
const About = lazy(() => import("@/pages/About"));
const Playground = lazy(() => import("@/pages/Playground"));
const Project = lazy(() => import("@/pages/Project"));

const RouteFallback = () => (
  <main className="min-h-screen bg-white pt-28">
    <div className="container mx-auto px-4">
      <div className="h-2 w-32 rounded-full bg-primary/20" />
    </div>
  </main>
);

const PageTransitionLayer = ({ routeKey }: { routeKey: string }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      key={`page-wipe-${routeKey}`}
      aria-hidden="true"
      className="page-transition-wipe"
      initial={{
        clipPath: "inset(100% 0% 0% 0%)",
      }}
      animate={{
        clipPath: [
          "inset(100% 0% 0% 0%)",
          "inset(0% 0% 0% 0%)",
          "inset(0% 0% 100% 0%)",
        ],
      }}
      transition={{
        duration: 0.74,
        ease: [0.16, 1, 0.3, 1],
        times: [0, 0.46, 1],
      }}
    >
      <span className="page-transition-wipe__label">Reggie Alleyne</span>
      <span className="page-transition-wipe__beam" />
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const routeKey = location.pathname;

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={routeKey}
          className="route-motion-shell"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.34,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Suspense fallback={<RouteFallback />}>
            <Routes location={location}>
              <Route path="/" element={<Index />} />
              <Route path="/work" element={<Works />} />
              <Route path="/works" element={<Navigate to="/work" replace />} />
              <Route path="/services" element={<Services />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/about" element={<About />} />
              {CLLCTVE_PROJECT_ROUTE_ALIASES.map((alias) => (
                <Route
                  key={alias}
                  path={alias}
                  element={
                    <Navigate to={CLLCTVE_PROJECT_CANONICAL_PATH} replace />
                  }
                />
              ))}
              <Route path="/project/:slug" element={<Project />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
      <PageTransitionLayer routeKey={routeKey} />
    </>
  );
};

export default AnimatedRoutes;
