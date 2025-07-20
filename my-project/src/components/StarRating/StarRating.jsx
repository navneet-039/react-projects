import { FaStar } from "react-icons/fa";
import React, { useState } from "react";

export default function StarRating({ noofstars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex mx-auto flex-col items-center   gap-4 justify-center mb-[100px]">
     <div> <p className="text-4xl text-richblack-900">STAR RATING</p></div>
      <div className="flex flex-row">
         {[...Array(noofstars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            size={48}
            className={`p-2 cursor-pointer ${
              index <= (hover || rating) ? "text-yellow-500" : "text-gray-300"
            }`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
      </div>
     
    </div>
  );
}
