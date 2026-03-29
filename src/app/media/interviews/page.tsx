import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "المقابلات",
  description: "أبرز مقابلات الدكتور أيمن نور مع كبرى المحطات الإعلامية العربية والدولية.",
};

const interviews = [
  { channel: "Council on Foreign Relations (CFR)", description: "حوار حول مستقبل الديمقراطية في مصر والمنطقة العربية." },
  { channel: "DAWN", description: "مقابلة حول حقوق الإنسان في مصر وقضايا المعتقلين السياسيين." },
  { channel: "CNN بالعربية", description: "حوار حول المشهد السياسي المصري والمعارضة." },
  { channel: "الجزيرة", description: "مقابلات متعددة حول الأوضاع السياسية في مصر." },
  { channel: "Middle East Eye", description: "تقرير مفصّل عن قضية التجسس ببرنامج بيغاسوس." },
  { channel: "وكالة الأناضول", description: "حوار حول اتحاد القوى الوطنية المصرية وآفاق المعارضة." },
];

export default function InterviewsPage() {
  return (
    <>
      <PageHero label="الإعلام" title="المقابلات" subtitle="مقابلات مع كبرى المحطات والمؤسسات الإعلامية العربية والدولية" />
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {interviews.map((interview, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200 hover:border-orange hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all group">
                  <div className="bg-gradient-to-br from-navy to-navy-light aspect-video flex items-center justify-center relative">
                    <i className="fas fa-play text-5xl text-white/30 group-hover:text-orange transition-colors" />
                    <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/50 text-white text-xs rounded">{interview.channel}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                      {interview.channel}
                      <i className="fas fa-external-link-alt text-gray-400 text-xs" />
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{interview.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
