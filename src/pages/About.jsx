/** @format */

import React from "react";
function About() {
  return (
    <>
      <section
        id="About"
        className="h-screen bg-secondary mt-[50px] flex flex-col items-center px-[20px] rounded-[30px]"
      >
        <div className="bg-primary mt-[20px] rounded-[20px]">
          <img src="/images/About Image.png" alt="About Image" />
        </div>
        <div className="mt-[20px] flex flex-col items-start">
          <h1 className="uppercase font-normal text-[15px] mb-[10px]">
            about the app
          </h1>
          <h1 className="font-semibold text-[20px] text-slate-950 mb-[10px]">
            Learn Science Topic with Augmented Reality
          </h1>
          <h1 className="font-medium text-[16px] text-slate-800 mb-[20px]">
            ARAL Kids makes learning science super fun by using cool technology
            that lets you interact and learn about stuff like magic! You can
            even bring your science lessons to life by seeing cool 3D things
            right in your room with your phone!
          </h1>
          <button className="font-medium text-[15px] text-slate-200 py-[10px] px-[20px] rounded-[10px] bg-fourth">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
