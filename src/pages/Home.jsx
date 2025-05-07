import React from "react";
import Nav from "../components/Nav";
import Categories from "../Category";

function Home() {
    return (
        <div className="bg-slate-200 min-h-screen">
           <Nav />
           <div className="flex flex-wrap justify-center items-center
           gap-5 w-[100%]">
           {Categories.map((item) => {
            return (
                <div key={item.id} className="w-[140px] h-[150px] bg-white
                flex flex-col items-start gap-5 p-5 justify-start
                text-xl font-semibold text-gray-700 rounded-lg shadow-xl">          
                {item.icon}
                {item.name}
                </div>
            );
            })}
           </div>
        </div>
    )
}
export default Home