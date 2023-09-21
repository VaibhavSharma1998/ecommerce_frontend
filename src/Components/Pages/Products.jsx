import { useState, useEffect } from "react";
import React from "react";
// import Image from "../../assets/img/sharp-dress.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/products")
      .then((res) => {
        setItems(res.data.products);
        console.log(res.data);
        console.log(typeof items);
      })
      .catch((err) => {
        console.log("can-not get the data", err);
      });
  }, []);
  window.scrollTo(0,0)

  const navigate = useNavigate()
  return (
    <>
      <div className="w-full px-[10%]">
      <h1 className="text-gray-700 font-bold text-3xl text-center">All Products</h1>
        <div className="flex  flex-wrap justify-center w-full">
          {items.map((product, index) => (
            <div className="w-[30%] m-3 z-40 cursor-pointer" 
            onClick={() => navigate('/product',{state:product})}>
              <img
                key={index}
                src={product.image}
                alt=""
                className="w-full h-[400px] object-cover"
              />
              <p className="my-2 pl-2">{product.name}</p>
              <p className="my-2 pl-2">
                <s>{`₹ ${product.price}`}</s> ₹199
              </p>
            </div>
          ))}
         
        </div>
        
      </div>
    </>
  );
};

export default Products;
