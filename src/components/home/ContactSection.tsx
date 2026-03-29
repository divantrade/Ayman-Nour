"use client";

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
    <section className="section section-dark" id="contact">
      <div className="container-site">
        <SectionHeader label="تواصل" title="تواصل معنا" subtitle="للتواصل مع مكتب الدكتور أيمن نور" light />

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info fade-in">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-item">
                <div className="contact-icon">
                  <i className={item.icon} />
                </div>
                <div>
                  <div className="contact-label">{item.label}</div>
                  <div className="contact-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="contact-form fade-in" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="الاسم الكامل" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="البريد الإلكتروني" style={{ direction: "ltr", textAlign: "right" }} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="الموضوع" />
            </div>
            <div className="form-group">
              <textarea placeholder="الرسالة..." />
            </div>
            <button type="submit" className="btn-submit">
              <i className="fas fa-paper-plane" />&nbsp; إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
