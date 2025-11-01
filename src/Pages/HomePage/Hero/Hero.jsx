import groupImage from "../../../assets/images/groupImage.jpg";
import HotelBookingForm from "./HotelBookingForm";

const Hero = () => {
  return (
    <section className="relative">
      <div className="p-5 sm:p-10 bg-white shadow-sm rounded-xl mb-10">
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-10"> */}
        <div className="flex flex-col-reverse lg:flex-row  items-center justify-between gap-5 sm:gap-10">
          {/* Text Section */}
          <div className="mb-6 lg:mb-0">
            <h1 className="text-[28px] md:text-5xl font-bold mb-4">
              <span className="text-blue-700 motion-preset-fade motion-duration-700 motion-delay-0">
                Hotels
              </span>{" "}
              <span className="motion-preset-fade motion-duration-700 motion-delay-200">
                for Every
              </span>{" "}
              <span className="text-[#7ED957] motion-preset-fade motion-duration-700 motion-delay-400">
                Group
              </span>{" "}
              <span className="motion-preset-fade motion-duration-700 motion-delay-600">
                at the
              </span>{" "}
              <span className="text-[#7ED957] motion-preset-fade motion-duration-700 motion-delay-800">
                Best
              </span>{" "}
              <span className="text-[#7ED957] motion-preset-fade motion-duration-700 motion-delay-1000">
                Price
              </span>
            </h1>
            <p className="text-gray-600 mb-6 font-mona motion-scale-in-[0.87] motion-translate-x-in-[0%] motion-translate-y-in-[104%] motion-blur-in-[2px] motion-duration-[3.5s]/translate motion-delay-[0.75s]/blur">
              Book multiple rooms at your favorite hotels and get deals you
              won&apos;t find anywhere else.
            </p>

            <button className="bg-white text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center motion-scale-in-[0.56] motion-translate-x-in-[-48%] motion-translate-y-in-[47%] motion-rotate-in-[-12deg] motion-duration-[2.25s]">
              Explore More <span className="ml-2">→</span>
            </button>
          </div>
          {/* Image Section */}
          <div className="rounded-2xl">
            <img
              src={groupImage}
              alt="Group of friends"
              className="rounded-lg  w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <HotelBookingForm />
    </section>
  );
};

export default Hero;
