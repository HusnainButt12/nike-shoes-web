import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import Card from "../Components/Card"
import FootWear from "./FootWear"

const CardData = () => {
  return (
    <div>
      <FootWear/>
      <div className="h-96 w-full flex justify-center items-center gap-10">
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_0ce1907a-8d90-429e-8e17-e805c9e673ca_1024x1024@2x.jpg?v=1649247361"
              title={"Adidas Alphabounce Edge XT"}
              price={"40,500.00"}
            />
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_cd7e6e3a-b4ce-431c-9985-abcc5f7c0f13_360x.heic?v=1659053449"
              title={"Nike ZoomX Invincible Run FK 2"}
              price={"38,000.00"}
            />
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_19522f8c-b30d-4bdc-b5a3-2af20a90edd8_360x.jpg?v=1645176612"
              title={"Adidas Ultraboost 20"}
              price={"24,000.00"}
            />
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_c67b2cf5-10a2-45c9-90c9-3ecee2f24c35_1024x1024@2x.jpg?v=1670726992"
              title={"Adidas PUREBOOST 21"}
              price={"24,500.00"}
            />
          </div>
          <div className="h-96 w-full flex justify-center items-center gap-10">
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_377c0b84-e1ac-42f1-b4aa-d48674a111bb_540x.heic?v=1670515658"
              title={"Adidas Alphabounce Beyond M"}
              price={"14,500.00"}
            />
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_08f27822-89f6-4806-8424-8ccfa1817612_1024x1024@2x.jpg?v=1622815219"
              title={"Adidas Alphabounce Beyond M"}
              price={"15,950.00"}
            />
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_05766805-a6b0-4270-af81-d390d4962d7f_1024x1024@2x.jpg?v=1633611337"
              title={"Adidas Broomfield Shoes"}
              price={"12,500.00"}
            />
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_7ea37e0a-f5f3-42f0-bda7-8753f80cd3da_540x.jpg?v=1639549180"
              title={"Adidas Climacool Ventania"}
              price={"14,500.00"}
            />
          </div>
          <div className="h-96 w-full flex justify-center items-center gap-10">
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_002c775e-0192-4e37-9462-66ea579eb6b0_1024x1024@2x.jpg?v=1622815802"
              title={"Adidas Alphabounce Beyond M"}
              price={"15,950.00"}
            />
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_2bd68d75-ef6d-4220-a11b-e5bbec2e46fd_540x.jpg?v=1634581148"
              title={"Adidas Alphabounce+ Shoes"}
              price={"12,500.00"}
            />
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_5e97440b-edc4-4343-9204-4177e813af45_1024x1024@2x.jpg?v=1639546008"
              title={"Vans Of The Wall Old Skool"}
              price={"14,500.00"}
            />
            <Card
              image="https://affinity.com.pk/cdn/shop/products/Adidas-Alphabounce-B_-Ly97JRxWJEZ0aQHmqo7_1024x1024@2x.jpg?v=1650062079"
              title={"Adidas Alphabounce Beyond M"}
              price={"15,950.00"}
            />
          </div>
          <div className="h-96 w-full flex justify-center items-center gap-10">
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_5ee9da22-85bf-474b-a963-05a26b74b0ce_1024x1024@2x.jpg?v=1639547741"
              title={"Converse Chuck Taylor All Star 70 HI"}
              price={"15,500.00"}
            />
            <Card
              image="https://affinity.com.pk/cdn/shop/files/Nike-Epic-React-Flyknit-Navy-AQ0067-402-03_w1024_h1024_pad__jpg_360x.webp?v=1694260444"
              title={"Nike Air Zoom Winflo 7"}
              price={"22,000.00"}
            />
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_e73dd59a-b3d8-492b-89a3-e8681759f472_540x.webp?v=1676406468"
              title={"Nike Air Zoom Pegasus 39"}
              price={"27,000.00"}
            />
            <Card
              image="https://affinity.com.pk/cdn/shop/products/image_52af8c9e-8c04-45b6-8b96-341301ff8edc_1024x1024@2x.jpg?v=1637658517"
              title={"Nike Zoom Pegasus Turbo Obsidian Mist"}
              price={"9,500.00"}
            />
          </div>
          <div className="h-20 w-full flex justify-center items-center gap-6">
            <button className="h-10 w-50 border border-solid border-black px-6 py-6 flex justify-center items-center">
              <BsArrowLeft />
            </button>
            <text>Page 1 of 12</text>
            <button className="h-10 w-50 border border-solid border-black px-6 py-6 flex justify-center items-center">
              <BsArrowRight />
            </button>
          </div>
    </div>
  )
}

export default CardData
