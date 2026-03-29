import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { Play, ExternalLink } from "lucide-react";

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
      <PageHero
        title="المقابلات"
        subtitle="مقابلات مع كبرى المحطات والمؤسسات الإعلامية العربية والدولية"
      />

      <section className="py-16 bg-off-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {interviews.map((interview, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:border-orange/30 hover:shadow-md transition-all group">
                  {/* Video placeholder */}
                  <div className="bg-navy aspect-video flex items-center justify-center relative">
                    <Play
                      size={48}
                      className="text-white/30 group-hover:text-orange transition-colors"
                    />
                    <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/50 text-white text-xs rounded">
                      {interview.channel}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                      {interview.channel}
                      <ExternalLink size={14} className="text-gray-400" />
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {interview.description}
                    </p>
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
