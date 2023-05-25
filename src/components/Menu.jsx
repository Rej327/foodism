import OurMenuList from "./OurMenuList";

export default function Menu() {
  return (
    <div>
      <p className="mx-auto pt-24 font-head text-4xl text-[#292A2E]  text-center w-auto">
        OFFERD MENU
      </p>
      <p className="mx-auto font-head text-sm pb-20 text-[#666666] text-center w-auto">
        Some Trendy And Popular Courses Offerd
      </p>

      <OurMenuList />
    </div>
  );
}
