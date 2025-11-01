import Marquee from "react-fast-marquee";
import ihgHotels from "../../../src/assets/aboutPageMarqueeImages/ihgHotels.png";
import fourSeasons from "../../../src/assets/aboutPageMarqueeImages/fourSeasons.png";
import choice from "../../../src/assets/aboutPageMarqueeImages/choice.png";
import hilton from "../../../src/assets/aboutPageMarqueeImages/hilton.png";
import bestWestern from "../../../src/assets/aboutPageMarqueeImages/bestWestern.png";
import marriot from "../../../src/assets/aboutPageMarqueeImages/marriot.png";

const BrandMarquee = () => {
  const brands = [
    ihgHotels,
    fourSeasons,
    choice,
    hilton,
    bestWestern,
    ihgHotels,
    marriot,
  ];
  return (
    <div className=" bg-[#DCF4D2] py-[30px]">
      <Marquee pauseOnHover={true}>
        {brands?.map((item, index) => (
          <img key={index} src={item} className="mx-10 md:mx-20 max-w-28"></img>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandMarquee;
