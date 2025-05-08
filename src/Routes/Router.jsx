import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import Errorpage from "../components/Errorpage";
import Login from "../pages/Login";
import RegisterPage from "../pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import TermsAndConditions from "../pages/TermsCondintion";
import ServiceDetail from "../pages/ServiceDetails";
import ForgotPassword from "../pages/ForgotPassword";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";

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
        path: "/services/:id",
        loader: () => fetch("/data2.json"),
        element: <ServiceDetail />,
      },
      {
        path: "terms",
        Component: TermsAndConditions,
      },
      {
        path: "my-profile",
        Component: MyProfile,
      },
      {
        path: "update-profile",
        Component: UpdateProfile,
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
      {
        path: "forgot-password",
        Component: ForgotPassword,
      },
    ],
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
]);
