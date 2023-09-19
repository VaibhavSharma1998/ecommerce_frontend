import React from 'react'
import { useLocation } from "react-router-dom";

const WomenBagPacks = () => {
    const location = useLocation();
    //    here we do object destructing to
    // acces the key name state which we retrieve/obtain from men componemt
    const { state } = location;
  return (
    <div className="w-full px-[10%]">
      <div className="flex flex-wrap">
        {state.map((items, index) => (
          <div className="w-[47%] mr-8">
            <img
              key={index}
              src={items.image}
              alt={items.image}
              className="w-full h-96"
            />
            <p className="mt-3">{items.name}</p>
            <p>
              <s className="pl-[5px]  h-[250px]">{`₹${items.price}`}</s> ₹199
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WomenBagPacks
