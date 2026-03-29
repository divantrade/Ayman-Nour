import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "التحالف الديمقراطي الأفريقي",
  description: "التحالف الديمقراطي الأفريقي — تأسس فبراير 2026 في الدار البيضاء لدعم الديمقراطية في أفريقيا.",
};

export default function ADAFPPage() {
  return (
    <>
      <PageHero label="التحالفات" title="التحالف الديمقراطي الأفريقي" subtitle="رؤية لدعم الديمقراطية والليبرالية في القارة الأفريقية" />
      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                {[
                  { icon: "fa-calendar", label: "تاريخ التأسيس", value: "فبراير 2026" },
                  { icon: "fa-map-marker-alt", label: "مكان التأسيس", value: "الدار البيضاء، المغرب" },
                  { icon: "fa-users", label: "الدعوة", value: "حزب الاتحاد الدستوري المغربي" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-5 bg-off-white rounded-xl">
                    <div className="w-10 h-10 rounded-[10px] bg-[rgba(232,116,42,0.15)] flex items-center justify-center text-orange">
                      <i className={`fas ${item.icon}`} />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-off-white rounded-[20px] p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-[14px] bg-[rgba(232,116,42,0.15)] flex items-center justify-center text-2xl text-orange">
                    <i className="fas fa-globe-africa" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary">عن التحالف</h2>
                </div>
                <div className="space-y-4 text-text-secondary leading-[1.8]">
                  <p>تأسس التحالف الديمقراطي الأفريقي في فبراير 2026 في مدينة الدار البيضاء بالمغرب، بدعوة من حزب الاتحاد الدستوري المغربي. يضم التحالف أحزاباً ليبرالية وديمقراطية من مختلف أنحاء القارة الأفريقية.</p>
                  <p>يشارك الدكتور أيمن نور كعضو مؤسس في هذا التحالف، الذي يسعى إلى تعزيز القيم الديمقراطية والليبرالية في أفريقيا، ودعم التحولات الديمقراطية، ومناهضة الاستبداد والانقلابات العسكرية.</p>
                  <p>يمثل هذا التحالف خطوة مهمة في توسيع نطاق العمل السياسي الديمقراطي من المستوى الوطني والإقليمي إلى المستوى القاري.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
