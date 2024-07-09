import React from 'react';
import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className=" hidden  md:flex bg-customGray rounded-3xl p-2 ">
      <IoSearch className="h-6 w-6 pt-1 text-gray-400" />
      <div className="">
        <input
          type="text"
          placeholder="Search for ecosystems, trending quests etc.."
          className='bg-transparent p-1 pl-2 text-sm  md:w-72 lg:w-72 placeholder:font-semibold opacity-60 '
        />
      </div>
    </div>
  );
};

export default Searchbar;

