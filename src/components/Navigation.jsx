export default function Navigation() {
  return (
    <div className="w-full flex justify-between px-20 py-5 fixed items-center bg-[#161201] bg-opacity-90">
      <p className="font-head text-4xl navText">Foodism</p>
      <div className="flex navText gap-10 text-2xl font-head">
        <p className="hover:text-white cursor-pointer">Home</p>
        <p className="hover:text-white cursor-pointer">Menu</p>
        <p className="hover:text-white cursor-pointer">About Us</p>
      </div>
    </div>
  );
}
