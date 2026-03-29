"use client";

import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, light }: SectionHeaderProps) {
  return (
    <FadeIn className="text-center mb-12">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-l from-orange to-orange-dark mx-auto rounded-full mb-4" />
      {subtitle && (
        <p
          className={`text-lg max-w-2xl mx-auto ${
            light ? "text-gray-300" : "text-text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
