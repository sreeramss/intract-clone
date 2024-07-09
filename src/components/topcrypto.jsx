import React from "react";
import image1 from "../assets/topcrypto1.png";
import image2 from "../assets/topcrypto2.png";
import image3 from "../assets/topcrypto3.png";
import image4 from "../assets/topcrypto4.png";
import { IoPlayCircle } from "react-icons/io5";

function Topcrypto() {
  return (
    <div className="mt-36">
      <div className="text-center ">
        <h1 className="text-2xl">Top Crypto Creators and Projects to Follow</h1>
        <p className="text-lg text-[#5c575c] font-semibold mt-4">
          Answers to your crypto doubts, straight from the experts
        </p>
      </div>
      <div className="mt-10 text-2xl flex flex-wrap ml-10 mr-10 gap-6 flex-col md:flex-row justify-center  ">
        <div className="relative rounded-lg hover:opacity-65">
          <div className="absolute top-[45%] right-[40%] z-10  hover:opacity-70  hover:scale-150 duration-300 ease-in-out">
            <IoPlayCircle className="text-[60px]" />
          </div>
          <img src={image1} className=" rounded-xl" alt="" />
          <div className="absolute top-3/4 left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 backdrop-blur-[2px]"></div>
          <p className="absolute bottom-0 p-2  ">
            How to plan your retirement using Crypto?
          </p>
        </div>
        <div className="relative rounded-lg hover:opacity-65">
        <div className="absolute top-[45%] right-[40%] z-10  hover:opacity-70  hover:scale-150 duration-300 ease-in-out">
            <IoPlayCircle className="text-[60px] " />
          </div>
          <img src={image2} className=" rounded-xl" alt="" />
          <div className="absolute top-3/4 left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 backdrop-blur-[2px]"></div>
          <p className="absolute bottom-0 p-2">
            Why are there limited Bitcoin ?
          </p>
        </div>
        <div className="relative rounded-lg hover:opacity-65">
        <div className="absolute top-[45%] right-[40%] z-10  hover:opacity-70  hover:scale-150 duration-300 ease-in-out">
            <IoPlayCircle className="text-[60px] " />
          </div>
          <img src={image3} className=" rounded-xl" alt="" />
          <div className="absolute top-3/4 left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 backdrop-blur-[2px]"></div>
          <p className="absolute bottom-0 p-2">
            How does Uniswap actually work?
          </p>
        </div>
        <div className="relative rounded-lg hover:opacity-65">
        <div className="absolute top-[45%] right-[40%] z-10  hover:opacity-70  hover:scale-150 duration-300 ease-in-out">
            <IoPlayCircle className="text-[60px] " />
          </div>
          <img src={image4} className=" rounded-xl" alt="" />
          <div className="absolute top-3/4 left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 backdrop-blur-[2px]"></div>
          <p className="absolute bottom-0 p-2">
            How to spot crypto projects to invest in?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Topcrypto;
