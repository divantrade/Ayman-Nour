"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { articles } from "@/data/articles";
import { Calendar, ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function LatestArticles() {
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-off-white">
      <Container>
        <SectionHeader
          title="أحدث المقالات"
          subtitle="آخر ما كتبه الدكتور أيمن نور من مقالات ودراسات"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.1}>
              <Link href={`/articles/${article.slug}`} className="group block">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-gray-100 group-hover:border-orange/30">
                  {/* Category & Date header */}
                  <div className="bg-navy p-4">
                    <span className="inline-block px-3 py-1 bg-orange/20 text-orange rounded-full text-xs font-semibold mb-2">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={14} />
                      {formatDate(article.date)}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-text-primary mb-3 line-clamp-2 group-hover:text-orange transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-orange text-sm font-semibold group-hover:gap-3 transition-all">
                      اقرأ المزيد
                      <ArrowLeft size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <Button href="/articles" variant="outline">
            جميع المقالات
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
