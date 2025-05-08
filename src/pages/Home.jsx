import React from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";

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
                text-xl font-semibold text-gray-700 rounded-lg shadow-xl
                hover:bg-green-200 cursor-pointer transition-all duration-200">          
                {item.icon}
                {item.name}
                </div>
            );
            })}
           </div>
            <div className="w-full flex flex-wrap gap-5
             px-5 py-8 justify-center items-center">
                {food_items.map((item)=>(
                    <Card
                     name={item.food_name}
                     image={item.food_image}
                     price={item.price}
                     id={item.id}
                     type={item.food_type}
                    />
                ))}
            </div>
        </div>
    )
}
export default Home