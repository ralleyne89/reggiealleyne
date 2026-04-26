import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ScrollToHash from "./components/layout/ScrollToHash";
import { AnimatePresence } from "framer-motion";

const Index = lazy(() => import("./pages/Index"));
const Works = lazy(() => import("./pages/Works"));
const About = lazy(() => import("./pages/About"));
const Playground = lazy(() => import("./pages/Playground"));
const Project = lazy(() => import("./pages/Project"));

// Create a new QueryClient instance with proper configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    },
  },
});

const RouteFallback = () => (
  <main className="min-h-screen bg-white pt-28">
    <div className="container mx-auto px-4">
      <div className="h-2 w-32 rounded-full bg-primary/20" />
    </div>
  </main>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <ScrollToHash />
        <AnimatePresence mode="wait">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/works" element={<Works />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/about" element={<About />} />
              <Route path="/project/:slug" element={<Project />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
