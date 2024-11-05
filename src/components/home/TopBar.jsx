import React, { useContext } from "react";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { setItem } from "../../utils/localStorage";
import { CropTypeContext } from "../../context/CropTypeContext";

const TopBar = () => {
  const navigate = useNavigate();
  const { cropType, setCropType } = useContext(CropTypeContext);

  const handleLogout = () => {
    setItem("isAuthenticated", false);
    navigate("/signin");
  };

  const handleSelectChange = (event) => {
    setCropType(event.target.value);
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-[#024639] flex items-center justify-between px-5 py-5 rounded-b-2xl z-10 md:mx-auto md:max-w-[30%]">
      <span className="text-gray-300 text-md">
        Hello, <span className="text-white font-semibold text-xl">Admin</span>
      </span>
      <div className="flex space-x-5">
        <select
          value={cropType}
          onChange={handleSelectChange}
          className="bg-[#024639] text-white  px-1 focus:outline-none text-center"
        >
          <option value="tomato">Tomato</option>
          <option value="watermelon">Watermelon</option>
        </select>

        <IoIosLogOut
          className="text-white text-2xl cursor-pointer"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default TopBar;
