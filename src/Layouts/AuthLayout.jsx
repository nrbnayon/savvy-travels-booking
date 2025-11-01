import { Outlet } from "react-router-dom";
import authImage from "../assets/images/authImage.jpg";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const AuthLayout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="grid grid-cols-1 lg:grid-cols-8 min-h-screen bg-base-200">
        {/* Left Side */}
        <div
          className="hidden col-span-3 lg:block items-center bg-cover bg-center bg-no-repeat p-8 relative"
          style={{ backgroundImage: `url(${authImage})` }}
        >
          <div className=" flex flex-col justify-start  ">
            <div className="absolute inset-0 bg-black/50"></div>
            <h2 className="text-white text-4xl font-medium leading-relaxed relative z-10 text-center mt-16">
              Book your Hotel
            </h2>
            <p className="text-white text-sm text-center relative z-10">
              More than 50,000 hotels nationwide
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="lg:col-span-5 flex items-center justify-center  ">
          <div className="max-w-md w-full mx-3 md:mx-0 bg-white rounded-xl md:rounded-3xl  shadow-md p-5 md:p-10 motion-translate-x-in-[0%] motion-translate-y-in-[8%]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
