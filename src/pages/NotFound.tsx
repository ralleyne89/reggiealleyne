import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Page not found | Reggie Alleyne";
    const existing = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const robots = existing || document.createElement("meta");
    const previousRobots = robots.content;
    robots.name = "robots";
    robots.content = "noindex, follow";
    if (!existing) document.head.appendChild(robots);
    return () => {
      document.title = previousTitle;
      if (existing && previousRobots !== "noindex, follow") robots.content = previousRobots;
      else robots.remove();
    };
  }, []);

  return (
    <>
      <main id="main-content" tabIndex={-1} className="mx-auto min-h-[70vh] max-w-4xl px-6 pb-24 pt-40">
        <p className="mb-4 font-mono text-sm text-primary">404 / Page not found</p>
        <h1 className="font-display text-4xl leading-tight text-gray-950 sm:text-6xl">This page has moved or doesn’t exist.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">You can find my current case studies on the Work page, or send me a note if you were looking for something specific.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/work" className="rounded-lg bg-gray-950 px-6 py-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Explore my work</Link>
          <Link to="/#contact" className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Contact me</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default NotFound;
