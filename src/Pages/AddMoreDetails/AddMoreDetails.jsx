import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function EventBookingForm() {
  const [formData, setFormData] = useState({
    destination: "Downtown, NY",
    centralAddress: "145 East 39th Street, NY, 10016",
    distance: "3-5 mi",
    checkIn: "2025-09-25",
    checkOut: "2025-09-25",
    eventName: "Mike's Birthday Party",
    eventType: "Birthday Party",
    numRooms: "10",
    numGuests: "10",
    roomType: "2 Double Beds (1-2 people)",
    meetingSpace: "no",
    budgetRange: [110, 240],
    additionalRequest: "No.",
  });

  const [dropdownStates, setDropdownStates] = useState({
    eventType: false,
    roomType: false,
  });

  const eventTypeRef = useRef(null);
  const roomTypeRef = useRef(null);

  const eventTypes = [
    "Association",
    "Bachelorette Party",
    "Birthday Party",
    "Business Meeting",
    "Bus Tour",
    "Charity Event",
    "Class Reunion",
    "Convention",
    "Corporate Incentive Travel",
    "Family Reunion",
    "Sorority",
    "Government",
    "Graduation",
    "Holiday Party",
    "Military",
    "Music Band",
    "Reunion",
    "School Trip",
    "Work Crew",
    "Other",
  ];

  const roomTypes = [
    "1 King or Queen Bed",
    "1 King Bed Only",
    "2 Doubled Beds (1-2 people)",
    "2 Doubled Beds (3 people)",
    "2 Doubled Beds (4 people)",
    "Suite (1 Bedroom)",
    "Suite (2 Bedrooms)",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        eventTypeRef.current &&
        !eventTypeRef.current.contains(event.target)
      ) {
        setDropdownStates((prev) => ({ ...prev, eventType: false }));
      }
      if (roomTypeRef.current && !roomTypeRef.current.contains(event.target)) {
        setDropdownStates((prev) => ({ ...prev, roomType: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownToggle = (name) => {
    setDropdownStates((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleDropdownSelect = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setDropdownStates((prev) => ({ ...prev, [name]: false }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, meetingSpace: value }));
  };

  const handleMinBudgetChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= formData.budgetRange[1]) {
      setFormData((prev) => ({
        ...prev,
        budgetRange: [value, prev.budgetRange[1]],
      }));
    }
  };

  const handleMaxBudgetChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= formData.budgetRange[0]) {
      setFormData((prev) => ({
        ...prev,
        budgetRange: [prev.budgetRange[0], value],
      }));
    }
  };

  const handleSubmit = () => {
    const more_details = {
      destination: formData?.destination,
      central_address: formData?.centralAddress,
      distance_from_central: formData?.distance,
      check_in: formData?.checkIn,
      check_out: formData?.checkOut,
      event_name: formData?.eventName,
      event_type: formData?.eventType,
      room_type: formData?.roomType,
      number_of_rooms: formData?.numRooms,
      number_of_guests: formData?.numGuests,
      budget_min: formData?.budgetRange[0],
      budget_max: formData?.budgetRange[1],
      meeting_space_required: formData?.meetingSpace,
      additional_request: formData?.additionalRequest,
    };
    alert("Form submitted successfully!");
    console.log(more_details);
  };

  return (
    <div className="min-h-screen container mx-auto py-8 px-5">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-8">Add more details</h1>

        <div className="space-y-6">
          {/* Destination */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Central Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Central address ( Optional )
            </label>
            <input
              type="text"
              name="centralAddress"
              value={formData.centralAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Distance */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Distance from central address ( mile )
            </label>
            <input
              type="text"
              name="distance"
              value={formData.distance}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Check-in and Check-out */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-in
              </label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-out
              </label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Event Name and Event Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Name
              </label>
              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>
            {/* event type */}
            <div ref={eventTypeRef}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Type
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle("eventType")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white text-left flex justify-between items-center"
                >
                  <span>{formData.eventType}</span>
                  <ChevronDown
                    className={`text-gray-400 w-5 h-5 transition-transform duration-200 ${
                      dropdownStates.eventType ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdownStates.eventType && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {eventTypes.map((type) => (
                      <div
                        key={type}
                        onClick={() => handleDropdownSelect("eventType", type)}
                        className="px-4 py-2 hover:bg-green-50 cursor-pointer"
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Number of Rooms and Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of rooms
              </label>
              <input
                type="number"
                name="numRooms"
                value={formData.numRooms}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests
              </label>
              <input
                type="number"
                name="numGuests"
                value={formData.numGuests}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Room Type and Budget Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div ref={roomTypeRef}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Room Type
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle("roomType")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white text-left flex justify-between items-center"
                >
                  <span>{formData.roomType}</span>
                  <ChevronDown
                    className={`text-gray-400 w-5 h-5 transition-transform duration-200 ${
                      dropdownStates.roomType ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdownStates.roomType && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {roomTypes.map((type) => (
                      <div
                        key={type}
                        onClick={() => handleDropdownSelect("roomType", type)}
                        className="px-4 py-2 hover:bg-green-50 cursor-pointer"
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget range
              </label>
              <div className="px-2">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>${formData.budgetRange[0]}</span>
                  <span>${formData.budgetRange[1]}</span>
                </div>
                <div className="relative pt-2 pb-2">
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-gray-200 rounded-lg"></div>
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 h-2 rounded-lg pointer-events-none"
                    style={{
                      left: `${((formData.budgetRange[0] - 100) / 900) * 100}%`,
                      right: `${
                        100 - ((formData.budgetRange[1] - 100) / 900) * 100
                      }%`,
                      backgroundColor: "#7ED957",
                    }}
                  ></div>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="50"
                    value={formData.budgetRange[0]}
                    onChange={handleMinBudgetChange}
                    className="absolute w-full top-0 left-0 appearance-none bg-transparent cursor-pointer h-full range-slider-min"
                  />
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="50"
                    value={formData.budgetRange[1]}
                    onChange={handleMaxBudgetChange}
                    className="absolute w-full top-0 left-0 appearance-none bg-transparent cursor-pointer h-full range-slider-max"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$100</span>
                  <span>$250</span>
                  <span>$400</span>
                  <span>$550</span>
                  <span>$700</span>
                  <span>$850</span>
                  <span>$1000</span>
                </div>
              </div>
              <style>{`
                .range-slider-min::-webkit-slider-thumb,
                .range-slider-max::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background: #7ED957;
                  cursor: pointer;
                  border: 3px solid white;
                  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                  position: relative;
                  z-index: 10;
                }
                .range-slider-min::-moz-range-thumb,
                .range-slider-max::-moz-range-thumb {
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background: #7ED957;
                  cursor: pointer;
                  border: 3px solid white;
                  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                  position: relative;
                  z-index: 10;
                }
                .range-slider-min::-webkit-slider-thumb:hover,
                .range-slider-max::-webkit-slider-thumb:hover {
                  background: #6BC645;
                }
                .range-slider-min::-moz-range-thumb:hover,
                .range-slider-max::-moz-range-thumb:hover {
                  background: #6BC645;
                }
                .range-slider-min::-webkit-slider-thumb:active,
                .range-slider-max::-webkit-slider-thumb:active {
                  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
                }
                .range-slider-min::-moz-range-thumb:active,
                .range-slider-max::-moz-range-thumb:active {
                  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
                }
              `}</style>
            </div>
          </div>

          {/* Meeting/Banquet Space */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Meeting / Banquet Space
            </label>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="meetingSpace"
                  checked={formData.meetingSpace === "yes"}
                  onChange={() => handleRadioChange("yes")}
                  className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500"
                />
                <span className="ml-2 text-sm text-gray-700">Yes</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="meetingSpace"
                  checked={formData.meetingSpace === "no"}
                  onChange={() => handleRadioChange("no")}
                  className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500"
                />
                <span className="ml-2 text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Additional Request */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Request
            </label>
            <textarea
              name="additionalRequest"
              value={formData.additionalRequest}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={handleSubmit}
              className="px-32 py-3 text-black font-medium rounded-lg transition-colors duration-200"
              style={{
                backgroundColor: "#7ED957",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#6BC645")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#7ED957")}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
