import React from "react";
import img1 from "../assets/dictimg.svg";
import { IoBookOutline } from "react-icons/io5";

function Cryptodictionary() {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <p className="text-2xl">Crypto Dictionary</p>
      <p className="text-lg text-[#5c575c] font-semibold pt-4 rounded-lg text-center px-2">
        Your one-stop to catch up on all crypto terms
      </p>
      <div className="w-[70%] h-[500px] rounded-lg overflow-hidden  pt-4 relative">
        <img
          src={img1}
          className="blur-[2px] md:blur-none w-full opacity-70 h-full object-cover rounded-lg"
          alt=""
        />
        <p className="absolute bottom-0 p-3 text-2xl md:pl-10  text-[#b1b1b1]">
          Web3 + Degen Glossary <br />
          <span className="text-lg  text-[#7c7c7c] font-semibold ">
            Your own crypto dictionary
          </span>
        </p>
        <div className="absolute bottom-6 right-4 md:right-8  border-[1px] p-4 rounded-full border-white/20 bg-[#7a767644]">
          <IoBookOutline className=" md:text-[24px] " />
        </div>
      </div>
    </div>
  );
}

export default Cryptodictionary;
