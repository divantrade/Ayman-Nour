"use client";

import { useState, useMemo } from "react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/data/articles";
import { Search } from "lucide-react";

const categories = ["الكل", "سياسة", "فكر", "مذكرات"];
const sources = ["الكل", "العربي الجديد", "الجزيرة مباشر", "أخبار الغد"];

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("الكل");
  const [source, setSource] = useState("الكل");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        search === "" ||
        article.title.includes(search) ||
        article.excerpt.includes(search);
      const matchesCategory =
        category === "الكل" || article.category === category;
      const matchesSource = source === "الكل" || article.source === source;
      return matchesSearch && matchesCategory && matchesSource;
    });
  }, [search, category, source]);

  return (
    <>
      <PageHero
        title="المقالات"
        subtitle="مقالات ودراسات الدكتور أيمن نور في السياسة والفكر والمذكرات"
      />

      <section className="py-16 bg-off-white">
        <Container>
          {/* Filters */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange focus:ring-1 focus:ring-orange outline-none text-sm"
                />
              </div>

              {/* Category filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      category === cat
                        ? "bg-orange text-white"
                        : "bg-gray-100 text-text-secondary hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Source filter */}
              <div className="flex gap-2 flex-wrap">
                {sources.map((src) => (
                  <button
                    key={src}
                    onClick={() => setSource(src)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">
                لا توجد مقالات تطابق معايير البحث
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
