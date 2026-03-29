export interface Program {
  name: string;
  presenter: string;
  description: string;
}

export const programs: Program[] = [
  {
    name: "مع معتز",
    presenter: "معتز مطر",
    description: "برنامج سياسي يومي يناقش آخر المستجدات على الساحة المصرية والعربية."
  },
  {
    name: "الشارع المصري",
    presenter: "عماد البحيري وأحمد عطوان",
    description: "برنامج حواري يتناول قضايا الشارع المصري وهموم المواطن."
  },
  {
    name: "أنا الشعب",
    presenter: "دعاء حسن",
    description: "برنامج يعبّر عن صوت المواطن المصري وقضاياه اليومية."
  },
  {
    name: "ابن البلد",
    presenter: "هشام عبد الله",
    description: "برنامج سياسي اجتماعي يتناول الشأن المصري من منظور شعبي."
  },
  {
    name: "هاي تك",
    presenter: "عمر الشال",
    description: "برنامج متخصص في التكنولوجيا والعالم الرقمي وتأثيراته على المجتمع."
  },
  {
    name: "بالتأكيد",
    presenter: "هشام عبد الحميد",
    description: "برنامج تحليلي يقدم قراءات معمّقة في الأحداث السياسية الجارية."
  }
];
