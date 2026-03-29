import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { ShieldAlert, AlertTriangle, Search, Smartphone, Calendar, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "قضية بيغاسوس وبريداتور",
  description: "توثيق اختراق هاتف الدكتور أيمن نور ببرنامجي التجسس بيغاسوس وبريداتور — أول حالة موثقة عالمياً.",
};

const timelineItems = [
  {
    date: "يونيو 2021",
    title: "الاختراق",
    description: "تم اختراق هاتف أيمن نور عبر روابط مُرسلة من أرقام مصرية عبر واتساب.",
  },
  {
    date: "ديسمبر 2021",
    title: "الكشف",
    description: "مختبر Citizen Lab في جامعة تورنتو يكشف عن الاختراق ويوثّقه في تقرير مفصّل.",
  },
  {
    date: "2021",
    title: "التوثيق",
    description: "يُوثَّق كأول حالة عالمية لاستخدام برنامجي تجسس حكوميين على هاتف واحد.",
  },
];

export default function PegasusPage() {
  return (
    <>
      {/* Dark hero with red accent for this section */}
      <section className="bg-[#0D1117] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-red-500 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-red-500 blur-3xl" />
        </div>
        <Container className="relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="text-red-400" size={32} />
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold">
                توثيق أمني
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              قضية بيغاسوس وبريداتور
            </h1>
            <div className="w-20 h-1 bg-red-500 rounded-full mb-4" />
            <p className="text-lg text-gray-300 max-w-2xl">
              أول حالة موثقة عالمياً لاستخدام برنامجي تجسس حكوميين على هاتف شخصية معارضة واحدة
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Dark themed content */}
      <section className="bg-[#161B22] text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* What happened */}
            <FadeIn>
              <div className="bg-[#0D1117] rounded-2xl p-8 md:p-12 mb-12 border border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="text-red-400" size={24} />
                  <h2 className="text-2xl font-bold">ما الذي حدث؟</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    في ديسمبر 2021، كشف مختبر <strong className="text-white">Citizen Lab</strong> التابع
                    لجامعة تورنتو عن اختراق هاتف الدكتور أيمن نور ببرنامجي تجسس
                    حكوميين في آنٍ واحد:
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Two spyware */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <FadeIn delay={0.1}>
                <div className="bg-[#0D1117] rounded-xl p-6 border border-red-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="text-red-400" size={24} />
                    <h3 className="text-xl font-bold text-red-400">بيغاسوس (Pegasus)</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    <strong className="text-gray-200">الشركة:</strong> NSO Group الإسرائيلية
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    برنامج تجسس متطور يمكنه اختراق الهواتف الذكية والوصول إلى
                    الرسائل والمكالمات والكاميرا والميكروفون دون علم المستخدم.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-[#0D1117] rounded-xl p-6 border border-red-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="text-red-400" size={24} />
                    <h3 className="text-xl font-bold text-red-400">بريداتور (Predator)</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    <strong className="text-gray-200">الشركة:</strong> Cytrox / Intellexa
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    برنامج تجسس آخر يُباع للحكومات، تم اكتشاف استخدامه على هاتف
                    نور بالتزامن مع بيغاسوس في سابقة عالمية.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Timeline */}
            <FadeIn>
              <h2 className="text-2xl font-bold mb-8 text-center">تسلسل الأحداث</h2>
              <div className="space-y-6">
                {timelineItems.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0" />
                      {i < timelineItems.length - 1 && (
                        <div className="w-0.5 flex-1 bg-red-500/30 mt-1" />
                      )}
                    </div>
                    <div className="pb-6">
                      <span className="text-red-400 text-sm font-bold">{item.date}</span>
                      <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Key facts */}
            <FadeIn>
              <div className="mt-12 bg-red-500/10 rounded-xl p-8 border border-red-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="text-red-400" size={24} />
                  <h3 className="text-xl font-bold">حقائق مهمة</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "الاختراق تم في يونيو 2021 عبر روابط واتساب من أرقام مصرية",
                    "أول حالة موثقة عالمياً: برنامجا تجسس حكوميان على هاتف واحد",
                    "نُسب الاختراق لمصر بدرجة ثقة متوسطة-عالية",
                    "التقرير صادر عن Citizen Lab — جامعة تورنتو",
                  ].map((fact, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
