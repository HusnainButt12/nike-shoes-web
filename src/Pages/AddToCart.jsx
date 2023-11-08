import { useState } from "react"
import { BsArrowRight } from "react-icons/bs"

const AddToCart = () => {
  const [isOnPressed, setOnPressed] = useState(false)
  return (
    <div className="h-[80%] w-full flex justify-center items-center">

    <div className="h-[80%] w-[50%] flex flex-col justify-center items-center gap-8">
        <text className="font-extrabold text-5xl">Your cart</text>
        <text>Your cart is currently empty.</text>
        <button className="bg-black text-white p-2 flex flex-row gap-3 justify-center items-center hover:bg-gray-700 px-6" onClick={() => setOnPressed(!isOnPressed)}>
        {isOnPressed ? "CONTINUE SHOPPING ..." : "CONTINUE SHOPPING"}<BsArrowRight className="text-2xl"/>
          </button>
    </div>
    </div>
  )
}

export default AddToCart
