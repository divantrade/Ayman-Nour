"use client";
import Container from "@/components/ui/Container";

import SectionHeader from "@/components/ui/SectionHeader";

const contactItems = [
  { icon: "fab fa-x-twitter", label: "تويتر / X", value: "@AymanNour" },
  { icon: "fab fa-facebook-f", label: "فيسبوك", value: "facebook.com/dr.Aymannour" },
  { icon: "fas fa-globe", label: "موقع أخبار الغد", value: "ghadnews.net" },
  { icon: "fas fa-tv", label: "قناة الشرق", value: "elsharq.tv" },
  { icon: "fas fa-building-columns", label: "اتحاد القوى الوطنية", value: "egyna.org" },
];

export default function ContactSection() {
  return (
    <section style={{ padding: "80px 0", background: "#0F1E3D" }}>
      <Container>
        <SectionHeader label="تواصل" title="تواصل معنا" subtitle="للتواصل مع مكتب الدكتور أيمن نور" light />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(232,116,42,0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,116,42,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #E8742A, #D05E18)" }}
                >
                  <i className={item.icon} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{item.label}</div>
                  <div className="text-[15px] text-white font-semibold" dir="ltr">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            {["الاسم الكامل", "البريد الإلكتروني", "الموضوع"].map((ph) => (
              <input
                key={ph}
                type="text"
                placeholder={ph}
                className="w-full px-[18px] py-3.5 rounded-lg text-white text-sm outline-none transition-colors font-[inherit]"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#E8742A")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                dir={ph === "البريد الإلكتروني" ? "ltr" : undefined}
              />
            ))}
            <textarea
              placeholder="الرسالة..."
              rows={5}
              className="w-full px-[18px] py-3.5 rounded-lg text-white text-sm outline-none transition-colors resize-y font-[inherit]"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#E8742A")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
            />
            <button
              type="submit"
              className="w-full text-white border-none px-8 py-3.5 rounded-full text-[15px] font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #E8742A, #D05E18)",
              }}
            >
              <i className="fas fa-paper-plane" />&nbsp; إرسال الرسالة
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
