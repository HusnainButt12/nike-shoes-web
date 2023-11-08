
const Card = ({image,title, price}) => {
  return (
    <div className="h-80 w-60 ">
        <div className="h-52 w-full ">
            
            <img src={image} alt="shoe"  className="h-full w-full"/>
        </div>
        <div className="h-16 w-full ">
            <text className="font-bold text-lg hover:underline cursor-pointer">{title}</text>
        </div>
        
        <div className="h-10 w-full ">
            <text className="font-bold">Rs.{price}</text>
        </div>
      
    </div>
  )
}

export default Card
