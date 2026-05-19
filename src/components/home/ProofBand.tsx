import { homepageProofMetrics } from "@/config/portfolioCuration";

const workingSteps = [
  {
    step: "01",
    title: "Frame the tradeoff",
    description:
      "Name the audience, the constraint, and the decision the interface needs to make clear.",
  },
  {
    step: "02",
    title: "Shape the behavior",
    description:
      "Map the flow, build the key states, and keep the product logic visible in the screen.",
  },
  {
    step: "03",
    title: "Build the proof",
    description:
      "Turn the strongest direction into working UI, then tighten the copy, states, and evidence.",
  },
];

const reviewerNotes = [
  "Comfortable moving between product strategy, UI design, and frontend execution.",
  "Strongest when the work needs a real product surface, not just a polished mockup.",
  "Useful on AI workflows where trust, constraints, and user judgment have to stay visible.",
];

const ProofBand = () => {
  return (
    <section className="border-y border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-purple-200">
              Proof in 30 seconds
            </p>
            <h2 className="mt-3 max-w-2xl break-words font-display text-3xl leading-tight tracking-normal text-white [text-wrap:balance] sm:text-4xl">
              Start with the work that shows how I think, build, and make tradeoffs.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
              These three case studies cover AI literacy, creator platforms, and a trust-aware host workflow without asking you to hunt for the evidence.
            </p>
          </div>

          <div className="grid min-w-0 gap-3 sm:grid-cols-3">
            {homepageProofMetrics.map((metric) => (
              <article
                key={metric.label}
                className="min-w-0 rounded-lg border border-white/10 bg-white/[0.05] p-4 shadow-sm shadow-black/10"
              >
                <p className="break-words font-display text-3xl leading-tight text-purple-200">
                  {metric.value}
                </p>
                <h3 className="mt-3 text-sm font-semibold leading-6 text-white">
                  {metric.label}
                </h3>
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  {metric.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
          <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
            <div className="mb-4 flex min-w-0 flex-wrap items-end justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-teal-200">
                  How I work
                </p>
                <h3 className="mt-2 break-words font-display text-2xl leading-tight text-white">
                  I make the decision path clear first.
                </h3>
              </div>
              <p className="max-w-none text-sm leading-6 text-gray-400">
                Useful when product judgment needs a testable screen.
              </p>
            </div>

            <div className="grid border-t border-white/10 md:grid-cols-3">
              {workingSteps.map((item) => (
                <div
                  key={item.step}
                  className="min-w-0 border-b border-white/10 py-4 md:border-b-0 md:border-r md:px-4 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <p className="text-xs font-semibold leading-5 text-teal-200">
                    {item.step}
                  </p>
                  <h4 className="mt-3 text-sm font-semibold leading-6 text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="min-w-0 rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-purple-200">
              Good to know
            </p>
            <ul className="mt-4 space-y-3">
              {reviewerNotes.map((note) => (
                <li key={note} className="flex gap-3 text-sm leading-6 text-gray-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProofBand;
