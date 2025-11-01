import { createBrowserRouter } from "react-router";
import Signup from "../Pages/Authentication/Signup";
import SignIn from "../Pages/Authentication/SignIn";
import Main from "../Layouts/Main";
import Homepage from "../Pages/HomePage/Homepage";
import HotelRequest from "../Pages/HotelRequest/HotelRequest";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Faq from "../Pages/Faq/Faq";
import Dashboard from "../Layouts/Dashboard";
import AuthLayout from "../Layouts/AuthLayout";
import OtpVerify from "../Pages/Authentication/OtpVerify";
import AccountVerified from "../Pages/Authentication/AccountVerified";
import Deals from "../Pages/Deals/Deals";
import SavingsStrategy from "../Pages/SavingsStrategy/SavingsStrategy";
import ContactUs from "../Pages/CotactUs/ContactUs";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UserSettings from "../Pages/UserSettings/UserSettings";
import AddMoreDetails from "../Pages/AddMoreDetails/AddMoreDetails";
import ViewRequest from "../Pages/ViewRequest/ViewRequest";
import RequestSummary from "../Pages/RequestSummary/RequestSummary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/hotel-request",
        element: <HotelRequest />,
      },
      {
        path: "/view-request/:request_id",
        element: <ViewRequest />,
      },
      {
        path: "/request-summary/:request_id",
        element: <RequestSummary />,
      },
      {
        path: "/add-more-details",
        element: <AddMoreDetails />,
      },
      {
        path: "/deals",
        element: <Deals />,
      },
      {
        path: "/savings-strategy",
        element: <SavingsStrategy />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/user-settings",
        element: <UserSettings />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/signin",
        element: <SignIn />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
      {
        path: "/auth/otp-verify",
        element: <OtpVerify />,
      },
      {
        path: "/auth/account-verified",
        element: <AccountVerified />,
      },
    ],
  },
]);

export default router;
