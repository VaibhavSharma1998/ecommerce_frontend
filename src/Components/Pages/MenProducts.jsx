import React from "react";
import { useLocation } from "react-router-dom";

const MenProducts = () => {
  const location = useLocation();
  const { state } = location;
  // Scroll to the top of the page
  window.scrollTo(0, 0);
  return (
    <div className="w-full px-[10%] flex justify-center items-center bg-red-600">
      <h1 className="text-gray-700 font-bold text-4xl text-center">Men Products</h1>
      <div className=" w-full flex flex-wrap items-center">
        {state.map((items, index) => (
          <div className="w-[30%] m-4 bg-[#dedede] rounded-md p-2 cursor-pointer mt-8">
            <img
              key={index}
              src={items.image}
              alt={items.image}
              className="w-full h-96 object-cover"
            />
            <p className="mt-3">{items.name}</p>
            <p className="pl-[5px]">
              {`₹${items.price}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenProducts;
