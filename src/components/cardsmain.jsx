import React from "react";
import Cards from "./cards";
import { AiOutlineCheck } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

// mapping data 1
import headImg1 from "../assets/Map-1/Blue-three-circle.png";
import mapImg1 from "../assets/Map-1/mapImg-1.png";
import mapImg2 from "../assets/Map-1/mapImg-2.jpg";
import mapImg3 from "../assets/Map-1/mapImg-3.jpg";
import mapImg4 from "../assets/Map-1/mapImg-4.jpg";
import mapImg5 from "../assets/Map-1/mapImg-5.jpg";
import mapImg6 from "../assets/Map-1/mapImg-6.jpg";

// mapping data 2
import headImg2 from "../assets/Map-2/Round-circle.png";
import mapiImg1 from "../assets/Map-2/map2Img-1.jpg";
import mapiImg2 from "../assets/Map-2/map2Img-2.jpg";
import mapiImg3 from "../assets/Map-2/map2Img-3.png";
import mapiImg4 from "../assets/Map-2/map2Img-4.jpg";

import cat1 from "../assets/cat-1.png";
import cat2 from "../assets/cat-2.png";
import dotBG from "../assets/dotBg.png";
import kol from "../assets/kol.gif";
import discord from "../assets/discord.svg";

// Introduction to Airdrops
// Your best bet to make it big in crypto!
// 1040

