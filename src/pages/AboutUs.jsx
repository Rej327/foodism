import AboutHeader from "../components/AboutHeader";
import HistoryAbout from "../components/HistoryAbout";
import ServiceAbout from "../components/ServiceAbout";
import Feedback from "../components/Feedback";
import Chef from "../components/Chef";

export default function AboutUs() {
  return (
    <div className="w-full">
      <AboutHeader />
      <HistoryAbout />
      <ServiceAbout />
      <Chef />
      <Feedback />
    </div>
  );
}
