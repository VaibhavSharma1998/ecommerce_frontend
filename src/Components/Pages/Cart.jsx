import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCartAsync } from "./store/reducers/cartReducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;
  console.log("checkPrice", state);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Using the removeFromCart action
  const removeFromCartHandler = (_id) => {
    // Dispatch the async action to remove the item from the cart
    dispatch(removeItemFromCartAsync(_id));
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:4000/api/v1/products")
      .then((res) => {
        setCartItems(
          res.data.products.filter((item) => item.addToCart === true)
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err.msg);
        setIsLoading(false);
      });
  }, [cart]);
  // Note this point:

  // cartItems == add this inside the dependency array to remove the the items from cart

  // const removeFromCart = useEffect((_id) => {
  //   const ApiUrl = `http://localhost:4000/api/v1/product/${_id}`;
  //   axios
  //     .put(ApiUrl, {
  //       addToCart: true,
  //     })
  //     .then((res) => {
  //       console.log("Remove from cart:", res.data);
  //       // // Remove the item from the local cartItems state
  //       // setCartItems((prevCartItems) =>
  //       //   prevCartItems.filter((cartItem) => cartItem._id !== _id)
  //       // );
  //     })
  //     .catch((err) => {
  //       console.log("Error:", err.message);
  //     });
  // });

  // Function to remove an item from the cart

  // const removeFromCart = (_id) => {
  //   const ApiUrl = `http://localhost:4000/api/v1/product/${_id}`;
  //   axios
  //     .put(ApiUrl, {
  //       addToCart: false,
  //     })
  //     .then((res) => {
  //       console.log("Remove from cart:", res.data);
  //       // Remove the item from the local cartItems state using _id
  //       setCartItems((prevCartItems) =>
  //         prevCartItems.filter((cartItem) => cartItem._id !== _id)
  //       );
  //     })
  //     .catch((err) => {
  //       console.log("Error:", err.message);
  //     });
  // };

  useEffect(() => {
    const calculateSubTotal = (cartItems) => {
      let total = 0;
      for (const item of cartItems) {
        total += item.price;
      }
      return total;
    };

    const calculatedSubTotal = calculateSubTotal(cartItems);
    setSubTotal(calculatedSubTotal);
    console.log("Total Price:", calculatedSubTotal);
  }, [cartItems, subTotal]);

  const checkToken = () => {
    !!localStorage.getItem("token")
      ? navigate("/payment", { state: `₹${state.price}` })
      : navigate("/login");
  };

  return (
    <div className="flex w-full px-[10%] mt-5 relative">
      {cartItems.length ? (
        <div className="flex w-full  mt-5 relative flex-col md:flex-row">
          <div className="md:w-[75%] w-[100%]">
            {cartItems.map((items, index) => (
              <div className="flex " key={index}>
                <div className="md:w-[30%] w-full mb-4 md:mr-20 mr-4">
                  <img
                    key={index}
                    src={items.image}
                    alt={items.name}
                    className=" w-full h-[370px]"
                  />
                </div>
                <div className=" w-[45%] mb-4 ">
                  <div className="flex  flex-col  md:ml-10 w-full  justify-center">
                    <h1 className="font-bold text-3xl ">{items.name}</h1>
                    <p className="mt-6">
                      <span className="text-gray-400">Brand:</span>Calvin Klein
                    </p>
                    <p className="mt-6">
                      <span className="text-gray-400">Rating:</span>⭐⭐⭐⭐⭐(
                      {items.rating})
                    </p>
                    <p className="pl-[5px]">{`₹${items.price}`}</p>
                    <p className="text-[8px]">Stock Available</p>
                    <div>
                      <button
                        className="mt-6 bg-gray-500 md:py-2 
                           md:px-10 text-white rounded-3xl py-2 px-6  md:rounded
                           hover:bg-gray-700 mr-4"
                        // onClick={() => removeFromCart(items._id)}{ isLoading? "loading..." :items.rating}
                        onClick={() => {
                          removeFromCartHandler(items._id);
                          toast.error("Item Removed!");
                        }}
                      >
                        Remove
                      </button>

                      <button
                        className="mt-6 bg-gray-900 md:py-2 
                           md:px-10 text-white md:rounded py-2 px-6 rounded-3xl
                           hover:bg-black mr-4"
                        // onClick={() =>
                        //   navigate("/payment", { state: `₹${items.price}` })
                        // }
                        // onClick={()=> navigate("/login")}
                        onClick={checkToken}
                      >
                        Buy Now
                      </button>
                    </div>
                    <p className="mt-10">
                      <span className="text-gray-400">Category:</span>
                      {items.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Price Details section starts  */}

          <div className="md:w-[25%] borde sticky top-10 h-20 w-[100%]">
            <div className="flex flex-col w-full justify-center pl-5 ">
              <p className="mb-5  font-bold text-2xl text-gray-700 ml-10 md:ml-0">
                Price Details
              </p>
              <div className="flex mb-5">
                <p className="mr-14">{`Price (${cartItems.length}) items`}</p>
                <p> ₹{subTotal}</p>
              </div>

              <div className="flex mb-5">
                <p className="mr-10">Delivery Charges</p>
                <p>
                  <s className="mr-1">₹80</s>
                  <span>Free</span>
                </p>
              </div>
              <div className="flex mb-5">
                <p className="mr-14 font-bold text-1xl">Total Price</p>
                <p className="ml-8 font-bold text-1xl">₹{subTotal}</p>
              </div>
              <button
                className="py-4 px-10 text-white 
                   bg-[#FB641B] hover:bg-[#C63D2F] md:rounded rounded-3xl"
                onClick={() => navigate("/payment", { state: `₹${subTotal}` })}
              >
                Place Order
              </button>
            </div>
          </div>
          {/* Price Details section ends  */}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-[60vh] text-5xl font-semibold">
          {isLoading ? "Loading..." : "Your cart is empty!"}
        </div>
      )}
    </div>
  );
};

export default Cart;
