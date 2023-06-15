import NavigationToogle from "./NavigationToogle";

export default function Navigation() {
  return (
    <div className="w-full flex justify-between py-5 fixed items-center bg-[#161201] bg-opacity-90 z-50">
      <p className="font-head ml-4 text-4xl navText">Foodism</p>
      <NavigationToogle />
    </div>
  );
}
