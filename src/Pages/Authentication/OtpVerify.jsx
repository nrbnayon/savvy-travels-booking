import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // only numbers
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // auto-focus next input
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/auth/account-verified");
    // alert(`OTP entered: ${otp.join("")}`);
    // ✅ call your API here
  };

  return (
    <>
      <h2 className=" font-bold text-2xl lg:text-4xl text-[#1A1A1A] mb-2 text-left">
        OTP verification
      </h2>
      <p className="text-sm text-[#4F5B67] text-left mb-6">
        Code sent to{" "}
        <span className="font-medium text-[#25D366]">example@gmail.com</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between gap-3 ">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength="1"
              placeholder="_"
              className="w-15 h-15 bg-[#F7F7F7] text-center text-2xl font-semibold shadow-md rounded-xl focus:outline-none  placeholder:text-5xl placeholder:font-[100] "
            />
          ))}
        </div>

        <button
          type="submit"
          className="btn w-full bg-green-500 hover:bg-green-600 text-white rounded-xl"
          disabled={otp.includes("")}
        >
          Continue
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-4">
        Didn’t receive the OTP?{" "}
        <button
          type="button"
          className="text-green-600 font-medium hover:underline"
          onClick={() => alert("Resend OTP clicked")}
        >
          Click to resend
        </button>
      </p>
    </>
  );
};

export default OtpVerify;
