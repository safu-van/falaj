import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SigninPage from "./pages/SigninPage";
import Home from "./layout/Home";
import Dashboard from "./pages/Dashboard";

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
      path: "/dashboard",
      element: <Home />,
      children: [
        {
          index: true,
          element: <Dashboard />
        }
      ]
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
  return (
    <div className="md:px-[35%] md:bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
