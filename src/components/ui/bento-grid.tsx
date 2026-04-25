import type { ComponentType, ReactNode } from "react";

import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: ComponentType<{ className?: string }>;
  description: string;
  href: string;
}) => (
  <a href={href}>
    <div
      key={name}
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl cursor-pointer",
        // light styles
        "bg-[rgba(20,20,20,1)] [box-shadow:0_0_0_1px_rgba(255,255,255,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu border border-[rgba(255,255,255,0.06)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:-translate-y-1",
        className
      )}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <Icon className="h-12 w-12 origin-left transform-gpu text-primary transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="text-xl font-semibold text-white drop-shadow-lg">
          {name}
        </h3>
        <p className="max-w-lg text-gray-200 drop-shadow-md">{description}</p>
      </div>

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.1]" />
    </div>
  </a>
);

export { BentoCard, BentoGrid };
