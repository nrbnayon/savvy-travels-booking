import firstImage from "../../assets/savingsStrategy/girlStudy.jpg";
import secondImage from "../../assets/savingsStrategy/strategy.jpg";
import icon from "../../assets/savingsStrategy/icon.png";

const SavingsStrategy = () => {
  const budgettingTips = [
    {
      sl: "1",
      title: "Book early",
      subTitle: "Secure lower rates before demand increases",
    },
    {
      sl: "2",
      title: "Set a cost limit",
      subTitle: "Set a budget per night for a room & stick to it",
    },
    {
      sl: "3",
      title: "Compare multiple hotels",
      subTitle: "Don’t settle for the first quote, compare offers.",
    },
    {
      sl: "4",
      title: "Negotiate extras",
      subTitle: "Ask for free Wi-Fi, parking, or shuttle service.",
    },
    {
      sl: "5",
      title: "Suburban hotels",
      subTitle: "Lower rates than city-center hotels, with easy transport.",
    },
  ];

  return (
    <section className="py-10 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 space-y-20">
        {/* Savings Strategy */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 justify-between items-center">
          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
              Savings Strategy
            </h3>
            <p className="text-sm sm:text-base md:text-lg mt-4 sm:mt-6 leading-relaxed text-[#4A4A4A]">
              Unlock exclusive discounts and maximize your budget with our group
              booking saving strategy. Discover how you can save more on your
              group bookings with our strategy approach. Learn more about our
              interred discount levels, special offers, and budgeting tips to
              ensure you get the best value for your group. Start saving today!
            </p>
            <button className="mt-6 sm:mt-8 bg-[#7ED957] rounded-lg text-sm sm:text-base px-5 py-3 font-semibold hover:text-white hover:shadow-md hover:border-b hover:border-white transform transition-transform duration-150 ease-in-out active:scale-95">
              Try Group Book now!
            </button>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2 max-w-[612px] overflow-hidden rounded-2xl">
            <img
              src={firstImage}
              alt="Savings Strategy"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>

        {/* Budgeting tips */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-center">
          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
              Budgeting Tips
            </h3>
            <div className="space-y-5">
              {budgettingTips?.map((item) => (
                <div
                  key={item?.sl}
                  className="flex items-start gap-3 text-left"
                >
                  <figure className="w-5 h-5 flex-shrink-0">
                    <img
                      src={icon}
                      alt="Icon"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div className="space-y-1.5">
                    <p className="text-[#1A1A1A] text-base sm:text-lg font-medium">
                      {item?.title}
                    </p>
                    <p className="text-[#4A4A4A] text-sm sm:text-base">
                      {item?.subTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2 max-w-[612px] overflow-hidden rounded-2xl">
            <img
              src={secondImage}
              alt="Budgeting Tips"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default SavingsStrategy;
