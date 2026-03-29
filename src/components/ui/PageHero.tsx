"use client";

import Container from "./Container";
import FadeIn from "./FadeIn";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-navy text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-orange blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-orange blur-3xl" />
      </div>
      <Container className="relative z-10">
        <FadeIn>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <div className="w-20 h-1 bg-gradient-to-l from-orange to-orange-dark rounded-full mb-4" />
          {subtitle && (
            <p className="text-lg text-gray-300 max-w-2xl">{subtitle}</p>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
