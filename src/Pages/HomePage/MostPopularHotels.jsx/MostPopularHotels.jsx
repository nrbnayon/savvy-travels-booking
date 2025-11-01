import { useState } from "react";

const MostPopularHotels = () => {
  const [isActiveBtn, setIsActiveBtn] = useState("");

  const typesOfPopularHotes = [
    {
      id: "1",
      type: "Hot",
    },
    {
      id: "2",
      type: "Top Hotels",
    },
    {
      id: "3",
      type: "Discounted",
    },
    {
      id: "4",
      type: "Event",
    },
  ];

  const hotelCards = [
    {
      id: "1",
      image: "/Hotels/hotel.jpg",
      location: "Downtown, Newyork",
      hotel_name: "Lucky Star Hotel & Resort",
      rating: 4.8,
      totalReviews: 32,
      facilities: ["City View", "Restaurant", "Bar"],
    },
    {
      id: "2",
      image: "/Hotels/hotel.jpg",
      location: "Downtown, Newyork",
      hotel_name: "Lucky Star Hotel & Resort",
      rating: 4.8,
      totalReviews: 32,
      facilities: ["City View", "Restaurant", "Bar"],
    },
    {
      id: "3",
      image: "/Hotels/hotel.jpg",
      location: "Downtown, Newyork",
      hotel_name: "Lucky Star Hotel & Resort",
      rating: 4.8,
      totalReviews: 32,
      facilities: ["City View", "Restaurant", "Bar"],
    },
    {
      id: "4",
      image: "/Hotels/hotel.jpg",
      location: "Downtown, Newyork",
      hotel_name: "Lucky Star Hotel & Resort",
      rating: 4.8,
      totalReviews: 32,
      facilities: ["City View", "Restaurant", "Bar"],
    },
    // {
    //   id: "5",
    //   image: "/Hotels/hotel.jpg",
    //   location: "Downtown, Newyork",
    //   hotel_name: "Lucky Star Hotel & Resort",
    //   rating: 4.8,
    //   totalReviews: 32,
    //   facilities: ["City View", "Restaurant", "Bar"],
    // },
  ];
  return (
    <div className="container mx-auto px-5">
      {/* Full Content */}
      <div className="w-full px-6 py-10 bg-white shadow-sm rounded">
        {/* Title and category of hotel buttons */}
        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center">
          {/* Title */}
          <div>
            <h1 className="text-[40px] font-semibold text-[#1A1A1A]">
              Our Most Popular Hotels
            </h1>
            <p className="text-[16px] text-[#4F5B67] font-normal">
              Discover breathtaking destinations, plan your perfect itinerary.
            </p>
          </div>
          {/* Buttons */}
          <div className="grid grid-cols-4 *:py-2 *:border-b-[1px] *:border-[#CACACA] *:text-center *:px-2 *:text-[16px]">
            {typesOfPopularHotes?.map((item) => (
              <div
                key={item?.id}
                className={`cursor-pointer ${
                  isActiveBtn === item?.type
                    ? " !border-b-2 !border-green-500 text-green-500"
                    : ""
                }`}
                onClick={() => setIsActiveBtn(item?.type)}
              >
                {item?.type}
              </div>
            ))}
          </div>
        </div>
        {/* Hotel Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {hotelCards?.map((card) => (
            <div className="rounded-[12px]" key={card?.id}>
              <figure>
                <img src={card?.image} alt="Hotel Image" />
              </figure>
              <div className="px-3 py-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopularHotels;
