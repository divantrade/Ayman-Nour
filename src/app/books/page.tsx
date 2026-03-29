import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import BookCard from "@/components/books/BookCard";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "الكتب والمؤلفات",
  description: "مؤلفات الدكتور أيمن نور — 11 كتاباً في السياسة والفكر الليبرالي والتاريخ المصري المعاصر.",
};

export default function BooksPage() {
  return (
    <>
      <PageHero
        label="المكتبة"
        title="الكتب والمؤلفات"
        subtitle="أحد عشر كتاباً بين الفكر السياسي والتحليل والمذكرات"
      />
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <BookCard key={book.slug} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
