import React, { useState } from "react";
import { SiChatbot } from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className={`fixed bottom-0 right-0 w-full sm:w-80 bg-gradient-to-b from-blue-400 to-purple-100 rounded-lg p-5 shadow-lg transition-transform transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="text-center mb-4">
          <span className="text-black text-lg flex justify-center items-center">
            <SiChatbot className="mr-2" />
            Hi there{" "}
            <span role="img" aria-label="wave" className="ml-2">
              👋
            </span>
          </span>
          <h2 className="text-black text-2xl m-0">How can we help?</h2>
        </div>
        <div className="text-center mb-5">
          <button className="bg-white text-purple-700 rounded-lg py-2 px-4 w-full text-lg mb-1">
            Send us a message
          </button>
          <span className="block text-black text-sm">
            We typically reply within an hour
          </span>
        </div>
        <div className="flex justify-between mb-3">
          <button className="bg-white text-purple-700 rounded-lg py-2 px-4 flex-1 mx-1 text-sm">
            Home
          </button>
          <button className="bg-white text-purple-700 rounded-lg py-2 px-4 flex-1 mx-1 text-sm">
            Messages
          </button>
        </div>
        <div className="text-center text-black mb-3">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full px-3 py-2 rounded-lg border border-purple-700"
          />
        </div>
        <div className="text-center text-black text-xs">
          <span>Powered by Intercom</span>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <FiChevronDown
            className="text-black text-2xl cursor-pointer"
            onClick={toggleChatBot}
          />
        </div>
      </div>
      <button
        className="fixed bottom-5 right-5 bg-white text-black rounded-full p-4 shadow-lg"
        onClick={toggleChatBot}
      >
        <SiChatbot className="text-2xl" />
      </button>
    </div>
  );
};

export default ChatBot;
