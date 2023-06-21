import { chef } from "../assets";
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdPhoneCallback } from "react-icons/md";

export default function Chef() {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="mx-auto text-center">
          <p className="mx-auto pt-24 font-head text-4xl text-black  text-center w-auto">
            Experienced Chef
          </p>
          <p className="mx-auto font-head text-sm pb-20 text-[#666666] text-center w-auto">
            Special Chef From The Industry!
          </p>
        </div>
        <div className="text-center max-w-[1000px]">
          <img src={chef} alt="Chef" className="max-w-[600px] mx-auto" />
          <div className="w-max mx-auto flex my-5">
            <FaFacebookF className="text-xl w-16 text-blue-600" />
            <SiGmail className="text-xl w-16 text-red-600" />
            <MdPhoneCallback className="text-xl w-16 text-green-600" />
          </div>
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
