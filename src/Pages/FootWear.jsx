import { useState } from "react";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";

const FootWear = () => {
    const [isOpen, setIsOpen] = useState(false);
  

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
       <div className="h-32 w-full flex justify-center items-center">
            <text className="font-extrabold text-5xl">Footwear</text>
          </div>
          <div className="h-16 w-full border-y-2 flex flex-row">
            <div className="h-14 w-[50%] flex justify-center flex-row items-center gap-8 ">
              <text className="text-gray-700 cursor-pointer">FILTER BY</text>
              <text className="text-lg  cursor-pointer">
                All products
                <button onClick={toggleAccordion}>
                  {isOpen ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
                </button>
                {isOpen && <div className=""></div>}
              </text>
              <text className="text-gray-700 cursor-pointer">SORT BY</text>
              <text className="text-lg cursor-pointer">
                Featured
                <button onClick={toggleAccordion}>
                  {isOpen ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
                </button>
                {isOpen && <div className=""></div>}
              </text>
            </div>
            <div className="h-14 w-[50%] flex justify-end">
              <div className="h-14 w-[50%] flex justify-center items-center">
                <text className="text-gray-700">167 products</text>
              </div>
            </div>
          </div>
    </div>
  )
}

export default FootWear
