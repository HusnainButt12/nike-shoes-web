import { BsSearch } from "react-icons/bs"

const SearchBar = () => {
  return (
    <div className="h-[40%] w-full ">
        <div className="h-32 w-full flex justify-center items-center">
          <text className="font-extrabold text-5xl ">Search Bar</text>
        </div>
<div className="flex justify-center flex-row items-center gap-3">
            <input
              className="border-2 p-2 border-gray-200 bg-white"
              type="email"
              id="email"
              pattern=".+@globex\.com"
              size="50"
              required
            />
            <BsSearch className="text-3xl hover:text-gray-500 cursor-pointer"/>
</div>
            
          </div>
      
  )
}

export default SearchBar
