import { Outlet } from "react-router-dom"; // Use 'react-router-dom' instead of 'react-router'
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow mt-[64px] sm:mt-[74px] bg-[#FBFEFA] mb-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
