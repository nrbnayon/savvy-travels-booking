import { MapPin } from "lucide-react";

export default function Deals() {
  const hotels = Array(9).fill({
    name: "Lucky Star Hotel & Resort",
    location: "Downtown, Newyork",
    roomType: "2 Double",
    rooms: 351,
    originalPrice: 114.5,
    discountPrice: 94.5,
  });
  return (
    <div className="min-h-screen  py-5 sm:py-10 ">
      <div className="container p-6 mx-auto bg-[#FFFFFF] shadow rounded-3xl">
        <h1 className="text-2xl sm:text-3xl text-center sm:text-left font-bold text-gray-900 mb-8">
          Explore Unbeatable Deals on Group Bookings
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Cards */}
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow "
            >
              <div className="relative h-48  px-4 pt-4 pb-2 sm:p-0 ">
                <img
                  src={`https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop`}
                  alt="Hotel room"
                  className="w-full h-full object-cover rounded-lg sm:rounded-none"
                />
              </div>

              <div className=" px-4 pb-4 sm:p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {hotel.name}
                </h3>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{hotel.location}</span>
                </div>

                <div className="flex justify-between text-sm text-gray-700 mb-4">
                  <div>
                    <span className="text-gray-500">Room type:</span>{" "}
                    <span className="font-medium">{hotel.roomType}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Number of rooms:</span>{" "}
                    <span className="font-medium">{hotel.rooms}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 line-through text-sm">
                      ${hotel.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${hotel.discountPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-[#7ED957]  hover:bg-green-500 text-black font-semibold py-2.5 px-4 rounded-md transition-colors cursor-pointer">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
