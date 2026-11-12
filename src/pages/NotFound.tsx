import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/layout/Footer";
import SelectionFrame from "@/components/project/SelectionFrame";
import { usePageMeta } from "@/lib/pageMeta";

const NotFound = () => {
  const { pathname } = useLocation();

  usePageMeta({
    title: "Page not found | Reggie Alleyne",
    description: "This page doesn't exist. Head to the work or the home page.",
    path: pathname,
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-white text-text-primary">
      <main className="container mx-auto flex min-h-[70vh] flex-col justify-center px-4 pb-32 pt-28">
        <div className="nf-frame" aria-hidden="true">
          <SelectionFrame label={`Frame 404 / ${pathname}`}>
            <div className="nf-frame__empty">Empty frame</div>
          </SelectionFrame>
        </div>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          404
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          This page doesn't exist.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-text-secondary">
          The link may be old or mistyped. The case studies are on the Work page.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/work"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-gray-950 px-6 font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            View work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/"
            className="inline-flex min-h-12 items-center rounded-lg border border-gray-300 px-6 font-medium transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Go home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
