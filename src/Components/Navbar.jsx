import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  // const [cartLength,setCartLenght] = useState(null)

  const [cartLength, setCartLenght] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/products")
      .then((res) => {
        // console.log("AllProducts",res.data.products)
        const value = res.data.products.filter(
          (items) => items.addToCart === true
        );
        console.log("Length:", value);
        setCartLenght(value.length);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, [cart]);

  console.log(cart, "cart cart");

  // scroll to top
  window.scroll(0, 0);

  const toggleMenu = () => {
    setShowMenu(!setShowMenu);
    console.log("cliked");
  };
  return (
    <div className="flex justify-between bg-white items-center w-full px-[10%] ">
      {/* Left side containing logo and links */}
      <div className="flex items-center p-8">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="cursor-pointer" />
        </Link>
        <Link
          to="/"
          className="text-gray-900 font-bold mx-4 hover:text-gray-400"
        >
          Majestic
        </Link>

        {/* Navigation Links */}
        <div
          className={`md:flex ${
            showMenu
              ? "block flex-col  md:space-x-4 transition-all duration-500 ease-in-out  h-10 w-full max-h-10 overflow-hidden"
              : "hidden max-h-0 overflow-hidden"
          } space-x-4`}
        >
          <Link
            to="/men"
            className="text-gray-900 font-bold hover:text-gray-400"
          >
            MEN
          </Link>
          <Link
            to="/women"
            className="text-gray-900 font-bold hover:text-gray-400"
          >
            WOMEN
          </Link>
          <Link
            to="/kids"
            className="text-gray-900 font-bold hover:text-gray-400"
          >
            KIDS
          </Link>
          <Link
            to="/collection"
            className="text-gray-900 font-bold hover:text-gray-400"
          >
            COLLECTION
          </Link>
          <Link
            to="/outlet"
            className="text-gray-900 font-bold hover:text-gray-400"
          >
            OUTLET
          </Link>
        </div>
      </div>

      {/* Right containing signup and cart */}
      <div className={`flex items-center p-8 justify-center `}>
        <Link
          to="/login"
          className="text-gray-900 bg-gray-100 
          font-bold mx-8 border px-8 py-1 rounded hover:bg-black 
           hover:text-white hidden md:block"
        >
          Login
        </Link>
        <Link
          to="/cart"
          className="text-gray-900 font-bold mx-8  hidden md:block"
        >
          <div className="flex cursor-pointer">
            <span className="mr-1 rounded-[100%] bg-red-400 text-white px-[6px]">
              {cartLength}
            </span>
            <span>Cart</span>
          </div>
        </Link>
      </div>
      {/* Mobile menu icon (visible on small screens) */}
      <div className="md:hidden">
        <GiHamburgerMenu
          size={25}
          onClick={toggleMenu}
          className="cursor-pointer flex-col  md:space-x-4 transition-all duration-500 ease-in-out  max-h-10 w-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
