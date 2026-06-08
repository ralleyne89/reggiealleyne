import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  BadgeCheck,
  Code2,
  GitBranch,
  Lightbulb,
  PanelsTopLeft,
  SearchCheck,
  type LucideIcon,
} from "lucide-react";
import {
  getCaseStudyBrief,
  getCaseStudyNarrative,
  type CaseStudyNarrative,
} from "@/config/portfolioCuration";
import { cn } from "@/lib/utils";
import type { ProjectType } from "@/types/project";
import { EditorialSection } from "./EditorialProjectLayout";

interface ProjectNarrativeProps {
  project: ProjectType;
}

type NarrativeStepKey = Exclude<keyof CaseStudyNarrative, "hook" | "setup">;

const narrativeSteps: Array<{
  label: string;
  eyebrow: string;
  key: NarrativeStepKey | "structure";
  icon: LucideIcon;
  objectImage: string;
  objectAlt: string;
}> = [
  {
    label: "Define the problem",
    eyebrow: "Synthesis",
    icon: SearchCheck,
    key: "constraint",
    objectImage: "/images/narrative-objects/01-research-synthesis.png",
    objectAlt: "Faceted magnifying glass and prism for research synthesis.",
  },
  {
    label: "Map flows and wireframes",
    eyebrow: "Information architecture",
    icon: GitBranch,
    key: "structure",
    objectImage: "/images/narrative-objects/02-information-architecture.png",
    objectAlt: "Glossy branching route nodes for information architecture.",
  },
  {
    label: "Design the interface",
    eyebrow: "UI system",
    icon: PanelsTopLeft,
    key: "decision",
    objectImage: "/images/narrative-objects/03-interface-system.png",
    objectAlt: "Stacked modular interface blocks for a UI system.",
  },
  {
    label: "Prototype and build",
    eyebrow: "Implementation",
    icon: Code2,
    key: "build",
    objectImage: "/images/narrative-objects/04-prototype-build.png",
    objectAlt: "Glossy code cube for prototype and build work.",
  },
  {
    label: "Validate the proof",
    eyebrow: "Evidence",
    icon: BadgeCheck,
    key: "proof",
    objectImage: "/images/narrative-objects/05-proof-validation.png",
    objectAlt: "Proof badge with chart facets for validation.",
  },
  {
    label: "Reflection",
    eyebrow: "Learning",
    icon: Lightbulb,
    key: "reflection",
    objectImage: "/images/narrative-objects/06-reflection-learning.png",
    objectAlt: "Luminous prism lamp for reflection and learning.",
  },
];

interface FlowStep {
  label: string;
  eyebrow: string;
  icon: LucideIcon;
  body: string;
  objectImage: string;
  objectAlt: string;
}

const timelineViewport = {
  once: false,
  amount: 0.18,
  margin: "0px 0px -12% 0px",
};

