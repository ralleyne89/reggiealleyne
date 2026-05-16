import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { homepageProofMetrics } from "@/config/portfolioCuration";

const ProofBand = () => {
  return (
    <section className="border-y border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-purple-200">
            Proof in 30 seconds
          </p>
          <h2 className="mt-3 max-w-2xl break-words font-display text-3xl leading-tight tracking-normal text-white [text-wrap:balance] sm:text-4xl">
            Start with the work that shows how I think, build, and make tradeoffs.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
            These three case studies put the range on the table early: AI assessment, creator platforms, and a trust-aware host workflow.
          </p>
        </div>

        <div className="grid min-w-0 gap-4">
          <div className="grid min-w-0 gap-3 sm:grid-cols-3">
            {homepageProofMetrics.map((metric) => (
              <Link
                key={metric.label}
                to={metric.href}
                className="group min-w-0 rounded-lg border border-white/10 bg-white/[0.05] p-4 transition-colors hover:border-purple-200/60 hover:bg-white/[0.08]"
              >
                <div className="flex min-w-0 items-start justify-between gap-3">
                  <p className="break-words font-display text-3xl leading-tight text-purple-200">
                    {metric.value}
                  </p>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-purple-200" />
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
        </div>
      </div>
    </section>
  );
};

export default ProofBand;
