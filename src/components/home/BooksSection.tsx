"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

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
    <section className="py-20 bg-off-white" id="books">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="المكتبة"
          title="الكتب والمؤلفات"
          subtitle="أحد عشر كتاباً بين الفكر السياسي والتحليل والمذكرات"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <FadeIn key={book.slug} delay={index * 0.1}>
              <Link href={`/books/${book.slug}`} className="group block h-full no-underline">
                <div className="bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-orange h-full">
                  {/* Cover */}
                  <div className="h-[200px] bg-gradient-to-br from-navy to-navy-light flex items-center justify-center relative">
                    <i className="fas fa-book text-5xl text-[rgba(232,116,42,0.6)]" />
                    {book.year && (
                      <span className="absolute top-3 left-3 bg-orange text-white px-2.5 py-0.5 rounded-full text-xs font-bold">
                        {book.year}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-navy mb-2 leading-relaxed group-hover:text-orange transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-[13px] text-text-secondary leading-[1.7]">{book.desc}</p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
