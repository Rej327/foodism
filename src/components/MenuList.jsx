import { burger } from "../assets";

export default function MenuList() {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="mx-auto text-center">
          <p className="mx-auto pt-24 font-head text-4xl text-black  text-center w-auto">
            Cheese Burger
          </p>
        </div>
        <div className="text-center max-w-[1000px]">
          <img
            src={burger}
            alt="Burger"
            className="max-w-[400px] my-10 mx-auto"
          />
          <p className="text-left my-10 font-body">
            Cras porttitor convallis ligula, at elementum erat mattis quis. In
            vitae vulputate tellus, sed laoreet est. Nam eget dolor non eros
            rutrum facilisis ut vel sapien. Aenean sed vehicula massa. Morbi
            imperdiet egestas ullamcorperet. Expo neque, congue nec nibh in,
            pellentesque fringilla risus. Suspendisse hendrerit et sapien ut
            pretium. Aenean nulla ipsum,
          </p>
          <p className="font-head mb-20">+ Read More</p>
        </div>
      </div>
    </div>
  );
}
