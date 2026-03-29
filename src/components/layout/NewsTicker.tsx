"use client";

import { Newspaper } from "lucide-react";

const newsItems = [
  "صدور كتاب \"أوراق من مذكّراتي: شهادة على مصر في نصف قرن\"",
  "المشاركة في تأسيس التحالف الديمقراطي الأفريقي في الدار البيضاء",
  "مقال جديد: العالم لا يتوازن... بل يتفكك",
  "اتحاد القوى الوطنية المصرية يواصل جهود توحيد المعارضة",
];

export default function NewsTicker() {
  return (
    <div className="bg-gradient-to-l from-orange to-orange-dark text-white overflow-hidden">
      <div className="flex items-center">
        <div className="bg-orange-dark px-4 py-2 flex items-center gap-2 text-sm font-bold whitespace-nowrap z-10">
          <Newspaper size={16} />
          آخر الأخبار
        </div>
        <div className="flex-1 overflow-hidden py-2">
          <div className="animate-ticker flex gap-16 whitespace-nowrap">
            {[...newsItems, ...newsItems].map((item, i) => (
              <span key={i} className="text-sm font-medium">
                {item}
                <span className="mx-8 text-white/50">●</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