const timelineSpring = {
  stiffness: 120,
  damping: 28,
  mass: 0.22,
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TimelineStep = ({
  index,
  step,
  shouldReduceMotion,
}: {
  index: number;
  step: FlowStep;
  shouldReduceMotion: boolean;
}) => {
  const Icon = step.icon;
  const stepRef = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start 96%", "center 54%"],
  });
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.26, 0.68, 1], [0.18, 0.72, 1, 1]),
    timelineSpring,
  );
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.58, 1], [72, 0, 0]),
    timelineSpring,
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.58, 1], [0.94, 1, 1]),
    timelineSpring,
  );
  const objectOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.22, 0.7, 1], [0, 0.55, 1, 1]),
    timelineSpring,
  );
  const objectY = useSpring(
    useTransform(scrollYProgress, [0, 0.64, 1], [96, 0, 0]),
    timelineSpring,
  );
  const objectX = useSpring(
    useTransform(scrollYProgress, [0, 0.64, 1], [index % 2 === 0 ? 34 : -34, 0, 0]),
    timelineSpring,
  );
  const objectScale = useSpring(
    useTransform(scrollYProgress, [0, 0.62, 1], [0.78, 1.04, 1]),
    timelineSpring,
  );
  const objectRotate = useSpring(
    useTransform(scrollYProgress, [0, 0.62, 1], [index % 2 === 0 ? -7 : 7, 0, 0]),
    timelineSpring,
  );
  const dotScale = useSpring(
    useTransform(scrollYProgress, [0, 0.38, 0.7, 1], [0.68, 1.18, 1, 1]),
    timelineSpring,
  );
  const dotGlowOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.26, 0.72, 1], [0, 1, 0.82, 0.45]),
    timelineSpring,
  );
  const cardAccentScale = useSpring(
    useTransform(scrollYProgress, [0.08, 0.7], [0, 1]),
    timelineSpring,
  );
  const objectHaloOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.32, 0.86, 1], [0, 0.7, 0.42, 0.28]),
    timelineSpring,
  );
  const objectHaloScale = useSpring(
    useTransform(scrollYProgress, [0, 0.58, 1], [0.72, 1.08, 1]),
    timelineSpring,
  );
  const objectBaseScale = useSpring(
    useTransform(scrollYProgress, [0.18, 0.76], [0.2, 1]),
    timelineSpring,
  );
  const articleStyle = shouldReduceMotion ? undefined : { opacity, y, scale };
  const objectImageStyle = shouldReduceMotion
    ? undefined
    : {
        opacity: objectOpacity,
        x: objectX,
        y: objectY,
        scale: objectScale,
        rotate: objectRotate,
      };
  const dotStyle = shouldReduceMotion ? undefined : { scale: dotScale };
  const glowStyle = shouldReduceMotion
    ? undefined
    : { opacity: dotGlowOpacity, scale: dotScale };
  const accentStyle = shouldReduceMotion ? undefined : { scaleX: cardAccentScale };
  const haloStyle = shouldReduceMotion
    ? undefined
    : { opacity: objectHaloOpacity, scale: objectHaloScale };
  const baseStyle = shouldReduceMotion
    ? undefined
    : { opacity: objectHaloOpacity, scaleX: objectBaseScale };

  return (
    <motion.li
      ref={stepRef}
      className="project-narrative-timeline__item relative grid gap-4 pl-12 lg:grid-cols-2 lg:items-stretch lg:gap-14 lg:pl-0"
      style={{ position: "relative" }}
    >
      <motion.span
        className="project-narrative-timeline__dot absolute left-4 top-7 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-primary/20 bg-white text-xs font-semibold text-primary shadow-sm ring-4 ring-white lg:left-1/2"
        style={dotStyle}
        aria-hidden="true"
      >
        <motion.span
          className="project-narrative-timeline__dot-glow"
          style={glowStyle}
        />
        <span className="relative z-10">
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.span>

      <motion.article
        className={cn(
          "project-narrative-timeline__card relative grid min-h-full content-between gap-8 overflow-hidden rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow sm:p-6 lg:row-start-1",
          "hover:shadow-md",
          index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2",
        )}
        style={articleStyle}
      >
        <motion.span
          className="project-narrative-timeline__card-accent"
          style={accentStyle}
          aria-hidden="true"
        />
        <div>
          <div className="mb-8 flex items-start justify-between gap-4">
            <p className="text-sm font-semibold leading-5 text-primary">
              {step.eyebrow}
            </p>
            <span
              className="font-display text-4xl leading-none text-gray-200"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="font-display text-2xl leading-tight text-gray-950">
            {step.label}
          </h3>
          <p className="mt-4 text-base leading-7 text-gray-600 [text-wrap:pretty] sm:text-lg sm:leading-8">
            {step.body}
          </p>
        </div>

        <Icon className="h-5 w-5 text-primary/70" aria-hidden="true" />
      </motion.article>

      <motion.figure
        className={cn(
          "project-narrative-object-visual pointer-events-none select-none lg:row-start-1",
          index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1",
        )}
      >
        <motion.span
          className="project-narrative-object-visual__halo"
          style={haloStyle}
          aria-hidden="true"
        />
        <motion.img
          src={step.objectImage}
          alt={step.objectAlt}
          style={objectImageStyle}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 34rem, 100vw"
        />
        <motion.span
          className="project-narrative-object-visual__base"
          style={baseStyle}
          aria-hidden="true"
        />
      </motion.figure>
    </motion.li>
  );
};

const firstText = (...values: Array<string | null | undefined>) =>
  values.find((value) => Boolean(value?.trim()))?.trim() || "";

const compactItems = (items?: string[] | null, limit = 2) =>
  items?.filter(Boolean).slice(0, limit) || [];

const joinSentences = (items?: string[] | null, limit = 2) =>
  compactItems(items, limit).join(" ");

