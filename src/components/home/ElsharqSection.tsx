"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { Tv, ExternalLink } from "lucide-react";

export default function ElsharqSection() {
  return (
    <section className="bg-navy text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-60 h-60 rounded-full bg-orange blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-orange blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Tv className="text-orange" size={28} />
                <h2 className="text-3xl md:text-4xl font-bold">قناة الشرق</h2>
              </div>
              <div className="w-20 h-1 bg-gradient-to-l from-orange to-orange-dark rounded-full mb-6" />
              <p className="text-gray-300 leading-relaxed mb-4">
                قناة فضائية مصرية معارضة، انطلقت في 25 أبريل 2014 وتبث من
                إسطنبول. يملكها الدكتور أيمن نور منذ أغسطس 2015، وتحمل شعار
                &quot;الحقيقة والأمل&quot;.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                تقدم القناة باقة متنوعة من البرامج السياسية والاجتماعية، وتُعد من
                أبرز المنابر الإعلامية للمعارضة المصرية.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/media/elsharq">
                  <Tv size={18} />
                  شاهد البث المباشر
                </Button>
                <Button href="/media" variant="outline">
                  <ExternalLink size={18} />
                  المزيد عن الإعلام
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-navy-light rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-orange">
                أبرز البرامج
              </h3>
              <div className="space-y-4">
                {[
                  { name: "مع معتز", presenter: "معتز مطر" },
                  { name: "الشارع المصري", presenter: "عماد البحيري وأحمد عطوان" },
                  { name: "أنا الشعب", presenter: "دعاء حسن" },
                  { name: "ابن البلد", presenter: "هشام عبد الله" },
                ].map((program) => (
                  <div
                    key={program.name}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
                    <div>
                      <span className="font-semibold">{program.name}</span>
                      <span className="text-gray-400 text-sm mr-2">
                        — {program.presenter}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
