import { createContext, useState } from "react";

export const CropTypeContext = createContext();

export const CropTypeProvider = ({ children }) => {
  const [cropType, setCropType] = useState("tomato");

  return (
    <CropTypeContext.Provider value={{ cropType, setCropType }}>
      {children}
    </CropTypeContext.Provider>
  );
};
