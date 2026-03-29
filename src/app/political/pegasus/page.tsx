import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "قضية بيغاسوس وبريداتور",
  description: "توثيق اختراق هاتف الدكتور أيمن نور ببرنامجي التجسس بيغاسوس وبريداتور — أول حالة موثقة عالمياً.",
};

const facts = [
  { number: "2", label: "برنامجا تجسس في وقت واحد" },
  { number: "#1", label: "أول حالة موثقة عالمياً" },
  { number: "2021", label: "سنة الكشف" },
];

export default function PegasusPage() {
  return (
    <>
      {/* Dark Hero */}
      <section className="bg-[#0D1117] text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-red-500 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-red-500 blur-3xl" />
        </div>
        <Container className="relative" style={{ zIndex: 10 }}>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <i className="fas fa-shield-halved text-red-400 text-3xl" />
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold">توثيق أمني</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">قضية بيغاسوس وبريداتور</h1>
            <div className="w-20 h-1 bg-red-500 rounded-full mb-4" />
            <p className="text-lg text-white/60 max-w-2xl">أول حالة موثقة عالمياً لاستخدام برنامجي تجسس حكوميين على هاتف شخصية معارضة واحدة</p>
          </FadeIn>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-[#161B22] text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="rounded-[20px] p-8 md:p-12 mb-12 border border-[rgba(232,80,80,0.2)]" style={{ background: "linear-gradient(135deg, #1a0a0a, #2d1515)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(232,116,42,0.15)] flex items-center justify-center text-[28px] text-orange">
                    <i className="fas fa-shield-halved" />
                  </div>
                </div>
                <p className="text-white/70 text-[15px] leading-[1.9] mb-5">
                  في ديسمبر 2021، كشف مختبر المواطن (Citizen Lab) التابع لجامعة تورونتو عن أن هاتف الدكتور أيمن نور كان مُخترقاً ببرنامجي تجسس حكوميين في آن واحد: بيغاسوس (Pegasus) وبريداتور (Predator). كانت هذه أول حالة موثقة عالمياً من نوعها.
                </p>
                <p className="text-white/70 text-[15px] leading-[1.9] mb-6">
                  أصبحت القضية مرجعاً رئيسياً في النقاش العالمي حول مخاطر برامج التجسس الحكومية وانتهاك خصوصية المعارضين السياسيين.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {facts.map((fact) => (
                    <div key={fact.label} className="bg-white/5 border border-white/[0.08] p-5 rounded-lg text-center">
                      <div className="text-[28px] font-black text-orange">{fact.number}</div>
                      <div className="text-xs text-white/50 mt-1">{fact.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Spyware cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <FadeIn delay={0.1}>
                <div className="bg-[#0D1117] rounded-xl p-6 border border-red-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <i className="fas fa-mobile-screen text-red-400 text-2xl" />
                    <h3 className="text-xl font-bold text-red-400">بيغاسوس (Pegasus)</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-2"><strong className="text-gray-200">الشركة:</strong> NSO Group الإسرائيلية</p>
                  <p className="text-gray-400 text-sm leading-relaxed">برنامج تجسس متطور يمكنه اختراق الهواتف الذكية والوصول إلى الرسائل والمكالمات والكاميرا والميكروفون دون علم المستخدم.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-[#0D1117] rounded-xl p-6 border border-red-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <i className="fas fa-mobile-screen text-red-400 text-2xl" />
                    <h3 className="text-xl font-bold text-red-400">بريداتور (Predator)</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-2"><strong className="text-gray-200">الشركة:</strong> Cytrox / Intellexa</p>
                  <p className="text-gray-400 text-sm leading-relaxed">برنامج تجسس آخر يُباع للحكومات، تم اكتشاف استخدامه على هاتف نور بالتزامن مع بيغاسوس في سابقة عالمية.</p>
                </div>
              </FadeIn>
            </div>

            {/* Key facts */}
            <FadeIn>
              <div className="bg-red-500/10 rounded-xl p-8 border border-red-500/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <i className="fas fa-search text-red-400" /> حقائق مهمة
                </h3>
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
