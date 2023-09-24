import { useState, useEffect } from "react";
import React from "react";

const Outlet = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 3);
    }, 1000);
  }, []);

  const handleClick = () => setCount(count +1 )
  return (
    <div>
      <h1>Checking! {count}</h1>
      
      <button onClick={handleClick} className="py-2 px-4 text-white bg-black rounded">Add one </button>
    </div>
  );
};

export default Outlet;
