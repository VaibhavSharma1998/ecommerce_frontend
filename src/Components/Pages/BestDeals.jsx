import React from 'react'
import { useLocation } from 'react-router-dom'

const BestDeals = () => {
    const location = useLocation()
    const {state} = location
  return (
    <div>
      <div className="w-full px-[10%]">
      <div className="flex flex-wrap">
        {state.map((items, index) => (
          <div className="w-[30%] m-4 bg-[#dedede] rounded-md p-2 cursor-pointer">
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
    </div>
  )
}

export default BestDeals
