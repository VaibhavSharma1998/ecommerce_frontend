import React, { useState, useEffect } from "react";
// import Image from "../../assets/img/sharp-dress.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = () => {
  // step 1: create  a state variable

  // note add selectgender as a variable in first
  const [selectGender, setSelectedGender] = useState("Women");
  const [selectCategory, setSelectedCategory] = useState("t-shirt");
  const [categoryData, setCategoryData] = useState();

  // api useState

  const [products, setProducts] = useState([]);
  const [womenShoes, setWomenShoes] = useState([]);
  const [womenWatches, setWomenWatches] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [exclusiveProducts, setExclusiveProducts] = useState([]);
  const [womenBags, setWomenBags] = useState([]);

  // console.log('Women',WomenProducts)

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/products")
      .then((res) => {
        console.log("Data:", res.data);

        setProducts(res.data.products);
        // shoe category data fetching

        const shoeData = res.data.products.filter(
          (item) => item.category === "shoes" && item.role === "women"
        );
        setWomenShoes(shoeData);
        // console.log("shoeData:", shoeData);

        //  watches category data fetching
        const watchData = res.data.products.filter(
          (items) => items.category === "watches" && items.role === "women"
        );
        setWomenWatches(watchData);

        // women all products
        const womendata = res.data.products.filter(
          (items) => items.role === "women"
        );
        setWomenProducts(womendata);

        // men all products
        const mendata = res.data.products.filter(
          (items) => items.role === "men"
        );
        setMenProducts(mendata);

        // best deals all products
        const bestItems = res.data.products.filter(
          (items) => items.bestProducts === true
        );
        setBestProducts(bestItems);

        // exclusive product for women
        const exclusiveItems = res.data.products.filter(
          (items) => items.category === "general" && items.role === "women"
        );
        setExclusiveProducts(exclusiveItems);

        // bagpacks for women
        const bagpacksItems = res.data.products.filter(
          (items) => items.category === "bagpacks" && items.role === "women"
        );
        setWomenBags(bagpacksItems);
        // console.log("bagpacksItems:", bagpacksItems);

        // console.log(typeof products);
      })

      .catch((err) => {
        console.log("Error fetching the data:", err);
      });
  }, []);
  // products,womenShoes,womenWatches

  useEffect(() => {
    if (selectGender === "Women") {
      setCategoryData(
        womenProducts.filter((item) => item.category === selectCategory)
      );
    } else {
      setCategoryData(
        menProducts.filter((item) => item.category === selectCategory)
      );
    }
  }, [selectCategory, selectGender, womenProducts, menProducts]);

  const navigate = useNavigate();

  // this is to find the firstIndex of bestProducts

  // const firstIndex = products.findIndex((product) => product.bestProducts);

  const category = [
    "t-shirt",
    "shirt",
    "shoes",
    "watches",
    "sunglasses",
    "bagpacks",
  ];

  // console.log(categoryData, "categoryData");

  return (
    <div className=" w-full  px-[10%]">
      {/* top main text start */}
      <div
        className="flex justify-center
       items-center flex-col text-gray-700 my-4"
      >
        <p className="font-semibold text-4xl py-4">
          With an outstanding style, only for you
        </p>
        <p className="font-bold text-7xl py-4">Exclusively designed for you</p>
      </div>
      {/* Top main text end */}

      {/* top For him and her  section start*/}
      <div className="flex items-center relative">
        <div className="w-[50%] ">
          {products.map((product, index) =>
            product.name === "her" ? (
              <img
                key={index}
                src={product.image}
                alt={product.name}
                className="h-[500px] w-[100%]"
              />
            ) : null
          )}
          <button
            className="bg-white
           text-gray-700 py-2 px-8 
          absolute left-[20%] top-[50%]
          hover:bg-gray-700 hover:text-white"
            onClick={() => navigate("/womenproducts", { state: womenProducts })}
          >
            For Her
          </button>
        </div>

        <div className="w-[50%] relative">
          {products.map((product, index) =>
            product.name === "him" ? (
              <img
                key={index}
                src={product.image}
                alt={product.name}
                className="h-[500px] w-[100%]"
              />
            ) : null
          )}
          <button
            className="bg-white text-gray-700 
          py-2 px-8 absolute right-[28%] top-[50%]
          hover:bg-gray-700 hover:text-white"
            onClick={() => navigate("/menproducts", { state: menProducts })}
          >
            For Him
          </button>
        </div>
      </div>
      {/* top for him and her section end */}

      {/* Best deal text start */}
      <div className="flex justify-center items-center ">
        <p
          className="text-gray-700 my-16 font-bold 
        text-4xl"
        >
          Best Deals
        </p>
      </div>
      {/* Best deal text end */}

      {/* Best deal images start */}
      <div className="flex items-center ">
        <div
          className="w-[25%]   bg-[#dedede] 
        rounded-md p-2 cursor-pointer mt-5 mr-4"
        >
          {products.map((product, index) =>
            product.name === "Flat Hill Slingback" ? (
              <div
                onClick={() =>
                  navigate("/product", {
                    state: {
                      image: product.image,
                      name: product.name,
                      rating: product.name,
                      category: product.category,
                      price: product.price,
                      _id: product._id,
                      addToCart: product.addToCart,
                    },
                  })
                }
              >
                <img
                  key={index}
                  src={product.image}
                  alt={product.name}
                  className="h-[250px] cursor-pointer w-full"
                />
                <p>{product.name}</p>
                <p>
                  <s className="pl-[5px]  h-[250px]">{`₹${product.price}`}</s>
                  ₹199
                </p>
              </div>
            ) : null
          )}
        </div>
        <div
          className="w-[25%]   bg-[#dedede] 
        rounded-md p-2 cursor-pointer mt-5 mr-4"
        >
          {products.map((product, index) =>
            product.name === "blue ring" ? (
              <div
                onClick={() =>
                  navigate("/product", {
                    state: {
                      image: product.image,
                      name: product.name,
                      rating: product.name,
                      category: product.category,
                      price: product.price,
                      _id: product._id,
                      addToCart: product.addToCart,
                    },
                  })
                }
              >
                <img
                  key={index}
                  src={product.image}
                  alt={product.name}
                  className="h-[250px] cursor-pointer w-full"
                />
                <p>{product.name}</p>
                <p>
                  <s className="pl-[5px]  h-[250px]">{`₹${product.price}`}</s>
                  ₹199
                </p>
              </div>
            ) : null
          )}
        </div>
        <div className="w-[25%] bg-[#dedede] rounded-md p-2 cursor-pointer mt-5 mr-4">
          {products.map((product, index) =>
            product.name === "Brown Leathered Wallet" ? (
              <div
                onClick={() =>
                  navigate("/product", {
                    state: {
                      image: product.image,
                      name: product.name,
                      rating: product.name,
                      category: product.category,
                      price: product.price,
                      _id: product._id,
                      addToCart: product.addToCart,
                    },
                  })
                }
              >
                <img
                  key={index}
                  src={product.image}
                  alt={product.image}
                  className="h-[250px]  cursor-pointer w-full"
                />
                <p>{`${product.name}`}</p>
                <p>
                  <s className="pl-[5px]">{`₹${product.price}`}</s> ₹175
                </p>
              </div>
            ) : null
          )}
        </div>

        <div className="w-[25%]    bg-[#dedede] rounded-md p-2 cursor-pointer mt-5 mr-4">
          {products.map((product, index) =>
            product.name === "Sliverside Wristwatch" ? (
              <div
                onClick={() =>
                  navigate("/product", {
                    state: {
                      image: product.image,
                      name: product.name,
                      rating: product.name,
                      category: product.category,
                      price: product.price,
                      _id: product._id,
                      addToCart: product.addToCart,
                    },
                  })
                }
              >
                <img
                  key={index}
                  src={product.image}
                  alt={product.image}
                  className="h-[250px] w-full cursor-pointer"
                />
                <p>{product.name}</p>
                <p>
                  <s className="pl-[5px]">{`₹${product.price}`}</s> ₹175
                </p>
              </div>
            ) : null
          )}
        </div>
      </div>
      {/* Best deal images end */}

      {/* View All button start */}
      <div
        className="flex justify-center
       items-center my-[100px]"
      >
        <button
          className="text-white bg-gray-700 py-[4px] 
        px-[14px] font-semibold block hover:bg-black"
          onClick={() => navigate("/bestdeals", { state: bestProducts })}
        >
          View All
        </button>
      </div>
      {/* View All button ends  */}

      {/* Exclusive collection 2023 start */}
      <div className="flex items-center border-4">
        <div className="flex w-[50%] h-[500px] ">
          <div
            className="flex  justify-center 
          flex-col"
          >
            <p
              className="pl-[25px] pb-[15px] 
            text-start"
            >
              Exclusive collection 2023
            </p>
            <h2
              className="font-semibold 
            text-4xl pl-[25px] pb-[15px]"
            >
              Be exclusive
            </h2>
            <p className="pl-[25px] pb-[15px]">
              The best everyday option in a Super Saver range within a <br />
              reasonable price. It is our responsibility to keep you 100 <br />
              percent stylish. Be smart & , trendy with us.
            </p>
            <div className="ml-[15px]">
              <button
                className="bg-gray-700 
              text-white mx-[10px] inline py-[8px]
               px-[50px] hover:bg-black font-semibold "
                onClick={() => navigate("/products")}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] relative">
          {products.map((product, index) =>
            product.name === "Outfit" ? (
              <img
                key={index}
                src={product.image}
                alt={product.image}
                className="w-full  h-[500px]"
              />
            ) : null
          )}
          <button
            className="absolute right-64 bottom-5
         text-white font-bold text-xl"
            onClick={() =>
              navigate("/exclusiveproducts", { state: exclusiveProducts })
            }
          >
            Outfit <span className="text-">&#8594;</span>
          </button>
        </div>
      </div>
      {/* Exclusive collection 2023 end */}

      {/* vanity bag (3 photos ) starts*/}
      <div className="flex items-center mt-[16px] ">
        <div className="w-[33%] mr-[10px] relative">
          {products.map((product, index) =>
            product.name === "Vanity Bags" ? (
              <img
                key={index}
                src={product.image}
                alt={product.image}
                className="w-[400px] h-[350px]"
              />
            ) : null
          )}
          <button
            className="absolute left-32 bottom-5
         text-white font-bold text-xl"
            onClick={() => navigate("/womenbagpacks", { state: womenBags })}
          >
            Vanity Bags <span className="text-">&#8594;</span>
          </button>
        </div>
        <div className="w-[33%]  mr-[10px] relative">
          {products.map((product, index) =>
            product.name === "Watch-1" && product.role === "women" ? (
              <img
                key={index}
                src={product.image}
                alt={product.image}
                className="w-[400px] h-[350px] "
              />
            ) : null
          )}
          <button
            className="absolute left-32 bottom-5
          font-bold text-xl text-black"
            onClick={() => navigate("/womenwatches", { state: womenWatches })}
          >
            Watches <span className="">&#8594;</span>
          </button>
        </div>
        <div className="w-[33%]   mr-[10px] relative bg-gradient-to-b  from-[#212121] via-transparent to-transparent">
          {products.map((product, index) =>
            product.name === "High Heels" ? (
              <img
                key={index}
                src={product.image}
                alt={product.image}
                className="w-[400px] h-[350px] "
              />
            ) : null
          )}
          <button
            className="absolute right-32 bottom-5
          text-[#cc9797] font-extrabold text-xl"
            onClick={() => navigate("/womenshoes", { state: womenShoes })}
          >
            High Heels <span className="">&#8594;</span>
          </button>
        </div>
      </div>
      {/* vanity bag (3 photos ) ends*/}

      {/* checkout new arrivals text start */}
      <div className="flex justify-center items-center ">
        <p
          className="text-gray-700 
        my-16 font-bold text-4xl"
        >
          Checkout New Arrivals
        </p>
      </div>
      {/* checkout new arrivals text ends   */}

      {/* checkout images start */}

      <div className="flex items-center"> 
        <div className="w-[25%] bg-[#dedede] 
        rounded-md p-2 cursor-pointer mt-5 mr-4">
          {products.map((product, index) =>
            product.name === "full body" ? (
              <img
                key={index}
                src={product.image}
                alt={product.image}
                className="w-full h-[320px]"
                
              />
            ) : null
          )}
        </div>
        <div className="w-[25%] bg-[#dedede] 
        rounded-md p-2 cursor-pointer mt-5 mr-4">
          {products.map((product, index) => (
            
              product.name === "formal coat" ? (
              <img
                key={index}
                src={product.image}
                alt={product.image}
                className="w-full h-[320px]"
              />
              ) : null
           
          ))}
        </div>
        <div className="w-[25%]   bg-[#dedede] 
        rounded-md p-2 cursor-pointer mt-5 mr-4">
          {products.map((product, index) => (
          
              product.name === "Ocean blue" ? (
              <img
                key={index}
                src={product.image}
                alt={product.image}
                className="w-full h-[320px]"
              />
              ) : null
           
          ))}
        </div>
        <div className="w-[25%]   bg-[#dedede] 
        rounded-md p-2 cursor-pointer mt-5 mr-4">
          {products.map((product, index) => (
           
              product.name === "sweater" ? (
              <img
                key={index}
                src={product.image}
                alt={product.image}
                className="w-full h-[320px]"
              />
              ) : null
           
          ))}
        </div>
      </div>
      {/* checkout images end */}

      {/*  Shop By Category text start*/}
      <div className="flex justify-center items-center ">
        <p className="text-gray-700 my-16 font-bold text-4xl">
          Shop By Category
        </p>
      </div>
      {/*  Shop By Category text end*/}

      {/* Shop By Category  Products starts */}
      <div className="flex items-center justify-center flex-col">
        <div className="mb-10">
          <button
            className={`${
              selectGender === "Women"
                ? "bg-black text-white"
                : "bg-white text-black"
            } mr-[30px] focus:bg-black focus:text-white focus:py-[8px] focus:px-[16px] 
          focus:rounded foucs:font-semibold font-semibold py-[8px] px-[16px] rounded`}
            onClick={() => setSelectedGender("Women")}
          >
            For Women
          </button>
          <button
            className={`${
              selectGender === "Men"
                ? "bg-black text-white"
                : "bg-white text-black"
            } mr-[30px] focus:bg-black focus:text-white focus:py-[8px] focus:px-[16px] 
          focus:rounded foucs:font-semibold font-semibold py-[8px] px-[16px] rounded`}
            onClick={() => setSelectedGender("Men")}
          >
            For Men
          </button>
        </div>
        <div className="">
          {category.map((item, index) => (
            <button
              key={index}
              className={`${
                selectCategory === item
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } mr-[30px] focus:bg-black focus:text-white focus:py-[8px] focus:px-[16px] 
            focus:rounded foucs:font-semibold font-semibold py-[8px] px-[16px] rounded`}
              onClick={() => setSelectedCategory(item)}
            >
              {item}
            </button>
          ))}
          <div>
            {categoryData?.map((product, idx) => (
              <div className="flex">
                <div key={idx}>{product.name}</div>
                <img src={product.image} className="w-20 h-20" alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* /* Product list */}
        <div></div>
      </div>
      {/*Shop By Category  Products Enda  */}
    </div>
  );
};

export default Main;
