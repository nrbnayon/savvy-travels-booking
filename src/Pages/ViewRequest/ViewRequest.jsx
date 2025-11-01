import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cancelImage from "../../assets/hotelRequests/cancel.png";
import modifyImage from "../../assets/hotelRequests/modify.png";
import { CircleX } from "lucide-react";
import Toaster from "../../components/toaster/Toaster";

const ViewRequest = () => {
  const { request_id } = useParams();
  const [getDetails, setGetDetails] = useState([]);
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();
  // toaster message

  //   Fetch details from fake API
  useEffect(() => {
    axios
      .get("/fakeApi/mydetails.json")
      .then((res) => setGetDetails(res?.data?.data));
  }, []);
  const details = getDetails.filter((item) => item?.request_id === request_id);
  const detail = details[0];

  const handleCancel = () => {
    setOpenCancelModal(!openCancelModal);
  };

  const handleModify = () => {
    console.log("Modify clicked");
  };
  const handleSubmitCancellation = () => {
    setOpenCancelModal(!openCancelModal);
    setToast({ message: "Cancel Successful", type: "error" });
    navigate("/");
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-8 sm:py-10">
        {/* Header Section */}
        <div className="bg-white mb-8 sm:mb-10 text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1A1A1A] px-4 sm:px-6 py-3 sm:py-4 rounded-2xl lg:rounded-3xl shadow-sm">
          <h3>My Request Summary</h3>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl lg:rounded-3xl p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
          {/* Buttons */}
          <div className="flex flex-row lg:flex-col gap-3 sm:gap-4 lg:pr-6 lg:border-r border-[#CACACA]">
            <button
              onClick={handleCancel}
              className="flex justify-start items-center gap-3 border border-[#4A4A4A] py-2 sm:py-[14px] px-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-50 hover:shadow-md"
            >
              <img src={cancelImage} className="w-5 sm:w-6" alt="Cancel Icon" />
              Cancel Request
            </button>
            <button
              onClick={handleModify}
              className="flex justify-start items-center gap-3 border border-[#4A4A4A] py-2 sm:py-[14px] px-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-50 hover:shadow-md"
            >
              <img src={modifyImage} className="w-5 sm:w-6" alt="Modify Icon" />
              Modify Request
            </button>
          </div>

          {/* My details Content */}
          <div className="flex-1 space-y-5 sm:space-y-6 lg:pl-6">
            <h2 className="text-xl sm:text-2xl font-semibold">My Details</h2>
            <div className="flex-1 space-y-3">
              {[
                ["Request ID", detail?.request_id],
                ["Posted", detail?.posted],
                ["Event Name", detail?.event_name],
                ["Event Type", detail?.event_type],
                ["Destination", detail?.destination],
                ["Central Address", detail?.central_address],
                [
                  "Distance From Central Address",
                  detail?.distance_from_central,
                ],
                ["Stay", detail?.stay],
                ["Number of Rooms", detail?.number_of_rooms],
                ["Number of Guests", detail?.number_of_guests],
                ["Room Type", detail?.room_type],
                ["Budget Range (Per Night)", detail?.budget_range],
                ["Meeting Space", detail?.meeting_space_required],
                ["Additional Request", detail?.additional_request],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-[150px_1fr] lg:grid-cols-[200px_1fr] gap-x-3 sm:gap-x-6 items-start"
                >
                  <span className="text-sm sm:text-base font-medium text-gray-900">
                    {label}
                  </span>
                  {label === "Stay" ? (
                    <span className="text-sm sm:text-base text-gray-700 whitespace-pre-line">
                      {value?.check_in} to {value?.check_out} ({value?.nights}{" "}
                      nights)
                    </span>
                  ) : label.includes("Budget") ? (
                    <span className="text-sm sm:text-base text-gray-700">
                      ${value?.budget_min} - ${value?.budget_max}
                    </span>
                  ) : (
                    <span className="text-sm sm:text-base text-gray-700">
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* cancel modal */}
      {openCancelModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-50">
          <div className="relative bg-white rounded-2xl py-6 px-4 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 shadow-lg *:text-center min-w-[280px] max-w-[500px]">
            <h3 className="text-xl sm:text-2xl font-medium mb-2">
              Cancel This Request
            </h3>
            <p className="text-sm sm:text-base mb-6">
              You are cancelling your Hotel Request, offers will be lost
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 justify-center items-center text-sm sm:text-base md:text-lg font-medium">
              <button
                onClick={handleCancel}
                className="w-full sm:w-1/2 border py-2 sm:py-3 rounded-lg hover:bg-gray-50 hover:shadow-sm"
              >
                Go Back
              </button>
              <button
                onClick={handleSubmitCancellation}
                className="w-full sm:w-1/2 bg-[#7ED957] py-2 sm:py-3 rounded-lg hover:shadow-sm hover:text-white hover:bg-red-500"
              >
                Submit Cancellation
              </button>
            </div>

            <CircleX
              onClick={handleCancel}
              className="absolute top-3 right-3 hover:text-red-500 cursor-pointer"
            />
          </div>
        </div>
      )}
      {/* show toast */}
      {toast && (
        <Toaster
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default ViewRequest;
