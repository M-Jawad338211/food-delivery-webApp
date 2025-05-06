import React from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
function Nav() {
    return (
        <div className="w-full h-[100px] flex justify-between items-center px-8">
           <div className="w-[60px] h-[60px] bg-white flex justify-center items-center">
                <MdFastfood />
           </div>
           <form action="">
            <IoSearch />
            <input type="text" placeholder="Search your dish" />
           </form>
           <div className="w-[60px] h-[60px] bg-white flex justify-center items-center">
                <LuShoppingBag />
           </div>
        </div>
    )
}
export default Nav