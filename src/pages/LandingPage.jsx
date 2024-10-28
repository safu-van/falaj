import React from "react";
import Top from "../components/landing/Top";
import Middle from "../components/landing/Middle";
import Bottom from "../components/landing/Bottom";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Top />
      <div className="flex-grow flex flex-col">
        <Middle />
        <Bottom />
      </div>
    </div>
  );
};

export default LandingPage;
