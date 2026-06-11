import { Fragment } from "react";
import Marquee from "@/components/motion/Marquee";

const items = [
  { label: "UX/UI Designer" },
  { label: "AI Technologist", accent: true },
  { label: "Design Systems" },
  { label: "React Prototyping" },
  { label: "0→1 Product" },
];

/**
 * Oversized display-type strip between the hero and featured work. Scroll
 * velocity leans into the loop (handled by the Marquee primitive).
 */
const HomeMarquee = () => (
  <section
    aria-label="Reggie Alleyne — UX/UI Designer, AI Technologist"
    className="border-y border-border/70 bg-secondary/40 py-6 sm:py-8"
  >
    <Marquee speed={70} groupClassName="gap-8 pr-8">
      {items.map((item) => (
        <Fragment key={item.label}>
          <span
            className={
              item.accent
                ? "font-display text-[clamp(2.2rem,5vw,4.2rem)] uppercase leading-none text-gradient-accent"
                : "font-display text-[clamp(2.2rem,5vw,4.2rem)] uppercase leading-none text-text-primary/15"
            }
          >
            {item.label}
          </span>
          <span
            aria-hidden="true"
            className="text-[clamp(1.1rem,2.4vw,2rem)] leading-none text-primary/60"
          >
            ✦
          </span>
        </Fragment>
      ))}
    </Marquee>
  </section>
);

export default HomeMarquee;
