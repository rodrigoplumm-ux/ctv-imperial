import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  className,
}: {
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left", className)}>
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-gold">{kicker}</p>
      <h2 className="font-display text-[2.15rem] font-medium leading-[1.08] text-ivory sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      {subtitle ? <div className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{subtitle}</div> : null}
    </div>
  );
}
