import React from "react";
import LanguageDropdown from "./LanguageDropdown";

const Top = () => {
  return (
    <div className="flex mx-5 mt-5 items-center justify-between">
      <LanguageDropdown />
      <span className="text-green-800 font-semibold">Skip</span>
    </div>
  );
};

export default Top;