const Cardsmain = () => {
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
      para: "#1: What are airdrops, and...",
      task: 7,
    },
    {
      img: mapiImg2,
      para: "#2: Types of airdrops...",
      task: 10,
    },
    {
      img: mapiImg3,
      para: "#3: How to earn huge $$$...",
      task: 11,
    },
    {
      img: mapiImg4,
      para: "#4: Things to keep in mind!",
      task: 7,
    },
  ];

  return (
    <div className="w-[100%] h-auto">
      <div className="w-[100%] h-auto flex max-md:block">
        <div className="w-[100%] h-auto flex justify-center pt-20">
          <div>
            <Cards
              headerImg={headImg1}
              guest={6}
              headContent={"Basics of Crypto"}
              paraContent={
                "The safest and easiest place to start your crypto journey!"
              }
              XP={1490}
              mapData={mapData1}
            />
          </div>
        </div>
        <div className="w-[60%] h-[100%] flex justify-center px-5 py-5">
          <div className="w-[100%] flex flex-col gap-3 items-start justify-center">
            <div className="px-2 py-2 rounded-[50%] border border-black text-2xl text-center ml-14">
              <AiOutlineCheck />
            </div>
            <div className="w-[30%] border border-black rounded-3xl">
              <div className="mx-[6px] my-[6px]">
                <img
                  src={cat1}
                  alt=""
                  className="w-[100%] h-[100%] object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold text-white">
                Intract Certified: Learner NFT
              </h1>
              <p className="w-40 pb-1 leading-5">
                Your crypto black-belt certificate
              </p>
              <button className=" w-32 rounded-md px-4 py-2 bg-gray-600 text-white">
                Claim
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-auto flex max-md:block md:mt-20">
        <div className="w-[50%] h-[100%] flex justify-center px-5 py-5">
          <div className="w-[100%] flex flex-col gap-3 items-start justify-end pl-32">
            <div className="px-2 py-2 rounded-[50%] border border-black text-2xl text-center ml-14">
              <AiOutlineCheck />
            </div>
            <div className="w-[50%] border border-black rounded-3xl">
              <div className="mx-[6px] my-[6px]">
                <img
                  src={cat2}
                  alt=""
                  className="w-[100%] h-[100%] object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold text-white">
                Intract Certified: Learner NFT
              </h1>
              <p className="w-40 pb-1 leading-5">
                Your crypto black-belt certificate
              </p>
              <button className=" w-32 rounded-md px-4 py-2 bg-gray-600 text-white">
                Claim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-auto flex justify-start pl-10 pt-20 max-md:pl-0">
          <div>
            <Cards
              headerImg={headImg2}
              guest={4}
              headContent={"Introduction to Airdrops"}
              paraContent={"Your best bet to make it big in crypto!"}
              XP={1040}
              mapData={mapData2}
            />
          </div>
        </div>
      </div>
      <div className="md:w-[100%] flex justify-end py-24 ">
        <div className="md:w-[70%] flex flex-col md:flex md:flex-row">
          <div className="md:w-[70%]">
            <div className="md:w-[70%] px-3 py-3 rounded-xl bg-[#151515] ">
              <h1 className="flex items-center text-[#6e6e6e] text-md font-semibold gap-1 border-b border-dashed pb-2">
                <CiClock2 />
                Reward unlocks in
              </h1>
              <div className="w-[100%] md:w-[80%] h-[20%] rounded-xl mt-2 border-2 border-[#282828] relative">
                <img src={dotBG} alt="" className="w-[100%] h-[80px]" />
                <div className="absolute top-2 right-9 flex justify-center items-center gap-6 font-bold text-[#979797] ">
                  <div>
                    <h1 className="text-4xl">00</h1>
                    <h1 className="text-xl font-normal">Days</h1>
                  </div>
                  <div>
                    <h1 className="text-4xl">12</h1>
                    <h1 className="text-xl font-normal pl-1">Hrs</h1>
                  </div>
                  <div>
                    <h1 className="text-4xl">17</h1>
                    <h1 className="text-xl font-normal pl-1">Mins</h1>
                  </div>
                  <div>
                    <h1 className="text-4xl">21</h1>
                    <h1 className="text-xl font-normal pl-1">Sec</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[70%]  h-[530px] px-3 py-3  rounded-lg mt-4 bg-[#151515] border border-[#2d2d2d] text-[#696969]">
              <div>
                <img src={kol} alt="" className="rounded-md" />
              </div>
              <div className="w-[100%] flex justify-between py-2 border-b border-dashed border-black font-semibold">
                <h1>Exclusive community</h1>
                <h1 className="flex gap-1 font-semibold text-md text-white">
                  <img src={discord} alt="" />
                  Earndrop
                </h1>
              </div>
              <div className="w-[80%] py-4 flex flex-col gap-3">
                <div className="flex justify-between text-sm">
                  <h1>Complete all Essential quests</h1>
                  <div className="w-6 px-1 py-1 text-sm text-[#6f6f6f] rounded-[50%] bg-[#1c1c1c] border border-[#353535] ">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <h1>Complete at least 1 Alpha Hub quest today</h1>
                  <div className="w-6 px-1 py-1 text-sm text-[#6f6f6f] rounded-[50%] bg-[#1c1c1c] border border-[#353535] ">
                    <AiOutlineCheck />
                  </div>
                </div>
              </div>
              <button className="w-[100%] rounded-md px-2 py-2 bg-[#252525] text-[#969696] flex justify-center items-center">
                Claim Now <IoIosArrowRoundForward className="text-3xl" />
              </button>
            </div>
          </div>
          <div className="mx-3 md:mx-0 md:w-[80%] flex items-start pt-20">
            <div className="md:w-[50%] h-auto bg-[#131313] text-[#595959] rounded-lg px-3 py-2 border border-black">
              <h1 className="border-b pb-1">Rewards info </h1>
              <div className="flex flex-col gap-3 py-1 text-sm text-[#747474]">
                <h1 className=" font-bold text-[#c7c7c7]">
                  Free access to paid KOL (crypto earning) communities!
                </h1>
                <h2>
                  Win access to exclusive earning communities of some of the the
                  greatest earners in crypto for a month, every 24 hours. Get
                  access to unmatched insights, a close-knit community of the
                  best airdrop earners, and more.
                </h2>
                <h3>
                  To win: make sure you've connected your Twitter and Discord
                  accounts - and follow our criteria!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardsmain;
