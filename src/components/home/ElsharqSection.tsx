"use client";

import SectionHeader from "@/components/ui/SectionHeader";

const programs = [
  { name: "الشارع المصري", host: "أحمد عطوان، أحمد سميح، أحمد العربي", icon: "fa-users" },
  { name: "أنا الشعب", host: "دعاء حسن", icon: "fa-bullhorn" },
  { name: "إيه الحكاية", host: "دعاء حسن، عماد البحيري", icon: "fa-microphone" },
  { name: "هاي تك", host: "عمر الشال", icon: "fa-laptop" },
];

export default function ElsharqSection() {
  return (
    <section className="section tv-section" id="sharq">
      <div className="container-site" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          label="الإعلام"
          title="قناة الشرق"
          subtitle="الحقيقة والأمل - تبث من إسطنبول منذ 2014"
          light
        />

        <div className="tv-grid">
          {/* Info */}
          <div className="tv-info fade-in">
            <div className="tv-badge">
              <i className="fas fa-satellite-dish" /> بث مباشر على نايلسات
            </div>
            <h3>
              تلفزيون <span style={{ color: "#E8742A" }}>الشرق</span>
            </h3>
            <p>
              قناة فضائية مصرية معارضة انطلقت في 25 أبريل 2014. انتقلت ملكيتها إلى الدكتور أيمن نور في أغسطس 2015. تبث من إسطنبول وتقدم تغطية شاملة للأوضاع المصرية والعربية.
            </p>
            <a href="#" className="btn btn-primary" style={{ marginTop: 8 }}>
              <i className="fas fa-play" /> شاهد البث المباشر
            </a>
          </div>

          {/* Programs */}
          <div className="programs-list fade-in">
            {programs.map((p) => (
              <div key={p.name} className="program-item">
                <div className="program-icon">
                  <i className={`fas ${p.icon}`} />
                </div>
                <div>
                  <div className="program-name">{p.name}</div>
                  <div className="program-host">تقديم: {p.host}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
