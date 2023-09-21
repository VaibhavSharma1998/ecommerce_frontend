import React,{useState} from 'react'



const Understand = () => {
     // note add selectgender as a variable in first
 const [selectGender, setSelectedGender] = useState("Women");
 const [selectCategory, setSelectedCategory] = useState("T-Shirt");

 const category = [
    "T_Shirt",
    "Shirt",
    "Shoes",
    "Watches",
    "Sunglasses",
    "Backpacks",
  ];

  const MenProducts = {
    T_Shirt: [
      { id: 1, name: "T-Shirt 1", image: Image },
      { id: 2, name: "T-Shirt 2", image: Image },
      { id: 3, name: "T-Shirt 3", image: Image },
      { id: 3, name: "T-Shirt 4", image: Image },
    ],
    Shirt: [
      { id: 1, name: "Shirt ", image: Image },
      { id: 2, name: "Shirt ", image: Image },
      { id: 3, name: "Shirt ", image: Image },
      { id: 3, name: "Shirt ", image: Image },
    ],
    Shoes: [
      { id: 1, name: "shoes 1", image: Image },
      { id: 2, name: "shoes 2", image: Image },
      { id: 3, name: "shoes 3", image: Image },
      { id: 3, name: "shoes 4", image: Image },
    ],
    Watches: [
      { id: 1, name: "watches 1", image: Image },
      { id: 2, name: "watches 2", image: Image },
      { id: 3, name: "watches 3", image: Image },
      { id: 3, name: "watches 4", image: Image },
    ],
    Sunglasses: [
      { id: 1, name: "sunglasses 1", image: Image },
      { id: 2, name: "sunglasses 2", image: Image },
      { id: 3, name: "sunglasses 3", image: Image },
      { id: 3, name: "sunglassesT-Shirt 4", image: Image },
    ],
    Backpacks: [
      { id: 1, name: "backpacks 1", image: Image },
      { id: 2, name: "backpacks 2", image: Image },
      { id: 3, name: "backpacks 3", image: Image },
      { id: 3, name: "backpacksT-Shirt 4", image: Image },
    ],
  };

  const WomenProducts = {
    tshirt: [
      { id: 1, name: "T-Shirt 1", image: Image },
      { id: 2, name: "T-Shirt 2", image: Image },
      { id: 3, name: "T-Shirt 3", image: Image },
      { id: 3, name: "T-Shirt 4", image: Image },
    ],
    shirt: [
      { id: 1, name: "Shirt ", image: Image },
      { id: 2, name: "Shirt ", image: Image },
      { id: 3, name: "Shirt ", image: Image },
      { id: 3, name: "Shirt ", image: Image },
    ],
    shoes: [
      { id: 1, name: "shoes 1", image: Image },
      { id: 2, name: "shoes 2", image: Image },
      { id: 3, name: "shoes 3", image: Image },
      { id: 3, name: "shoes 4", image: Image },
    ],
    watches: [
      { id: 1, name: "watches 1", image: Image },
      { id: 2, name: "watches 2", image: Image },
      { id: 3, name: "watches 3", image: Image },
      { id: 3, name: "watches 4", image: Image },
    ],
    sunglasses: [
      { id: 1, name: "sunglasses 1", image: Image },
      { id: 2, name: "sunglasses 2", image: Image },
      { id: 3, name: "sunglasses 3", image: Image },
      { id: 3, name: "sunglassesT-Shirt 4", image: Image },
    ],
    backpacks: [
      { id: 1, name: "backpacks 1", image: Image },
      { id: 2, name: "backpacks 2", image: Image },
      { id: 3, name: "backpacks 3", image: Image },
      { id: 3, name: "backpacksT-Shirt 4", image: Image },
    ],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className='w-full mx-[10%]'>
       {/* Shop By Category  Products starts */}
       <div className="flex items-center justify-center flex-col">
        <div className="mb-10">
          <button
            className="mr-8 focus:underline  focus:underline-offset-4 "
            // className="bg-black text-white mr-2"
            onClick={() => setSelectedGender("Women")}
          >
            For Women
          </button>
          <button
            className="mr-8 focus:underline focus:underline-offset-4
             bg-black text-white font-semibold py-2 px-4 rounded"
            // className="bg-black text-white"
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
            {MenProducts[`${selectCategory}`]?.map((product, idx) => (
              <>
                <div key={idx}>{product.name}</div>
                <img src={product.image} alt="" />
              </>
            ))}
          </div>
        </div>

        {/* /* Product list */}
        <div></div>
      </div>
      {/*Shop By Category  Products Enda  */}

    </div>
  )
}

export default Understand
