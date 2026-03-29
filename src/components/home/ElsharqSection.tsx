"use client";

import Link from "next/link";
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
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0F1E3D 0%, #0A1628 100%)" }}
    >
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, rgba(232,116,42,0.06) 0%, transparent 70%)"
      }} />

      <div className="container-main relative z-[2]">
        <SectionHeader
          label="الإعلام"
          title="قناة الشرق"
          subtitle="الحقيقة والأمل - تبث من إسطنبول منذ 2014"
          light
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          {/* Info - right side (RTL) */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] mb-5"
              style={{
                background: "rgba(232,116,42,0.15)",
                border: "1px solid rgba(232,116,42,0.3)",
                color: "#F09048",
              }}
            >
              <i className="fas fa-satellite-dish" /> بث مباشر على نايلسات
            </div>
            <h3 className="text-[28px] text-white font-bold mb-4">
              تلفزيون <span className="text-orange">الشرق</span>
            </h3>
            <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              قناة فضائية مصرية معارضة انطلقت في 25 أبريل 2014. انتقلت ملكيتها إلى الدكتور أيمن نور في أغسطس 2015. تبث من إسطنبول وتقدم تغطية شاملة للأوضاع المصرية والعربية.
            </p>
            <Link
              href="/media/elsharq"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] no-underline text-white transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #E8742A, #D05E18)",
                boxShadow: "0 4px 20px rgba(232,116,42,0.4)",
              }}
            >
              <i className="fas fa-play" /> شاهد البث المباشر
            </Link>
          </div>

          {/* Programs - left side (RTL) */}
          <div className="flex flex-col gap-3">
            {programs.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3.5 px-[18px] py-3.5 rounded-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(232,116,42,0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,116,42,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center text-white text-base flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #E8742A, #D05E18)" }}
                >
                  <i className={`fas ${p.icon}`} />
                </div>
                <div>
                  <div className="text-white text-[15px] font-semibold">{p.name}</div>
                  <div className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>تقديم: {p.host}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
