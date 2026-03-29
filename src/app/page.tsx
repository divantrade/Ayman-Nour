import NewsTicker from "@/components/layout/NewsTicker";
import Hero from "@/components/home/Hero";
import TimelineSection from "@/components/home/TimelineSection";
import BooksSection from "@/components/home/BooksSection";
import ElsharqSection from "@/components/home/ElsharqSection";
import PegasusSection from "@/components/home/PegasusSection";
import LatestArticles from "@/components/home/LatestArticles";
import PoliticalSection from "@/components/home/PoliticalSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <NewsTicker />
      <Hero />
      <TimelineSection />
      <BooksSection />
      <ElsharqSection />
      <PegasusSection />
      <LatestArticles />
      <PoliticalSection />
      <ContactSection />
    </>
  );
}
