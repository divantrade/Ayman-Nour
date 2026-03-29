import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import BookCard from "@/components/books/BookCard";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "الكتب والمؤلفات",
  description:
    "مؤلفات الدكتور أيمن نور — 11 كتاباً في السياسة والفكر الليبرالي والتاريخ المصري المعاصر.",
};

export default function BooksPage() {
  return (
    <>
      <PageHero
        title="الكتب والمؤلفات"
        subtitle="أحد عشر كتاباً في السياسة والفكر والتاريخ، من الليبرالية إلى المذكرات الشخصية"
      />

      <section className="py-16 bg-off-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <BookCard key={book.slug} book={book} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
