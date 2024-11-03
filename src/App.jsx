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
import AddExpense from "./pages/AddExpense";
import ProtectedRoute from "./components/auth/ProtectedRoute";

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
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "add-expense",
          element: <AddExpense />,
        },
      ],
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
