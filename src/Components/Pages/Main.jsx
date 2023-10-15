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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    axios
      .get("https://ecommerce-backend-git-main-vaibhavsharma1998.vercel.app/api/v1/products")
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

        setIsLoading(false);
      })

      .catch((err) => {
        console.log("Error fetching the data:", err);
        setIsLoading(false);
      });
  }, []);


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
    <div>
      {isLoading ? (
        <h1 className="flex justify-center items-center text-5xl font-bold w-full h-[60vh]">
          Loading...
        </h1>
      ) : (
        <div className=" w-full  px-[10%]  ">
          {/* top main text start */}
          <div
            className="flex justify-center
       items-center flex-col
        text-gray-700 my-4 
        bg-cover bg-center h-64 opacity-80
       bg-[url('https://res.cloudinary.com/dzmicyc9d/image/upload/v1694716538/products/img/header-bg_lc3vkc.ng')]"
          >
            <p className="font-semibold sm:text-4xl  lg:pb-4 mt-32 text-2xl ">
              With an outstanding style, only for you
            </p>
            <p className="font-bold sm:text-7xl  mb-20 text-3xl">
              Exclusively designed for you
            </p>
          </div>
          {/* Top main text end */}

          {/* top For him and her  section start*/}
          <div className="flex  flex-col items-center relative md:flex-row">
            <div className="md:w-[50%] w-full">
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
          absolute md:left-[20%] md:top-[50%]
          hover:bg-gray-700 hover:text-white top-[25%] left-[30%]"
                onClick={() =>
                  navigate("/women")
                }
              >
                For Her
              </button>
            </div>

            <div className="md:w-[50%]  w-full relative">
              {products.map((product, index) =>
                product.name === "him" ? (
                  <img
                    key={index}
                    src={product.image}
                    alt={product.image}
                    className="h-[500px] w-[100%]"
                  />
                ) : null
              )}
              <button
                className="bg-white text-gray-700 
          py-2 px-8 absolute right-[28%] top-[50%]
          hover:bg-gray-700 hover:text-white"
                onClick={() => navigate("/men")}
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
          <div className="flex items-center flex-col md:flex-row">
            <div
              className="sm:w-[20%] w-full bg-[#dedede] 
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
                      alt={product.image}
                      className="h-[250px] cursor-pointer w-full"
                    />
                    <p className="text-xl ">{product.name}</p>
                    <p>
                      <s className="pl-[5px]  h-[250px]">
                        {`₹${product.price}`}
                      </s>
                      <span className="font-semibold text-xl "> ₹199</span>
                    </p>
                  </div>
                ) : null
              )}
            </div>
            <div
              className="md:w-[25%]   w-full  bg-[#dedede] 
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
                      alt={product.image}
                      className="h-[250px] cursor-pointer w-full"
                    />
                    <p className="text-xl">{product.name}</p>
                    <p>
                      <s className="pl-[5px]  h-[250px]">
                        {`₹${product.price}`}
                      </s>
                      <span className="font-bold text-xl"> ₹121</span>
                    </p>
                  </div>
                ) : null
              )}
            </div>
            <div className="md:w-[25%]   w-full bg-[#dedede] rounded-md p-2 cursor-pointer mt-5 mr-4">
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
                    <p className="text-xl">{product.name}</p>
                    <p>
                      <s className="pl-[5px]">{`₹${product.price}`}</s>
                      <span className="font-semibold text-xl"> ₹399</span>
                    </p>
                  </div>
                ) : null
              )}
            </div>

            <div className="md:w-[25%]   w-full   bg-[#dedede] rounded-md p-2 cursor-pointer mt-5 mr-4">
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
                    key={index}
                  >
                    <img
                      key={index}
                      src={product.image}
                      alt={product.image}
                      className="h-[250px] w-full cursor-pointer"
                    />
                    <p className="text-xl">{product.name}</p>
                    <p>
                      <s className="pl-[5px]">{`₹${product.price}`}</s>
                      <span className="font-semibold text-xl"> ₹329</span>
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
          <div className="flex items-center border-4 flex-col md:flex-row">
            <div className="flex md:w-[50%]  w-full h-[500px] ">
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
                  The best everyday option in a Super Saver range within a{" "}
                  <br />
                  reasonable price. It is our responsibility to keep you 100{" "}
                  <br />
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
            <div className="md:w-[50%] w-full relative">
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
                className="absolute    right-[30%] bottom-5
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
          <div className="flex items-center mt-[16px] flex-col md:flex-row">
            <div className=" md:w-[33%] w-full mr-[10px] relative">
              {products.map((product, index) =>
                product.name === "Vanity Bags" ? (
                  <img
                    key={index}
                    src={product.image}
                    alt={product.name}
                    className="w-[400px] h-[350px]"
                  />
                ) : null
              )}
              <button
                className="absolute left-32 bottom-5 md:left-16 lg:left-32
         text-white font-bold text-xl "
                onClick={() => navigate("/womenbagpacks", { state: womenBags })}
              >
                Vanity Bags <span className="text-">&#8594;</span>
              </button>
            </div>
            <div className="md:w-[33%] w-full  mr-[10px] relative ">
              {products.map((product, index) =>
                product.name === "Watch-1" && product.role === "women" ? (
                  <img
                    key={index}
                    src={product.image}
                    alt={product.name}
                    className="w-[400px] h-[350px] "
                  />
                ) : null
              )}
              <button
                className="absolute left-32 bottom-5 md:left-16 lg:left-32
          font-bold text-xl text-black"
                onClick={() =>
                  navigate("/womenwatches", { state: womenWatches })
                }
              >
                Watches <span className="">&#8594;</span>
              </button>
            </div>
            <div
              className="md:w-[33%] w-full mr-[10px] relative bg-gradient-to-b 
             from-[#212121] via-transparent to-transparent"
            >
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
                className="absolute left-32 bottom-5 md:left-16 lg:left-32
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
        my-16 font-bold md:text-4xl text-2xl"
            >
              Checkout New Arrivals
            </p>
          </div>
          {/* checkout new arrivals text ends   */}

          {/* checkout images start */}

          <div className="flex items-center flex-col md:flex-row">
            <div
              className="md:w-[25%] w-full bg-[#dedede] 
        rounded-md p-2 cursor-pointer mt-5 mr-4"
            >
              {products.map((product, index) =>
                product.name === "full body" ? (
                  <div onClick={() => navigate("/product", { state: product })}>
                    <img
                      key={index}
                      src={product.image}
                      alt={product.imagef}
                      className="w-full h-[320px]"
                    />
                    <h1 className="text-xl">{product.name}</h1>
                    <p className="text-xl font-semibold">{product.price}</p>
                  </div>
                ) : null
              )}
            </div>
            <div
              className="md:w-[25%] w-full bg-[#dedede] 
        rounded-md p-2 cursor-pointer mt-5 mr-4"
            >
              {products.map((product, index) =>
                product.name === "formal coat" ? (
                  <div onClick={() => navigate("/product", { state: product })}>
                    <img
                      key={index}
                      src={product.image}
                      alt={product.image}
                      className="w-full h-[320px]"
                    />
                    <h1 className="text-xl">{product.name}</h1>
                    <p className="text-xl font-semibold">{product.price}</p>
                  </div>
                ) : null
              )}
            </div>
            <div
              className="md:w-[25%] w-full   bg-[#dedede] 
        rounded-md p-2 cursor-pointer mt-5 mr-4"
            >
              {products.map((product, index) =>
                product.name === "Ocean blue" ? (
                  <div onClick={() => navigate("/product", { state: product })}>
                    <img
                      key={index}
                      src={product.image}
                      alt={product.image}
                      className="w-full h-[320px]"
                    />
                    <h1 className="text-xl">{product.name}</h1>
                    <p className="text-xl font-semibold">{product.price}</p>
                  </div>
                ) : null
              )}
            </div>
            <div
              className="md:w-[25%] w-full   bg-[#dedede] 
        rounded-md p-2 cursor-pointer mt-5 mr-4"
            >
              {products.map((product, index) =>
                product.name === "sweater" ? (
                  <div onClick={() => navigate("/product", { state: product })}>
                    <img
                      key={index}
                      src={product.image}
                      alt={product.image}
                      className="w-full h-[320px]"
                    />
                    <h1 className="text-xl">{product.name}</h1>
                    <p className="text-xl font-semibold">{product.price}</p>
                  </div>
                ) : null
              )}
            </div>
          </div>
          {/* checkout images end */}

          {/*  Shop By Category text start*/}
          <div className="flex justify-center items-center ">
            <p className="text-gray-700 my-16 font-bold md:text-4xl text-2xl">
              Shop By Category
            </p>
          </div>
          {/*  Shop By Category text end*/}

          {/* Shop By Category  Products starts */}
          <div className="flex items-center justify-center ">
            <div className="mb-10">
              <button
                className={`${
                  selectGender === "Women"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } mr-[30px] focus:bg-black focus:text-white
                 focus:py-[4px] focus:px-[8px] md:focus:py-[8px] md:focus:px-[16px]
                       focus:rounded foucs:font-semibold 
                       font-semibold py-[4px] px-[8px] rounded`}
                onClick={() => setSelectedGender("Women")}
              >
                For Women
              </button>
            </div>
            <div className="mb-10">
              <button
                className={`${
                  selectGender === "Men"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } mr-[30px] focus:bg-black focus:text-white focus:py-[2px] focus:px-[4px] 
          focus:rounded foucs:font-semibold font-semibold py-[2px] px-[4px] rounded justify-center items-cenetr flex`}
                onClick={() => setSelectedGender("Men")}
              >
                For Men
              </button>
            </div>
          </div>
          <div className="mb-10">
            <div className="flex items-center justify-center flex-col md:flex-row">
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
            </div>
            <div>
              <div className="flex items-center justify-center flex-col md:flex-row">
                {categoryData?.map((product, index) => (
                  <div
                    className=" bg-[#dedede] 
              rounded-md p-2 cursor-pointer mt-5 mr-4 md:w-[20%] w-[100%]"
                    onClick={() => {
                      navigate("/product", { state: product });
                    }}
                  >
                    <div key={index}>
                      <img
                        src={product.image}
                        className="w-full  h-60"
                        alt={product.image}
                      />
                      <p className="text-xl">{product.name}</p>
                      <p className="text-xl font-semibold">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*Shop By Category  Products Enda  */}
        </div>
      )}
    </div>
  );
};

export default Main;
