import React from "react";
import bgimg from "../assets/intract-academy-background-5547a705.png";
import img2 from "../assets/academy-animated-logo-57b2ae61.gif";

function Home() {
  return (
    <div className="text-center">
      <img className="h-screen w-full object-cover pt-[73px] md:pt-[85px]" src={bgimg} alt="" />
      <div className="">
        <img
          className="-mt-[500px] mx-auto w-[240px] h-[100px] mix-blend-screen "
          src={img2}
          alt=""
        />
      </div>
      <p className="text-white text-center text-lg pt-10 md:text-xl">
        Intract users{" "}
        <span className="text-[#5c575c] font-semibold">
          {" "}
          have together made more than{" "}
        </span>
        $100 million{" "}
        <span className="text-[#5c575c] font-semibold"> in web3</span>
      </p>
      <p className="pb-10 text-sm md:text-xl">
        <span className="text-[#5c575c] font-semibold">Join them and </span>
        learn how to earn crypto!
      </p>
      <div className="relative  flex justify-center w-full">
      <button className="bg-violet-600 py-2 flex justify-center w-[50%] h-[50%] md:w-44 rounded-lg ">
        Get Started
        <img
          className="ml-2 w-4 h-4 md:w-6 md:h-6 mt-1"
          src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg"
          alt=""
        />
      </button>
      </div>
    </div>
  );
}

export default Home;
