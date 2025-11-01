import { useState } from "react";

const GroupBooking = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOnClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full bg-[#DCF4D2] mt-20">
      <div className="container mx-auto px-5 py-12 md:py-16 lg:py-20 xl:pt-24 flex flex-col lg:flex-row justify-between items-center gap-8 text-[#1A1A1A]">
        {/* Heading & Button */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-snug">
            Know more about Group Booking
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg">
            Watch a short video to discover smarter, faster & cheaper hotels for
            your upcoming tours.
          </p>
          <div className="mt-6 md:mt-10">
            <button
              onClick={handleOnClick}
              className="text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-14 lg:px-[70px] py-2 sm:py-3 md:py-[11px] bg-[#7ED957] rounded-3xl"
            >
              Watch
            </button>
          </div>
        </div>

        {/* Video */}
        <div className="flex-1 aspect-video overflow-clip rounded-2xl w-full max-w-full">
          <iframe
            className="w-full h-full"
            src={
              isPlaying
                ? "https://player.vimeo.com/video/1099152050?autoplay=1&badge=0&byline=0&h=5f41bef9ed&portrait=0&title=0&loop=0&muted=0&controls=1"
                : "https://player.vimeo.com/video/1099152050?autoplay=0&badge=0&byline=0&h=5f41bef9ed&portrait=0&title=0&loop=0&muted=0&controls=1"
            }
            title="GroupBooking"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GroupBooking;
