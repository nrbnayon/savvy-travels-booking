import { MapPin, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { GrMapLocation } from "react-icons/gr";

export default function RequestSummary() {
  const [currentPage, setCurrentPage] = useState(1);

  const properties = [
    {
      id: 1,
      name: "Lucky Star Hotel & Resort",
      location: "Downtown, Newyork",
      distance: "0.5 mi from Manhattan",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      roomType: "2 Double beds",
      rooms: 351,
      meetingRoom: 19,
      dates: "25 Sept, 2025 - 03 Oct, 2025",
      banquetHall: "12000 sq. ft",
      originalPrice: 114.5,
      discountedPrice: 94.5,
      savings: "X",
    },
    {
      id: 2,
      name: "Lucky Star Hotel & Resort",
      location: "Downtown, Newyork",
      distance: "0.5 mi from Manhattan",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      roomType: "2 Double beds",
      rooms: 351,
      meetingRoom: 19,
      dates: "25 Sept, 2025 - 03 Oct, 2025",
      banquetHall: "12000 sq. ft",
      originalPrice: 114.5,
      discountedPrice: 94.5,
      savings: "X",
    },
    {
      id: 3,
      name: "Lucky Star Hotel & Resort",
      location: "Downtown, Newyork",
      distance: "0.5 mi from Manhattan",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop",
      roomType: "2 Double beds",
      rooms: 351,
      meetingRoom: 19,
      dates: "25 Sept, 2025 - 03 Oct, 2025",
      banquetHall: "12000 sq. ft",
      originalPrice: 114.5,
      discountedPrice: 94.5,
      savings: "X",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="bg-white mb-8 sm:mb-10 text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1A1A1A] px-4 sm:px-6 py-3 sm:py-4 rounded-2xl lg:rounded-3xl  sm:shadow-sm">
          <h3>My Request Summary</h3>
        </div>
        <div className="bg-white rounded-2xl lg:rounded-3xl p-3 sm:p-6 ">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <span className="text-sm text-gray-700">
                Showing 15 Properties
              </span>
              <button className="flex items-center justify-between gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-sm hover:bg-gray-50 transition-colors w-full sm:w-auto min-w-[180px]">
                <span>Sort by Distance</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Property Cards */}
          <div className="space-y-4">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Image */}
                  <div className="w-full md:w-3/12 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-9/12 flex flex-col justify-between">
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {property.name}
                    </h2>

                    <div className="flex flex-col gap-0.5 mb-3">
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                        <MapPin size={12} className="flex-shrink-0" />
                        <span>{property.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                        <GrMapLocation size={12} />
                        <span>{property.distance}</span>
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="flex flex-wrap gap-x-6 gap-y-1 mb-3 text-xs sm:text-sm">
                      <div className="text-gray-700">
                        <span className="font-semibold">Room type:</span>{" "}
                        {property.roomType}
                      </div>
                      <div className="text-gray-700">
                        <span className="font-semibold">Number of rooms:</span>{" "}
                        {property.rooms}
                      </div>
                      <div className="text-gray-700">
                        <span className="font-semibold">Meeting room:</span>{" "}
                        {property.meetingRoom}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4 text-xs sm:text-sm">
                      <div className="text-gray-700">
                        <span className="font-semibold">Dates:</span>{" "}
                        {property.dates}
                      </div>
                      <div className="text-gray-700">
                        <span className="font-semibold">Banquet Hall:</span>{" "}
                        {property.banquetHall}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex flex-wrap items-baseline gap-2 mb-3">
                      <span className="text-gray-400 line-through text-sm">
                        ${property.originalPrice}
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-gray-900">
                        ${property.discountedPrice}
                      </span>
                      <span className="text-xs md:text-sm text-gray-600">
                        You are saving ${property.savings} per room/night.
                        That&apos;s a total savings of $Y!
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 flex-col sm:flex-row">
                      <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-lg transition-colors">
                        Accept
                      </button>
                      <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-2.5 rounded-lg border border-gray-300 transition-colors">
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8 pb-8 flex-wrap">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={currentPage === 1}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => setCurrentPage(1)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-colors ${
                currentPage === 1
                  ? "bg-blue-600 text-white"
                  : "border border-gray-300 hover:bg-gray-50"
              }`}
            >
              1
            </button>

            <button
              onClick={() => setCurrentPage(2)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-colors ${
                currentPage === 2
                  ? "bg-blue-600 text-white"
                  : "border border-gray-300 hover:bg-gray-50"
              }`}
            >
              2
            </button>

            <span className="px-2 text-gray-500">...</span>

            <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              9
            </button>

            <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              10
            </button>

            <button
              onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={currentPage === 10}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
