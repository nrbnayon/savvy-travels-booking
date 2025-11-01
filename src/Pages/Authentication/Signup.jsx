import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/authImages/google.png";
import yahoo from "../../assets/authImages/yahoo.png";
import recaptcha from "../../assets/authImages/recaptcha.png";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithYahoo } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/auth/otp-verify");
    // Perform login API call here
  };

  // Google Sign Up Handler
  const handleGoogleSignUp = () => {
    // Handle Google Sign Up logic here
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

  // Yahoo Sign Up Handler
  const handleYahooSignUp = () => {
    // Handle Yahoo Sign Up logic here
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
      <h2 className="text-3xl font-medium mb-2 text-center md:text-left">
        Sign Up
      </h2>
      <p className="text-xs mb-6">Create your account & enjoy our services</p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email or phone */}
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
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <div>
            <input
              type="text"
              {...register("first_name", {
                required: "First name is required",
              })}
              placeholder="Enter your first name"
              className="w-full border border-base-300 rounded-md p-2 outline-none"
            />
          </div>
          {errors.first_name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.first_name.message}
            </p>
          )}
        </div>
        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <div>
            <input
              type="text"
              {...register("last_name", {
                required: "Last name is required",
              })}
              placeholder="Enter your last name"
              className="w-full border border-base-300 rounded-md p-2 outline-none"
            />
          </div>
          {errors.last_name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.last_name.message}
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
              placeholder="Enter Password"
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
        </div>
        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
              })}
              placeholder="Confirm Password"
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
        </div>
        {/* Recaptcha */}
        <div className="border border-base-300 rounded-md flex justify-between items-center p-4">
          <div className="relative">
            <input
              type="checkbox"
              {...register("checkbox", {
                required: "Password is required",
              })}
              placeholder="Confirm Password"
              className="w-full border border-base-300 rounded-md  "
            />
            <p className="absolute min-w-[110px] text-left -top-0.5 left-5 ">
              I&#39;m not a robot
            </p>
          </div>
          <figure className="w-10 h-10 ">
            <img
              src={recaptcha}
              alt="Recaptcha"
              className="w-full h-full object-cover"
            />
          </figure>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-[#7ED957] hover:shadow-lg transform duration-300 text-black font-medium py-2 rounded-md"
        >
          Sign Up
        </button>
      </form>

      {/* Divider */}
      <div className="divider">Or </div>
      {/* Social Login */}
      {/* Google Login Button */}
      <div className="flex justify-evenly items-center  *:p-5 *:flex *:items-center *:justify-center *:shadow-sm *:rounded-md">
        <button
          onClick={handleGoogleSignUp}
          className="  hover:bg-gray-100 *:transition-transform hover:*:duration-300 hover:*:scale-150"
        >
          <img src={google} alt="Google" className="w-6 h-6 object-cover" />
        </button>
        {/* Yahoo Login Button */}
        <button
          onClick={handleYahooSignUp}
          className="  hover:bg-gray-100 *:transition-transform hover:*:duration-300 hover:*:scale-150"
        >
          <img src={yahoo} alt="Yahoo" className="w-6 h-6 object-cover" />
        </button>
      </div>

      {/* Bottom Signup */}
      <p className="text-center text-sm mt-6">
        Already have an account?
        <Link to="/auth/signin" className="text-[#25D366] hover:underline">
          Sing In
        </Link>
      </p>
    </>
  );
};

export default Signup;
