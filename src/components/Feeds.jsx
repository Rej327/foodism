import { Rating } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Ratings } from "../data/data";

export default function Feeds() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {Ratings.map((feeds) => (
        <div
          key={feeds.id}
          className="flex flex-col items-center justify-center w-auto my-10 gap-4 px-4 text-center"
        >
          <p className="font-head text-2xl text-[#FF402F]">{feeds.head}</p>
          <p className="font-body text-lg text-[#666666]">{feeds.feed}</p>
          <p className="font-head tracking-widest">{feeds.name}</p>
          <img
            src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className="rounded-full w-24 h-24"
          />
          <Rating
            name="half-rating-read"
            defaultValue={feeds.ratings}
            precision={0.5}
            readOnly
          />
        </div>
      ))}
    </Carousel>
  );
}
