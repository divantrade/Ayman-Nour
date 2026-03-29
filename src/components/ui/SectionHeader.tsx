"use client";

import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({ label, title, subtitle, light }: SectionHeaderProps) {
  return (
    <FadeIn className="text-center mb-14">
      {label && (
        <div className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[2px] mb-3 ${
          light ? "text-orange-light" : "text-orange"
        }`}>
          <span className="w-6 h-[2px] bg-orange inline-block" />
          {label}
          <span className="w-6 h-[2px] bg-orange inline-block" />
        </div>
      )}
      <h2
        className={`text-4xl font-extrabold mb-4 leading-tight ${
          light ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
        <span className="text-orange">.</span>
      </h2>
      {subtitle && (
        <p
          className={`text-base max-w-[600px] mx-auto ${
            light ? "text-white/60" : "text-text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
