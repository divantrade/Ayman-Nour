"use client";

import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/utils";

export default function LatestArticles() {
  const latest = articles.slice(0, 3);

  return (
    <section className="py-20" style={{ background: "#F0F1F3" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="المقالات"
          title="أحدث الكتابات"
          subtitle="مقالات ورؤى سياسية من قلب المعارضة المصرية"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((a) => (
            <Link key={a.slug} href={`/articles/${a.slug}`} className="no-underline group">
              <div
                className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-sm)", border: "1px solid #E2E4E8" }}
              >
                {/* Gradient top bar - exactly like prototype */}
                <div className="h-2" style={{ background: "linear-gradient(90deg, #E8742A, #0F1E3D)" }} />

                <div className="p-6">
                  <div className="text-xs font-semibold mb-2" style={{ color: "#E8742A" }}>
                    {formatDate(a.date)}
                  </div>
                  <h3 className="text-base font-bold mb-2.5 leading-relaxed line-clamp-2 group-hover:text-orange transition-colors" style={{ color: "#0F1E3D" }}>
                    {a.title}
                  </h3>
                  <p className="text-[13px] leading-[1.8] line-clamp-3" style={{ color: "#4A4F5C" }}>
                    {a.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold mt-3 group-hover:gap-2.5 transition-all" style={{ color: "#E8742A" }}>
                    اقرأ المزيد <i className="fas fa-arrow-left" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
