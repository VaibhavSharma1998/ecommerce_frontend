import React, { useState, useEffect } from "react";
import axios from "axios";

const Payment = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:4000/api/v1/products")
      .then((res) => {
        console.log("Data:", res.data);
        localStorage.setItem("apiData", JSON.stringify(res.data.products));
        setData(res.data.products);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  useEffect(() => {
    // localStorage.getItem("apiData")
    const storedData = localStorage.getItem("apiData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h1>Payment page yet to made</h1>
      <button
        onClick={getData}
        className="bg-black text-white py-2 px-4 mt-4 rounded"
      >
        Get Data{""}
      </button>
      <div>
        {data.map((product, index) => (
          <img src={product.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Payment;
