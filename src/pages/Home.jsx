import React, {useContext} from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";

function Home() {
    let {cat, setCat,input,showCart,setShowCart}=useContext(dataContext);
  
function filterCategory(category){
    if(category==='All'){
        setCat(food_items)
    }else{
        let newList=food_items.filter((item)=>( item.food_category===category));
        setCat(newList)
    }
}
    return (
        <div className="bg-slate-200 min-h-screen">
           <Nav />
           {!input?
            <div className="flex flex-wrap justify-center items-center
           gap-5 w-[100%]">
           {Categories.map((item) => {
            return (
                <div key={item.id} className="w-[140px] h-[150px] bg-white
                flex flex-col items-start gap-5 p-5 justify-start
                text-xl font-semibold text-gray-700 rounded-lg shadow-xl
                hover:bg-green-200 cursor-pointer transition-all duration-200
                " onClick={()=>filterCategory(item.name)}>          
                {item.icon}
                {item.name}
                </div>
            );
            })}
           </div>:null}
          
            <div className="w-full flex flex-wrap gap-5
             px-5 py-8 justify-center items-center">
                {cat.map((item)=>(
                    <Card
                     name={item.food_name}
                     image={item.food_image}
                     price={item.price}
                     id={item.id}
                     type={item.food_type}
                    />
                ))}
            </div>
            <div className={`w-[40vw] h-[100%] fixed top-0 right-0
            bg-white shadow-xl p-6 transition-all duration-500 ${showCart?"translate-x-0":"translate-x-full"}`}>
                <header className="w-full flex justify-between items-center">
                    <span className="text-green-400 text-sm font-semibold ">Order Items</span>
                    <RxCross2 className="w-9 h-7 cursor-pointer text-green-400 hover:text-gray-600
                     text-xl font-semibold "
                     onClick={()=>setShowCart(false)} />
                </header>
                <Card2 />
            </div>
        </div>
    )
}
export default Home