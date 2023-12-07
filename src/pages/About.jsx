/** @format */

import React from "react";
function About() {
  return (
    <>
      <section
        id="About"
        className="desktop:w-full desktop:h-screen bg-secondary desktop:rounded-[50px] pt-[30px] desktop:flex-row desktop:items-center desktop:justify-center desktop:gap-10  mt-[50px] pb-[50px] flex flex-col items-center px-[20px] rounded-[30px]"
      >
        <div
          className="desktop:w-[450px] desktop:h-[450px] desktop:flex desktop:justify-center desktop:items-center desktop:rounded-[50px] bg-primary mt-[20px] rounded-[20px] min-h-[301px] min-w-[350px] max-h-[501px] max-w-[601px]  py-[20px]"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img
            src="/images/About Image.png"
            alt="About Image"
            className="desktop:w-[500px] desktop:h-[425px]
            "
          />
        </div>
        <div
          className=" font-poppins desktop:text-left desktop:w-[400px] desktop:h-[450px]
        mt-[20px] flex flex-col items-start"
        >
          <h1 className="uppercase font-medium desktop:text-[20px] text-[15px] mb-[10px">
            about the app
          </h1>
          <h1 className="font-bold desktop:text-[35px] leading-[1.2] desktop:break-before-auto desktop:mt-[20px] text-[20px] text-slate-950 mb-[10px]">
            Learn Science Topic with Augmented Reality
          </h1>
          <h1 className="font-medium desktop:text-[20px] desktop:mt-[30px] text-[16px] text-slate-800 mb-[20px]">
            ARAL Kids makes learning science super fun by using cool technology
            that lets you interact and learn about stuff like magic! You can
            even bring your science lessons to life by seeing cool 3D things
            right in your room with your phone!
          </h1>
          <button className="desktop:w-[170px] desktop:h-[70px] bg-fourth desktop:rounded-[17px] mt-[30px] text-[15px] py-[10px] px-[20px] rounded-[10px] font-semibold text-slate-200">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
