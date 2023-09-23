import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/products")
      .then((res) => {
        console.log("cartTotalItems", res.data.products);

        const cartData = res.data.products.filter(
          (item) => item.addToCart === true
        );
        setCartItems(cartData);
        console.log("cartData:", cartData.length, cartData);
      })
      .catch((err) => {
        console.log("Error:", err.msg);
      });
  }, []);

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
  const removeFromCart = (_id) => {
    const ApiUrl = `http://localhost:4000/api/v1/product/${_id}`;
    axios
      .put(ApiUrl, {
        addToCart: false,
      })
      .then((res) => {
        console.log("Remove from cart:", res.data);
        // Remove the item from the local cartItems state using _id
        setCartItems((prevCartItems) =>
          prevCartItems.filter((cartItem) => cartItem._id !== _id)
        );
      })
      .catch((err) => {
        console.log("Error:", err.message);
      });
  };

  console.log("cartItems:", cartItems.length, cartItems);
  const navigate = useNavigate();

  return (
    <div className="w-full px-[10%] ">
      {cartItems.map((items, index) => (
        <div className="flex">
          <div className="w-[60%] mb-4">
            <img
              key={index}
              src={items.image}
              alt={items.name}
              className="w-full h-[370px]"
            />
          </div>
          <div className=" w-[40%] mb-4">
            <div className="flex  flex-col  ml-10">
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
                  className="mt-6 bg-gray-700 py-2 
              px-10 text-white rounded 
              hover:bg-black mr-4"
                  onClick={() => navigate("/payment")}
                >
                  Buy Now
                </button>

                <button
                  className="mt-6 bg-gray-700 py-2 
              px-10 text-white rounded 
              hover:bg-black"
                  onClick={() => removeFromCart(items._id)}
                >
                  Remove
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
      <p>vaibhav </p>
    </div>
  );
};

export default Cart;
