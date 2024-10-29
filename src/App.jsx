import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SigninPage from "./pages/SigninPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/landing-page/1" />,
    },
    {
      path: "/landing-page/:page",
      element: <LandingPage />,
    },
    {
      path: "/signin",
      element: <SigninPage />,
    },
    {
      path: "*",
      element: <Navigate to="/landing-page/1" />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
