import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItemFromCartAsync } from "./store/reducers/cartReducer";

const Cart = () => {
  console.log("Check console");
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/products")
      .then((res) => {
        console.log("cartTotalItems", res.data.products);

        const cartData = res.data.products.filter(
          (item) => item.addToCart === true
        );
        // setCartItems((previosCartItms)=> [cartData,...previosCartItms]);
        setCartItems(cartData)
        console.log("cartData:", cartData.length, cartData);
      })
      .catch((err) => {
        console.log("Error:", err.msg);
      });
  }, [cartItems]);
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
  }, [cartItems]);

  // Using the removeFromCart action
  const dispatch = useDispatch();
  const removeFromCartHandler = (_id) => {
    // Dispatch the async action to remove the item from the cart
    dispatch(removeItemFromCartAsync(_id));
  };

  console.log("cartItems:", cartItems.length, cartItems);

  // console.log("cartItems:", cartItems.length, cartItems);
  const navigate = useNavigate();

  return (
    <div className="flex w-full px-[10%] mt-5 relative">
      <div className="w-[75%]">
        {cartItems.map((items, index) => (
          <div className="flex " key={index}>
            <div className="w-[30%] mb-4 mr-20">
              <img
                key={index}
                src={items.image}
                alt={items.name}
                className="w-full h-[370px]"
              />
            </div>
            <div className=" w-[45%] mb-4 ">
              <div className="flex  flex-col  ml-10 w-full  justify-center">
                <h1 className="font-bold text-3xl ">{items.name}</h1>
                <p className="mt-6">
                  <span className="text-gray-400">Brand:</span>Calvin Klein
                </p>
                <p className="mt-6">
                  <span className="text-gray-400">Rating:</span>⭐⭐⭐⭐⭐(
                  {items.rating})
                </p>
                <p>
                  <s className="pl-[5px]  h-[250px]">{`₹${items.price}`}</s>
                  {"   "}
                  &nbsp;₹199
                </p>
                <p className="text-[8px]">Stock Available</p>
                <div>
                  <button
                    className="mt-6 bg-gray-500 py-2 
                  px-10 text-white rounded 
                  hover:bg-gray-700 mr-4"
                    // onClick={() => removeFromCart(items._id)}
                    onClick={() => removeFromCartHandler(items._id)}
                  >
                    Remove
                  </button>

                  <button
                    className="mt-6 bg-gray-900 py-2 
                  px-10 text-white rounded 
                  hover:bg-black mr-4"
                    onClick={() => navigate("/payment")}
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
      <div className="w-[25%] borde sticky top-10 h-20">
        <div className="flex flex-col w-full justify-center pl-5 ">
          <p className="mb-5  font-bold text-2xl text-gray-700">Price Details</p>
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
          <button className="py-4 px-10 text-white 
          bg-[#FB641B] hover:bg-[#C63D2F]" onClick={()=>navigate('/payment')}>Place Order</button>
        </div>
      </div>
       {/* Price Details section ends  */}
    </div>
  );
};

export default Cart;
