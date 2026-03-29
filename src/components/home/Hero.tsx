"use client";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden pt-[70px]"
      style={{ background: "linear-gradient(160deg, #0F1E3D 0%, #15254A 50%, #1A2D54 100%)" }}
    >
      {/* Background radials */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 20% 80%, rgba(232,116,42,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(232,116,42,0.05) 0%, transparent 50%)"
      }} />
      <div className="hero-pattern" />

      <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center relative z-[2]">
        {/* Content */}
        <div className="animate-fadeInRight">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-6"
            style={{
              background: "rgba(232, 116, 42, 0.15)",
              border: "1px solid rgba(232, 116, 42, 0.3)",
              color: "#F09048",
            }}
          >
            <i className="fas fa-circle text-[10px]" />
            مناضل من أجل الحرية والديمقراطية
          </div>

          <h1 className="text-[52px] font-black text-white leading-[1.2] mb-2 max-md:text-4xl">
            د. أيمن عبد العزيز <span className="text-orange">نور</span>
          </h1>

          <p className="text-[22px] font-normal mb-6 max-md:text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
            سياسي، مفكر، صحفي، إعلامي
          </p>

          <p className="text-base leading-[1.9] mb-8 max-w-[520px]" style={{ color: "rgba(255,255,255,0.6)" }}>
            أول مرشح رئاسي ينافس الرئيس مبارك في تاريخ مصر. مؤسس حزب الغد، رئيس اتحاد القوى الوطنية المصرية، ومالك قناة الشرق. أكثر من أربعة عقود من النضال السياسي من أجل مصر حرة ديمقراطية.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-9 max-md:justify-center">
            {[
              { num: "+40", label: "عاماً من النضال" },
              { num: "11", label: "كتاباً مؤلفاً" },
              { num: "3", label: "دورات برلمانية" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black text-orange leading-none">{s.num}</div>
                <div className="text-xs font-medium mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap max-md:justify-center">
            <a
              href="/biography"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] no-underline text-white transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #E8742A, #D05E18)",
                boxShadow: "0 4px 20px rgba(232,116,42,0.4)",
              }}
            >
              <i className="fas fa-route" /> اكتشف المسيرة
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] no-underline text-white transition-all"
              style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.3)" }}
            >
              <i className="fas fa-envelope" /> تواصل معنا
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:flex justify-center items-center animate-fadeInLeft">
          <div className="relative w-[380px] h-[460px]">
            <div
              className="w-full h-full rounded-[20px] flex items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1A2D54, #15254A)",
                border: "3px solid rgba(232,116,42,0.3)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            >
              <div className="text-center" style={{ color: "rgba(255,255,255,0.4)" }}>
                <i className="fas fa-user text-[80px] mb-4 block" />
                <p className="text-sm">صورة الدكتور أيمن نور</p>
              </div>
            </div>
            {/* Accent corners */}
            <div className="absolute -top-5 -right-5 w-[120px] h-[120px] rounded-xl opacity-30" style={{ border: "3px solid #E8742A" }} />
            <div className="absolute -bottom-5 -left-5 w-[120px] h-[120px] rounded-xl opacity-30" style={{ border: "3px solid #E8742A" }} />
          </div>
        </div>
      </div>

      {/* Bottom orange line */}
      <div
        className="absolute bottom-0 right-0 left-0 h-1"
        style={{ background: "linear-gradient(90deg, transparent, #E8742A, transparent)" }}
      />
    </section>
  );
}
