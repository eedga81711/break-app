/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home, Login, User, Product, Order, Password, Finances } from "./pages";
import {
  AddProduct,
  AddUser,
  Debt,
  EditProduct,
  EditUser,
  ForgotPassword,
  Menu,
  Navbar,
  Notification,
  Orders,
  OrderHistory,
  SetPassword,
  UserList,
  UserSettings,
  UserAccount,
} from "./components/dashboardComponents";
import { UserApp } from "./components/userAppComponents";

const App = () => {
  const Layout = () => {
    return (
      <div className="w-full h-full font-poppins">
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/Admin/Dashboard",
          element: <Home />,
          children: [
            {
              path: "/Admin/Dashboard/order",
              element: <Order />,
            },
            {
              path: "/Admin/Dashboard/user",
              element: <User />,
            },
            {
              path: "/Admin/Dashboard/product",
              element: <Product />,
            },
            {
              path: "/Admin/Dashboard/finances",
              element: <Finances />,
            },
            {
              path: "/Admin/Dashboard/notifications",
              element: <Notification />,
            },
            {
              path: "/Admin/Dashboard/user_settings",
              element: <UserSettings />,
            },
            {
              path: "/Admin/Dashboard/user_account",
              element: <UserAccount />,
            },
            {
              path: "/Admin/Dashboard",
              element: <OrderHistory />,
            },
            {
              path: "/Admin/Dashboard/password",
              element: <Password />,
              children: [
                {
                  path: "/Admin/Dashboard/password/set_password",
                  element: <SetPassword />,
                },
                {
                  path: "/Admin/Dashboard/password/reset_password",
                  element: <ForgotPassword />,
                },
              ],
            },
          ],
        },
        {
          path: "/User/home",
          element: <UserApp />,
          children: [
            {
              path: "/User/home",
              element: <OrderHistory />,
            },
            {
              path: "/User/home/orders",
              element: <Orders />,
            },
            {
              path: "/User/home/password",
              element: <Password />,
              children: [
                {
                  path: "/User/home/password/set_password",
                  element: <SetPassword />,
                },
                {
                  path: "/User/home/password/reset_password",
                  element: <ForgotPassword />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
