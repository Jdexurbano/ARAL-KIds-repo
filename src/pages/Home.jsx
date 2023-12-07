/** @format */

import React from "react";
function Home() {
  return (
    <>
      <section
        id="Home"
        className="desktop:ml-[50px] large:ml-[130px] desktop:h-screen"
      >
        <div className="desktop:flex desktop:justify-between desktop:items-start pt-[40px]">
          <div className="flex flex-col items-center desktop:items-start">
            <div className="text-center desktop:text-left font-extrabold text-[40px] desktop:text-[55px] large:text-[70px] text-slate-100 leading-[1.20] mb-[20px]">
              <h1>
                <span className="text-sixth">A</span>ugmented
              </h1>
              <h1>
                <span className="text-fourth">R</span>eality
              </h1>
              <h1>
                <span className="text-fifth">A</span>ndroid-Based
              </h1>
              <h1>
                <span className="text-nine">L</span>earning for
              </h1>
              <h1 className=" text-seven">Kids</h1>
            </div>
            <div className="mb-[10px] font-semibold desktop:font-bold">
              <button className="py-[11px] desktop:py-[21px] px-[16px] desktop:px-[32px] bg-fourth rounded-[15px] mr-[5px]">
                <h1 className="text-slate-200">Download Now</h1>
              </button>
              <button className="py-[10px] desktop:py-[20px] px-[20px] desktop:px-[40px] bg-slate-200 rounded-[15px] ml-[5px] border-[2px] border-fifth hover:bg-fifth duration-300 text-fifth hover:text-slate-200">
                <h1>Try it for Free</h1>
              </button>
            </div>
            <p className="font-medium text-slate-900 text-[18px] desktop:text-[24px]">
              Ignite the power of technology by teaching <br />
              kids using Augmented Reality
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="ml-[20px] mt-[20px] bg-secondary rounded-l-[20px] desktop:rounded-l-[40] large:rounded-l-[50px] flex items-center justify-center desktop:items-end desktop:py-[50px]"
          >
            <img
              src="/images/UI Screenshot.png"
              alt=""
              className="min-h-[301px] min-w-[350px] max-h-[501px] max-w-[601px] desktop:max-h-[433px] desktop:max-w-[601px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
