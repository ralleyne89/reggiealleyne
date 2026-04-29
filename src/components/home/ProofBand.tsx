import { ArrowUpRight, Code2, FileText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import {
  homepageProofArtifacts,
  homepageProofMetrics,
  homepageWorkflowSignal,
} from "@/config/portfolioCuration";

const artifactIcons = [FileText, Code2, Sparkles];

const ProofBand = () => {
  return (
    <section className="border-y border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-emerald-300">
            Proof in 30 seconds
          </p>
          <h2 className="mt-3 max-w-2xl break-words font-display text-3xl leading-tight tracking-normal text-white [text-wrap:balance] sm:text-4xl">
            Start with the work that shows how I think, build, and make tradeoffs.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
            These three case studies put the range on the table early: AI assessment, creator platforms, and a trust-aware host workflow.
          </p>

          <div className="mt-7 rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-gray-400">
              {homepageWorkflowSignal.eyebrow}
            </p>
            <h3 className="mt-2 text-lg font-semibold leading-7 text-white">
              {homepageWorkflowSignal.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              {homepageWorkflowSignal.description}
            </p>
            <div className="mt-4 flex min-w-0 flex-wrap gap-2">
              {homepageWorkflowSignal.steps.map((step) => (
                <span
                  key={step}
                  className="rounded-md border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-semibold leading-5 text-gray-200"
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid min-w-0 gap-4">
          <div className="grid min-w-0 gap-3 sm:grid-cols-3">
            {homepageProofMetrics.map((metric) => (
              <Link
                key={metric.label}
                to={metric.href}
                className="group min-w-0 rounded-lg border border-white/10 bg-white/[0.05] p-4 transition-colors hover:border-emerald-300/60 hover:bg-white/[0.08]"
              >
                <div className="flex min-w-0 items-start justify-between gap-3">
                  <p className="break-words font-display text-3xl leading-tight text-emerald-300">
                    {metric.value}
                  </p>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-emerald-300" />
                </div>
                <h3 className="mt-3 text-sm font-semibold leading-6 text-white">
                  {metric.label}
                </h3>
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  {metric.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-base font-semibold leading-6 text-white">
                Artifact links
              </h3>
              <span className="text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-gray-500">
                Quick paths
              </span>
            </div>
            <div className="grid min-w-0 gap-3">
              {homepageProofArtifacts.map((artifact, index) => {
                const Icon = artifactIcons[index] || FileText;

                return (
                  <Link
                    key={artifact.title}
                    to={artifact.href}
                    className="group grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)_auto] items-start gap-3 rounded-lg border border-white/10 bg-gray-950/50 p-3 transition-colors hover:border-emerald-300/50 hover:bg-gray-900"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-300/10 text-emerald-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-gray-500">
                        {artifact.label}
                      </span>
                      <span className="mt-1 block break-words text-sm font-semibold leading-6 text-white">
                        {artifact.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-gray-400">
                        {artifact.description}
                      </span>
                    </span>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-emerald-300" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofBand;
