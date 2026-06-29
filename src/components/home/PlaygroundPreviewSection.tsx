import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { experiments } from "@/config/playgroundExperiments";
import SectionRule from "@/components/motion/SectionRule";

const PlaygroundPreviewSection = () => {
  const reduceMotion = useReducedMotion();
  const previewExperiments = experiments.slice(0, 3);
  const motionProps = reduceMotion
    ? { initial: false, whileInView: undefined }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
      };

  return (
    <section className="relative border-t border-gray-200 bg-white py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid min-w-0 gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div
            {...motionProps}
            transition={{ duration: 0.42 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionRule index="02" label="Building for fun" className="mb-4" />
            <h2 className="break-words font-display text-[2rem] font-semibold leading-tight text-gray-950 [text-wrap:balance] sm:text-heading-xl">
              Small builds that make product ideas easier to judge.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-2xl text-base leading-7 text-text-secondary lg:justify-self-end"
            {...motionProps}
            transition={{ duration: 0.42, delay: reduceMotion ? 0 : 0.06 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Short experiments where I test flows, interaction ideas, and AI
            product moments in working code.
          </motion.p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
          {previewExperiments.map((experiment, index) => {
            const target =
              experiment.detailPath || experiment.liveUrl || "/playground";
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
                    sizes="(min-width: 768px) 33vw, 100vw"
                    onError={(event) => {
                      event.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <span className="liquid-glass-control absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-gray-950">
                    {experiment.status}
                  </span>
                </div>

                <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
                  <p className="mb-2 text-xs font-semibold uppercase leading-5 text-primary">
                    {experiment.tags[0]}
                  </p>
                  <h3 className="break-words font-display text-xl leading-tight text-text-primary transition-colors duration-300 group-hover:text-primary">
                    {experiment.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
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

                  <span className="mt-auto inline-flex min-h-10 items-center gap-2 pt-5 text-sm font-semibold text-primary">
                    {isExternal ? "View live" : "View details"}
                    {isExternal ? (
                      <ExternalLink size={15} />
                    ) : (
                      <ArrowUpRight size={15} />
                    )}
                  </span>
                </div>
              </>
            );

            return (
              <motion.article
                key={experiment.title}
                className="group flex h-full min-h-[22rem] min-w-0 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
                {...motionProps}
                transition={{ duration: 0.42, delay: reduceMotion ? 0 : index * 0.05 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                {isExternal ? (
                  <a
                    href={target}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full min-w-0 flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4"
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    to={target}
                    className="flex h-full min-w-0 flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4"
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
            View playground
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundPreviewSection;
