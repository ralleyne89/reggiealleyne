import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import {
  experiments,
  upcomingExplorations,
} from "@/config/playgroundExperiments";

const Playground = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-text-primary">
      <main className="pt-24">
        <section className="relative overflow-hidden border-b border-gray-200 bg-white py-14 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:88px_88px] opacity-35" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-10"
            >
              <Link
                to="/"
                className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-[0.9fr_0.55fr] lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="max-w-4xl"
              >
                <p className="mb-3 text-sm font-semibold uppercase text-primary">
                  Prototype lab
                </p>
                <h1 className="font-display text-[2.7rem] font-semibold leading-[1.04] tracking-normal text-gray-950 sm:text-[3.5rem] lg:text-[4.15rem]">
                  Live experiments that prove the product instinct.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">
                  A focused playground of prototypes, creative systems, and
                  AI-adjacent demos. Each one is here because it shows how an
                  idea moves from rough concept to usable product surface.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="liquid-glass rounded-[1.75rem] p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="liquid-glass-control flex h-11 w-11 items-center justify-center rounded-full text-primary">
                    <Layers3 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-950">
                      4 prototypes
                    </p>
                    <p className="text-sm text-gray-600">
                      Built to test product feel, not just visuals.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid auto-rows-min grid-cols-1 items-start gap-5 lg:grid-cols-6">
              {experiments.map((experiment, index) => {
                const Icon = experiment.icon;
                const isFeature = experiment.size === "feature";
                const previewRatio = isFeature ? "aspect-[16/9]" : "aspect-[4/3]";
                const previewContent = (
                  <>
                    <div className={previewRatio}>
                      {experiment.previewImage ? (
                        <img
                          src={experiment.previewImage}
                          alt={`${experiment.title} preview`}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          onError={(event) => {
                            event.currentTarget.src = "/placeholder.svg";
                          }}
                        />
                      ) : (
                        <div className="flex h-full flex-col justify-end bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.28),transparent_32%),linear-gradient(135deg,#0f172a_0%,#1f2a44_52%,#f8fafc_100%)] p-6 text-white">
                          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur">
                            <Icon size={24} />
                          </div>
                          <div>
                            <p className="font-display text-2xl font-semibold tracking-normal">
                              Staybooked
                            </p>
                            <p className="mt-2 max-w-[18rem] text-sm leading-6 text-white/75">
                              Availability, intake, confirmation, and follow-up
                              states for service reservations.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    <div className="liquid-glass-control absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-gray-950">
                      {experiment.status}
                    </div>
                    {experiment.liveUrl || experiment.detailPath ? (
                      <div className="liquid-glass liquid-glass-dark absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <ArrowUpRight size={18} />
                      </div>
                    ) : null}
                  </>
                );

                return (
                  <motion.article
                    key={experiment.title}
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.12 + index * 0.08 }}
                    className={[
                      "group flex flex-col self-start overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10",
                      isFeature ? "lg:col-span-4" : "lg:col-span-2",
                    ].join(" ")}
                  >
                    {experiment.liveUrl ? (
                      <a
                        href={experiment.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block overflow-hidden bg-gray-100"
                        aria-label={`View ${experiment.title} live`}
                      >
                        {previewContent}
                      </a>
                    ) : experiment.detailPath ? (
                      <Link
                        to={experiment.detailPath}
                        className="relative block overflow-hidden bg-gray-100"
                        aria-label={`View ${experiment.title} project details`}
                      >
                        {previewContent}
                      </Link>
                    ) : (
                      <div className="relative block overflow-hidden bg-gray-100">
                        {previewContent}
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div className="liquid-glass-control flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-primary">
                          <Icon size={22} />
                        </div>
                        <div className="flex flex-wrap justify-end gap-2">
                          {experiment.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h2 className="font-display text-heading-md font-semibold leading-tight text-gray-950">
                        {experiment.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-text-secondary">
                        {experiment.description}
                      </p>
                      <p className="mt-5 border-l-2 border-primary/30 pl-3 text-sm leading-6 text-gray-500">
                        {experiment.proofSignal}
                      </p>

                      {experiment.liveUrl ? (
                        <a
                          href={experiment.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                        >
                          View live
                          <ExternalLink size={15} />
                        </a>
                      ) : experiment.detailPath ? (
                        <Link
                          to={experiment.detailPath}
                          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                        >
                          View project details
                          <ArrowUpRight size={15} />
                        </Link>
                      ) : (
                        <div className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-gray-500">
                          Ready for review
                        </div>
                      )}
                    </div>
                  </motion.article>
                );
              })}

              <motion.article
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.42 }}
                className="rounded-[1.75rem] border border-dashed border-gray-300 bg-white p-6 lg:col-span-2"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Sparkles size={22} />
                </div>
                <p className="text-sm font-semibold uppercase text-primary">
                  Now exploring
                </p>
                <h2 className="mt-3 font-display text-heading-md font-semibold text-gray-950">
                  More experiments are in motion.
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-600">
                  {upcomingExplorations.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Playground;
