export default function Hero() {
  return (
    <div className="bg-transparent">
      <div className="bg-[url(./assets/webpic/b-2.webp)] bg-cover bg-center h-screen">
        <div className="bg-black bg-opacity-70 w-full h-screen flex items-center">
          <div className=" w-full text-center">
            <p className="font-head titleColor text-4xl sm:text-7xl lg:text-[5.5rem]">
              Foodism Resto Bar
            </p>
            <p className="font-head text-[#c0c0c0] text-2xl my-5 sm:text-4xl sm:my-7 lg:text-[4.5rem] lg:my-12">
              Food is memories
            </p>

            <p className="max-w-[800px] font-body text-base m-auto text-[#c0c0c0] mt-4">
              Welcome to Foodism Resto Bar! Get ready to indulge in an
              unforgettable experience where delicious food, delightful drinks,
              and great company come together. Our team is excited to have you
              here, and we're committed to making your time with us exceptional.
              Cheers to a fantastic evening ahead!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
