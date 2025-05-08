import React from "react";
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
function Card() {
    return (
        <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg
        flex flex-col gap-3 shadow-lg">
            <div className="w-full h-[60%] overflow-hidden rounded-lg">
                <img src={image1} alt="" className="object-cover" />
            </div>
            <div className="text-2xl font-semibold">
                Pancakes
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="text-lg font-bold text-green-500">Rs 299</div>
                    <div className="flex justify-center items-center 
                    gap-2 text-green-500 text-lg font-bold">
                      <LuLeafyGreen />
                      <span>Veg</span>
                    </div>
            </div>
            <button className="w-full text-gray-700 bg-green-300
             hover:bg-green-400 text-lg p-2 rounded-lg
             transition-all">Add to dish</button>
        </div>
        
    )
}
export default Card;