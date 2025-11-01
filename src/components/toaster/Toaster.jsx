import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Toaster = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto close after 3 sec
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white 
        ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
    >
      {message}
    </div>
  );
};

export default Toaster;
