import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { Users, FileText, CheckCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "اتحاد القوى الوطنية المصرية",
  description: "اتحاد القوى الوطنية المصرية — أكبر تحالف للمعارضة المصرية. تأسس 2021 برئاسة الدكتور أيمن نور.",
};

const principles = [
  "تجريم الانقلابات العسكرية",
  "إصلاح اقتصادي شامل",
  "عدالة اجتماعية حقيقية",
  "إطلاق سراح جميع سجناء الرأي",
  "تجريم العنف بكل أشكاله",
  "بناء دولة مدنية ديمقراطية",
];

export default function ENAPage() {
  return (
    <>
      <PageHero
        title="اتحاد القوى الوطنية المصرية"
        subtitle="أكبر تحالف للمعارضة المصرية — من أجل مصر حرة وديمقراطية"
      />

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-off-white rounded-2xl p-8 md:p-12 mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-orange/10 flex items-center justify-center">
                    <Users className="text-orange" size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary">عن الاتحاد</h2>
                    <p className="text-text-secondary text-sm">تأسس في فبراير 2021</p>
                  </div>
                </div>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    تأسس اتحاد القوى الوطنية المصرية في فبراير 2021 كمظلة جامعة
                    لقوى المعارضة المصرية في الداخل والخارج. انتُخب الدكتور أيمن
                    نور رئيساً للاتحاد في أكتوبر 2021.
                  </p>
                  <p>
                    يهدف الاتحاد إلى توحيد جهود المعارضة وتقديم بديل وطني
                    ديمقراطي قادر على قيادة مرحلة التحول الديمقراطي في مصر.
                  </p>
                </div>
              </div>
            </FadeIn>

            <SectionHeader title="وثيقة العشرين" subtitle="المبادئ الأساسية للاتحاد" />

            <FadeIn>
              <div className="bg-white rounded-xl border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-orange" size={24} />
                  <h3 className="text-xl font-bold text-text-primary">
                    المبادئ الأساسية
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {principles.map((principle, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-off-white">
                      <CheckCircle className="text-orange flex-shrink-0" size={20} />
                      <span className="text-text-primary font-medium text-sm">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="mt-8 p-6 bg-navy rounded-xl text-white">
                <div className="flex items-center gap-3">
                  <ExternalLink className="text-orange" size={20} />
                  <p>
                    الموقع الرسمي:{" "}
                    <a
                      href="https://egyna.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange hover:text-orange-light underline"
                    >
                      egyna.org
                    </a>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
