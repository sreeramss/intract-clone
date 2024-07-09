import React from "react";
import Navbar from "../components/navbar";
import Home from "../components/home";
import Cardsmain from "../components/cardsmain";
import Topcrypto from "../components/topcrypto";
import Cryptodictionary from "../components/cryptodictionary";
import Footer from "../components/footer";
import ChatBot from "../components/chat";

function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <Cardsmain />
      <Topcrypto />
      <Cryptodictionary />
      <div className=" flex justify-center my-16 md:my-12 rounded-3xl sticky bottom-[40px]">
        <button className="bg-[#393939] backdrop-blur-sm h-12 w-32 md:w-44 rounded-3xl">
          Essentials
        </button>
        <button className="bg-[#161516] backdrop-blur-sm hover:bg-[#393939] h-12 w-32 md:w-44 rounded-3xl">
          Alpha Hub
        </button>
      </div>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default Main;
