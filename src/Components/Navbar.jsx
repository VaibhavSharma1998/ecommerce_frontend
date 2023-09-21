import React,{useState,useEffect} from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import axios from 'axios';

const Navbar = () => {
  // const [userData,setUserData] = useState(null)

  // useEffect(()=>{
  //   const storeData = localStorage.getItem('data')
  //   const parsedData = JSON.parse(storeData)
  //   console.log(parsedData);
  //   // setUserData(parsedData)
  //   // console.log(userData.user.name)
  // },[])

  const [cartLength,setCartLenght] = useState(null)

  useEffect(()=>{
    axios.get('http://localhost:4000/api/v1/products')
    .then((res)=>{
      // console.log("AllProducts",res.data.products)
      const value = res.data.products.filter((items) => items.addToCart === true)
      // console.log("Length:",length)
      setCartLenght(value.length)
    }).catch((err)=>{
      console.log("Error:",err)
    })
  },[cartLength])
  return (
    <navbar className="bg-white flex items-center">
      {/* Left side containing logo and links*/}
      <div className="flex items-center p-8">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className=" cursor-pointer ml-12 me-4" />
        </Link>

        <Link
          to="/men"
          className="text-gray-900 font-bold mx-4 hover:text-gray-400"
        >
          MEN
        </Link>
        <Link
          to="/women"
          className="text-gray-900 font-bold mx-4 hover:text-gray-400"
        >
          WOMEN
        </Link>
        <Link
          to="/kids"
          className="text-gray-900 font-bold mx-4 hover:text-gray-400"
        >
          KIDS
        </Link>
        <Link
          to="/collection"
          className="text-gray-900 font-bold mx-4 hover:text-gray-400"
        >
          COLLECTION
        </Link>
        <Link
          to="/outlet"
          className="text-gray-900 font-bold mx-4 hover:text-gray-400"
        >
          OUTLET
        </Link>
      </div>
      {/* Center conatining the searchbar */}
      <div className="flex items-center p-8 mx-12">
        <input
          type="search"
          name="Search for products,brands and more"
          placeholder="Search for products..."
          id=""
          className="bg-gray-100 text-black py-2 px-8 rounded-lg outline-none"
        />
      </div>

      {/* right containing signup and card */}
      <div className="flex items-center p-8 ">
        {/* {  userData ?(<span className='text-gray-900
      bg-gray-100 font-bold mx-8 px-8 py-1'> {userData.user.name.split(' ')[0]}</span>):( <Link to='/login'
       className='text-gray-900 bg-gray-100  
        font-bold mx-8 border px-8 py-1 rounded'> Login</Link>)} */}
        <Link
          to="/login"
          className="text-gray-900 bg-gray-100  
        font-bold mx-8 border px-8 py-1 rounded hover:bg-black hover:text-white"
        >
          {" "}
          Login
        </Link>
        <Link
          to="/cart"
          className="text-gray-900 font-bold mx-8 "
        >
         <div className="flex cursor-pointer">
          <span className="mr-1 rounded-[100%] bg-red-400
           text-white  px-[6px] ">{cartLength}</span> <span>Cart</span> </div>
        </Link>
      </div>
    </navbar>
  );
};

export default Navbar;
