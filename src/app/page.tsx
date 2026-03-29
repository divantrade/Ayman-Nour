import NewsTicker from "@/components/layout/NewsTicker";
import Hero from "@/components/home/Hero";
import LatestArticles from "@/components/home/LatestArticles";
import ElsharqSection from "@/components/home/ElsharqSection";

export default function HomePage() {
  return (
    <>
      <NewsTicker />
      <Hero />
      <LatestArticles />
      <ElsharqSection />
    </>
  );
}
