import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/articles";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import { formatDate } from "@/lib/utils";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <PageHero label="المقالات" title={article.title} />
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-[20px] p-8 md:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200">
                <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-text-secondary text-sm">
                    <i className="fas fa-calendar text-orange" /> {formatDate(article.date)}
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary text-sm">
                    <i className="fas fa-tag text-orange" /> {article.category}
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary text-sm">
                    <i className="fas fa-newspaper text-orange" /> {article.source}
                  </div>
                </div>
                <p className="text-text-secondary leading-loose text-lg">{article.content}</p>
              </div>

              <div className="mt-8 flex justify-center">
                <Link href="/articles" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] no-underline bg-transparent border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all">
                  <i className="fas fa-arrow-right" /> العودة إلى المقالات
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
