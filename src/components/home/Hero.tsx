"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { BookOpen, Users, Award } from "lucide-react";

const stats = [
  { icon: Award, value: "+40", label: "عاماً من النضال" },
  { icon: BookOpen, value: "11", label: "كتاباً ومؤلفاً" },
  { icon: Users, value: "3", label: "دورات برلمانية" },
];

export default function Hero() {
  return (
    <section className="bg-off-white py-12 md:py-20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Right side in RTL */}
          <FadeIn direction="right">
            <div>
              <p className="text-orange font-semibold text-lg mb-2">
                الموقع الرسمي
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 leading-tight">
                د. أيمن
                <span className="text-orange"> نور</span>
              </h1>
              <p className="text-xl text-text-secondary mb-2">
                سياسي مصري معارض ومفكر ليبرالي
              </p>
              <p className="text-text-secondary leading-relaxed mb-8 max-w-lg">
                رئيس حزب غد الثورة ورئيس اتحاد القوى الوطنية المصرية. أول مرشح
                ينافس في انتخابات رئاسية مباشرة في تاريخ مصر. يناضل من أجل حرية
                مصر وديمقراطيتها منذ أكثر من أربعين عاماً.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Button href="/biography">اكتشف المسيرة</Button>
                <Button href="/contact" variant="outline">
                  تواصل معنا
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon
                      className="mx-auto text-orange mb-2"
                      size={24}
                    />
                    <div className="text-2xl md:text-3xl font-bold text-text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Image - Left side in RTL */}
          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-orange rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-orange/30 rounded-2xl" />
              {/* Image placeholder */}
              <div className="relative bg-gradient-to-br from-navy to-navy-light rounded-2xl aspect-[3/4] flex items-center justify-center overflow-hidden">
                <div className="text-center text-white/50">
                  <div className="text-8xl font-bold mb-4">أ.ن</div>
                  <p className="text-sm">صورة الدكتور أيمن نور</p>
                </div>
                {/* Orange corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-orange rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-orange rounded-bl-2xl" />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
