import AboutHeader from "../components/AboutHeader";
import HistoryAbout from "../components/HistoryAbout";
import ServiceAbout from "../components/ServiceAbout";

export default function AboutUs() {
  return (
    <div className="w-full">
      <AboutHeader />
      <HistoryAbout />
      <ServiceAbout />
    </div>
  );
}
