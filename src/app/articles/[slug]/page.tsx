import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { Calendar, Tag, Newspaper, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <PageHero title={article.title} />

      <section className="py-16 bg-off-white">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-text-secondary text-sm">
                    <Calendar size={16} className="text-orange" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary text-sm">
                    <Tag size={16} className="text-orange" />
                    {article.category}
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary text-sm">
                    <Newspaper size={16} className="text-orange" />
                    {article.source}
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-loose text-lg">
                    {article.content}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button href="/articles" variant="outline">
                  <ArrowRight size={18} />
                  العودة إلى المقالات
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
