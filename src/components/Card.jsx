import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
function Card({name,image,id,price,type}) {
    return (
        <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg
        flex flex-col gap-3 shadow-lg">
            <div className="w-full h-[60%] overflow-hidden rounded-lg">
                <img src={image} alt="" className="object-cover" />
            </div>
            <div className="text-2xl font-semibold">
                {name}
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="text-lg font-bold text-green-500">Rs {price}</div>
                    <div className="flex justify-center items-center 
                    gap-2 text-green-500 text-lg font-semibold">
                      {type==="veg"?<LuLeafyGreen /> : <GiChickenOven />}
                      <span>{type}</span>
                    </div>
            </div>
            <button className="w-full text-gray-700 bg-green-300
             hover:bg-green-400 text-lg p-2 rounded-lg
             transition-all">Add to dish</button>
        </div>
        
    )
}
export default Card;