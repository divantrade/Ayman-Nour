"use client";
import Container from "@/components/ui/Container";

import FadeIn from "./FadeIn";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-navy via-navy-mid to-navy-light text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 20% 80%, rgba(232,116,42,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(232,116,42,0.05) 0%, transparent 50%)"
      }} />
      <div className="hero-pattern" />
      <Container className="relative" style={{ zIndex: 10, textAlign: "center" }}>
        <FadeIn>
          {label && (
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[2px] mb-3 text-orange-light">
              <span className="w-6 h-[2px] bg-orange inline-block" />
              {label}
              <span className="w-6 h-[2px] bg-orange inline-block" />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {title}<span className="text-orange">.</span>
          </h1>
          {subtitle && (
            <p className="text-lg text-white/60 max-w-[600px] mx-auto">{subtitle}</p>
          )}
        </FadeIn>
      </Container>
      <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-l from-transparent via-orange to-transparent" />
    </section>
  );
}
