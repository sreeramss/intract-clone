import React from "react";
import logo from "../assets/intract_text.svg";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="border-t-[1px] border-[#ffffff33] flex flex-col md:flex-row gap-10 w-[100%] justify-around md:justify-evenly md:-ml-10 p-10 md:px-40">
        <div className="">
          <a href="#" className="p-4">
            <img className="" src={logo} alt="" />
          </a>
          <p className="text-[#7c7c7c] font-light ">
            We are your personal guide for exploring <br />
            web3 projects & earning 100x rewards
          </p>
        </div>
        <div className="md:-ml-20 flex gap-10 md:gap-16 ">
          <div>
            <p className="pb-6">INTRACT</p>
            <p className="text-[#7c7c7c] font-light ">Explore Quests</p>
            <p className="text-[#7c7c7c] font-light ">Comunities</p>
            <p className="text-[#7c7c7c] font-light ">Alpha Hub</p>
          </div>
          <div>
            <p className="pb-6">EARN</p>
            <p className="text-[#7c7c7c] font-light ">Refer & Earn</p>
            <p className="text-[#7c7c7c] font-light ">Leaderboard</p>
            <p className="text-[#7c7c7c] font-light ">Acheivements</p>
          </div>
        </div>
        <div className="flex gap-10 md:gap-16">
          <div>
            <p className="pb-6">ABOUT</p>
            <p className="text-[#7c7c7c] font-light ">Product Roadmap</p>
            <p className="text-[#7c7c7c] font-light ">Affiliate Program</p>
            <p className="text-[#7c7c7c] font-light ">Sign up Program</p>
            <p className="text-[#7c7c7c] font-light ">Growth Community</p>
            <p className="text-[#7c7c7c] font-light ">Blogs</p>
          </div>
          <div>
            <p className="pb-6">SUPPORT</p>
            <p className="text-[#7c7c7c] font-light ">Help Center</p>
            <p className="text-[#7c7c7c] font-light ">Create your quest</p>
            <p className="text-[#7c7c7c] font-light ">Terms of Service </p>
            <p className="text-[#7c7c7c] font-light ">Privacy Policy</p>
            <p className="text-[#7c7c7c] font-light ">Community Guidelines</p>
          </div>
        </div>
      </div>
      <div className="">
        <p className="md:pt-12 md:pb-12 pt-4 pb-4 border-t-[1px] border-[#ffffff33] w-[72%] m-auto text-[15px]">
          Disclaimer:{" "}
          <span className="text-[#7c7c7c] font-light">
            {" "}
            Crypto Products, Virtual Digital Assets, and NFTs are unregulated
            and can be highly risky. There may be no regulatory recourse for any
            loss from such transactions. We advise the viewer to proceed with
            caution. Nothing in this website or any communication published by
            us amounts to, is intended to be, or should be construed as
            investment or purchase advice of any kind or financial advice or
            promotion under any applicable laws. Any decision made based on the
            content provided on this website or any communication published by
            us shall not be attributable to us.
          </span>
        </p>
      </div>
      <p className="border-t-[1px] border-[#ffffff33] w-[72%] m-auto"></p>
      <div className="flex flex-row justify-between items items-center w-[72%] m-auto">
        <div>
          <p className="md:pt-8 md:pb-16 text-xs md:text-lg pt-4 pb-8">CREATED BY INTRACT</p>
        </div>
        <div className="flex p-2  gap-2 md:gap-8 text-lg md:text-2xl">
          <FaTwitter  className="text-blue-600 "/>
          <FaDiscord className="text-sky-400" />
          <FaTelegram className="text-sky-400" />
          <FaSpotify className="text-green-500"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
