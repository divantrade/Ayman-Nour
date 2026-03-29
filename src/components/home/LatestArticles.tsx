"use client";

import SectionHeader from "@/components/ui/SectionHeader";

const articles = [
  {
    date: "27 مارس 2026",
    title: "العالم لا يتوازن... بل يتفكك",
    excerpt: "تحليل جيوسياسي يصف العالم بأنه \"غني بالقوى، فقير في القيادة\". قراءة معمقة في تحولات النظام الدولي.",
  },
  {
    date: "9 مارس 2026",
    title: "حين نهضت مصر مرتين.. من ثورة الأمة إلى سؤال الدولة",
    excerpt: "مقال عن ثورة 25 يناير ومعناها العميق في سياق التاريخ المصري الحديث والنضال من أجل الديمقراطية.",
  },
  {
    date: "نوفمبر 2025",
    title: "أوراق من مذكراتي: لماذا أكتب الآن؟",
    excerpt: "\"سأقول كل شيء عن كل شيء\" - الحلقة الأولى من سلسلة المذكرات التي تكشف محطات فارقة.",
  },
];

export default function LatestArticles() {
  return (
    <section className="section section-gray" id="articles">
      <div className="container-site">
        <SectionHeader
          label="المقالات"
          title="أحدث الكتابات"
          subtitle="مقالات ورؤى سياسية من قلب المعارضة المصرية"
        />

        <div className="articles-grid">
          {articles.map((a) => (
            <div key={a.title} className="article-card fade-in">
              <div className="article-top" />
              <div className="article-body">
                <div className="article-date">{a.date}</div>
                <h3 className="article-title">{a.title}</h3>
                <p className="article-excerpt">{a.excerpt}</p>
                <a href="#" className="article-link">
                  اقرأ المزيد <i className="fas fa-arrow-left" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
