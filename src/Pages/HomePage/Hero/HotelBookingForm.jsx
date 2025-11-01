import { useState } from "react";
import {
  MapPin,
  Users,
  Calendar,
  Bed,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HotelBookingForm() {
  const [destination, setDestination] = useState("");
  const [centralAddress, setCentralAddress] = useState("");
  const [distanceRange, setDistanceRange] = useState("2-3 mi");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState(9);
  const [groupSize, setGroupSize] = useState(9);
  const [groupType, setGroupType] = useState("Birthday party group");

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Destination */}
        <div className="border border-gray-300 rounded-lg px-4 py-3">
          <label className="block text-[16px] font-medium text-gray-600 mb-2">
            Destination
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <MapPin className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="I want to go..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-6 text-[16px] outline-none placeholder-gray-400"
            />
          </div>
        </div>

        {/* Central Address */}
        <div className="border border-gray-300 rounded-lg px-4 py-3">
          <label className="block text-[16px] font-medium text-gray-600 mb-2">
            Central Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <MapPin className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Enter central address"
              value={centralAddress}
              onChange={(e) => setCentralAddress(e.target.value)}
              className="w-full pl-6 text-[16px] outline-none placeholder-gray-400"
            />
          </div>
        </div>

        {/* Distance from Central Address */}
        <div className="border border-gray-300 rounded-lg px-4 py-3">
          <label className="block text-[16px] font-medium text-gray-600 mb-2">
            Distance from Central Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <Target className="h-4 w-4 text-gray-400" />
            </div>
            <select
              value={distanceRange}
              onChange={(e) => setDistanceRange(e.target.value)}
              className="w-full pl-6 pr-6 text-[16px] outline-none appearance-none bg-white cursor-pointer"
            >
              <option value="1-2 mi">1-2 mi</option>
              <option value="2-3 mi">2-3 mi</option>
              <option value="3-5 mi">3-5 mi</option>
              <option value="5+ mi">5+ mi</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Check-in Date & Check-out*/}
        <div className="flex gap-0">
          <div className="border border-gray-300 rounded-tl-lg rounded-bl-lg px-4 py-3">
            <label className="block text-[16px] font-medium text-gray-600 mb-2">
              Check-in date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <Calendar className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="dd / mm / yr"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full pl-6 text-[16px] outline-none placeholder-gray-400"
              />
            </div>
          </div>

          {/* Check-out Date */}
          <div className="border border-gray-300 rounded-tr-lg rounded-br-lg px-4 py-3">
            <label className="block text-[16px] font-medium text-gray-600 mb-2">
              Check-out date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <Calendar className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="dd / mm / yr"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full pl-6 text-[16px] outline-none placeholder-gray-400"
              />
            </div>
          </div>
        </div>
        {/* Rooms and group size */}
        <div className="flex gap-0">
          {/* Rooms */}
          <div className="border border-gray-300 rounded-tl-lg rounded-bl-lg px-4 py-3">
            <label className="block text-[16px] font-medium text-gray-600 mb-2">
              Rooms
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <Bed className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="number"
                value={rooms}
                onChange={(e) => setRooms(parseInt(e.target.value) || 0)}
                className="w-full pl-6 text-[16px] outline-none"
              />
            </div>
          </div>
          {/* Group Size */}
          <div className="border border-gray-300 rounded-tr-lg rounded-br-lg px-4 py-3">
            <label className="block text-[16px] font-medium text-gray-600 mb-2">
              Number of guests
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <Users className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="number"
                value={groupSize}
                onChange={(e) => setGroupSize(parseInt(e.target.value) || 0)}
                className="w-full pl-6 text-[16px] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Group Type */}
        <div className="border border-gray-300 rounded-lg px-4 py-3">
          <label className="block text-[16px] font-medium text-gray-600 mb-2">
            Event type
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <Users className="h-4 w-4 text-gray-400" />
            </div>
            <select
              value={groupType}
              onChange={(e) => setGroupType(e.target.value)}
              className="w-full pl-6 pr-6 text-[16px] outline-none appearance-none bg-white cursor-pointer"
            >
              <option value="Birthday party group">Birthday party </option>
              <option value="Wedding party">Wedding party</option>
              <option value="Corporate group">Corporate group</option>
              <option value="Family reunion">Family reunion</option>
              <option value="Friends getaway">Friends getaway</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row - Actions */}
      <div className="flex justify-end items-center gap-3 mt-4">
        <Link to="/add-more-details">
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap cursor-pointer hover:underline">
            Add more details
          </button>
        </Link>

        <button className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-green-600 transition-colors whitespace-nowrap text-sm">
          Check Hotels
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
