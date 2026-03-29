import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { Newspaper, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "في الصحافة",
  description: "أرشيف ما كُتب عن الدكتور أيمن نور في وسائل الإعلام العربية والدولية.",
};

const pressItems = [
  {
    source: "Citizen Lab",
    title: "كشف اختراق هاتف أيمن نور ببرنامجي بيغاسوس وبريداتور",
    excerpt: "تقرير توثيقي مفصّل عن أول حالة موثقة عالمياً لاستخدام برنامجي تجسس حكوميين على هاتف واحد.",
  },
  {
    source: "The New York Times",
    title: "تغطية الانتخابات الرئاسية المصرية 2005",
    excerpt: "تقرير عن أول انتخابات رئاسية تنافسية في تاريخ مصر وترشح أيمن نور.",
  },
  {
    source: "The Washington Post",
    title: "اعتقال أيمن نور والضغط الدولي",
    excerpt: "تغطية واسعة لقضية اعتقال نور والحملة الدولية للمطالبة بإطلاق سراحه.",
  },
  {
    source: "الجزيرة نت",
    title: "أيمن نور: مسيرة نضال مستمرة",
    excerpt: "ملف شامل عن مسيرة أيمن نور السياسية من البرلمان إلى المنفى.",
  },
  {
    source: "Middle East Eye",
    title: "قضية بيغاسوس: كيف تعرّض نور للتجسس",
    excerpt: "تحقيق صحفي معمّق في تفاصيل اختراق هاتف أيمن نور وتداعياته.",
  },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        title="في الصحافة"
        subtitle="أرشيف ما كُتب عن الدكتور أيمن نور في وسائل الإعلام"
      />

      <section className="py-16 bg-off-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            {pressItems.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-orange/30 hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <Newspaper className="text-orange" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-xs font-semibold">
                          {item.source}
                        </span>
                        <ExternalLink size={14} className="text-gray-400" />
                      </div>
                      <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-orange transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.excerpt}
                      </p>
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
