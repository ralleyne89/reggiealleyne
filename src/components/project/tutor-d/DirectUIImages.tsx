import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Users,
} from "lucide-react";
import { EditorialSection } from "@/components/project/EditorialProjectLayout";

interface DirectUIImagesProps {
  handleImageClick: (imageSrc: string) => void;
}

const flowSteps = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Lesson Planner",
    icon: FileText,
  },
  {
    label: "Student Progress",
    icon: BarChart3,
  },
  {
    label: "Messaging",
    icon: MessageSquare,
  },
  {
    label: "Reports",
    icon: Users,
  },
];

const images = [
  {
    src: "/images/TutorD-Landing-Page-Final.jpg",
    alt: "TutorD landing page final UI design",
    title: "Landing Page",
    description: "A simple entry point that frames TutorD around access and low-friction learning support.",
  },
  {
    src: "/images/TutorD-Dashboard-Final.jpg",
    alt: "TutorD dashboard final UI design",
    title: "Teacher Dashboard",
    description: "A progress surface for seeing student activity, assignment urgency, and follow-up needs.",
  },
  {
    src: "/images/TutorD-Lesson-Planner-Final.jpg",
    alt: "TutorD lesson planner final UI design",
    title: "Lesson Planner",
    description: "A focused workspace for preparing lessons that can be delivered through SMS constraints.",
  },
];

const DirectUIImages: React.FC<DirectUIImagesProps> = ({
  handleImageClick,
}) => {
  return (
    <EditorialSection
      eyebrow="Product flow"
      title="Product flow and interface."
      description="The stronger story is the finished teacher workflow: plan the lesson, send it through the right channel, and see which students need support."
      className="border-y border-gray-200 bg-gray-50"
      contentClassName="max-w-6xl"
    >
      <div className="grid gap-3 sm:grid-cols-5">
        {flowSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="flex min-h-24 min-w-0 items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:flex-col sm:items-start sm:justify-between"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="min-w-0 break-words text-sm font-semibold leading-5 text-gray-950">
                {step.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 grid min-w-0 gap-5 md:grid-cols-3">
        {images.map((image, index) => (
          <motion.article
            key={image.src}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
            className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <button
              type="button"
              className="group relative block h-64 w-full overflow-hidden bg-gray-100 text-left sm:h-72 lg:h-80"
              onClick={() => handleImageClick(image.src)}
              aria-label={`Open ${image.title} screenshot`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-950 shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold leading-snug text-gray-950">
                {image.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {image.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </EditorialSection>
  );
};

export default DirectUIImages;
