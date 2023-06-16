import { BiHome } from "react-icons/bi";

export default function AboutHeader() {
  return (
    <div className="bg-transparent">
      <div className="bg-[url(./assets/webpic/b-2.webp)] bg-cover bg-center h-72">
        <div className="bg-black bg-opacity-70 w-full h-72 flex items-center">
          <div className=" w-full pl-5 mt-14 text-center md:text-left">
            <p className="font-head text-white mt-5 text-5xl mb-4 tracking-wider">
              About Us
            </p>
            <div className="flex gap-2 text-white font-semibold font-body w-full justify-center md:justify-normal">
              <BiHome className="text-[#FF705D] text-base flex my-auto" />
              <p className="my-auto hover:text-[#FF705D] hover:underline hover:underline-offset-8 duration-300">
                <a href="/">HOME</a>
              </p>
              <p className="my-auto font-normal">/</p>
              <p className="my-auto underline underline-offset-8 text-[#FF705D]">
                ABOUT US
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
