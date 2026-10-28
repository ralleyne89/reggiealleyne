import { useState } from "react";
import { ArrowUpRight, Play, RotateCcw } from "lucide-react";

const demoUrl = "/technoir-demo/index.html";

export default function TechNoirInteractiveDemo() {
  const [started, setStarted] = useState(false);
  const [instance, setInstance] = useState(0);

  return (
    <section id="chapter-demo" aria-labelledby="technoir-demo-heading" className="scroll-mt-24 border-y border-gray-200 bg-[#f5f3ee] py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_430px] lg:gap-20">
        <div className="max-w-xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-gray-600">Tech Noir / Interactive demonstration</p>
          <h2 id="technoir-demo-heading" className="font-display text-4xl leading-tight tracking-tight text-gray-950 sm:text-5xl">Step inside<br />Tech Noir.</h2>
          <p className="mt-6 text-base leading-8 text-gray-600">Explore the shopping experience from the original shipped mobile application. Browse designer collections, save pieces, read styling guides, and follow a product through to checkout.</p>
          <p className="mt-4 text-sm leading-7 text-gray-600">This browser version shares the new native demo’s catalog and visual design. Inventory is sample content; try-on and checkout are simulated.</p>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center gap-3 border-b border-gray-950 py-2 text-sm font-semibold text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-950">Open full screen <ArrowUpRight className="h-4 w-4" /><span className="sr-only">(opens in a new tab)</span></a>
          {started && <button onClick={() => setInstance((value) => value + 1)} className="mt-4 flex min-h-11 items-center gap-2 text-xs text-gray-600 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-950"><RotateCcw className="h-3.5 w-3.5" />Reload preview</button>}
        </div>
        <div className="mx-auto w-full max-w-[390px]" data-lenis-prevent>
          <div className="overflow-hidden rounded-[36px] border-[7px] border-[#202022] bg-[#0e0e10] shadow-[0_28px_70px_-30px_rgba(0,0,0,0.6)]">
            {started ? (
              <iframe key={instance} src={`${demoUrl}?embedded=1`} title="Tech Noir interactive shopping demo" className="block h-[min(740px,78svh)] min-h-[520px] w-full border-0" allow="fullscreen" />
            ) : (
              <button onClick={() => setStarted(true)} aria-label="Start Tech Noir interactive demo" className="group relative flex h-[min(740px,78svh)] min-h-[520px] w-full flex-col overflow-hidden bg-[#0e0e10] text-left text-[#f0ece3] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-5px] focus-visible:outline-[#c5b897]">
                <span className="z-10 flex w-full justify-center border-b border-white/20 px-4 py-6 text-sm font-semibold tracking-[0.3em]">TECHNOIR</span>
                <img src="/technoir-demo/assets/hero.jpg" alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none" />
                <span className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/40" />
                <span className="relative mt-auto flex flex-col gap-5 px-7 pb-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c5b897]">Fashion, intelligently.</span>
                  <span className="font-serif text-5xl leading-[1.05] tracking-tight">Connected,<br />after dark.</span>
                  <span className="mt-3 inline-flex min-h-12 items-center justify-center gap-3 bg-[#f0ece3] px-5 py-4 text-xs font-semibold uppercase tracking-widest text-[#0e0e10]"><Play className="h-4 w-4" />Start demo</span>
                </span>
              </button>
            )}
          </div>
          <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-gray-500">Live browser demo / No download needed</p>
        </div>
      </div>
    </section>
  );
}
