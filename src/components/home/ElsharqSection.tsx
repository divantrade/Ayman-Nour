"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const programs = [
  { name: "مع معتز", host: "معتز مطر", icon: "fa-microphone" },
  { name: "الشارع المصري", host: "عماد البحيري وأحمد عطوان", icon: "fa-users" },
  { name: "أنا الشعب", host: "دعاء حسن", icon: "fa-bullhorn" },
  { name: "ابن البلد", host: "هشام عبد الله", icon: "fa-flag" },
  { name: "هاي تك", host: "عمر الشال", icon: "fa-laptop" },
  { name: "بالتأكيد", host: "هشام عبد الحميد", icon: "fa-check-double" },
];

export default function ElsharqSection() {
  return (
    <section className="py-20 relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #0F1E3D 0%, #0A1628 100%)"
    }}>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, rgba(232,116,42,0.06) 0%, transparent 70%)"
      }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-[2]">
        <SectionHeader
          label="الإعلام"
          title="قناة الشرق"
          subtitle="الحقيقة والأمل - تبث من إسطنبول منذ 2014"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2 bg-[rgba(232,116,42,0.15)] border border-[rgba(232,116,42,0.3)] px-3.5 py-1.5 rounded-full text-orange-light text-[13px] mb-5">
              <i className="fas fa-satellite-dish" /> بث مباشر على نايلسات
            </div>
            <h3 className="text-[28px] text-white font-bold mb-4">
              تلفزيون <span className="text-orange">الشرق</span>
            </h3>
            <p className="text-white/70 text-[15px] leading-[1.9] mb-6">
              قناة فضائية مصرية معارضة انطلقت في 25 أبريل 2014. انتقلت ملكيتها إلى الدكتور أيمن نور في أغسطس 2015. تبث من إسطنبول وتقدم تغطية شاملة للأوضاع المصرية والعربية.
            </p>
            <Link
              href="/media/elsharq"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] no-underline bg-gradient-to-br from-orange to-orange-dark text-white shadow-[0_4px_20px_rgba(232,116,42,0.4)] hover:-translate-y-0.5 transition-all"
            >
              <i className="fas fa-play" /> شاهد البث المباشر
            </Link>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="flex flex-col gap-3">
              {programs.map((program) => (
                <div
                  key={program.name}
                  className="flex items-center gap-3.5 bg-white/5 border border-white/[0.08] px-[18px] py-3.5 rounded-lg transition-all hover:bg-[rgba(232,116,42,0.1)] hover:border-[rgba(232,116,42,0.3)]"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-white text-base flex-shrink-0">
                    <i className={`fas ${program.icon}`} />
                  </div>
                  <div>
                    <div className="text-white text-[15px] font-semibold">{program.name}</div>
                    <div className="text-white/50 text-[13px]">تقديم: {program.host}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
