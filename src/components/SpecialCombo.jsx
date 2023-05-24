import SpecialList from "./SpecialList";

export default function SpecialCombo() {
  return (
    <div className="bg-[url(./assets/webpic/scombo.jpg)] bg-cover bg-center h-auto pb-24 px-5">
      <p className="mx-auto pt-24 font-head text-4xl text-white  text-center w-auto">
        OUR SPECIAL
      </p>
      <p className="mx-auto font-head text-sm pb-20 text-[#666666] text-center w-auto">
        Some Trendy And Popular Courses Offerd
      </p>
      <SpecialList />
    </div>
  );
}
