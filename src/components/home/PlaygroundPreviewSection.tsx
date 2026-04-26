import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { experiments } from "@/config/playgroundExperiments";

const PlaygroundPreviewSection = () => {
  const previewExperiments = experiments.slice(0, 3);

  return (
    <section className="relative bg-white py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid min-w-0 gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase leading-5 text-primary sm:text-sm">
              Prototype lab
            </p>
            <h2 className="break-words font-display text-[2rem] font-semibold leading-tight text-gray-950 [text-wrap:balance] sm:text-heading-xl">
              Small experiments that show how ideas behave.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-2xl text-base leading-7 text-text-secondary lg:justify-self-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Quick prototypes with stack notes, live links, and product signals
            for teams who want a designer who can make behavior tangible.
          </motion.p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
          {previewExperiments.map((experiment, index) => {
            const Icon = experiment.icon;
            const target = experiment.detailPath || experiment.liveUrl || "/playground";
            const isExternal = Boolean(experiment.liveUrl && !experiment.detailPath);
            const content = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={experiment.previewImage || "/placeholder.svg"}
                    alt={`${experiment.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <span className="liquid-glass-control absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-gray-950">
                    {experiment.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="liquid-glass-control flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-primary">
                      <Icon size={20} />
                    </span>
                    <span className="text-xs font-semibold uppercase text-primary">
                      {experiment.tags[0]}
                    </span>
                  </div>
                  <h3 className="break-words font-display text-xl font-semibold leading-tight text-gray-950">
                    {experiment.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-text-secondary">
                    {experiment.description}
                  </p>
                  <p className="mt-4 border-l-2 border-primary/30 pl-3 text-sm leading-6 text-gray-500">
                    {experiment.proofSignal}
                  </p>
                  <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-semibold text-primary">
                    {isExternal ? "View live" : "View details"}
                    {isExternal ? <ExternalLink size={15} /> : <ArrowUpRight size={15} />}
                  </span>
                </div>
              </>
            );

            return (
              <motion.article
                key={experiment.title}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-xl hover:shadow-primary/10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                {isExternal ? (
                  <a
                    href={target}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full min-w-0 flex-col"
                  >
                    {content}
                  </a>
                ) : (
                  <Link to={target} className="flex h-full min-w-0 flex-col">
                    {content}
                  </Link>
                )}
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/playground"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-950 transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            Open the prototype lab
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundPreviewSection;
