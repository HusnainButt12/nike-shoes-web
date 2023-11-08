import { useState } from "react";
import Card from "../Components/Card"
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";

const Slides = () => {
    const [isOpen, setIsOpen] = useState(false);
  

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
       <div className="h-32 w-full flex justify-center items-center">
            <text className="font-extrabold text-5xl">Slides</text>
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
                <text className="text-gray-700">14 products</text>
              </div>
            </div>
          </div>

    <div className="h-96 w-full flex justify-center items-center gap-10">
          <Card
            image="https://affinity.com.pk/cdn/shop/products/image_7f0e0a31-65e8-4c28-a31b-ff6dad04342b_360x.jpg?v=1633442880"
            title={"Adidas Alphabounce Edge XT"}
            price={"40,500.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/products/image_bc118bf0-c122-43da-b7de-6be244da0f0b_360x.heic?v=1676424232"
            title={"Nike ZoomX Invincible Run FK 2"}
            price={"38,000.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/products/image_c6ddbf9f-096d-4cfa-b8f7-af4624dd763b_360x.jpg?v=1676415675"
            title={"Adidas Ultraboost 20"}
            price={"24,000.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/products/image_52a656fb-4568-416a-9afb-2a7afa9b5a57_360x.jpg?v=1676416504"
            title={"Adidas PUREBOOST 21"}
            price={"24,500.00"}
          />
        </div>
        <div className="h-96 w-full flex justify-center items-center gap-10">
          <Card
            image="https://affinity.com.pk/cdn/shop/products/image_ac9ac01b-4f53-40b9-b77d-a188515ae59c_360x.jpg?v=1676417324"
            title={"Adidas Alphabounce Beyond M"}
            price={"14,500.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/products/image_a773d816-aa79-4acb-ae85-1af8d497d42a_360x.jpg?v=1681339269"
            title={"Adidas Alphabounce Beyond M"}
            price={"15,950.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/products/image_ededcec4-ab25-43a9-8d0b-e4b499697f9a_360x.jpg?v=1676413780"
            title={"Adidas Broomfield Shoes"}
            price={"12,500.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/products/image_e265dd34-9656-4b3f-9822-27f12fdd7d8b_360x.webp?v=1676424201"
            title={"Adidas Climacool Ventania"}
            price={"14,500.00"}
          />
        </div>
        <div className="h-96 w-full flex justify-center items-center gap-10">
          <Card
            image="https://affinity.com.pk/cdn/shop/files/c7a66d26-e3be-4035-b956-e1385c9a7450_360x.webp?v=1698144930"
            title={"Adidas Alphabounce Beyond M"}
            price={"15,950.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/files/Screenshot2023-10-25at17-12-57Adilette_Comfort_Sandals_Black_FZ1750_01_standard.jpg_AVIFImage840x840pixels_Scaled_70_360x.png?v=1698236123"
            title={"Adidas Alphabounce+ Shoes"}
            price={"12,500.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/files/Screenshot2023-10-25at16-55-30Adilette_Comfort_Slides_Blue_B42114_09_standard.jpg_AVIFImage840x840pixels_Scaled_70_360x.png?v=1698235036"
            title={"Vans Of The Wall Old Skool"}
            price={"14,500.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/files/Screenshot2023-10-25at16-47-35Adilette_Comfort_Slides_Black_AP9971_09_standard.jpg_AVIFImage840x840pixels_Scaled_70_360x.png?v=1698234577"
            title={"Adidas Alphabounce Beyond M"}
            price={"15,950.00"}
          />
        </div>
        <div className="h-96 w-full flex justify-center items-center gap-10">
          <Card
            image="https://affinity.com.pk/cdn/shop/files/IMG-7240_360x.webp?v=1698232109"
            title={"Converse Chuck Taylor All Star 70 HI"}
            price={"15,500.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/files/4f064a60-380b-4e33-8d80-fd5f81626592_360x.webp?v=1698145075"
            title={"Nike Air Zoom Winflo 7"}
            price={"22,000.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/products/image_bc118bf0-c122-43da-b7de-6be244da0f0b_360x.heic?v=1676424232"
            title={"Nike Air Zoom Pegasus 39"}
            price={"27,000.00"}
          />
          <Card
            image="https://affinity.com.pk/cdn/shop/files/Screenshot2023-10-25at16-55-30Adilette_Comfort_Slides_Blue_B42114_09_standard.jpg_AVIFImage840x840pixels_Scaled_70_360x.png?v=1698235036"
            title={"Nike Zoom Pegasus Turbo Obsidian Mist"}
            price={"9,500.00"}
          />
        </div>
        </div>
  )
}

export default Slides
