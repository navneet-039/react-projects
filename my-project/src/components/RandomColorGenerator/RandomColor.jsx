import React, { useState } from "react";

const RandomColor = () => {
  const [hexcolor, setHexColor] = useState(false);
  const [rgbcolor, setRgbColor] = useState(false);
  const [bgColor, setBgcolor] = useState("#ffffff");

  const handleGenerateHexcolor = () => {
    setHexColor(true);
    setRgbColor(false);
   
    const chars = '0123456789abcdef';
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += chars[Math.floor(Math.random() * 16)];
    }
    setBgcolor(color);
    return color;
    
  };

  const handleGenerateRBGColor = () => {
    setRgbColor(true);
    setHexColor(false);
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    setBgcolor(color);
    return color;
   
  };

const handleRandomColor=()=>{
  if(hexcolor===true){
    let color=handleGenerateHexcolor();
    
    setBgcolor(color);
  }

  else{
    let color=handleGenerateRBGColor();
    setBgcolor(color);
  }


}

  return (
    <div style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "20px" }} className="mx-auto flex flex-col items-center mt-[100px] mb-[100px]">
      <div className="flex flex-row gap-4 ">
        <button onClick={handleGenerateHexcolor} className="rounded-md w-[200px] bg-richblack-900 h-[50px] text-richblack-25 border-b-2 border-richblack-600 hover:scale-90 transition-all duration-150">Create Hex Color</button>
        <button onClick={handleGenerateRBGColor}  className="rounded-md w-[200px] bg-richblack-900 h-[50px] text-richblack-25 border-b-2 border-richblack-600 hover:scale-90 transition-all duration-150">Create RGB Color</button>
        <button onClick={handleRandomColor}  className="rounded-md w-[200px] bg-richblack-900 h-[50px] text-richblack-25 border-b-2 border-richblack-600 hover:scale-90 transition-all duration-150">Create Random Color</button>
      </div>
      <div className="text-xl mt-[300px] flex flex-col  gap-12 ">
        {hexcolor ? (
          <div>
            <p className="text-4xl text-richblack-50">HEX COLOR</p>
            <p className="text-4xl text-richblack-50">{bgColor}</p>
          </div>
        ) : (
          <div>
            <p className="text-4xl text-richblack-50">RGB COLOR</p>
            <p className="text-4xl text-richblack-50">{bgColor}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomColor;
