"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/utils";

export default function LatestArticles() {
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="المقالات"
          title="أحدث الكتابات"
          subtitle="مقالات ورؤى سياسية من قلب المعارضة المصرية"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestArticles.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.1}>
              <Link href={`/articles/${article.slug}`} className="group block no-underline">
                <div className="bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                  {/* Gradient top bar */}
                  <div className="h-2 bg-gradient-to-l from-orange to-navy" />

                  <div className="p-6">
                    <div className="text-xs text-orange font-semibold mb-2">
                      {formatDate(article.date)}
                    </div>
                    <h3 className="text-base font-bold text-navy mb-2.5 leading-relaxed line-clamp-2 group-hover:text-orange transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[13px] text-text-secondary leading-[1.8] line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-orange text-[13px] font-semibold mt-3 group-hover:gap-2.5 transition-all no-underline">
                      اقرأ المزيد <i className="fas fa-arrow-left" />
                    </span>
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
