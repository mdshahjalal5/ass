import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import Errorpage from "../components/Errorpage";
import Doctors from "../components/Doctors";
import DoctorDetails from "../components/DoctorDetails";
import Booked from "../components/Booked";
import Blog from "../components/Blog";
import Login from "../pages/Login";
import RegisterPage from "../pages/Register";
import Nav from "../components/Nav";
import AuthLayout from "../Layout/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/my-bookings",
        element: <Booked />,
      },
      {
        path: "/doctor/:id",
        loader: () => fetch("data.json"),
        element: <DoctorDetails />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
    ],
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
]);
