"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import {
  Mail,
  Send,
  AtSign,
  Globe,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

const socialLinks = [
  {
    icon: AtSign,
    label: "Twitter / X",
    handle: "@AymanNour",
    href: "https://twitter.com/AymanNour",
  },
  {
    icon: Globe,
    label: "Facebook",
    handle: "dr.Aymannour",
    href: "https://facebook.com/dr.Aymannour",
  },
];

const importantSites = [
  { label: "أخبار الغد", href: "https://ghadnews.net" },
  { label: "اتحاد القوى الوطنية", href: "https://egyna.org" },
  { label: "المجلس العربي", href: "https://arabcouncil.foundation" },
  { label: "قناة الشرق", href: "https://elsharq.tv" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="تواصل معنا"
        subtitle="يسعدنا التواصل معكم واستقبال رسائلكم واقتراحاتكم"
      />

      <section className="py-16 bg-off-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <FadeIn direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="text-orange" size={24} />
                  <h2 className="text-2xl font-bold text-text-primary">
                    أرسل رسالة
                  </h2>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle
                      size={64}
                      className="text-green-500 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      تم إرسال رسالتك بنجاح
                    </h3>
                    <p className="text-text-secondary">
                      شكراً لتواصلكم. سنعود إليكم في أقرب وقت.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-orange font-semibold hover:underline"
                    >
                      إرسال رسالة أخرى
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm"
                        placeholder="example@email.com"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        الموضوع
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm"
                        placeholder="موضوع الرسالة"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        الرسالة
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm resize-none"
                        placeholder="اكتب رسالتك هنا..."
                      />
                    </div>

                    <Button type="submit" variant="primary" className="w-full">
                      <Send size={18} />
                      إرسال الرسالة
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="left" delay={0.2}>
              <div className="space-y-8">
                {/* Social Media */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-text-primary mb-6">
                    التواصل الاجتماعي
                  </h2>
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-off-white hover:bg-orange/5 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                          <social.icon className="text-orange" size={22} />
                        </div>
                        <div>
                          <p className="font-semibold text-text-primary">
                            {social.label}
                          </p>
                          <p className="text-text-secondary text-sm">
                            {social.handle}
                          </p>
                        </div>
                        <ExternalLink
                          size={16}
                          className="mr-auto text-gray-400"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Important Sites */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-text-primary mb-6">
                    مواقع مهمة
                  </h2>
                  <div className="space-y-3">
                    {importantSites.map((site) => (
                      <a
                        key={site.label}
                        href={site.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-off-white transition-colors group"
                      >
                        <Globe
                          className="text-orange flex-shrink-0"
                          size={18}
                        />
                        <span className="text-text-primary font-medium text-sm group-hover:text-orange transition-colors">
                          {site.label}
                        </span>
                        <ExternalLink
                          size={14}
                          className="mr-auto text-gray-400"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
