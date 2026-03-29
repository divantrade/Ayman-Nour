"use client";
import Container from "@/components/ui/Container";

import { useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const items = [
  { year: "1980", title: "بداية النشاط السياسي", desc: "انتُخب رئيساً لاتحاد طلاب المدارس الثانوية في مصر وعمره 16 عاماً فقط" },
  { year: "1985", title: "التخرج والصحافة", desc: "تخرّج من كلية الحقوق بجامعة المنصورة وبدأ العمل الصحفي في جريدة الوفد" },
  { year: "1995", title: "أصغر نائب في البرلمان", desc: "انتُخب عضواً في مجلس الشعب عن دائرة باب الشعرية وكان أصغر النواب سناً (31 عاماً)" },
  { year: "2004", title: "تأسيس حزب الغد", desc: "أسّس حزب الغد كحزب ليبرالي معارض يطرح رؤية إصلاحية شاملة لمستقبل مصر" },
  { year: "2005", title: "لحظة تاريخية فارقة", desc: "أول مرشح ينافس مبارك في انتخابات رئاسية مباشرة. حلّ ثانياً. اعتُقل وحُكم عليه بالسجن 5 سنوات" },
  { year: "2009", title: "الإفراج بضغط دولي", desc: "أُفرج عنه بعد أكثر من 3 سنوات، في خطوة اعتُبرت محاولة لتحسين العلاقات مع إدارة أوباما" },
  { year: "2013", title: "المنفى", desc: "غادر مصر بعد الانقلاب العسكري واستقر في إسطنبول. يواصل نضاله من الخارج" },
  { year: "2015", title: "قناة الشرق", desc: 'تولى ملكية قناة الشرق الفضائية المعارضة. شعارها: "الحقيقة والأمل"' },
  { year: "2021", title: "اتحاد القوى الوطنية", desc: "انتُخب رئيساً لاتحاد القوى الوطنية المصرية. كشف Citizen Lab عن اختراق هاتفه ببيغاسوس وبريداتور" },
  { year: "2026", title: "التحالف الديمقراطي الأفريقي", desc: "شارك في تأسيس التحالف الديمقراطي الأفريقي من أجل الحرية والتقدم في الدار البيضاء" },
];

export default function TimelineSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ padding: "80px 0", background: "#F0F1F3" }}>
      <Container>
        <SectionHeader
          label="المسيرة السياسية"
          title="أكثر من أربعة عقود"
          subtitle="من اتحاد طلاب الثانوية إلى قيادة المعارضة المصرية في المنفى"
        />

        <div className="timeline">
          {items.map((item, i) => (
            <div key={i} className="timeline-item fade-in">
              <div className="timeline-content">
                <span
                  className="inline-block text-white px-3.5 py-1 rounded-full text-[13px] font-bold mb-2.5"
                  style={{ background: "linear-gradient(135deg, #E8742A, #D05E18)" }}
                >
                  {item.year}
                </span>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0F1E3D" }}>{item.title}</h3>
                <p className="text-sm leading-[1.8]" style={{ color: "#4A4F5C" }}>{item.desc}</p>
              </div>
              <div className="timeline-dot" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
