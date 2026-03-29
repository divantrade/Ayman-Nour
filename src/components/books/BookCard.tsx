"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import type { Book } from "@/data/books";
import { BookOpen, ArrowLeft } from "lucide-react";

interface BookCardProps {
  book: Book;
  index: number;
}

export default function BookCard({ book, index }: BookCardProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <Link href={`/books/${book.slug}`} className="group block h-full">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange/30 h-full flex flex-col">
          {/* Cover placeholder */}
          <div className="bg-gradient-to-br from-navy to-navy-light p-8 flex items-center justify-center aspect-[3/4] max-h-64">
            <div className="text-center text-white">
              <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg font-bold leading-relaxed">{book.title}</p>
              {book.year && (
                <span className="inline-block mt-2 px-3 py-1 bg-orange/20 text-orange rounded-full text-sm font-bold">
                  {book.year}
                </span>
              )}
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-orange transition-colors">
              {book.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed flex-1">
              {book.summary}
            </p>
            <span className="inline-flex items-center gap-2 text-orange text-sm font-semibold mt-4 group-hover:gap-3 transition-all">
              اقرأ المزيد
              <ArrowLeft size={16} />
            </span>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
