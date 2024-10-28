import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Bottom = () => {
  return (
    <div className="m-3 flex-grow flex items-center justify-center">
      <div className="bg-[#024639] text-white p-5 rounded-3xl flex flex-col space-y-4">
        <span className="text-[#eaf0ee]">Farming made easy</span>
        <span className="text-gray-400">
          Let us help you get started on your journey to becoming a plant parent
          in very little time.
        </span>

        <div className="flex items-center h-full justify-between">
          <div className="flex space-x-1">
            <span className="border-b-green-400 border-b-4 w-7 rounded-sm" />
            <span className="border-b-green-600 border-b-4 w-3 rounded-sm" />
            <span className="border-b-green-600 border-b-4 w-3 rounded-sm" />
          </div>
          <div className="bg-green-600 rounded-full w-8 h-8 flex items-center justify-center">
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
