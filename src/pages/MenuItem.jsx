import Feedback from "../components/Feedback";
import MenuHeader from "../components/MenuHeader";
import MenuList from "../components/MenuList";

export default function MenuItem() {
  return (
    <div className="w-full">
      <MenuHeader />
      <MenuList />
      <Feedback />
    </div>
  );
}
