"use client";

import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const books = [
  { title: "أوراق من مذكّراتي: شهادة على مصر في نصف قرن", desc: "أحدث كتبه. شهادة حية على أربعة عقود من التاريخ المصري، من اتحاد الطلاب إلى المنفى.", year: "2025", slug: "awraq-min-mudhakkarati" },
  { title: "مصر الحديثة في 2020", desc: "رؤية سياسية واقتصادية لمستقبل مصر، أصبح الأساس الفكري لسياسات حزب الغد.", year: "2002", slug: "misr-al-haditha-2020" },
  { title: "الليبرالية هي الحل", desc: "كتاب فكري رائد يقدم الليبرالية كبديل سياسي واجتماعي للمنطقة العربية.", year: "1992", slug: "al-liberaliya-hia-al-hal" },
  { title: "الحرية السياسية في الإسلام", desc: "دراسة أكاديمية في التوفيق بين الموروث الإسلامي والقيم الديمقراطية الحديثة.", year: "", slug: "al-hurriya-al-siyasiya-fil-islam" },
  { title: "العسكري الأسود - زكي بدر", desc: "كشف تفاصيل عن حقبة أمنية مثيرة للجدل في تاريخ مصر المعاصر.", year: "", slug: "al-askari-al-aswad" },
  { title: "من قتل سليمان خاطر", desc: "تحقيق في ملابسات وفاة الجندي المصري سليمان خاطر الغامضة في السجن.", year: "", slug: "man-qatal-sulaiman-khatir" },
  { title: "أزمة الخليج: اغتيال الكويت", desc: "تحليل سياسي معمّق لأزمة الخليج الثانية وتداعياتها على المنطقة العربية.", year: "", slug: "azmat-al-khalij" },
  { title: "يوميات صحفي مشاغب", desc: "مجموعة مختارة من مقالاته الصحفية في جريدة الوفد على مدار 16 عاماً.", year: "", slug: "yawmiyat-sahafi-mushaghib" },
];

export default function BooksSection() {
  return (
    <section className="py-20 bg-off-white">
      <div className="container-main">
        <SectionHeader
          label="المكتبة"
          title="الكتب والمؤلفات"
          subtitle="أحد عشر كتاباً بين الفكر السياسي والتحليل والمذكرات"
        />

        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
          {books.map((book) => (
            <Link key={book.slug} href={`/books/${book.slug}`} className="no-underline group">
              <div
                className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
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
                  className="h-[200px] flex items-center justify-center relative"
                  style={{ background: "linear-gradient(135deg, #0F1E3D, #1A2D54)" }}
                >
                  <i className="fas fa-book text-5xl" style={{ color: "rgba(232,116,42,0.6)" }} />
                  {book.year && (
                    <span className="absolute top-3 left-3 bg-orange text-white px-2.5 py-0.5 rounded-full text-xs font-bold">
                      {book.year}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold mb-2 leading-relaxed" style={{ color: "#0F1E3D" }}>
                    {book.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7]" style={{ color: "#4A4F5C" }}>
                    {book.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