const getFlowCopy = (
  key: NarrativeStepKey | "structure",
  narrative: CaseStudyNarrative | undefined,
  project: ProjectType,
) => {
  const processNotes = compactItems(project.process, 6);
  const brief = getCaseStudyBrief(project.slug);

  switch (key) {
    case "constraint":
      return firstText(
        narrative?.constraint,
        brief?.constraint,
        project.challenge,
        project.problem,
        project.problemSolved,
      );
    case "structure":
      return firstText(
        processNotes[1],
        processNotes[0],
        brief?.coreDecision,
        narrative?.decision,
        project.solution,
      );
    case "decision":
      return firstText(
        narrative?.decision,
        brief?.coreDecision,
        project.solution,
        processNotes[2],
      );
    case "build":
      return firstText(
        narrative?.build,
        processNotes[3],
        processNotes[2],
        joinSentences(project.deliverables, 2),
      );
    case "proof":
      return firstText(
        narrative?.proof,
        brief?.evidence,
        project.conclusion?.impact,
        joinSentences(project.keyAchievements, 2),
      );
    case "reflection":
      return firstText(
        narrative?.reflection,
        project.conclusion?.learnings,
        project.conclusion?.nextSteps,
      );
    case "research":
      return firstText(narrative?.research, processNotes[0], project.problem);
    default:
      return "";
  }
};

const getProjectFlow = (
  narrative: CaseStudyNarrative | undefined,
  project: ProjectType,
): FlowStep[] =>
  narrativeSteps
    .map((step) => ({
      ...step,
      body: getFlowCopy(step.key, narrative, project),
    }))
    .filter((step) => step.body);

const ProjectNarrative = ({ project }: ProjectNarrativeProps) => {
  const narrative = getCaseStudyNarrative(project.slug);
  const brief = getCaseStudyBrief(project.slug);
  const flowSteps = getProjectFlow(narrative, project);
  const shouldReduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 58%"],
  });
  const railProgress = useSpring(scrollYProgress, timelineSpring);
  const hook = firstText(
    narrative?.hook,
    project.problem,
    project.challenge,
    project.summary,
  );
  const setup = firstText(
    narrative?.setup,
    project.solution,
    project.fullDescription,
    brief?.audience,
  );

  if (!flowSteps.length && !hook && !setup) return null;

  const revealProps = shouldReduceMotion
    ? { initial: false }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: timelineViewport,
      };

  return (
    <EditorialSection
      className="border-b border-gray-200"
      contentClassName="max-w-[82rem] px-4 sm:px-6 lg:px-0"
      tone="white"
    >
      <div data-testid="project-narrative">
        <motion.div
          className="max-w-5xl"
          variants={headerVariants}
          {...revealProps}
        >
          <div>
            <p className="mb-3 text-sm font-semibold leading-5 text-primary">
              Case study flow
            </p>
            <h2 className="font-display text-4xl leading-tight text-gray-950 [text-wrap:balance] sm:text-5xl">
              From persona to product decisions
            </h2>
            {hook || setup ? (
              <div className="mt-6 space-y-5">
                {hook ? (
                  <p className="text-base leading-7 text-gray-600 [text-wrap:pretty] sm:text-lg sm:leading-8">
                    {hook}
                  </p>
                ) : null}
                {setup ? (
                  <p className="w-full text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                    {setup}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        </motion.div>

        <div
          ref={timelineRef}
          className="project-narrative-timeline relative mt-12"
          style={{ position: "relative" }}
        >
          <div
            className="project-narrative-timeline__rail absolute bottom-4 left-4 top-4 w-px -translate-x-1/2 rounded-full bg-gray-200 lg:left-1/2"
            aria-hidden="true"
          />
          <motion.div
            className="project-narrative-timeline__rail-progress absolute bottom-4 left-4 top-4 w-px -translate-x-1/2 origin-top rounded-full bg-primary lg:left-1/2"
            style={shouldReduceMotion ? { scaleY: 1 } : { scaleY: railProgress }}
            aria-hidden="true"
          />
          <ol className="space-y-8">
            {flowSteps.map((step, index) => {
              return (
                <TimelineStep
                  key={step.label}
                  index={index}
                  step={step}
                  shouldReduceMotion={Boolean(shouldReduceMotion)}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </EditorialSection>
  );
};

export default ProjectNarrative;
