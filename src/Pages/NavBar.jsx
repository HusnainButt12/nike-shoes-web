import { useState } from "react";
import {  BsHandbag, BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false);
  

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-28 w-full shadow-black bg-white flex justify-center items-center">
        <div className="h-24 w-[90%] flex flex-row border-2">
          <div className="h-full w-24 flex justify-center items-center">
            <img
              src="https://affinity.com.pk/cdn/shop/files/Affinity_400_180x.png?v=1618084178"
              alt="png"
              className="h-20 w-full cursor-pointer"
            />
          </div>
          <div className="h-full w-[75%]">
            <div className="h-[60%] w-full flex flex-row justify-center items-center gap-6">
              <Link to="/">
              <text className="text-lg hover:text-gray-500 hover:underline cursor-pointer">
                Home
              </text>
              </Link>
              <text className="text-lg underline hover:text-gray-500 cursor-pointer">
                Footwear
              </text>
              <Link to="/slide">
              <text className="text-lg hover:text-gray-500 hover:underline cursor-pointer">
                Slides
              </text>
              </Link>
              <text className="text-lg hover:text-gray-500 hover:underline cursor-pointer">
                Shop By Brand
                <button onClick={toggleAccordion}>
                  {isOpen ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
                </button>
                {/* {isOpen && <div className=" h-20 w-30 bg-black"></div>} */}
              </text>
              <Link to="/accessories">
              <text className="text-lg hover:text-gray-500 hover:underline cursor-pointer">
                Accessories
              </text>
              </Link>
              <Link to="/sale">
              <text className="text-lg hover:text-gray-500 hover:underline cursor-pointer">
                Clearance Sale
              </text>
              </Link>
            </div>
            <div className="h-[30%] w-full flex justify-center">
              <Link to="/trackorderhttps://www.instagram.com/">
              <text className="text-lg hover:text-gray-500 hover:underline cursor-pointer">
                Track Your Order
              </text>
              </Link>
            </div>
          </div>
          <div className="h-full w-[17%] flex flex-1 justify-center items-center gap-8">
            <BsSearch className="text-2xl hover:text-gray-500 cursor-pointer" />
            <Link to="/login">  
            <VscAccount
              className="text-2xl hover:text-gray-500 cursor-pointer"
            />
            </Link>
            <Link to="/addtocart">
            <BsHandbag
              className="text-2xl hover:text-gray-500 cursor-pointer"
            />
            </Link>
          </div>
        </div>
      </div>
  )
}

export default NavBar
