import Marquee from "react-fast-marquee";

const PromotionSlider = () => {
  const content = [
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
  ];
  return (
    <div className="bg-[#001056] py-5 sm:py-6">
      <Marquee pauseOnHover={true}>
        {content?.map((item, index) => (
          <div
            className="flex justify-center items-center gap-2 text-white mx-5 py-1"
            key={index}
          >
            <img className="w-[22px]" src="/Icons/marqueeIcon.png" alt="Icon" />
            <p className="text-[20px]">{item}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default PromotionSlider;
