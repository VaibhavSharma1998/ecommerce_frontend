import { useState } from "react";
// import Image from "../../assets/img/sharp-dress.png";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/reducers/cartReducer";

const Product = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const { state } = location;
  console.log("state:", state);
  const [isLoading, setIsLoading] = useState(false);

  // state.addToCart = true

  const updateData = async () => {
    setIsLoading(true);
    try {
      // url end point
      const apiUrl = `http://localhost:4000/api/v1/product/${state._id}`;
      // console.log("apiUrl:", apiUrl);

      // const updatedData ={
      //   state.addToCart =true,
      //
      // }
      // const updatedData = state.addToCart =true

      const updatedData = {
        addToCart: true,
      };

      const response = await axios.put(apiUrl, updatedData);
      console.log("Put response", response.data);
      // Dispatch the addToCart action with the product data
      dispatch(addToCart(state));

      setIsLoading(false);

      if (state) {
        const apiUrl = `http://localhost:4000/api/v1/product/${state._id}`;
        const updatedData = {
          addToCart: true,
        };

        const response = await axios.put(apiUrl, updatedData);
        console.log("Put response", response.data);
        setIsLoading(false);
      } else {
        // Handle the case where 'state' is undefined
        console.log("Error: 'state' is undefined");
        setIsLoading(false);
      }
    } catch (err) {
      console.log("Error", err.msg);
      setIsLoading(false);
    }
  };

  const addToCartHandler = () => {
    // Dispatch the addToCart action with the product data (state)
    dispatch(addToCart(state));
  };

  return (
    <>
      <div className="w-full px-[10%] mt-3">
        <div className="flex">
          <div className="w-1/2">
            <img
              src={state.image}
              alt={state.name}
              className="w-full h-[370px] object-center"
            />
          </div>
          <div className=" w-1/2">
            <div className="flex  flex-col  ml-10">
              <h1 className="font-bold text-3xl ">{state.name}</h1>
              <p className="mt-6">
                <span className="text-gray-400">Brand:</span>Calvin Klein
              </p>
              <p className="mt-6">
                <span className="text-gray-400">Rating:</span>⭐⭐⭐⭐⭐(
                {state.rating})
              </p>
              <p className="text-xl font-semibold">₹199</p>
              <p className="text-[8px]">Stock Available</p>
              <div>
                <button
                  className="mt-6 bg-gray-700 py-2 
                px-10 text-white rounded 
                hover:bg-black"
                  onClick={() => updateData()}
                  // onClick={addToCartHandler}
                >
                  {isLoading ? "loading..." : "Add to cart"}
                </button>
              </div>
              <p className="mt-10">
                <span className="text-gray-400">Category:</span>
                {state.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
