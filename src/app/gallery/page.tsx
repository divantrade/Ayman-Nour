"use client";
import Container from "@/components/ui/Container";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
}

const categories = ["الكل", "السنوات المبكرة", "البرلمان", "الحملة الرئاسية", "التضامن الدولي", "المنفى والنضال"];

const galleryItems: GalleryItem[] = [
  { id: 1, category: "السنوات المبكرة", title: "أيام الجامعة", description: "من أيام كلية الحقوق بجامعة المنصورة" },
  { id: 2, category: "السنوات المبكرة", title: "بدايات العمل الصحفي", description: "في بداية مسيرته الصحفية" },
  { id: 3, category: "البرلمان", title: "في مجلس الشعب", description: "أصغر عضو في مجلس الشعب المصري عام 1995" },
  { id: 4, category: "البرلمان", title: "جلسة برلمانية", description: "خلال إحدى الجلسات البرلمانية" },
  { id: 5, category: "البرلمان", title: "عمل برلماني", description: "أثناء ممارسة العمل البرلماني" },
  { id: 6, category: "الحملة الرئاسية", title: "إعلان الترشح", description: "لحظة إعلان الترشح للانتخابات الرئاسية 2005" },
  { id: 7, category: "الحملة الرئاسية", title: "حشد انتخابي", description: "خلال حملته الانتخابية التاريخية" },
  { id: 8, category: "الحملة الرئاسية", title: "مع المؤيدين", description: "بين أنصاره ومؤيديه خلال الحملة" },
  { id: 9, category: "التضامن الدولي", title: "حملة التضامن", description: "من حملات التضامن الدولية للمطالبة بإطلاق سراحه" },
  { id: 10, category: "التضامن الدولي", title: "دعم دولي", description: "شخصيات دولية تطالب بحريته" },
  { id: 11, category: "المنفى والنضال", title: "في إسطنبول", description: "يواصل نضاله من المنفى في إسطنبول" },
  { id: 12, category: "المنفى والنضال", title: "قناة الشرق", description: "في استوديوهات قناة الشرق" },
];

const gradients = [
  "from-navy to-navy-light",
  "from-orange-dark to-orange",
  "from-navy-light to-navy-mid",
  "from-orange to-orange-light",
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "الكل"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <PageHero label="معرض الصور" title="لحظات من المسيرة" subtitle="لحظات من مسيرة نضال وعطاء امتدت لأكثر من أربعين عاماً" />

      <section className="py-20 bg-off-white">
        <Container>
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-br from-orange to-orange-dark text-white shadow-[0_4px_20px_rgba(232,116,42,0.4)]"
                    : "bg-white text-text-secondary border border-gray-200 hover:border-orange"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.05}>
                <button
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative rounded-xl overflow-hidden aspect-square w-full cursor-pointer bg-gradient-to-br ${gradients[index % gradients.length]}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-center p-4">
                    <div>
                      <div className="text-4xl font-bold mb-2">{item.id}</div>
                      <p className="text-xs">{item.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center p-4">
                      <i className="fas fa-search-plus text-3xl mb-2 block" />
                      <p className="text-sm font-semibold">{item.title}</p>
                    </div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-center text-text-secondary text-sm mt-12">سيتم إضافة المزيد من الصور قريباً</p>
          </FadeIn>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button onClick={() => setLightboxIndex(null)} className="absolute top-6 left-6 text-white/70 hover:text-white z-10 bg-transparent border-none cursor-pointer text-3xl">
              <i className="fas fa-times" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length); }} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 bg-transparent border-none cursor-pointer text-4xl">
              <i className="fas fa-chevron-right" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % filteredItems.length); }} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 bg-transparent border-none cursor-pointer text-4xl">
              <i className="fas fa-chevron-left" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`bg-gradient-to-br ${gradients[lightboxIndex % gradients.length]} rounded-2xl aspect-[4/3] flex items-center justify-center`}>
                <div className="text-white text-center p-8">
                  <div className="text-6xl font-bold mb-4">{filteredItems[lightboxIndex].id}</div>
                  <p className="text-xl font-semibold">{filteredItems[lightboxIndex].title}</p>
                  <p className="text-white/60 mt-2">{filteredItems[lightboxIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
