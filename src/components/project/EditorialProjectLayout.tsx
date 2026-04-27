import { ArrowLeft, X } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface EditorialSectionProps {
  eyebrow?: string;
  title?: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  tone?: "white" | "soft";
}

export const EditorialSection = ({
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
  headerClassName,
  tone = "white",
}: EditorialSectionProps) => {
  return (
    <section
      className={cn(
        "w-full py-12 sm:py-16",
        tone === "soft" && "bg-gray-50",
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", contentClassName)}>
        {(eyebrow || title || description) && (
          <div className={cn("mb-8 max-w-3xl sm:mb-10", headerClassName)}>
            {eyebrow ? (
              <p className="mb-3 text-sm font-semibold leading-5 text-primary">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="break-words font-display text-3xl leading-tight text-gray-950 [text-wrap:balance] sm:text-heading-xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <div className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                {description}
              </div>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

interface CaseStudyFrameProps {
  children: ReactNode;
  className?: string;
}

export const CaseStudyFrame = ({ children, className }: CaseStudyFrameProps) => (
  <div className={cn("min-w-0 bg-white", className)}>{children}</div>
);

interface CaseStudyFooterProps {
  label?: string;
}

export const CaseStudyFooter = ({
  label = "Back to work index",
}: CaseStudyFooterProps) => (
  <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-8 sm:px-6 sm:pt-12">
    <Link
      to="/works"
      className="inline-flex min-h-11 items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  </div>
);

interface ProjectLightboxModalProps {
  imageSrc: string | null;
  alt?: string;
  onClose: () => void;
  imageClassName?: string;
}

export const ProjectLightboxModal = ({
  imageSrc,
  alt = "Full size project visual",
  onClose,
  imageClassName,
}: ProjectLightboxModalProps) => {
  if (!imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/95 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative h-full max-h-[90vh] w-full max-w-7xl"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={alt}
          className={cn("h-full w-full rounded-lg object-contain", imageClassName)}
        />
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-950 shadow-lg transition-colors hover:bg-gray-100"
          onClick={onClose}
          aria-label="Close full-size image"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
