import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ComboList } from "../data/data";

export default function SpecialList() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      className="m-auto w-full"
      autoPlay={true}
      autoPlaySpeed={2000}
      customTransition="transform 300ms ease-in-out"
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      containerClass="react-multi-carousel-list"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-0-px"
    >
      {ComboList.map((item) => (
        <div
          className="w-full flex flex-col items-center justify-center gap-0 hover:overflow-hidden hover:bg-[#4141418f] duration-300 delay-75 ease-in-out"
          key={item.id}
        >
          <div className="absolute flex items-center justify-center w-[120px] h-[120px] rounded-full z-10 bg-[#292A2E] text-[#FF3826] right-2 top-2 ">
            <p className="text-3xl text-white font-body">
              ₱
              <span className="text-[#FF3826] text-5xl font-head font-semibold pl-1">
                {item.price}
              </span>
            </p>
          </div>
          <div className="w-full h-[320px] overflow-hidden">
            <img
              src={item.img}
              className="w-full h-full object-cover hover:scale-125 duration-700 delay-75"
            />
          </div>
          <p className="font-head text-center text-3xl text-white hover:text-[#FF3826] duration-300 delay-75 py-4">
            {item.title}
          </p>
        </div>
      ))}
    </Carousel>
  );
}
