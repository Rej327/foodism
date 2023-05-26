import React, { useMemo } from "react";
import { MenuList } from "../../data/data";

export const Salad = () => {
  const desiredCategories = ["salad"]; // Add the desired category names to filter

  const filteredMenu = useMemo(() => {
    return MenuList.filter((category) =>
      desiredCategories.includes(Object.keys(category)[5])
    );
  }, [desiredCategories]);

  return (
    <div>
      {filteredMenu.map((category) => {
        const categoryName = Object.keys(category)[5];
        const items = category[categoryName];

        return (
          <div key={categoryName}>
            <div className="flex flex-wrap gap-5 items-center justify-center">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="max-w-[350px] flex flex-col items-center justify-center my-2"
                >
                  <div className="w-full h-[320px] overflow-hidden">
                    <img
                      src={item.img}
                      alt="Food"
                      className="w-full h-full object-cover hover:scale-125 duration-700 delay-75"
                    />
                  </div>
                  <div className="w-full flex justify-between my-2 px-2 border-dotted border-b-2 pb-2">
                    <p className="font-head text-center text-2xl text-[#292A2E]">
                      {item.label}
                    </p>
                    <p className="text-[#292A2E] font-body text-base">
                      ₱
                      <span className="font-bold font-head text-[#FF3826] text-2xl pl-1">
                        {item.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
