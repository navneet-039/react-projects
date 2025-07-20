import React, { useState, useEffect } from "react";
import {
  BiSolidLeftArrowCircle,
  BiSolidRightArrowCircle,
} from "react-icons/bi";

export default function ImageSlider({ url, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
      }
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [limit]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const handleClickDot=(index)=>{
    setCurrentSlide(index);
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="text-center mb-[20px] text-richblack-900 bold text-4xl">IMAGE SLIDER</div>
       <div className="w-[600px] h-[500px] flex mx-auto relative items-center justify-center bg-black rounded-sm mb-[200px]">
      
      <BiSolidLeftArrowCircle
        size={36}
        className="absolute left-0 text-white cursor-pointer"
        onClick={handlePrev}
      />

      {images.length > 0 && (
        <img
          src={images[currentSlide].download_url}
          alt={images[currentSlide].author}
          key={images[currentSlide].id}
          className="object-cover w-full h-full shadow-[0_4px_10px_rgba(233,233,89,0.9)] bottom-2bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 rounded-md"
        />
      )}

      <BiSolidRightArrowCircle
        size={36}
        className="absolute right-0 text-white cursor-pointer "
        onClick={handleNext}
      />
      <div className="absolute bottom-[10px] left-[50%] flex gap-2 translate-x-[-50%] mb-2">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            onClick={()=>{handleClickDot(index)}}
            className={`rounded-full w-[12px] h-[12px] cursor-pointer hover:scale-90 ${currentSlide===index ?"bg-richblack-25":" bg-richblack-600"}`}
          ></div>
        ))}
      </div>
    </div>
    </div>
   
  );
}
