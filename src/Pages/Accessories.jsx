import { useState } from "react";
import Card from "../Components/Card"
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";

const Accessories = () => {
    const [isOpen, setIsOpen] = useState(false);
  

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
       <div className="h-32 w-full flex justify-center items-center">
            <text className="font-extrabold text-5xl">Accessories</text>
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
                Best selling
                <button onClick={toggleAccordion}>
                  {isOpen ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
                </button>
                {isOpen && <div className=""></div>}
              </text>
            </div>
            <div className="h-14 w-[50%] flex justify-end">
              <div className="h-14 w-[50%] flex justify-center items-center">
                <text className="text-gray-700">16 products</text>
              </div>
            </div>
          </div>

    <div className="h-96 w-full flex justify-center items-center gap-10">
          <Card
            image="https://affinity.com.pk/cdn/shop/products/NikeCushionTrainin_-LyN8nW3eObJyf4Yh-vx_360x.jpg?v=1618316565"
            title={"Adidas Alphabounce Edge XT"}
            price={"40,500.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/files/IMG-5864_360x.jpg?v=1695075562"
            title={"Nike ZoomX Invincible Run FK 2"}
            price={"38,000.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/products/NikeCushionTrainin_-LyN8nW3eObJyf4Yh-vx_360x.jpg?v=1618316565"
            title={"Adidas Ultraboost 20"}
            price={"24,000.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/files/IMG-5864_360x.jpg?v=1695075562"
            title={"Adidas PUREBOOST 21"}
            price={"24,500.00"}
          />
        </div>
        <div className="h-96 w-full flex justify-center items-center gap-10">
          <Card
            image="https://affinity.com.pk/cdn/shop/products/NikeCushionTrainin_-LyN8nW3eObJyf4Yh-vx_360x.jpg?v=1618316565"
            title={"Adidas Alphabounce Beyond M"}
            price={"14,500.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/files/IMG-5864_360x.jpg?v=1695075562"
            title={"Adidas Alphabounce Beyond M"}
            price={"15,950.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/products/NikeCushionTrainin_-LyN8nW3eObJyf4Yh-vx_360x.jpg?v=1618316565"
            title={"Adidas Broomfield Shoes"}
            price={"12,500.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/files/IMG-5864_360x.jpg?v=1695075562"
            title={"Adidas Climacool Ventania"}
            price={"14,500.00"}
          />
        </div>
        <div className="h-96 w-full flex justify-center items-center gap-10">
          <Card
            image="https://affinity.com.pk/cdn/shop/products/NikeCushionTrainin_-LyN8nW3eObJyf4Yh-vx_360x.jpg?v=1618316565"
            title={"Adidas Alphabounce Beyond M"}
            price={"15,950.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/files/IMG-5864_360x.jpg?v=1695075562"
            title={"Adidas Alphabounce+ Shoes"}
            price={"12,500.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/products/NikeCushionTrainin_-LyN8nW3eObJyf4Yh-vx_360x.jpg?v=1618316565"
            title={"Vans Of The Wall Old Skool"}
            price={"14,500.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/files/IMG-5864_360x.jpg?v=1695075562"
            title={"Adidas Alphabounce Beyond M"}
            price={"15,950.00"}
          />
        </div>
        <div className="h-96 w-full flex justify-center items-center gap-10">
          <Card
            image="https://affinity.com.pk/cdn/shop/products/NikeCushionTrainin_-LyN8nW3eObJyf4Yh-vx_360x.jpg?v=1618316565"
            title={"Converse Chuck Taylor All Star 70 HI"}
            price={"15,500.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/files/IMG-5864_360x.jpg?v=1695075562"
            title={"Nike Air Zoom Winflo 7"}
            price={"22,000.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/files/IMG-5864_360x.jpg?v=1695075562"
            title={"Nike Air Zoom Pegasus 39"}
            price={"27,000.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/products/NikeCushionTrainin_-LyN8nW3eObJyf4Yh-vx_360x.jpg?v=1618316565"
            title={"Nike Zoom Pegasus Turbo Obsidian Mist"}
            price={"9,500.00"}
          />
        </div>
        </div>
  )
}

export default Accessories
