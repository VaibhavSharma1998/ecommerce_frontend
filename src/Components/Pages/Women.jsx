import React,{useState,useEffect} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Women = () => {
  const [womenProducts,setWomenProducts] = useState([])

 useEffect(()=>{
  axios.get('https://ecommerce-backend-git-main-vaibhavsharma1998.vercel.app/api/v1/products/women')
  .then((res)=>{
    // console.log("women",res.data.products)
    setWomenProducts(res.data.products)
  }).catch((err)=>{
    console.log('Error',err.msg)
  })
 })


  const navigate = useNavigate()
  return (
    <div className="w-full px-[10%]">
      <h1 className="text-gray-700 font-bold sm:text-4xl  text-2xl text-center">Women Products</h1>
      <div className="flex flex-wrap flex-col justify-center md:flex-row">
        {womenProducts.map((items, index) => (
          <div className=" md:w-[40%] lg:w-[30%]  w-[100%]  m-4 bg-[#dedede] 
          rounded-md p-2 cursor-pointer mt-8"
          onClick={ () => navigate('/product',{state:items})}>
            <img
              key={index}
              src={items.image}
              alt={items.image}
              className="w-full h-96 cursor-pointer" 
              
            />
            <p className="mt-3 text-xl">{items.name}</p>
            <p className="text-xl font-semibold">
              {`₹${items.price}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
