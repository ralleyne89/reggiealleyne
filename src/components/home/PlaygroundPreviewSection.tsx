import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { experiments } from "@/config/playgroundExperiments";
import SectionRule from "@/components/motion/SectionRule";

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
            <SectionRule index="03" label="Prototype lab" className="mb-4" />
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
            const target = experiment.detailPath || experiment.liveUrl || "/playground";
            const isExternal = Boolean(experiment.liveUrl && !experiment.detailPath);
            const content = (
              <>
                <div className="px-3 pt-3">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 shadow-[0_14px_34px_rgba(15,23,42,0.1)]">
                    <img
                      src={experiment.previewImage || "/placeholder.svg"}
                      alt={`${experiment.title} preview`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      sizes="(min-width: 768px) 33vw, 100vw"
                      onError={(event) => {
                        event.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="liquid-glass-control liquid-glass-interactive scale-75 rounded-full p-4 text-primary transition-transform duration-300 group-hover:scale-100">
                        <ArrowUpRight className="h-6 w-6" />
                      </div>
                    </div>

                    <span className="liquid-glass-control absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-gray-950">
                      {experiment.status}
                    </span>
                  </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6">
                  <p className="mb-3 text-xs font-semibold uppercase leading-5 text-primary">
                    {experiment.tags[0]}
                  </p>
                  <h3 className="mb-3 break-words font-display text-xl leading-tight text-text-primary transition-colors duration-300 group-hover:text-primary sm:text-heading-md">
                    {experiment.title}
                  </h3>
                  <p className="text-sm leading-6 text-text-secondary">
                    {experiment.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-gray-500">
                    {experiment.tags.slice(1, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-gray-200 pt-5 text-sm">
                    <p className="font-semibold text-gray-950">Proof</p>
                    <p className="mt-1 leading-6 text-gray-600">
                      {experiment.proofSignal}
                    </p>
                  </div>

                  <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-semibold text-primary sm:pt-6">
                    {isExternal ? "View live" : "View details"}
                    {isExternal ? <ExternalLink size={15} /> : <ArrowUpRight size={15} />}
                  </span>
                </div>
              </>
            );

            return (
              <motion.article
                key={experiment.title}
                className="group flex h-full min-h-[24rem] min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:min-h-[28rem]"
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
                    className="flex h-full min-w-0 flex-col rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4"
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    to={target}
                    className="flex h-full min-w-0 flex-col rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4"
                  >
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
