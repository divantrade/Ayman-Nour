"use client";

import FadeIn from "@/components/ui/FadeIn";

const facts = [
  { number: "2", label: "برنامجا تجسس في وقت واحد" },
  { number: "#1", label: "أول حالة موثقة عالمياً" },
  { number: "2021", label: "سنة الكشف" },
];

export default function PegasusSection() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div
            className="rounded-[20px] p-12 relative overflow-hidden border border-[rgba(232,80,80,0.2)]"
            style={{ background: "linear-gradient(135deg, #1a0a0a, #2d1515)" }}
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px]" style={{
              background: "radial-gradient(circle, rgba(232,116,42,0.08) 0%, transparent 70%)"
            }} />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(232,116,42,0.15)] flex items-center justify-center text-[28px] text-orange mb-5">
                <i className="fas fa-shield-halved" />
              </div>

              <h2 className="text-2xl font-extrabold text-white mb-4">
                قضية التجسس الإلكتروني - بيغاسوس وبريداتور
              </h2>

              <p className="text-white/70 text-[15px] leading-[1.9] mb-5">
                في ديسمبر 2021، كشف مختبر المواطن (Citizen Lab) التابع لجامعة تورونتو عن أن هاتف الدكتور أيمن نور كان مُخترقاً ببرنامجي تجسس حكوميين في آن واحد: بيغاسوس (Pegasus) وبريداتور (Predator). كانت هذه أول حالة موثقة عالمياً من نوعها.
              </p>

              <p className="text-white/70 text-[15px] leading-[1.9] mb-6">
                أصبحت القضية مرجعاً رئيسياً في النقاش العالمي حول مخاطر برامج التجسس الحكومية وانتهاك خصوصية المعارضين السياسيين.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="bg-white/5 border border-white/[0.08] p-5 rounded-lg text-center"
                  >
                    <div className="text-[28px] font-black text-orange">{fact.number}</div>
                    <div className="text-xs text-white/50 mt-1">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
