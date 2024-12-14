import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { AppOverview } from "@/sections/AppOverview";
import { TrainingCenter } from "@/sections/TrainingCenter";
import { Footer } from "@/sections/Footer";
import { Stats } from "@/sections/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Stats />
      <AppOverview />
      <TrainingCenter />
      <Footer />
    </>
  );
}
