import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { Flag, Calendar, Target, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "حزب غد الثورة",
  description: "حزب غد الثورة — الحزب الليبرالي الإصلاحي الذي أسسه الدكتور أيمن نور. من حزب الغد 2004 إلى غد الثورة 2011.",
};

export default function GhadPage() {
  return (
    <>
      <PageHero
        title="حزب غد الثورة"
        subtitle="الحزب الليبرالي الإصلاحي — من حزب الغد إلى غد الثورة"
      />

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-off-white rounded-2xl p-8 md:p-12 mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-orange/10 flex items-center justify-center">
                    <Flag className="text-orange" size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary">تاريخ الحزب</h2>
                  </div>
                </div>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    أسّس الدكتور أيمن نور <strong className="text-text-primary">حزب الغد</strong> عام 2004
                    كأول حزب ليبرالي معارض يحصل على ترخيص رسمي في مصر. حمل الحزب
                    شعار التغيير والإصلاح الشامل، وقدّم رؤية ليبرالية إصلاحية
                    للحياة السياسية المصرية.
                  </p>
                  <p>
                    بعد ثورة 25 يناير 2011، أعاد نور تأسيس الحزب تحت اسم{" "}
                    <strong className="text-text-primary">حزب غد الثورة</strong>،
                    مع رؤية متجددة تستجيب لتطلعات الثورة ومطالب التغيير
                    الديمقراطي.
                  </p>
                </div>
              </div>
            </FadeIn>

            <SectionHeader title="الرؤية والبرنامج" />

            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "الديمقراطية التعددية", text: "نظام ديمقراطي حقيقي قائم على التعددية الحزبية وتداول السلطة والفصل بين السلطات." },
                  { icon: CheckCircle, title: "الحريات المدنية", text: "ضمان حرية التعبير والصحافة والتجمع والتنظيم، وحماية حقوق الإنسان." },
                  { icon: Target, title: "الإصلاح الاقتصادي", text: "اقتصاد حر يحقق العدالة الاجتماعية ويوفر فرص عمل حقيقية للشباب." },
                  { icon: CheckCircle, title: "سيادة القانون", text: "استقلال القضاء وسيادة القانون ومحاربة الفساد بكل أشكاله." },
                ].map((item, i) => (
                  <div key={i} className="bg-off-white rounded-xl p-6 border-r-4 border-orange">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="text-orange" size={22} />
                      <h3 className="font-bold text-text-primary">{item.title}</h3>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="mt-12 flex items-center gap-4 p-6 bg-navy rounded-xl text-white">
                <Calendar className="text-orange flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold">المحطات الرئيسية</p>
                  <p className="text-gray-300 text-sm">
                    2004: تأسيس حزب الغد → 2005: الترشح للرئاسة → 2011: تأسيس غد الثورة → 2012: الترشح مجدداً للرئاسة
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
