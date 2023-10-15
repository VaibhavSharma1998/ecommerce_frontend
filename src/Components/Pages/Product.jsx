import { useState } from "react";
// import Image from "../../assets/img/sharp-dress.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/reducers/cartReducer";
import { toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const { state } = location;
  console.log("Checkstate:", state);
  const [isLoading, setIsLoading] = useState(false);
  // const [isBtnClicked, setIsBtnClicked] = useState(false);

  // state.addToCart = true

  const handleUpdateData = async () => {
    setIsLoading(true);
    // setIsBtnClicked(true);
    navigate("/cart", { state: { price: state.price } });

    try {
      // url end point
      const apiUrl = `https://ecommerce-backend-git-main-vaibhavsharma1998.vercel.app/api/v1/product/${state._id}`;
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
        const apiUrl = `https://ecommerce-backend-git-main-vaibhavsharma1998.vercel.app/api/v1/product/${state._id}`;
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

  // const addToCartHandler = () => {
  //   // Dispatch the addToCart action with the product data (state)
  //   dispatch(addToCart(state));
  // };

  const navigate = useNavigate();

  return (
    <>
      <div className="w-full px-[10%] mt-3">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full">
            <img
              src={state.image}
              alt={state.name}
              className="w-full h-[370px] object-center rounded-3xl shadow-2xl p-10"
            />
          </div>
          <div className=" md:w-1/2 w-full mt-5">
            <div className="flex  flex-col  ml-10">
              <h1 className="font-bold text-3xl ">{state.name}</h1>
              <p className="mt-6">
                <span className="text-gray-400">Brand:</span>Calvin Klein
              </p>
              <p className="mt-6">
                <span className="text-gray-400">Rating:</span>⭐⭐⭐⭐⭐(
                {state.rating})
              </p>
              <p className="text-xl font-semibold">₹{state.price}</p>
              <p className="text-[8px]">Stock Available</p>
              <div className="flex flex-col md:flex-row">
                <button
                  //   className={
                  //     isBtnClicked === true
                  //       ? `mt-6 bg-gray-300 py-2
                  //   px-10 text-white rounded
                  //    mr-4 cursor-pointer`
                  //       : `mt-6 bg-gray-500 py-2
                  // px-10 text-white rounded
                  // hover:bg-gray-700 mr-4`
                  //   }

                  className="mt-6 bg-gray-500 py-2 
                  px-10 text-white rounded-3xl md:rounded
                  hover:bg-gray-700 mr-4"
                  onClick={() => {
                    handleUpdateData();

                    toast.success("Item Added!");
                  }}
                  // disabled={isBtnClicked}
                >
                  {isLoading ? "loading..." : "Add to cart"}
                  {/* {isBtnClicked ? "Go to Cart" : isLoading ? "Loading..." : "Add to Cart"} */}
                </button>

                <button
                  className="mt-6 bg-gray-900 py-2 
              px-10 text-white rounded-3xl  md:rounded 
              hover:bg-black mr-4"
                  // onClick={() =>
                  //   navigate("/payment", { state: `₹${state.price}` })
                  // }
                  onClick={() => {
                    handleUpdateData();

                    toast.success("Payment mode is not integrated yet!");
                  }}
                >
                  Buy Now
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
