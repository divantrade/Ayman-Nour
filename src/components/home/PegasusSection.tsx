"use client";
import Container from "@/components/ui/Container";

export default function PegasusSection() {
  return (
    <section style={{ padding: "80px 0", background: "#0F1E3D" }}>
      <Container>
        <div
          className="rounded-[20px] p-12 relative overflow-hidden max-md:p-8"
          style={{
            background: "linear-gradient(135deg, #1a0a0a, #2d1515)",
            border: "1px solid rgba(232, 80, 80, 0.2)",
          }}
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px]" style={{
            background: "radial-gradient(circle, rgba(232,116,42,0.08) 0%, transparent 70%)"
          }} />

          <div className="relative z-10">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-[28px] text-orange mb-5"
              style={{ background: "rgba(232,116,42,0.15)" }}
            >
              <i className="fas fa-shield-halved" />
            </div>

            <h2 className="text-2xl font-extrabold text-white mb-4">
              قضية التجسس الإلكتروني - بيغاسوس وبريداتور
            </h2>

            <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
              في ديسمبر 2021، كشف مختبر المواطن (Citizen Lab) التابع لجامعة تورونتو عن أن هاتف الدكتور أيمن نور كان مُخترقاً ببرنامجي تجسس حكوميين في آن واحد: بيغاسوس (Pegasus) وبريداتور (Predator). كانت هذه أول حالة موثقة عالمياً من نوعها.
            </p>

            <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              أصبحت القضية مرجعاً رئيسياً في النقاش العالمي حول مخاطر برامج التجسس الحكومية وانتهاك خصوصية المعارضين السياسيين.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 24 }}>
              {[
                { num: "2", label: "برنامجا تجسس في وقت واحد" },
                { num: "#1", label: "أول حالة موثقة عالمياً" },
                { num: "2021", label: "سنة الكشف" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="p-5 rounded-lg text-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-[28px] font-black text-orange">{f.num}</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
