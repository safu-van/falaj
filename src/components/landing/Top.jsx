import React from "react";
import LanguageDropdown from "./LanguageDropdown";

const Top = ({ page }) => {
  return (
    <div className="flex mx-5 mt-5 items-center justify-between">
      <LanguageDropdown />
      {page < 3 && <span className="text-green-800 font-semibold">Skip</span>}
    </div>
  );
};

export default Top;
