import { ServiceData } from "../data/data";

export default function Service() {
  return (
    <div className="w-full bg-white py-20 flex items-center justify-center gap-20 flex-wrap">
      {ServiceData.map((item) => (
        <div
          className="serviceCard max-w-[350px] text-center p-10 flex flex-col items-center justify-center gap-3"
          key={item.id}
        >
          <img src={item.image} alt="Service Icon" className="w-24" />
          <p className="font-head font-bold text-xl serviceTitle">
            {item.title}
          </p>
          <p className="font-body serviceContent">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
