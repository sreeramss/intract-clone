import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import coin from "../assets/xp-icon-aacd204a.svg";

// mapping data 1
import mapImg1 from "../assets/Map-1/mapImg-1.png";
import mapImg2 from "../assets/Map-1/mapImg-2.jpg";
import mapImg3 from "../assets/Map-1/mapImg-3.jpg";
import mapImg4 from "../assets/Map-1/mapImg-4.jpg";
import mapImg5 from "../assets/Map-1/mapImg-5.jpg";
import mapImg6 from "../assets/Map-1/mapImg-6.jpg";

// mapping data 2
import mapiImg1 from "../assets/Map-2/map2Img-1.jpg";
import mapiImg2 from "../assets/Map-2/map2Img-2.jpg";
import mapiImg3 from "../assets/Map-2/map2Img-3.png";
import mapiImg4 from "../assets/Map-2/map2Img-4.jpg";

const mapData1 = [
  {
    img: mapImg1,
    para: "#1: But what is crypto and...",
    task: 11,
  },
  {
    img: mapImg2,
    para: "#2: Setting up your own we...",
    task: 8,
  },
  {
    img: mapImg3,
    para: "#3: What the heck is a...",
    task: 8,
  },
  {
    img: mapImg4,
    para: "#4: Swapping and bridging...",
    task: 10,
  },
  {
    img: mapImg5,
    para: "#5: NFTs and why they’re...",
    task: 6,
  },
  {
    img: mapImg6,
    para: "#6: Doing quests and winni...",
    task: 8,
  },
];

const mapData2 = [
  {
    img: mapiImg1,
    para: "#1: But what is crypto and web3?",
    task: 11,
  },
  {
    img: mapiImg2,
    para: "#2: Setting up your own web3 wallet!",
    task: 8,
  },
  {
    img: mapiImg3,
    para: "#1: But what is crypto and web3?",
    task: 8,
  },
  {
    img: mapiImg4,
    para: "#1: But what is crypto and web3?",
    task: 10,
  },
];

const Cards = ({ headerImg, guest, headContent, paraContent, XP, mapData }) => {
  const [showCard, setShowCard] = useState(true);
  return (
    <div className="w-[500px] h-auto bg-[#161516] text-white rounded-3xl overflow-hidden max-md:w-[100%]">
      <div className={`w-[100%] ${showCard ===true ? 'rounded-t-3xl' : 'rounded-3xl'}  flex gap-4 border-b border-[#3d3b3c] py-6 pt-6 overflow-hidden hover:bg-[#34323280]`} onClick={()=>setShowCard(!showCard)}>
        <div className="w-[60%] pl-6 relative">
          <div className="w-[160px] h-[190px] rounded-xl bg-[#222021] border border-[#3d3b3c] px-2 py-2 overflow-hidden ">
            <img
              src={headerImg}
              alt=""
              className="w-[100%] h-[100%] object-cover rounded-lg"
            />
          </div>
          <div className="w-[50%] text-sm text-center backdrop-blur-md rounded-3xl px-1 py-2 border border-[#3b3d47] absolute bottom-4 right-[34px]">
            {guest} Guest
          </div>
        </div>
        <div className="w-[100%] relative pr-6">
          <h1 className="text-2xl font-semibold pt-3">{headContent}</h1>
          <p className="font-semibold text-[#6f6f6f] py-4 leading-5 border-b-2 border-[#6f6f6f] border-dashed">
            {paraContent}
          </p>
          <div className=" w-24 mt-3 rounded-2xl flex gap-2 px-2 py-1 bg-[#252525]">
            <img src={coin} alt="coin" width={"18px"} />
            <span className="text-sm font-semibold ">{XP} XP</span>
          </div>
          <div className=" text-xl text-[#6f6f6f] absolute top-0 right-5 cursor-pointer">
            <AiFillCaretDown />
          </div>
        </div>
      </div>
      {showCard&&<div className="w-[100%] h-[300px] flex flex-col gap-3 px-4 py-4 overflow-y-scroll overflow-x-none">
        {/* mapping div */}
        {mapData?.map((data, index) => (
          <div
            className="w-[100%] h-[100px] rounded-xl flex gap-4 px-2 py-2 bg-[#1c1c1c] border border-[#272727]"
            key={index}
          >
            <div className="w-[40%] rounded-xl overflow-hidden">
              <img
                src={data.img}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[100%] h-auto">
              <h1 className="pb-3 text-xl font-semibold border-b-2 border-[#6f6f6f]  border-dashed">
                {data.para}
              </h1>
              <div className="flex justify-between items-center pt-3">
                <h2>{data.task} Tasks</h2>
                <div className=" w-[170px] px-1 py-1 border rounded-xl border-[#353535]">
                  <div className="w-40 px-1 py-1 rounded-xl bg-[#2e2e2e]"></div>
                </div>
                <div className="w-6 px-1 py-1 text-sm text-[#6f6f6f] rounded-[50%] bg-[#1c1c1c] border border-[#353535] ">
                  <AiOutlineCheck />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default Cards;