import React from "react";
import image1 from "../../assets/landing/1.jpg";
import image2 from "../../assets/landing/2.jpg";
import image3 from "../../assets/landing/3.jpg";

const Middle = ({ page }) => {
  const images = {
    1: image1,
    2: image2,
    3: image3,
  };

  const src = images[page] || image1;

  return (
    <div className="flex-grow flex items-center justify-center">
      <img
        src={src}
        alt="image"
        className="w-96 h-96 transition-opacity duration-300"
      />
    </div>
  );
};

export default Middle;
