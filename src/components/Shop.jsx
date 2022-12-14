import React from "react";
import Women from '../assets/Women.jpeg';


const Shop = () => {
    return (  
        <div className="max-w-[1440px] mx-auto">
            <div className="relative">
                <div className="absolute w-full h-full text-black-200 max-h-[500px] sm:inset-12 lg:inset-44 my-16">
                    <h4>OWN THE DAY</h4>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-3">TACHEN 19</h1>
                    <button className="bg-black text-white w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3">SHOP COLLECTION</button>
                </div>
                <img className="w-full max-h-[500px] object cover" src= {Women} alt="cannot load" />
            </div>
        </div>
    );
}
 
export default Shop;