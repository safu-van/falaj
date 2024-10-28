import React from "react";
import image1 from "../../assets/landing/1.jpg";
import image2 from "../../assets/landing/2.jpg";
import image3 from "../../assets/landing/3.jpg";

const Middle = ({ page }) => {
  let src;
  switch (page) {
    case "1":
      src = image1;
      break;
    case "2":
      src = image2;
      break;
    case "3":
      src = image3;
      break;
    default:
      src = image1;
  }

  return (
    <div className="flex-grow flex items-center justify-center">
      <img src={src} alt="image" className="w-96 h-96" />;
    </div>
  );
};

export default Middle;
