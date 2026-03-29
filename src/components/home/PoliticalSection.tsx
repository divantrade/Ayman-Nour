"use client";

import SectionHeader from "@/components/ui/SectionHeader";

const cards = [
  { icon: "fa-sun", title: "حزب غد الثورة", desc: "حزب ليبرالي معارض أسسه أيمن نور. يطرح رؤية إصلاحية شاملة تقوم على الديمقراطية والليبرالية وحقوق الإنسان. امتداد لحزب الغد الذي تأسس عام 2004." },
  { icon: "fa-handshake", title: "اتحاد القوى الوطنية المصرية", desc: "تأسس في 2021 ليمثل المعارضة المصرية. أطلق \"وثيقة العشرين\" التي تتضمن تجريم الانقلابات وإطلاق سراح المعتقلين وإصلاح النظام الاقتصادي." },
  { icon: "fa-globe-africa", title: "التحالف الديمقراطي الأفريقي", desc: "شارك في تأسيسه في فبراير 2026 بالدار البيضاء. يهدف لتوحيد الأحزاب الليبرالية والديمقراطية في أفريقيا وتعزيز قيم الحرية والتعددية." },
  { icon: "fa-scroll", title: "وثيقة العشرين", desc: "برنامج عمل شامل للمرحلة القادمة يتضمن: تجريم الانقلابات، إصلاح اقتصادي، عدالة اجتماعية، إطلاق سجناء الرأي، وتجريم العنف والإرهاب." },
];

export default function PoliticalSection() {
  return (
    <section className="section" id="political">
      <div className="container-site">
        <SectionHeader
          label="النضال السياسي"
          title="المشروع الوطني"
          subtitle="أحزاب وتحالفات ومبادرات من أجل مصر حرة ديمقراطية"
        />

        <div className="ena-grid">
          {cards.map((c) => (
            <div key={c.title} className="ena-card fade-in">
              <div className="ena-card-icon">
                <i className={`fas ${c.icon}`} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
