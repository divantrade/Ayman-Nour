import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { Globe, MapPin, Calendar, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "التحالف الديمقراطي الأفريقي",
  description: "التحالف الديمقراطي الأفريقي — تأسس فبراير 2026 في الدار البيضاء لدعم الديمقراطية في أفريقيا.",
};

export default function ADAFPPage() {
  return (
    <>
      <PageHero
        title="التحالف الديمقراطي الأفريقي"
        subtitle="رؤية لدعم الديمقراطية والليبرالية في القارة الأفريقية"
      />

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center gap-3 p-4 bg-off-white rounded-xl">
                  <Calendar className="text-orange" size={20} />
                  <div>
                    <p className="text-sm text-text-secondary">تاريخ التأسيس</p>
                    <p className="font-semibold">فبراير 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-off-white rounded-xl">
                  <MapPin className="text-orange" size={20} />
                  <div>
                    <p className="text-sm text-text-secondary">مكان التأسيس</p>
                    <p className="font-semibold">الدار البيضاء، المغرب</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-off-white rounded-xl">
                  <Users className="text-orange" size={20} />
                  <div>
                    <p className="text-sm text-text-secondary">الدعوة</p>
                    <p className="font-semibold">حزب الاتحاد الدستوري المغربي</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-off-white rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-orange/10 flex items-center justify-center">
                    <Globe className="text-orange" size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary">عن التحالف</h2>
                </div>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    تأسس التحالف الديمقراطي الأفريقي في فبراير 2026 في مدينة الدار
                    البيضاء بالمغرب، بدعوة من حزب الاتحاد الدستوري المغربي. يضم
                    التحالف أحزاباً ليبرالية وديمقراطية من مختلف أنحاء القارة
                    الأفريقية.
                  </p>
                  <p>
                    يشارك الدكتور أيمن نور كعضو مؤسس في هذا التحالف، الذي يسعى
                    إلى تعزيز القيم الديمقراطية والليبرالية في أفريقيا، ودعم
                    التحولات الديمقراطية، ومناهضة الاستبداد والانقلابات العسكرية في
                    القارة.
                  </p>
                  <p>
                    يمثل هذا التحالف خطوة مهمة في توسيع نطاق العمل السياسي
                    الديمقراطي من المستوى الوطني والإقليمي إلى المستوى القاري،
                    إيماناً بأن الديمقراطية والحرية قيم عالمية لا تعرف الحدود.
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
