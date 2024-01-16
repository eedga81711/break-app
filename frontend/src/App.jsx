/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { Home, Login, User, Product, Order, Password, Finances } from "./pages";
import {
  AddProduct,
  AddUser,
  Card,
  Debt,
  EditProduct,
  EditUser,
  Footer,
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
} from "./components";

const App = () => {
  const Layout = () => {
    return (
      <div className="w-full h-screen font-poppins">
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
          path: "/home",
          element: <Home />,
          children: [
            {
              path: "/home/order",
              element: <Order />,
            },
            {
              path: "/home/user",
              element: <User />,
            },
            {
              path: "/home/product",
              element: <Product />,
            },
            {
              path: "/home/finances",
              element: <Finances />,
            },
            {
              path: "/home/notifications",
              element: <Notification />,
            },
            {
              path: "/home/user_settings",
              element: <UserSettings />,
            },
            {
              path: "/home/user_account",
              element: <UserAccount />,
            },
            {
              path: "/home",
              element: <OrderHistory />,
            },
          ],
        },
        {
          path: "/password",
          element: <Password />,
          children: [
            {
              path: "/password/set_password",
              element: <SetPassword />,
            },
            {
              path: "/password/reset_password",
              element: <ForgotPassword />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
