import { Eye, X, Edit, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

export default function HotelRequest() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(false);
        const res = await axios("/fakeApi/hotelrequests.json");
        setRequests(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 bg-white rounded-lg py-4 px-6 sm:px-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Hotel Requests
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome, example@gmail.com
            </p>
          </div>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2 self-start sm:self-auto">
            + Create new request
          </button>
        </div>

        {/* Request Cards */}
        <div className="space-y-6 bg-white shadow-md p-4 sm:p-6 rounded-3xl">
          {loading ? (
            <Loading />
          ) : requests?.length === 0 ? (
            <div className="text-center">No requests found</div>
          ) : (
            <>
              {requests?.map((request, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-[#CACACA] p-4 sm:p-6 lg:p-8"
                >
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                    {/* Left Column - Action Buttons */}
                    <div className="flex flex-row lg:flex-col flex-wrap gap-3 min-w-full lg:min-w-[200px]">
                      {[
                        {
                          link: `/view-request/${request?.request_id}`,
                          label: "View Request",
                          icon: <Eye size={18} className="text-gray-600" />,
                        },
                        {
                          link: "#",
                          label: "Cancel Request",
                          icon: <X size={18} className="text-gray-600" />,
                        },
                        {
                          link: "#",
                          label: "Modify Request",
                          icon: <Edit size={18} className="text-gray-600" />,
                        },
                      ].map((item) => (
                        <Link
                          key={item.label}
                          to={item.link}
                          className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-50 w-full lg:w-auto transition"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Right Column - Request Details */}
                    <div className="flex-1 space-y-3">
                      {[
                        ["Request ID", request?.request_id],
                        ["Event Name", request?.event_name],
                        ["Destination", request?.destination],
                        ["Rooms Per Night", request?.number_of_rooms],
                        ["Event Type", request?.event_type],
                        ["Stay", request?.stay],
                      ].map(([label, value], i) => (
                        <div
                          key={i}
                          className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-x-4 sm:gap-x-6 items-start"
                        >
                          <span className="text-sm font-medium text-gray-900">
                            {label}
                          </span>
                          {label === "Stay" ? (
                            <span className="text-sm text-gray-700 whitespace-pre-line">
                              {value?.check_in} to {value?.check_out} (
                              {value?.nights} nights)
                            </span>
                          ) : (
                            <span className="text-sm text-gray-700">
                              {value}
                            </span>
                          )}
                        </div>
                      ))}

                      {/* Hotel Bids */}
                      <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-x-4 sm:gap-x-6 items-start">
                        <span className="text-sm font-medium text-gray-900">
                          Hotel Bids
                        </span>
                        <span className="text-sm text-gray-700">
                          {request?.hotel_bids}
                          <Link
                            to={`/request-summary/${request?.request_id}`}
                            className="text-blue-600 hover:underline ml-2 sm:ml-4 block sm:inline"
                          >
                            See Hotel Responses
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Pagination */}
              <div className="flex flex-wrap justify-center items-center gap-1 mt-6">
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  <ChevronLeft size={16} className="text-gray-600" />
                </button>
                <button className="w-8 h-8 bg-blue-600 text-white text-sm rounded">
                  1
                </button>
                <button className="w-8 h-8 border border-gray-300 text-sm rounded hover:bg-gray-50">
                  2
                </button>
                <button className="w-8 h-8 border border-gray-300 text-sm rounded hover:bg-gray-50">
                  ...
                </button>
                <button className="w-8 h-8 border border-gray-300 text-sm rounded hover:bg-gray-50">
                  8
                </button>
                <button className="w-8 h-8 border border-gray-300 text-sm rounded hover:bg-gray-50">
                  9
                </button>
                <button className="w-8 h-8 border border-gray-300 text-sm rounded hover:bg-gray-50">
                  10
                </button>
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  <ChevronRight size={16} className="text-gray-600" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
