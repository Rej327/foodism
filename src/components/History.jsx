import { Button } from "@mui/material";
import { Qoute, LastQoute } from "./Icons";

export default function History() {
  return (
    <div className="bg-[url(./assets/webpic/about.jpg)] bg-cover bg-center h-screen ">
      <div className="bg-gradient-to-r from-white via-transparent h-screen absolute">
        <div className="max-w-[700px] ml-40 mt-44 text-center text-[#292A2E]">
          <p className="font-head text-4xl text-bold">Resto Bar History</p>
          <p className="font-head text-sm my-5 justify-center flex">
            <Qoute />
            Welcome to Foodism Resto Bar, where history meets culinary
            excellence!
            <LastQoute />
          </p>
          <p className="font-body text-base max-w-[550px] mx-auto text-[#292A2E] hover:font-semibold duration-300 ease-in-out">
            Established in [year], our resto bar has been a prominent fixture in
            the vibrant dining scene. With [number] years of experience, we have
            continuously evolved, enchanting guests with our remarkable heritage
            and unwavering commitment to culinary excellence.
            <br />
            <br />
            Through the years, our resto bar has become a gathering place for
            food enthusiasts, connoisseurs, and those seeking an extraordinary
            dining adventure. We take pride in sourcing only the finest
            ingredients, supporting local producers and farmers, and ensuring
            that each dish we serve tells a story of quality and flavor.
          </p>
          <Button variant="contained" className="bg-[#fa5142] font-head my-5">
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  );
}
