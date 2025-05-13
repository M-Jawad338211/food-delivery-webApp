import React from "react";
import image1 from "../assets/image1.avif"
function Card2() {
    return (
        <div className="w-full h-[120px] p-2 shadow-lg">
            <div className="w-[60%] h-full flex gap-5">
                <div className="w-[60%] h-full overflow-hidden rounded-lg">
                    <img src={image1} alt='' className="object-cover" />
                </div>
                <div className="w-[40%] h-full flex flex-col
                gap-5">
                    <div className="text-lg text-gray-600
                    font-semibold">Pancakes</div>
                    <div className="w-[110px] h-[50px] bg-slate-400 flex
                     rounded-lg overflow-hidden shadow-lg
                     border-2 border-green-400 font-semibold">
                        <button className="w-[30%] h-full bg-white
                        flex justify-center items-center
                        text-green-400">-</button>
                        <span className="w-[40%] h-full bg-slate-200
                        flex justify-center items-center
                        text-green-400">1</span>
                        <button className="w-[30%] h-full bg-white
                        flex justify-center items-center
                        text-green-400">+</button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
export default Card2;