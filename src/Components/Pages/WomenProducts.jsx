import React from "react";
// import axios  from 'axios'
import { useLocation, useNavigate } from "react-router-dom";

const WomenProducts = () => {
  const location = useLocation();
  //    here we do object destructing to
  // acces the key name state which we retrieve/obtain from men componemt
  // const [isLoading, setIsLoading] = useState(false);
  const { state } = location;
  const navigate = useNavigate();
 
  // scroll to top
  window.scrollTo(0, 0);
  return (
    <div className="w-full px-[10%]">
      <h1 className="text-gray-700 font-bold text-4xl text-center">
        Women Products
      </h1>
      <div className="flex flex-wrap justify-center">
        {state.map((items, index) => (
          <div className="w-[30%] m-4 bg-[#dedede] rounded-md p-2 cursor-pointer mt-8">
            <img
              key={index}
              src={items.image}
              alt={items.image}
              className="w-full h-96 cursor-pointer"
              // onClick={(product) => navigate('/product', { state: { productId: product._id } })}
              onClick={() => navigate("/product", { state: items })}
            />
            <p className="mt-3">{items.name}</p>
            <p className="pl-[5px]  ">{`₹${items.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenProducts;
