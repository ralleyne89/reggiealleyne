import { useState } from "react";
import { ArrowUpRight, Play, RotateCcw } from "lucide-react";
import type { AppDemo } from "@/config/appDemos";

type AppPhoneDemoProps = {
  demo: AppDemo;
  title: string;
};

/**
 * A working build of the app inside a phone frame. The iframe only loads
 * after the visitor asks for it, so the page stays light until then.
 */
export default function AppPhoneDemo({ demo, title }: AppPhoneDemoProps) {
  const [started, setStarted] = useState(false);
  const [instance, setInstance] = useState(0);
  const headingId = "app-demo-heading";

  return (
    <section
      id="chapter-demo"
      data-layer="Try the app"
      aria-labelledby={headingId}
      className="scroll-mt-24 border-y border-gray-200 bg-[#f5f3ee] py-14 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_400px] lg:gap-20">
        <div className="max-w-xl">
          <p className="cs-eyebrow">{demo.eyebrow}</p>
          <h2 id={headingId} className="cs-h2">
            {demo.heading}
          </h2>
          <p className="mt-6 text-base leading-8 text-gray-600">{demo.body}</p>
          <p className="mt-4 text-sm leading-7 text-gray-600">{demo.note}</p>
          <a
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center gap-3 border-b border-gray-950 py-2 text-sm font-semibold text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-950"
          >
            Open full screen <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          {started ? (
            <button
              type="button"
              onClick={() => setInstance((value) => value + 1)}
              className="mt-4 flex min-h-11 items-center gap-2 text-xs text-gray-600 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-950"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Reload the app
            </button>
          ) : null}
        </div>

        <div className="mx-auto w-full max-w-[390px]" data-lenis-prevent>
          <div className="overflow-hidden rounded-[40px] border-[8px] border-[#1b1b1d] bg-[#1b1b1d] shadow-[0_32px_80px_-32px_rgba(0,0,0,0.55)]">
            {started ? (
              <iframe
                key={instance}
                src={demo.url}
                title={`${title} working app`}
                className="block h-[min(760px,80svh)] min-h-[560px] w-full rounded-[32px] border-0 bg-white"
                allow="autoplay; fullscreen"
              />
            ) : (
              <button
                type="button"
                onClick={() => setStarted(true)}
                aria-label={`${demo.startLabel}: load the ${title} app here`}
                className="group relative block h-[min(760px,80svh)] min-h-[560px] w-full overflow-hidden rounded-[32px] bg-black text-left focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-6px] focus-visible:outline-white"
              >
                <img
                  src={demo.poster}
                  alt={demo.posterAlt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" aria-hidden="true" />
                <span className="absolute inset-x-6 bottom-8 flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-5 py-4 text-sm font-semibold text-gray-950 shadow-lg">
                  <Play className="h-4 w-4" aria-hidden="true" />
                  {demo.startLabel}
                </span>
              </button>
            )}
          </div>
          <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-gray-500">
            Working app / No download needed
          </p>
        </div>
      </div>
    </section>
  );
}
