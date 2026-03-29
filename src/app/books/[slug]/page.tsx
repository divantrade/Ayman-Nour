import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { books } from "@/data/books";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) return {};
  return { title: book.title, description: book.summary };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();

  return (
    <>
      <PageHero label="المكتبة" title={book.title} />
      <section className="py-20 bg-off-white">
        <div className="container-main">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200">
                <div className="bg-gradient-to-br from-navy to-navy-light p-12 text-center text-white">
                  <i className="fas fa-book text-6xl text-[rgba(232,116,42,0.6)] mb-4 block" />
                  <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
                  {book.year && (
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <i className="fas fa-calendar text-sm" />
                      <span>{book.year}</span>
                    </div>
                  )}
                </div>
                <div className="p-8 md:p-12">
                  <p className="text-text-secondary leading-loose text-lg">{book.fullDescription}</p>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Link href="/books" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] no-underline bg-transparent border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all">
                  <i className="fas fa-arrow-right" /> العودة إلى المؤلفات
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
