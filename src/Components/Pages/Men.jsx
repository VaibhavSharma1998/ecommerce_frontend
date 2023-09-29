import React,{useState,useEffect} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Men = () => {
  const [womenProducts,setWomenProducts] = useState([])

 useEffect(()=>{
  axios.get('http://localhost:4000/api/v1/products/men')
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
      <h1 className="text-gray-700 font-bold text-4xl text-center">Men Products</h1>
      <div className="flex flex-wrap items-center flex-col sm:flex-row ">
        {womenProducts.map((items, index) => (
          <div className="md:w-[30%] w-[100%]  sm:w-[50%] m-4 bg-[#dedede] 
          rounded-md p-2 cursor-pointer mt-8"
          onClick={ () => navigate('/product',{state:items})} key={index}>
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

export default Men;

