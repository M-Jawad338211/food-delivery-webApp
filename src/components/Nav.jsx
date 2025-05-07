import React from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
function Nav() {
    return (
        <div className="w-full h-[100px] flex justify-between items-center px-8">
           <div className="w-[60px] h-[60px] bg-white flex justify-center items-center
           rounded-md shadow-xl">
                <MdFastfood className="size-7 text-green-500" />
           </div>
           <form className="w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md">
            <IoSearch className="text-green-500 size-5"/>
            <input type="text" placeholder="Search your dish" className="w-full outline-none text-xl" />
           </form>
           <div className="w-[60px] h-[60px] bg-white flex justify-center items-center
           rounded-md shadow-md relative">
                    <span className="absolute top-0 right-2 text-green-500 font-bold">0</span>
                <LuShoppingBag className="size-7 text-green-500"/>
           </div>
        </div>
    )
}
export default Nav