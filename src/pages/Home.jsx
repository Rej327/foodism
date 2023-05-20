import Hero from "../components/Hero";
import History from "../components/History";
import Service from "../components/Service";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <History />
      <Service />
    </div>
  );
}
