import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/authImages/google.png";
// import outlook from "../../assets/authImages/outlook.png";
import yahoo from "../../assets/authImages/yahoo.png";
import useAuth from "../../hooks/useAuth";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

const SignIn = () => {
  // importing axios secure hook
  // const axiosSecure = useAxiosSecure();
  const { signInWithGoogle, signInWithYahoo } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  // console.log(user);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Perform login API call here
  };
  // Google Login
  const handleLoginWIthGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        if (result) {
          navigate("/");
          // const userInfo = {
          //   provider: "google",
          //   email: result.user?.email,
          //   full_name: result.user?.displayName,
          //   social_id: result.user?.uid,
          //   social_image_url: result.user?.photoURL,
          // };
          // try {
          //   axiosSecure
          //     .post("/api/auth/social-login", userInfo)
          //     .then(() => navigate("/"));
          // } catch (er) {
          //   console.log(er);
          // }
        } else alert("Something went wrong");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Yahoo Login
  const handleYahooLogin = () => {
    signInWithYahoo()
      .then((result) => {
        if (result) {
          navigate("/");
          // const userInfo = {
          //   provider: "google",
          //   email: result.user?.email,
          //   full_name: result.user?.displayName,
          //   social_id: result.user?.uid,
          //   social_image_url: result.user?.photoURL,
          // };
          // try {
          //   axiosSecure
          //     .post("/api/auth/social-login", userInfo)
          //     .then(() => navigate("/"));
          // } catch (er) {
          //   console.log(er);
          // }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2 className="text-3xl lg:text-4xl font-medium mb-2 text-center md:text-left ">
        Login & Explore
      </h2>
      <p className="text-xs mb-6 text-center md:text-left">
        Log into your account with your email, or create one below.
      </p>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email and phone */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email or phone number
          </label>
          <div className="relative">
            <input
              type="text"
              {...register("username", {
                required: "Username is required",
              })}
              placeholder="Email or phone number"
              className="w-full border border-base-300 rounded-md p-2 outline-none"
            />
            <FaUser className="absolute inset-y-3 right-3 flex items-center text-gray-500" />
          </div>
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>
        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
              })}
              placeholder="Enter your Password"
              className="w-full border border-base-300 rounded-md p-2 outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          {/* Remember me and forget password section */}
          <div className="flex justify-between items-center mt-2 text-sm">
            {/* Remember me */}
            <div className="flex items-center opacity-75 ">
              <input
                type="checkbox"
                defaultChecked
                {...register("remember")}
                className="mr-2 toggle  text-[8px]"
              />
              Remember me
            </div>
            <Link to="/auth/otp-verification" className="hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>
        {/* Login button */}
        <button
          type="submit"
          className="w-full bg-[#7ED957] hover:shadow-lg transform duration-300 text-black font-medium py-2 rounded-md"
        >
          Login
        </button>
      </form>
      {/* Divider */}
      <div className="divider text-center">Or </div>
      {/* Social Login */}
      <div className="flex justify-evenly items-center  *:p-5 *:flex *:items-center *:justify-center *:shadow-sm *:rounded-md">
        {/* Google Login Button */}
        <button
          onClick={handleLoginWIthGoogle}
          className="  hover:bg-gray-100 *:transition-transform hover:*:duration-300 hover:*:scale-150"
        >
          <img src={google} alt="Google" className="w-6 h-6 object-cover" />
        </button>
        {/* Yahoo Login Button*/}
        <button
          onClick={handleYahooLogin}
          className=" hover:bg-gray-100 *:transition-transform hover:*:duration-300 hover:*:scale-150"
        >
          <img src={yahoo} alt="Yahoo" className="w-6 h-6 object-cover" />
        </button>
      </div>

      {/* Bottom Signup */}
      <p className="text-center text-sm mt-6">
        Don’t have an account?{" "}
        <Link to="/auth/signup" className="text-[#25D366] hover:underline">
          Create an account
        </Link>
      </p>
    </>
  );
};

export default SignIn;
