import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "قناة الشرق",
  description: "قناة الشرق الفضائية — قناة مصرية معارضة تبث من إسطنبول. شعارها الحقيقة والأمل.",
};

const programIcons = ["fa-microphone", "fa-users", "fa-bullhorn", "fa-flag", "fa-laptop", "fa-check-double"];

export default function ElsharqPage() {
  return (
    <>
      <PageHero label="الإعلام" title="قناة الشرق" subtitle="الحقيقة والأمل — قناة فضائية مصرية معارضة تبث من إسطنبول" />

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                {[
                  { icon: "fa-calendar", label: "تاريخ الإطلاق", value: "25 أبريل 2014" },
                  { icon: "fa-map-marker-alt", label: "مقر البث", value: "إسطنبول، تركيا" },
                  { icon: "fa-user", label: "المالك", value: "د. أيمن نور (منذ 2015)" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-5 bg-off-white rounded-xl">
                    <div className="w-10 h-10 rounded-[10px] bg-[rgba(232,116,42,0.15)] flex items-center justify-center text-orange">
                      <i className={`fas ${item.icon}`} />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-text-secondary leading-[1.9] text-lg mb-8">
                قناة الشرق هي قناة فضائية مصرية معارضة، انطلقت في 25 أبريل 2014 وتبث من إسطنبول. يملكها الدكتور أيمن نور منذ أغسطس 2015. تحمل شعار &quot;الحقيقة والأمل&quot; وتُعد من أبرز المنابر الإعلامية للمعارضة المصرية.
              </p>
            </FadeIn>

            {/* Live placeholder */}
            <FadeIn>
              <div className="bg-navy rounded-[20px] aspect-video flex items-center justify-center mb-12">
                <div className="text-center text-white/50">
                  <i className="fas fa-tv text-6xl mb-4 block" />
                  <p className="text-lg font-semibold">البث المباشر</p>
                  <p className="text-sm mt-2">سيتم تضمين البث المباشر من يوتيوب هنا</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Programs - dark section */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F1E3D 0%, #0A1628 100%)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(232,116,42,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-[1200px] mx-auto px-6 relative z-[2]">
          <SectionHeader label="البرامج" title="باقة البرامج" subtitle="تشكيلة متنوعة من البرامج السياسية والاجتماعية" light />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {programs.map((program, i) => (
              <FadeIn key={program.name} delay={i * 0.1}>
                <div className="flex items-center gap-3.5 bg-white/5 border border-white/[0.08] px-[18px] py-3.5 rounded-lg transition-all hover:bg-[rgba(232,116,42,0.1)] hover:border-[rgba(232,116,42,0.3)]">
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-white text-base flex-shrink-0">
                    <i className={`fas ${programIcons[i] || "fa-tv"}`} />
                  </div>
                  <div>
                    <div className="text-white text-[15px] font-semibold">{program.name}</div>
                    <div className="text-white/50 text-[13px]">تقديم: {program.presenter}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
