import React, { useState } from "react";

function Cardfood() {
  const [image, setImage] = useState(0);
  const totalImages = 3; 
  const [direction, setDirection] = useState("right");

  const NextCard = () => {
    setDirection("right");
    setImage((prev) => (prev + 1) % totalImages); 
  };

  const PrevCard = () => {
    setDirection("left");
    setImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className={`flex transition-transform duration-700 ease-in-out`}
        style={{
          transform: `translateX(-${image * 100}%)`,
        }}
      >
        {[...Array(totalImages)].map((_, index) => (
          <img
            key={index}
            className="w-full h-full object-cover"
            src={`/IMAGES/${index}.png`}
            alt={`Image ${index}`}
          />
        ))}
      </div>
      <button
        onClick={PrevCard}
        className="absolute top-1/2 left-1 transform -translate-y-1/2 rounded-full text-black bg-gray-200 hover:bg-black hover:text-white p-2"
      >
        {"<"}
      </button>
      <button
        onClick={NextCard}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full text-black bg-gray-200 hover:bg-black hover:text-white p-2"
      >
        {">"}
      </button>
    </div>
  );
}

export default Cardfood;
