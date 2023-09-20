import React from "react";
// import Image from "../../assets/img/sharp-dress.png";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const { state } = location;
  // console.log(selectedProduct);
  return (
    <>
      <div className="w-full px-[10%] mt-3">
        {state.map((items, index) => (
          <div className="flex" key={index}>
            <div className="w-1/2">
              <img
                src={items.image}
                alt={items.name}
                className="w-full h-[370px]"
              />
            </div>
            <div className=" w-1/2">
              <div className="flex  flex-col  ml-10">
                <h1 className="font-bold text-3xl ">{items.name}</h1>
                <p className="mt-6">
                  <span className="text-gray-400">Brand:</span>Calvin Klein
                </p>
                <p className="mt-6">
                  <span className="text-gray-400">Rating:</span>⭐⭐⭐⭐⭐(
                  {items.rating})
                </p>
                <p>
                  <s className="pl-[5px]  h-[250px]">{`₹${items.price}`}</s>{"   "}
                  &nbsp;₹199
                </p>
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
                  <span className="text-gray-400">Category:</span>{items.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
