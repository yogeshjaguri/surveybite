import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <>
         
      <div className="relative bg-cover ">
          <img src="/Bg.png" alt="Bg" />

          

          <div
            className="absolute
            top-[20%]
            left-[10%]
            font-Oxanium
            font-semibold
            text-[5rem]
            line-clamp-3
            leading-none"
          >
            <h1
              className="
            text-white"
            >
              You Respond.
            </h1>
            <h1
              className="
            text-[#FF7300]"
            >
              We Reward
            </h1>
            <p
              className="
            w-[520px]
            font-Oxanium
            text-lg
            font-semibold"
            >
              Unleash Your Sports Wisdom with SurveyByte – Score a $2 Sign-Up
              Bonus Today.
            </p>
            <button
              className="text-sm p-2 font-[Roboto] rounded-lg
            text-white bg-[#FF7300]"
            >
              Get Paid Today
            </button>
          </div>
        <div className="absolute bottom-0 ">
          <img src="/image.png" alt="image" />
        </div>
        </div>
    </>
  );
};

export default Hero;
