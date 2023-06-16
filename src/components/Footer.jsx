import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="w-full bg-transparent">
      <div className="bg-[url(./assets/webpic/footbg.jpg)] bg-cover bg-center">
        <div className="bg-[#161201] bg-opacity-90 w-full flex justify-between gap-4 font-headr">
          <div className="w-full p-5">
            <div className="w-full flex flex-wrap justify-between gap-4 font-head text-[#BFBFC1] text-sm">
              <div className="flex flex-col gap-5 max-w-[250px]">
                <p className="w-full">FOODISM LOGO</p>
                <p className="font-body">
                  Rayo de Sol Bldg. , Quezon Avenue, Brgy. 09 Poblacion,
                  Catanuan, philippines
                </p>
                <p>(+63)-969-299-3890</p>
              </div>
              <div className="flex flex-col gap-5 max-w-[250px]">
                <p className="w-full tracking-wider">OPENING TIME</p>
                <div className="font-body">
                  <p className="font-head">Tuesday - Sunday</p>
                  <p>
                    <span className="text-[#FF705D]">1:00 </span>pm -
                    <span className="text-[#FF705D]">10:00 </span>pm
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 max-w-[250px]">
                <p className="w-full tracking-wider">THE MENU</p>
                <div className="grid grid-cols-2 grid-rows-5 w-[200px] gap-y-2">
                  <p className="cursor-pointer hover:text-white delay-75 duration-200">
                    Our Special
                  </p>
                  <p className="cursor-pointer hover:text-white delay-75 duration-200">
                    Appetizer
                  </p>
                  <p className="cursor-pointer hover:text-white delay-75 duration-200">
                    Burgers
                  </p>
                  <p className="cursor-pointer hover:text-white delay-75 duration-200">
                    Rice Meals
                  </p>
                  <p className="cursor-pointer hover:text-white delay-75 duration-200">
                    Pansit
                  </p>
                  <p className="cursor-pointer hover:text-white delay-75 duration-200">
                    Salad
                  </p>
                  <p className="cursor-pointer hover:text-white delay-75 duration-200">
                    Drinks
                  </p>
                  <p className="cursor-pointer hover:text-white delay-75 duration-200">
                    Fresh Fruit Shake
                  </p>
                  <p className="cursor-pointer hover:text-white delay-75 duration-200">
                    Liqour
                  </p>
                  <p className="cursor-pointer hover:text-white delay-75 duration-200">
                    Adds-On
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 max-w-[250px]">
                <p className="w-full tracking-wider">NEWSLETTER</p>
                <p className="font-body">
                  Don't miss any updates all the astonishing offers we bring for
                  you.
                </p>
                <input
                  type="text"
                  className="w-[250px] h-10 font-body text-black px-2 text-center"
                />
                <button className="button-48 py-2 px-2" role="button">
                  <span className="font-head tracking-widest font-light border-none text-xl">
                    Subscribe
                  </span>
                </button>
              </div>
            </div>
            <hr className="my-5 opacity-20" />
            <div className="flex justify-between font-head text-[#BFBFC1] italic">
              <p>
                Copyright © 2023, All Right{" "}
                <span className="text-[#ff3826]">Foodism Restaurant</span>
              </p>
              <div className="w-10 text-white">
                <BsFacebook className="text-3xl text-[#FF705D] hover:text-[#ff3826] duration-300 delay-75" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
