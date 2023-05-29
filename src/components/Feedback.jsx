import Feeds from "./Feeds";

export default function Feedback() {
  return (
    <div className="bg-transparent">
      <div className="bg-[url(./assets/webpic/b-3.jpg)] bg-cover bg-center h-screen">
        <div className="bg-white bg-opacity-90 w-full h-screen flex flex-col items-center">
          <div className=" w-full text-center">
            <p className="mx-auto pt-24 font-head text-4xl text-black  text-center w-auto">
              What Clients Say
            </p>
            <p className="mx-auto font-head text-sm pb-20 text-[#666666] text-center w-auto">
              Latest News Updates You Dont Miss Out!
            </p>
          </div>
          <Feeds />
        </div>
      </div>
    </div>
  );
}
