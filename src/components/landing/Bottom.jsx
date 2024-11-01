import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Bottom = ({ page }) => {
  const navigate = useNavigate();

  const content = {
    1: {
      heading: "Farming made easy",
      description:
        "Let us help you get started on your journey to becoming a plant parent in very little time.",
    },
    2: {
      heading: "Harvesting becomes fun",
      description:
        "We have a team of experts to help keep the state of your farm healthy and diseases free.",
    },
    3: {
      heading: "Boost your yields",
      description:
        "Become a successful farmer and make your efforts to the market.",
    },
  };

  const { heading, description } = content[page] || content["1"];

  return (
    <div className="px-3 py-4 w-full flex-grow flex items-center justify-center">
      <div className="bg-[#024639] text-white p-6 rounded-3xl flex flex-col w-full max-w-m">
        <span className="text-[#eaf0ee] text-lg">{heading}</span>
        <span className="text-gray-400 text-md mt-4">{description}</span>

        <div className="flex items-center h-full justify-between mt-10">
          {page < 3 ? (
            <>
              <div className="flex space-x-1.5">
                <span
                  className={`${
                    page == 1
                      ? "w-7 border-b-green-400"
                      : "w-3 border-b-green-600"
                  } border-b-4 rounded-sm`}
                />
                <span
                  className={`${
                    page == 2
                      ? "w-7 border-b-green-400"
                      : "w-3 border-b-green-600"
                  } border-b-4 rounded-sm`}
                />
                <span className="border-b-green-600 border-b-4 w-3 rounded-sm" />
              </div>
              <div
                className="bg-green-600 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
                onClick={() => navigate(`/landing-page/${Number(page) + 1}`)}
              >
                <FaLongArrowAltRight />
              </div>
            </>
          ) : (
            <div
              className="bg-green-600 text-[#eaf0ee] w-full h-10 flex items-center justify-center rounded-xl cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              Get Started
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bottom;
