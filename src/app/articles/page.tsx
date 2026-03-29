"use client";
import Container from "@/components/ui/Container";

import { useState, useMemo } from "react";
import PageHero from "@/components/ui/PageHero";
import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/data/articles";

const categories = ["الكل", "سياسة", "فكر", "مذكرات"];
const sources = ["الكل", "العربي الجديد", "الجزيرة مباشر", "أخبار الغد"];

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("الكل");
  const [source, setSource] = useState("الكل");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch = search === "" || article.title.includes(search) || article.excerpt.includes(search);
      const matchesCategory = category === "الكل" || article.category === category;
      const matchesSource = source === "الكل" || article.source === source;
      return matchesSearch && matchesCategory && matchesSource;
    });
  }, [search, category, source]);

  return (
    <>
      <PageHero
        label="المقالات"
        title="أحدث الكتابات"
        subtitle="مقالات ورؤى سياسية من قلب المعارضة المصرية"
      />

      <section className="py-20 bg-gray-100">
        <Container>
          {/* Filters */}
          <div className="bg-white rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <i className="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange focus:ring-1 focus:ring-orange outline-none text-sm"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      category === cat
                        ? "bg-gradient-to-br from-orange to-orange-dark text-white"
                        : "bg-gray-100 text-text-secondary hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                {sources.map((src) => (
                  <button
                    key={src}
                    onClick={() => setSource(src)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      source === src
                        ? "bg-navy text-white"
                        : "bg-gray-100 text-text-secondary hover:bg-gray-200"
                    }`}
                  >
                    {src}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={article.slug} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">لا توجد مقالات تطابق معايير البحث</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
