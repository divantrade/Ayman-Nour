"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import type { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
  index: number;
}

export default function BookCard({ book, index }: BookCardProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <Link href={`/books/${book.slug}`} className="group block h-full no-underline">
        <div className="bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-orange h-full">
          {/* Cover */}
          <div className="h-[200px] bg-gradient-to-br from-navy to-navy-light flex items-center justify-center relative">
            <i className="fas fa-book text-5xl text-[rgba(232,116,42,0.6)]" />
            {book.year && (
              <span className="absolute top-3 left-3 bg-orange text-white px-2.5 py-0.5 rounded-full text-xs font-bold">
                {book.year}
              </span>
            )}
          </div>

          <div className="p-5">
            <h3 className="text-base font-bold text-navy mb-2 leading-relaxed group-hover:text-orange transition-colors">
              {book.title}
            </h3>
            <p className="text-[13px] text-text-secondary leading-[1.7]">
              {book.summary}
            </p>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
