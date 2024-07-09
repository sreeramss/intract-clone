import { Bars3Icon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import logo from "../assets/intract_text.svg"
import Searchbar from "./searchbar"; 
import image1 from "../assets/broadcast_or-04af786c.svg"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const id = document.getElementById("ulId");
    if (id) id.style.display = "block";
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const id = document.getElementById("ulId");
    if (id) id.style.display = "none";
  }, []);

  return (
    <div className="fixed w-full border-b-[1px] border-[#ffffff33] z-30">
      <nav className=" backdrop-blur-md mx-auto px-4 lg:px-8 py-5 flex justify-center  items-center">
      <div className="min-w-[100px]">
      <a href="#"><img className="" src={logo} alt="" /></a>
        </div>
        <div className="flex">
        <ul className="hidden  lg:flex px-8 mt-2 relative">
          <li>
            <a
              className="p-4 opacity-70 "
              href="compass"
            >
              Compass
            </a>
          </li>
          <li>
            <a
              className="p-4 opacity-70 "
              href="#explore"
            >
              Explore
            </a>
          </li>
          <li>
            <a
              className="p-4 border-b-4 pb-7"
              href="#academy"
            >
              Academy <span className="ml-2 p-1 bg-violet-600 text-sm rounded-lg">New</span>
            </a>
          </li>
          <li>
            <a
              className="p-4 opacity-70 "
              href="#nft"
            >
              NFTs
            </a>
          </li>
          <li>
            <a
              className="p-4 opacity-70 "
              href="#forprojects"
            >
              For Projects
            </a>
          </li>
        </ul>
        <div><Searchbar/></div>
        </div>
        <div className="md:ml-4 md:-mt-4">
          <a href="" className="absolute border ml-6 -mt-1 md:mt-1 border-yellow-700 rounded-full p-3">
            <img src={image1} className=" h-4 w-4  " alt="" />
          </a>
          <button className=" ml-20 mr-3 p-1 pl-2 pr-2 rounded-lg md:mt-2 md:pl-6 md:pr-6 bg-white text-black">
            Sign In
          </button>
        </div>

        <button className="text-white lg:hidden" onClick={toggleMenu}>
          <Bars3Icon className="h-6 w-6" />
        </button>
        {
          <div
            id="divId"
            className={`${
              isMenuOpen ? "animate-navbar-down" : "animate-navbar-up"
            } absolute top-20 -left-24 -right-24 bottom-0 lg:hidden `}
          >
            <ul
              id="ulId"
              className="menu-items bg-black lg:hidden px-8  text-center"
            >
              <li>
                <a className=" p-4 opacity-70 block shadow-md" href="#compass">
                Compass
                </a>
              </li>
              <li>
                <a className=" p-4 opacity-70 block shadow-md" href="#explore">
                Explore
                </a>
              </li>
              <li>
                <a className=" p-4 opacity-70 block shadow-md" href="#academy">
                Academy
                </a>
              </li>
              <li>
                <a className=" p-4 opacity-70 block shadow-md" href="#nft">
                NFTs
                </a>
              </li>
              <li>
                <a className=" p-4 opacity-70 block shadow-md " href="#forprojects">
                For Projects
                </a>
              </li> 
            </ul>
          </div>     
        }
      </nav>
    </div>
  );
}





