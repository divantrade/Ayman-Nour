"use client";

const newsItems = [
  "موقع Africa Intelligence يشيد بتحركات الدكتور أيمن نور الأوروبية - مارس 2026",
  "تأسيس التحالف الديمقراطي الأفريقي من أجل الحرية والتقدم في الدار البيضاء - فبراير 2026",
  'صدور كتاب "أوراق من مذكّراتي: شهادة على مصر في نصف قرن" - 2025',
  'أيمن نور: "العالم لا يتوازن... بل يتفكك" - أحدث المقالات',
];

export default function NewsTicker() {
  return (
    <div className="relative overflow-hidden py-[10px]" style={{ background: "#E8742A" }}>
      <div
        className="absolute right-0 top-0 bottom-0 px-5 flex items-center gap-2 font-bold text-white text-[13px] z-[2]"
        style={{ background: "#D05E18" }}
      >
        <i className="fas fa-bolt" />&nbsp; عاجل
      </div>
      <div className="animate-ticker flex whitespace-nowrap text-white text-sm font-medium">
        {[...newsItems, ...newsItems].map((item, i) => (
          <span key={i} className="px-10">
            <span className="ml-3 opacity-50">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
