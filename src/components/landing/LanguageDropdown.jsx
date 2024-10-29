import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import uaeFlag from "../../assets/flag/uae.png";
import ukFlag from "../../assets/flag/uk.png";
import germanFlag from "../../assets/flag/germany.png";
import check from "../../assets/flag/check.png";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    label: "EN",
    flag: ukFlag,
  });

  const languages = [
    { label: "EN", name: "English", flag: ukFlag },
    { label: "AR", name: "Arabic", flag: uaeFlag },
    { label: "DE", name: "Deutsch", flag: germanFlag },
  ];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <div
        className="flex items-center border border-gray-300 rounded-full p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={selectedLanguage.flag}
          alt={selectedLanguage.label}
          width={20}
          height={20}
        />
        <span className="text-sm font-medium ml-0.5 text-gray-700">
          {selectedLanguage.label}
        </span>
        <IoIosArrowDown className="ml-3" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 bg-white border border-gray-300 rounded-xl shadow-lg z-10 w-60 py-3">
          <ul className="space-y-1">
            {languages.map((language) => (
              <li
                key={language.label}
                className={`flex items-center p-2 pl-4 cursor-pointer ${
                  selectedLanguage.label === language.label &&
                  "bg-gradient-to-r from-[#d2f7dd] to-transparent border-l-2 border-green-500"
                }`}
                onClick={() => handleLanguageChange(language)}
              >
                <img
                  src={language.flag}
                  alt={language.name}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {language.name}
                {selectedLanguage.label === language.label && (
                  <img
                    src={check}
                    alt="Selected"
                    width={16}
                    height={16}
                    className="ml-auto mr-3"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
