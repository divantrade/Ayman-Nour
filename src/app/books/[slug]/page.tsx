import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { books } from "@/data/books";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { BookOpen, ArrowRight, Calendar } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) return {};

  return {
    title: book.title,
    description: book.summary,
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();

  return (
    <>
      <PageHero title={book.title} />

      <section className="py-16 bg-off-white">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                {/* Cover */}
                <div className="bg-gradient-to-br from-navy to-navy-light p-12 text-center text-white">
                  <BookOpen size={64} className="mx-auto mb-4 opacity-50" />
                  <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
                  {book.year && (
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <Calendar size={16} />
                      <span>{book.year}</span>
                    </div>
                  )}
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-text-secondary leading-loose text-lg">
                    {book.fullDescription}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button href="/books" variant="outline">
                  <ArrowRight size={18} />
                  العودة إلى المؤلفات
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
