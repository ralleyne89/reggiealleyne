import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, BriefcaseBusiness, Home, MessageCircle, PanelsTopLeft, Search, Sparkles, UserRound } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { getAllProjects } from "@/services/api";
import { getAllPredefinedProjectsSync } from "@/services/api/predefinedProjects";
import {
  getCaseStudyBrief,
  isPrimaryWorksProject,
  orderFeaturedProjects,
  sortProjectsNewestFirst,
} from "@/config/portfolioCuration";
import { getProjectPath } from "@/lib/projectRoutes";
import { useLenisLock } from "./SmoothScroll";

type PaletteCommand = {
  id: string;
  label: string;
  description: string;
  shortcut?: string;
  onSelect: () => void;
};

const isTypingTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName;
  return (
    target.isContentEditable ||
    tagName === "INPUT" ||
    tagName === "TEXTAREA" ||
    tagName === "SELECT"
  );
};

const PortfolioCommandPalette = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  useLenisLock(open);
  const [assistantResponse, setAssistantResponse] = useState(
    "Ask about the work, jump to a case study, or open a section.",
  );

  const { data: projects = [] } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
    placeholderData: getAllPredefinedProjectsSync,
    retry: 1,
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if ((event.metaKey || event.ctrlKey) && key === "k") {
        event.preventDefault();
        setOpen((current) => !current);
        return;
      }

      if (
        event.key === "/" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !isTypingTarget(event.target)
      ) {
        event.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("portfolio-command-open", open);

    return () => {
      document.body.classList.remove("portfolio-command-open");
    };
  }, [open]);

  const navigateTo = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const answer = (response: string) => {
    setAssistantResponse(response);
  };

  const featuredProjects = useMemo(
    () => orderFeaturedProjects(projects),
    [projects],
  );
  const additionalProjects = useMemo(
    () =>
      sortProjectsNewestFirst(projects.filter(isPrimaryWorksProject)).slice(0, 7),
    [projects],
  );

  const sectionCommands: PaletteCommand[] = [
    {
      id: "home",
      label: "Go home",
      description: "Return to the opening portfolio stage.",
      shortcut: "H",
      onSelect: () => navigateTo("/"),
    },
    {
      id: "work",
      label: "Open Work",
      description: "Browse case studies and supporting projects.",
      shortcut: "W",
      onSelect: () => navigateTo("/work"),
    },
    // Services temporarily hidden — re-add this command to restore the shortcut.
    {
      id: "home-projects",
      label: "Jump to selected work",
      description: "Go straight to the cinematic home project stack.",
      shortcut: "S",
      onSelect: () => navigateTo("/#projects"),
    },
    {
      id: "about",
      label: "Open About",
      description: "Read the working style and background.",
      shortcut: "A",
      onSelect: () => navigateTo("/about"),
    },
    {
      id: "playground",
      label: "Open Playground",
      description: "See prototypes and experiments.",
      shortcut: "P",
      onSelect: () => navigateTo("/playground"),
    },
    {
      id: "contact",
      label: "Jump to contact",
      description: "Move to the contact section on the home page.",
      shortcut: "C",
      onSelect: () => navigateTo("/#contact"),
    },
  ];

  const aiCommands: PaletteCommand[] = [
    {
      id: "ask-first",
      label: "Ask: where should I start?",
      description: "A short recommendation for first-time reviewers.",
      onSelect: () =>
        answer(
          "Start with Staybooked if you want the clearest AI product workflow, Litmus AI for assessment and payments, or CLLCTVE for platform strategy and design systems.",
        ),
    },
    {
      id: "ask-proof",
      label: "Ask: what proof is strongest?",
      description: "Summarize the evidence pattern across the portfolio.",
      onSelect: () =>
        answer(
          "The strongest proof is closest to the case studies: shipped flows, live links, screenshots, implementation notes, and bounded outcomes instead of inflated claims.",
        ),
    },
    {
      id: "ask-ai",
      label: "Ask: how does Reggie use AI?",
      description: "Explain the AI product angle without generic hype.",
      onSelect: () =>
        answer(
          "The AI work is framed around usable workflows: assessment, recommendations, listing optimization, trust cues, and practical host or learner decisions.",
        ),
    },
  ];

  const projectCommands: PaletteCommand[] = [
    ...featuredProjects,
    ...additionalProjects.filter(
      (project) =>
        !featuredProjects.some((featured) => featured.slug === project.slug),
    ),
  ].map((project) => {
    const brief = getCaseStudyBrief(project.slug);

    return {
      id: `project-${project.slug || project.id}`,
      label: project.title,
      description:
        brief?.coreDecision ||
        project.fullDescription ||
        project.description ||
        "Open this project case study.",
      onSelect: () => navigateTo(getProjectPath(project)),
    };
  });

  return (
    <>
      <button
        type="button"
        className="portfolio-command-trigger"
        onClick={() => setOpen(true)}
        aria-label="Open portfolio command palette"
      >
        <Bot aria-hidden="true" className="h-4 w-4" />
        <span>Ask portfolio</span>
        <kbd>/</kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="portfolio-command-dialog">
          <DialogTitle className="sr-only">Portfolio command palette</DialogTitle>
          <DialogDescription className="sr-only">
            Search portfolio sections, projects, and simulated assistant answers.
          </DialogDescription>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="portfolio-command-shell"
          >
            <div className="portfolio-command-shell__header">
              <div>
                <p>Portfolio assistant</p>
                <h2>Ask, jump, inspect.</h2>
              </div>
              <span aria-hidden="true">simulated</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={assistantResponse}
                className="portfolio-command-answer"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                <p>{assistantResponse}</p>
              </motion.div>
            </AnimatePresence>

            <Command className="portfolio-command">
              <CommandInput placeholder="Search projects, sections, or ask about the work..." />
              <CommandList className="portfolio-command__list">
                <CommandEmpty>No matching command. Try “work”, “AI”, or “proof”.</CommandEmpty>

                <CommandGroup heading="Ask">
                  {aiCommands.map((command) => (
                    <CommandItem
                      key={command.id}
                      value={`${command.label} ${command.description}`}
                      onSelect={command.onSelect}
                      className="portfolio-command__item"
                    >
                      <Bot className="h-4 w-4" />
                      <span className="portfolio-command__item-text">
                        <strong>{command.label}</strong>
                        <span>{command.description}</span>
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Navigate">
                  {sectionCommands.map((command) => {
                    const Icon =
                      command.id === "home"
                        ? Home
                        : command.id === "work" || command.id === "home-projects"
                          ? BriefcaseBusiness
                          : command.id === "services"
                            ? PanelsTopLeft
                          : command.id === "playground"
                            ? Sparkles
                            : command.id === "about"
                              ? UserRound
                              : Search;

                    return (
                      <CommandItem
                        key={command.id}
                        value={`${command.label} ${command.description}`}
                        onSelect={command.onSelect}
                        className="portfolio-command__item"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="portfolio-command__item-text">
                          <strong>{command.label}</strong>
                          <span>{command.description}</span>
                        </span>
                        {command.shortcut ? (
                          <CommandShortcut>{command.shortcut}</CommandShortcut>
                        ) : null}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Projects">
                  {projectCommands.map((command) => (
                    <CommandItem
                      key={command.id}
                      value={`${command.label} ${command.description}`}
                      onSelect={command.onSelect}
                      className="portfolio-command__item"
                    >
                      <BriefcaseBusiness className="h-4 w-4" />
                      <span className="portfolio-command__item-text">
                        <strong>{command.label}</strong>
                        <span>{command.description}</span>
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioCommandPalette;
