import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Layers,
  MessageSquare,
  PanelsTopLeft,
  Route,
  Search,
  Sparkles,
  Target,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Footer from "@/components/layout/Footer";

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ProcessStep = {
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    title: "Growth Websites",
    description:
      "Service pages, calls to action, and inquiry paths built around how a local customer decides to reach out.",
    icon: PanelsTopLeft,
  },
  {
    title: "Lead Capture & Inquiry Routing",
    description:
      "Forms, chat/contact paths, and handoff rules that send the right details to the right place.",
    icon: Route,
  },
  {
    title: "Booking & Consultation Flows",
    description:
      "Callback, appointment, or consultation paths that reduce friction after a visitor raises their hand.",
    icon: CalendarCheck,
  },
  {
    title: "Automated Follow-Up Systems",
    description:
      "Confirmation, reminder, and next-step workflows that help new inquiries stay visible.",
    icon: Workflow,
  },
  {
    title: "CRM & Pipeline Setup",
    description:
      "Simple contact records, opportunity stages, and lead statuses so the owner can see what needs attention.",
    icon: Layers,
  },
  {
    title: "Local Business Website Audits",
    description:
      "A practical review of the current site, service pages, forms, booking friction, and reporting gaps.",
    icon: Search,
  },
  {
    title: "AI-Assisted Operations",
    description:
      "Reviewed workflows for intake summaries, lead context, internal notes, and repeated admin steps.",
    icon: Bot,
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Audit the current path",
    description:
      "Map how visitors find the business, what they need to know, and where inquiries currently get lost.",
  },
  {
    title: "Build the growth website",
    description:
      "Create the page structure, service copy, contact paths, and visual system around the real buying moment.",
  },
  {
    title: "Connect capture and follow-up",
    description:
      "Set up forms, booking paths, inquiry routing, reminders, and pipeline stages that match the business.",
  },
  {
    title: "Review what is working",
    description:
      "Use weekly lead reporting and simple workflow checks to see which paths are helping and which need polish.",
  },
];

const fitSignals = [
  "Local or service business with real inquiries, but unclear follow-up",
  "Owner-led team that needs fewer missed messages and cleaner next steps",
  "Existing website that looks fine but does not help the business respond",
];

const boundaries = [
  "No generic traffic promises",
  "No fake lead guarantees",
  "No tool-first automation that hides what is happening",
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-text-primary">
      <main className="pb-24 pt-24 md:pb-0">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="-mx-2 inline-flex min-h-11 items-center px-2 text-primary transition-colors hover:text-primary-light"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </motion.div>

          <section className="grid min-w-0 gap-10 border-b border-gray-200 pb-12 pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-16 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="min-w-0"
            >
              <p className="mb-3 text-xs font-semibold uppercase leading-5 text-primary sm:text-sm">
                Services
              </p>
              <h1 className="max-w-4xl break-words font-display text-[2.45rem] leading-[1.06] text-gray-950 [text-wrap:balance] sm:text-display-lg">
                Growth Websites for service businesses that need more than a
                brochure page.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
                I design and build websites around the moment a visitor becomes
                an inquiry: clear service pages, contact paths, booking or
                callback flows, follow-up, and simple reporting.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/#contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/work"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-primary/30 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                >
                  View work
                </Link>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="min-w-0 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase leading-5 text-primary">
                    The useful version
                  </p>
                  <h2 className="mt-2 break-words font-display text-2xl leading-tight text-gray-950">
                    A site that helps the business respond.
                  </h2>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-text-secondary">
                The goal is not to decorate a homepage. The goal is to make the
                path from interest to response clearer for customers and easier
                for the business to manage.
              </p>
              <div className="mt-5 grid gap-2 text-sm font-semibold text-gray-700">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Lead capture
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Booking flows
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Weekly lead reporting
                </span>
              </div>
            </motion.aside>
          </section>

          <section className="py-12 sm:py-16">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-semibold uppercase leading-5 text-primary sm:text-sm">
                What this includes
              </p>
              <h2 className="mt-3 break-words font-display text-3xl leading-tight text-gray-950 [text-wrap:balance] sm:text-heading-xl">
                Capability-led work, not a generic website package.
              </h2>
            </div>

            <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(({ title, description, icon: Icon }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="min-w-0 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-primary/30"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 break-words text-lg font-semibold leading-7 text-gray-950">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {description}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 border-t border-gray-200 py-12 sm:py-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase leading-5 text-primary sm:text-sm">
                How the work runs
              </p>
              <h2 className="mt-3 break-words font-display text-3xl leading-tight text-gray-950 [text-wrap:balance] sm:text-heading-xl">
                Start with the customer path, then build the system around it.
              </h2>
              <p className="mt-5 text-base leading-7 text-text-secondary">
                This can begin as an audit, a focused build, or a cleanup of an
                existing site and response process.
              </p>
            </div>

            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.35 }}
                  className="grid min-w-0 gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 sm:grid-cols-[3.25rem_1fr] sm:items-start"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-sm font-semibold text-primary shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="break-words text-lg font-semibold leading-7 text-gray-950">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="grid gap-4 border-t border-gray-200 py-12 sm:py-16 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </span>
                <h2 className="font-display text-2xl leading-tight text-gray-950">
                  Best fit
                </h2>
              </div>
              <div className="grid gap-3">
                {fitSignals.map((signal) => (
                  <p
                    key={signal}
                    className="flex min-w-0 items-start gap-3 text-sm leading-6 text-text-secondary"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{signal}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h2 className="font-display text-2xl leading-tight text-gray-950">
                  Boundaries
                </h2>
              </div>
              <div className="grid gap-3">
                {boundaries.map((boundary) => (
                  <p
                    key={boundary}
                    className="flex min-w-0 items-start gap-3 text-sm leading-6 text-text-secondary"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{boundary}</span>
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
