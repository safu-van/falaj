import React from "react";
import { getItem } from "../../utils/localStorage";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = getItem("isAuthenticated");
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
