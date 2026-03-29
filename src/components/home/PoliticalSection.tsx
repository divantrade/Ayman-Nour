"use client";

import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const cards = [
  { icon: "fa-sun", title: "حزب غد الثورة", desc: "حزب ليبرالي معارض أسسه أيمن نور. يطرح رؤية إصلاحية شاملة تقوم على الديمقراطية والليبرالية وحقوق الإنسان. امتداد لحزب الغد الذي تأسس عام 2004.", href: "/political/ghad" },
  { icon: "fa-handshake", title: "اتحاد القوى الوطنية المصرية", desc: 'تأسس في 2021 ليمثل المعارضة المصرية. أطلق "وثيقة العشرين" التي تتضمن تجريم الانقلابات وإطلاق سراح المعتقلين وإصلاح النظام الاقتصادي.', href: "/political/ena" },
  { icon: "fa-globe-africa", title: "التحالف الديمقراطي الأفريقي", desc: "شارك في تأسيسه في فبراير 2026 بالدار البيضاء. يهدف لتوحيد الأحزاب الليبرالية والديمقراطية في أفريقيا وتعزيز قيم الحرية والتعددية.", href: "/political/adafp" },
  { icon: "fa-scroll", title: "وثيقة العشرين", desc: "برنامج عمل شامل للمرحلة القادمة يتضمن: تجريم الانقلابات، إصلاح اقتصادي، عدالة اجتماعية، إطلاق سجناء الرأي، وتجريم العنف والإرهاب.", href: "/political/ena" },
];

export default function PoliticalSection() {
  return (
    <section className="py-20 bg-off-white">
      <div className="container-main">
        <SectionHeader
          label="النضال السياسي"
          title="المشروع الوطني"
          subtitle="أحزاب وتحالفات ومبادرات من أجل مصر حرة ديمقراطية"
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {cards.map((c) => (
            <Link key={c.title} href={c.href} className="no-underline group">
              <div
                className="bg-white rounded-xl p-8 transition-all duration-300 hover:border-orange"
                style={{
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid #E2E4E8",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E8742A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E4E8";
                }}
              >
                <div
                  className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-[22px] text-orange mb-4"
                  style={{ background: "rgba(232, 116, 42, 0.15)" }}
                >
                  <i className={`fas ${c.icon}`} />
                </div>
                <h3 className="text-lg font-bold mb-2.5 group-hover:text-orange transition-colors" style={{ color: "#0F1E3D" }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-[1.8]" style={{ color: "#4A4F5C" }}>{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
