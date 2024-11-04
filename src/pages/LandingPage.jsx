import React from "react";
import Top from "../components/landing/Top";
import Middle from "../components/landing/Middle";
import Bottom from "../components/landing/Bottom";
import { Navigate, useParams } from "react-router-dom";
import { getItem } from "../utils/localStorage";

const LandingPage = () => {
  const isAuthenticated = getItem("isAuthenticated");
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const { page } = useParams();

  return (
    <div className="flex flex-col h-dvh bg-white overflow-hidden">
      <Top page={page} />
      <div className="flex-grow flex flex-col">
        <Middle page={page} />
        <Bottom page={page} />
      </div>
    </div>
  );
};

export default LandingPage;
