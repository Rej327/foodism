import Book from "../components/Book";
import Feedback from "../components/Feedback";
import Hero from "../components/Hero";
import History from "../components/History";
import Menu from "../components/Menu";
import Service from "../components/Service";
import SpecialCombo from "../components/SpecialCombo";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <History />
      <Service />
      <SpecialCombo />
      <Menu />
      <Book />
      <Feedback />
    </div>
  );
}
