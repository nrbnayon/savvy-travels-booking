import { Link } from "react-router-dom";
import verified from "../../assets/authImages/verified.png";
const AccountVerified = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <figure className="mb-4">
        <img src={verified} alt="Verified" />
      </figure>
      <h2 className=" font-bold text-2xl lg:text-4xl text-[#1A1A1A] text-center mb-2">
        OTP verification
      </h2>

      <p className="text-center text-sm text-gray-500 mb-6">
        You’re all set to use your account securely
      </p>

      <Link
        to="/auth/signin"
        className="w-full bg-[#7ED957] text-black text-center py-3 rounded-lg  textarea-lg"
      >
        Login
      </Link>
    </div>
  );
};

export default AccountVerified;
