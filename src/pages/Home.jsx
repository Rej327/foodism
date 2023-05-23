import Hero from "../components/Hero";
import History from "../components/History";
import Service from "../components/Service";
import SpecialCombo from "../components/SpecialCombo";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <History />
      <Service />
      <SpecialCombo />
    </div>
  );
}
