"use client";
import Container from "@/components/ui/Container";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const contactItems = [
  { icon: "fab fa-x-twitter", label: "تويتر / X", value: "@AymanNour", href: "https://twitter.com/AymanNour" },
  { icon: "fab fa-facebook-f", label: "فيسبوك", value: "facebook.com/dr.Aymannour", href: "https://facebook.com/dr.Aymannour" },
  { icon: "fas fa-globe", label: "موقع أخبار الغد", value: "ghadnews.net", href: "https://ghadnews.net" },
  { icon: "fas fa-tv", label: "قناة الشرق", value: "elsharq.tv", href: "https://elsharq.tv" },
  { icon: "fas fa-building-columns", label: "اتحاد القوى الوطنية", value: "egyna.org", href: "https://egyna.org" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-navy text-white min-h-screen">
      <div className="py-20">
        <Container>
          <SectionHeader
            label="تواصل"
            title="تواصل معنا"
            subtitle="للتواصل مع مكتب الدكتور أيمن نور"
            light
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <FadeIn direction="right">
              <div className="flex flex-col gap-5">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg no-underline transition-all hover:bg-[rgba(232,116,42,0.1)] hover:border-[rgba(232,116,42,0.3)]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-white text-lg flex-shrink-0">
                      <i className={item.icon} />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">{item.label}</div>
                      <div className="text-[15px] text-white font-semibold" dir="ltr">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="left" delay={0.2}>
              {submitted ? (
                <div className="text-center py-16">
                  <i className="fas fa-check-circle text-green-400 text-6xl mb-4 block" />
                  <h3 className="text-xl font-bold mb-2">تم إرسال رسالتك بنجاح</h3>
                  <p className="text-white/60">شكراً لتواصلكم. سنعود إليكم في أقرب وقت.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-orange font-semibold hover:underline bg-transparent border-none cursor-pointer"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    required
                    placeholder="الاسم الكامل"
                    className="w-full px-[18px] py-3.5 bg-white/[0.08] border border-white/[0.15] rounded-lg text-white text-sm outline-none transition-colors focus:border-orange placeholder:text-white/30"
                  />
                  <input
                    type="email"
                    required
                    placeholder="البريد الإلكتروني"
                    dir="ltr"
                    style={{ textAlign: "right" }}
                    className="w-full px-[18px] py-3.5 bg-white/[0.08] border border-white/[0.15] rounded-lg text-white text-sm outline-none transition-colors focus:border-orange placeholder:text-white/30"
                  />
                  <input
                    type="text"
                    required
                    placeholder="الموضوع"
                    className="w-full px-[18px] py-3.5 bg-white/[0.08] border border-white/[0.15] rounded-lg text-white text-sm outline-none transition-colors focus:border-orange placeholder:text-white/30"
                  />
                  <textarea
                    required
                    placeholder="الرسالة..."
                    rows={5}
                    className="w-full px-[18px] py-3.5 bg-white/[0.08] border border-white/[0.15] rounded-lg text-white text-sm outline-none transition-colors focus:border-orange placeholder:text-white/30 resize-y"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-br from-orange to-orange-dark text-white border-none px-8 py-3.5 rounded-full text-[15px] font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(232,116,42,0.4)]"
                  >
                    <i className="fas fa-paper-plane" />&nbsp; إرسال الرسالة
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </Container>
      </div>
    </section>
  );
}
