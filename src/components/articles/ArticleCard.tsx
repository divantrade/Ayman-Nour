"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import type { Article } from "@/data/articles";
import { Calendar, ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <FadeIn delay={index * 0.05}>
      <Link href={`/articles/${article.slug}`} className="group block">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange/30">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-orange/10 text-orange rounded-full text-xs font-semibold">
                {article.category}
              </span>
              <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-xs font-semibold">
                {article.source}
              </span>
            </div>

            <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-orange transition-colors line-clamp-2">
              {article.title}
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-4">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar size={14} />
                {formatDate(article.date)}
              </div>
              <span className="inline-flex items-center gap-1 text-orange text-sm font-semibold group-hover:gap-2 transition-all">
                اقرأ
                <ArrowLeft size={14} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
