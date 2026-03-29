import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "في الصحافة",
  description: "أرشيف ما كُتب عن الدكتور أيمن نور في وسائل الإعلام العربية والدولية.",
};

const pressItems = [
  { source: "Citizen Lab", title: "كشف اختراق هاتف أيمن نور ببرنامجي بيغاسوس وبريداتور", excerpt: "تقرير توثيقي مفصّل عن أول حالة موثقة عالمياً لاستخدام برنامجي تجسس حكوميين على هاتف واحد." },
  { source: "The New York Times", title: "تغطية الانتخابات الرئاسية المصرية 2005", excerpt: "تقرير عن أول انتخابات رئاسية تنافسية في تاريخ مصر." },
  { source: "The Washington Post", title: "اعتقال أيمن نور والضغط الدولي", excerpt: "تغطية واسعة لقضية اعتقال نور والحملة الدولية للمطالبة بإطلاق سراحه." },
  { source: "الجزيرة نت", title: "أيمن نور: مسيرة نضال مستمرة", excerpt: "ملف شامل عن مسيرة أيمن نور السياسية." },
  { source: "Middle East Eye", title: "قضية بيغاسوس: كيف تعرّض نور للتجسس", excerpt: "تحقيق صحفي معمّق في تفاصيل اختراق هاتف أيمن نور." },
];

export default function PressPage() {
  return (
    <>
      <PageHero label="الإعلام" title="في الصحافة" subtitle="أرشيف ما كُتب عن الدكتور أيمن نور في وسائل الإعلام" />
      <section className="py-20 bg-off-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-5">
            {pressItems.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200 hover:border-orange hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[14px] bg-[rgba(232,116,42,0.15)] flex items-center justify-center text-orange flex-shrink-0">
                      <i className="fas fa-newspaper" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-navy/10 text-navy rounded-full text-xs font-semibold mb-2">{item.source}</span>
                      <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-orange transition-colors">{item.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.excerpt}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
