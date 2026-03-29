import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "حزب غد الثورة",
  description: "حزب غد الثورة — الحزب الليبرالي الإصلاحي الذي أسسه الدكتور أيمن نور.",
};

export default function GhadPage() {
  return (
    <>
      <PageHero label="الأحزاب" title="حزب غد الثورة" subtitle="الحزب الليبرالي الإصلاحي — من حزب الغد إلى غد الثورة" />
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-off-white rounded-[20px] p-8 md:p-12 mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-[14px] bg-[rgba(232,116,42,0.15)] flex items-center justify-center text-2xl text-orange">
                    <i className="fas fa-sun" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary">تاريخ الحزب</h2>
                </div>
                <div className="space-y-4 text-text-secondary leading-[1.8]">
                  <p>أسّس الدكتور أيمن نور <strong className="text-text-primary">حزب الغد</strong> عام 2004 كأول حزب ليبرالي معارض يحصل على ترخيص رسمي في مصر. حمل الحزب شعار التغيير والإصلاح الشامل.</p>
                  <p>بعد ثورة 25 يناير 2011، أعاد نور تأسيس الحزب تحت اسم <strong className="text-text-primary">حزب غد الثورة</strong>، مع رؤية متجددة تستجيب لتطلعات الثورة ومطالب التغيير الديمقراطي.</p>
                </div>
              </div>
            </FadeIn>

            <SectionHeader label="الرؤية" title="البرنامج الإصلاحي" />

            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "fa-bullseye", title: "الديمقراطية التعددية", text: "نظام ديمقراطي حقيقي قائم على التعددية الحزبية وتداول السلطة والفصل بين السلطات." },
                  { icon: "fa-check-circle", title: "الحريات المدنية", text: "ضمان حرية التعبير والصحافة والتجمع والتنظيم، وحماية حقوق الإنسان." },
                  { icon: "fa-chart-line", title: "الإصلاح الاقتصادي", text: "اقتصاد حر يحقق العدالة الاجتماعية ويوفر فرص عمل حقيقية للشباب." },
                  { icon: "fa-gavel", title: "سيادة القانون", text: "استقلال القضاء وسيادة القانون ومحاربة الفساد بكل أشكاله." },
                ].map((item, i) => (
                  <div key={i} className="bg-off-white rounded-xl p-6 border-r-4 border-r-orange">
                    <div className="flex items-center gap-3 mb-3">
                      <i className={`fas ${item.icon} text-orange text-xl`} />
                      <h3 className="font-bold text-text-primary">{item.title}</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-[1.8]">{item.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
