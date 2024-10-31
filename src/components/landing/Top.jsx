import React from "react";
import LanguageDropdown from "./LanguageDropdown";
import { useNavigate } from "react-router-dom";

const Top = ({ page }) => {
  const navigate = useNavigate();

  return (
    <div className="flex mx-5 mt-5 items-center justify-between">
      <LanguageDropdown />
      {page < 3 && (
        <span
          className="text-green-800 font-semibold cursor-pointer"
          onClick={() => navigate("/signin")}
        >
          Skip
        </span>
      )}
    </div>
  );
};

export default Top;
