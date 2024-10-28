import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import uaeFlag from "../../assets/flag/uae.png";

const LanguageDropdown = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-full p-2 cursor-pointer">
      <img src={uaeFlag} alt="Arabic" width={20} height={20} />
      <span className="text-sm font-medium ml-0.5 text-gray-700">AR</span>
      <IoIosArrowDown className="ml-3" />
    </div>
  );
};

export default LanguageDropdown;
