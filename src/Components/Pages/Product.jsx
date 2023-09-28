import { useState } from "react";
// import Image from "../../assets/img/sharp-dress.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/reducers/cartReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const { state } = location;
  console.log("state:", state);
  const [isLoading, setIsLoading] = useState(false);

  // state.addToCart = true

  const handleUpdateData = async () => {
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

  // const addToCartHandler = () => {
  //   // Dispatch the addToCart action with the product data (state)
  //   dispatch(addToCart(state));
  // };

  const navigate = useNavigate();
  const notify = () =>
    toast.success(" Item Added!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

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
              <p className="text-xl font-semibold">₹{state.price}</p>
              <p className="text-[8px]">Stock Available</p>
              <div className="flex">
                <button
                  className="mt-6 bg-gray-500 py-2 
                px-10 text-white rounded 
                hover:bg-gray-700 mr-4"
                  onClick={() => {
                    handleUpdateData();
                    notify();
                  }}
                  // onClick={addToCartHandler}
                >
                  {isLoading ? "loading..." : "Add to cart"}
                </button>
                <ToastContainer
                  position="bottom-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
                <button
                  className="mt-6 bg-gray-900 py-2 
              px-10 text-white rounded 
              hover:bg-black mr-4"
                  onClick={() => navigate("/payment",{state:`₹${state.price}`})}
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
