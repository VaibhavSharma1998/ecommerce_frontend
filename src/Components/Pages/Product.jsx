import React from "react";
import Image from "../../assets/img/sharp-dress.png";

const Product = () => {
  return (
    <>
      <div className="w-full px-[10%] mt-3">
        <div className="flex">
          <div className="  w-1/2">
            <img src={Image} alt={Image} className="w-full h-[370px]" />
          </div>
          <div className=" w-1/2">
            <div className="flex  flex-col  ml-10">
              <h1 className="font-bold text-3xl ">Men's Formal coat</h1>
              <p className="mt-6">
                <span className="text-gray-400">Brand:</span>Reymond
              </p>
              <p className="mt-6">
                <span className="text-gray-400">Rating:</span>⭐⭐⭐⭐⭐(50)
              </p>
              <p className="mt-6 font-semibold text-2xl text-gray-700">₹ 999</p>
              <p className="text-[8px]">Stock Available</p>
              <div>
                <button
                  className="mt-6 bg-gray-700 py-2 
                px-10 text-white rounded 
                hover:bg-black"
                >
                  Add to cart
                </button>
              </div>
              <p className="mt-10">
                <span className="text-gray-400">Sold By:</span>Reymond India
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
