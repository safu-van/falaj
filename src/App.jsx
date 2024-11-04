import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Home from "./layout/Home";
import LandingPage from "./pages/LandingPage";
import SigninPage from "./pages/SigninPage";
import Dashboard from "./pages/Dashboard";
import AddExpensePage from "./pages/AddExpensePage";
import NotificationPage from "./pages/NotificationPage";
import SettingsPage from "./pages/SettingsPage";
import { NotificationProvider } from "./context/NotificationContext";

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
          element: <AddExpensePage />,
        },
        {
          path: "notification",
          element: <NotificationPage />,
        },
        {
          path: "settings",
          element: <SettingsPage />,
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
    <NotificationProvider>
      <div className="md:px-[35%] md:bg-gray-100">
        <RouterProvider router={router} />
      </div>
    </NotificationProvider>
  );
};

export default App;
