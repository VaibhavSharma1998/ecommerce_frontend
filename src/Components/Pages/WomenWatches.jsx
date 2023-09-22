import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const WomenWatches = () => {
  const location = useLocation();
  //    here we do object destructing to
  // acces the key name state which we retrieve/obtain from men componemt
  const { state } = location;

  // scroll to top
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  return (
    <div className="w-full px-[10%]">
      <h1 className="text-gray-700 font-bold text-4xl text-center">Watches</h1>
      <div className="flex flex-wrap">
        {state.map((items, index) => (
          <div
            className="w-[30%] m-4 bg-[#dedede] 
          rounded-md p-2 cursor-pointer mt-8"
            onClick={() => navigate("/product", { state: items })}
          >
            <img
              key={index}
              src={items.image}
              alt={items.image}
              className="w-full h-96"
            />
            <p className="mt-3 text-xl">{items.name}</p>
            <p className="text-xl font-semibold">
              {`₹${items.price}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenWatches;
