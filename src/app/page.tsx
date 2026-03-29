import NewsTicker from "@/components/layout/NewsTicker";
import Hero from "@/components/home/Hero";
import LatestArticles from "@/components/home/LatestArticles";
import ElsharqSection from "@/components/home/ElsharqSection";
import PegasusSection from "@/components/home/PegasusSection";
import PoliticalSection from "@/components/home/PoliticalSection";

export default function HomePage() {
  return (
    <>
      <NewsTicker />
      <Hero />
      <LatestArticles />
      <ElsharqSection />
      <PegasusSection />
      <PoliticalSection />
    </>
  );
}
