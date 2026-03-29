"use client";

import SectionHeader from "@/components/ui/SectionHeader";

const books = [
  { title: "أوراق من مذكّراتي: شهادة على مصر في نصف قرن", desc: "أحدث كتبه. شهادة حية على أربعة عقود من التاريخ المصري، من اتحاد الطلاب إلى المنفى.", year: "2025" },
  { title: "مصر الحديثة في 2020", desc: "رؤية سياسية واقتصادية لمستقبل مصر، أصبح الأساس الفكري لسياسات حزب الغد.", year: "2002" },
  { title: "الليبرالية هي الحل", desc: "كتاب فكري رائد يقدم الليبرالية كبديل سياسي واجتماعي للمنطقة العربية.", year: "1992" },
  { title: "الحرية السياسية في الإسلام", desc: "دراسة أكاديمية في التوفيق بين الموروث الإسلامي والقيم الديمقراطية الحديثة.", year: "" },
  { title: "العسكري الأسود - زكي بدر", desc: "كشف تفاصيل عن حقبة أمنية مثيرة للجدل في تاريخ مصر المعاصر.", year: "" },
  { title: "من قتل سليمان خاطر", desc: "تحقيق في ملابسات وفاة الجندي المصري سليمان خاطر الغامضة في السجن.", year: "" },
  { title: "أزمة الخليج: اغتيال الكويت", desc: "تحليل سياسي معمّق لأزمة الخليج الثانية وتداعياتها على المنطقة العربية.", year: "" },
  { title: "يوميات صحفي مشاغب", desc: "مجموعة مختارة من مقالاته الصحفية في جريدة الوفد على مدار 16 عاماً.", year: "" },
];

export default function BooksSection() {
  return (
    <section className="section" id="books">
      <div className="container-site">
        <SectionHeader
          label="المكتبة"
          title="الكتب والمؤلفات"
          subtitle="أحد عشر كتاباً بين الفكر السياسي والتحليل والمذكرات"
        />

        <div className="books-grid">
          {books.map((book) => (
            <div key={book.title} className="book-card fade-in">
              <div className="book-cover">
                <i className="fas fa-book" style={{ fontSize: 48, color: "rgba(232,116,42,0.6)" }} />
                {book.year && <span className="book-year-badge">{book.year}</span>}
              </div>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-desc">{book.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
