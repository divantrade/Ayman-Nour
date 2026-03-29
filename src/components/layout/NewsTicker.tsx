"use client";

const newsItems = [
  "موقع Africa Intelligence يشيد بتحركات الدكتور أيمن نور الأوروبية - مارس 2026",
  "تأسيس التحالف الديمقراطي الأفريقي من أجل الحرية والتقدم في الدار البيضاء - فبراير 2026",
  'صدور كتاب "أوراق من مذكّراتي: شهادة على مصر في نصف قرن" - 2025',
  'أيمن نور: "العالم لا يتوازن... بل يتفكك" - أحدث المقالات',
];

export default function NewsTicker() {
  return (
    <div style={{ background: "#E8742A", padding: "10px 0", overflow: "hidden", position: "relative" }}>
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0,
        background: "#D05E18",
        padding: "0 20px",
        display: "flex", alignItems: "center",
        fontWeight: 700, color: "#fff", fontSize: 13,
        zIndex: 2,
      }}>
        <i className="fas fa-bolt" />&nbsp; عاجل
      </div>
      <div className="animate-ticker" style={{ display: "flex", whiteSpace: "nowrap", color: "#fff", fontSize: 14, fontWeight: 500 }}>
        {[...newsItems, ...newsItems].map((item, i) => (
          <span key={i} style={{ padding: "0 40px" }}>
            <span style={{ marginLeft: 12, opacity: 0.5 }}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
