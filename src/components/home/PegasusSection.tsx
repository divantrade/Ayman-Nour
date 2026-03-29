"use client";

export default function PegasusSection() {
  return (
    <section className="section section-dark" id="pegasus">
      <div className="container-site">
        <div className="pegasus-card fade-in">
          <div className="pegasus-icon">
            <i className="fas fa-shield-halved" />
          </div>
          <h2 className="pegasus-title">قضية التجسس الإلكتروني - بيغاسوس وبريداتور</h2>
          <p className="pegasus-text">
            في ديسمبر 2021، كشف مختبر المواطن (Citizen Lab) التابع لجامعة تورونتو عن أن هاتف الدكتور أيمن نور كان مُخترقاً ببرنامجي تجسس حكوميين في آن واحد: بيغاسوس (Pegasus) وبريداتور (Predator). كانت هذه أول حالة موثقة عالمياً من نوعها.
          </p>
          <p className="pegasus-text">
            أصبحت القضية مرجعاً رئيسياً في النقاش العالمي حول مخاطر برامج التجسس الحكومية وانتهاك خصوصية المعارضين السياسيين.
          </p>
          <div className="pegasus-facts">
            {[
              { num: "2", label: "برنامجا تجسس في وقت واحد" },
              { num: "#1", label: "أول حالة موثقة عالمياً" },
              { num: "2021", label: "سنة الكشف" },
            ].map((f) => (
              <div key={f.label} className="pegasus-fact">
                <div className="pegasus-fact-number">{f.num}</div>
                <div className="pegasus-fact-label">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
