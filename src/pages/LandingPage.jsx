import React from "react";
import Top from "../components/landing/Top";
import Middle from "../components/landing/Middle";
import Bottom from "../components/landing/Bottom";
import { useParams } from "react-router-dom";

const LandingPage = () => {
  const { page } = useParams();

  return (
    <div className="flex flex-col h-screen">
      <Top page={page} />
      <div className="flex-grow flex flex-col">
        <Middle page={page} />
        <Bottom page={page} />
      </div>
    </div>
  );
};

export default LandingPage;
