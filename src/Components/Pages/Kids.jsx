import React,{useState} from "react";

const Kids = () => {
  const [car,setCar] = useState({
    name:"Range Rover",
    brand:"Land Rover",
    model:2023,
    color:"black"
  })
  const [color, setColor] = useState("black")
  const handleColor = () =>{
    setColor("white")
    // setCar(previousState => {
    //   const changeColor = previousState.color ==="black" ? "white" :"black"
    //   return {...previousState,color:changeColor}
    // })
    setCar((previosState)=>{
      const newColor = previosState.color === "balck" ?"white":"black"
      return {...previosState,color:newColor}
    })
  }
  console.log(car)
  return (
    <div>
     <p>The color of the car is <span className="text-2xl">{color }</span></p>
     <button onClick={handleColor} className="bg-black text-white py-2 px-4">Change Color</button>
     
    </div>
      //  const shoeData = res.data.products.filter((item) => (item.category === "shoes"))
      //  setShoe(shoeData)
  );
};

export default Kids;
