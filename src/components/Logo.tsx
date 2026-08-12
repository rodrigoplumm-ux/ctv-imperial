import { cn } from "../utils/cn";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <a href="#topo" className={cn("group flex items-center gap-3", className)} aria-label="CTV Imperial — início">
      <span className="relative grid h-10 w-10 place-items-center">
        <span className="absolute inset-0 rounded-full bg-gold/15 blur-md transition-opacity group-hover:opacity-100" />
        <svg viewBox="0 0 40 40" className="relative h-10 w-10" aria-hidden="true">
          <defs>
            <linearGradient id="goldMark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f6e7b0" />
              <stop offset="45%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#8a6a18" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="18.5" fill="none" stroke="url(#goldMark)" strokeWidth="1.1" />
          <path
            d="M11 16.2 15.2 13.4 20 16.1 24.8 13.4 29 16.2 26.6 20.4H13.4Z"
            fill="url(#goldMark)"
          />
          <rect x="12.6" y="21.6" width="14.8" height="9.2" rx="1.4" fill="none" stroke="url(#goldMark)" strokeWidth="1.15" />
          <path d="M15 24.4h10M15 27.2h6.5" stroke="url(#goldMark)" strokeWidth="1.05" strokeLinecap="round" />
        </svg>
      </span>
      <span className={cn("flex flex-col", compact && "hidden sm:flex")}>
        <span className="font-display text-[10px] font-medium uppercase tracking-[0.38em] text-gold-2">CTV</span>
        <span className="font-display text-[17px] font-semibold leading-none tracking-[0.22em] text-ivory">
          IMPERIAL
        </span>
      </span>
    </a>
  );
}
