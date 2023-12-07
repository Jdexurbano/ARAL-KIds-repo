/** @format */

import React from "react";
import { feature } from "../data/data";
function FeatureCard() {
  return (
    <>
      {feature.map((item) => (
        <div
          key={item.id}
          className="flex items-start px-5 py-6 bg-secondary rounded-[30px] font-poppins desktop:w-[400px] desktop:h-[250px] w-[350px] h-[200] m-[10px] hover:shadow-2xl duration-1000 "
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-start desktop:justify-between h-[150px] desktop:mt-[20px] mt-[5px] ">
            <h1 className="font-bold desktop:text-[30px] text-[20px]">
              {item.title}
            </h1>
            <p className={`font-normal text-[17px] leading-[25px] mt-[5px]`}>
              {item.description}
            </p>
          </div>
          <img
            src={item.image}
            alt={item.image}
            className="w-[150px] h-[150px]"
          />
        </div>
      ))}
    </>
  );
}

export default FeatureCard;
