"use client";

const newsItems = [
  "موقع Africa Intelligence يشيد بتحركات الدكتور أيمن نور الأوروبية - مارس 2026",
  "تأسيس التحالف الديمقراطي الأفريقي من أجل الحرية والتقدم في الدار البيضاء - فبراير 2026",
  'صدور كتاب "أوراق من مذكّراتي: شهادة على مصر في نصف قرن" - 2025',
  'أيمن نور: "العالم لا يتوازن... بل يتفكك" - أحدث المقالات',
];

export default function NewsTicker() {
  return (
    <div className="ticker">
      <div className="ticker-label">
        <i className="fas fa-bolt" />&nbsp; عاجل
      </div>
      <div className="ticker-content animate-ticker">
        {[...newsItems, ...newsItems].map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
