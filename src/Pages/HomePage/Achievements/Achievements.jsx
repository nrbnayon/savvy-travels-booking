// import { useState } from "react";
import one from "../../../assets/achivements/one.png";
import two from "../../../assets/achivements/two.png";
import three from "../../../assets/achivements/three.png";
import four from "../../../assets/achivements/four.png";

const Achievements = () => {
  // const [isCurrentPage, setCurrentPage] = useState(1);
  const cardData = [
    {
      id: "1",
      image: one,
      date: "27 August, 2025",
      time: "12 min",
      task: "read",
      heading: "Lodging for U.S Army in Baltimore",
      text: "Savvy Solutions Group LLC was awarded a contract to provide 325 room nights of double occupancy lodging in Baltimore, Maryland. This lodging was arranged for Army personnel stationed near 700 E. Ordnance Road from June 1 to June 14, 2025.",
    },
    {
      id: "2",
      image: two,
      date: "27 August, 2025",
      time: "12 min",
      task: "read",
      heading: "Lodging for U.S Army in Baltimore",
      text: "Savvy Solutions Group LLC was awarded a contract to provide 208 room nights of double occupancy lodging in Fort Knox, Kentucky. These accommodations were provided for Army personnel from August 18 to August 31, 2025, supporting operations at Fort Knox.",
    },
    {
      id: "3",
      image: three,
      date: "27 August, 2025",
      time: "12 min",
      task: "read",
      heading: "Lodging for U.S Army in Baltimore",
      text: "Savvy Solutions Group LLC was awarded a contract to provide 325 room nights of double occupancy lodging in Baltimore, Maryland. This lodging was arranged for Army personnel stationed near 700 E. Ordnance Road from June 1 to June 14, 2025.",
    },
    {
      id: "4",
      image: four,
      date: "27 August, 2025",
      time: "12 min",
      task: "read",
      heading: "Lodging for U.S Army in Baltimore",
      text: "Savvy Solutions Group LLC was awarded a contract to provide 208 room nights of double occupancy lodging in Fort Knox, Kentucky. These accommodations were provided for Army personnel from August 18 to August 31, 2025, supporting operations at Fort Knox.",
    },
  ];

  // Function for read more functionality
  // function getFirstWords(text, numberOfWords) {
  //   const words = text.trim().split(/\s+/);
  //   const firstWords = words.slice(0, numberOfWords);
  //   return firstWords.join(" ");
  // }

  return (
    <div className=" my-28 bg-[#FFFFFF] shadow-[0_0_50px_#00000014]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10 space-y-10 ">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left">
          Our Achievements
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2   gap-5">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md transition-shadow duration-200 hover:shadow-lg rounded-xl overflow-hidden"
            >
              {/* Card Image */}
              <figure>
                <img
                  src={card.image}
                  alt="Army Image"
                  className=" w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
              <div className="p-4 sm:p-5 space-y-2">
                {/* Date */}
                <p className="flex items-center gap-2 text-xs sm:text-sm">
                  <img
                    className="w-4 sm:w-5"
                    src="/Icons/calendar.png"
                    alt="Calendar Icon"
                  />
                  {card.date}
                </p>

                {/* Time */}
                <p className="flex items-center gap-2 text-xs sm:text-sm">
                  <img
                    className="w-4 sm:w-5"
                    src="/Icons/clock.png"
                    alt="Clock Icon"
                  />
                  {card.time} {card.task}
                </p>

                {/* Heading */}
                <h3 className="text-sm sm:text-base font-medium">
                  {card.heading}
                </h3>

                {/* Text */}
                <p className="text-[#4A4A4A] text-xs sm:text-sm">
                  {card?.text}
                  {/* <span className="text-[#00BF63] hover:text-green-400 cursor-pointer">
                    Read More
                  </span> */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
