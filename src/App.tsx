import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/layout/AnimatedRoutes";
import Navbar from "./components/layout/Navbar";
import SiteCursor from "./components/layout/SiteCursor";
import ScrollToHash from "./components/layout/ScrollToHash";
import SmoothScroll from "./components/layout/SmoothScroll";
import DesignFileChrome from "./components/layout/DesignFileChrome";

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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-md bg-white px-5 py-3 font-semibold text-gray-950 shadow-lg focus:translate-y-0 focus:outline focus:outline-2 focus:outline-primary"
          onClick={(event) => {
            const main = document.getElementById("main-content");
            if (main) {
              event.preventDefault();
              main.focus();
              main.scrollIntoView({ block: "start" });
            }
          }}
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Navbar />
        <SiteCursor />
        <ScrollToHash />
        <DesignFileChrome />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
