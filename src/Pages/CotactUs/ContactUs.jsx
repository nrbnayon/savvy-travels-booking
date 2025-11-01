import { Mail, Phone } from "lucide-react";
import facebook from "../../assets/contactInformationImages/facebook.png";
import pinterest from "../../assets/contactInformationImages/pinterest.png";
import instagram from "../../assets/contactInformationImages/instagram.png";
import twitter from "../../assets/contactInformationImages/twitter.png";

const ContactUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[url('/contactUs/contactUs.jpg')] bg-cover bg-center lg:bg-top min-h-[624px] flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">How can we help?</h1>
          <p className="mt-4 max-w-2xl mx-auto">
            Get connected to a specialist and we will get back to you as soon as
            possible.
          </p>
        </div>
      </div>

      {/* Offices Section */}
      <div className="bg-[#FFFFFF]  py-16 px-6">
        <div className="container p-4 md:p-6 mx-auto  rounded-xl shadow-[0_0_50px_#00000014] ">
          {/* Heading */}
          <h2 className="text-2xl text-center md:text-left md:text-4xl font-bold mb-6">
            Contact Information
          </h2>
          {/* Content */}
          <div className="px-3 md:px-6 shadow-xl rounded-2xl bg-white">
            {/* Card 1 - Customer Support */}
            <div className="border-b-[1px] border-[#CACACA] py-6 space-y-3">
              {/* Title */}
              <p className="text-[16px] font-medium text-black">
                Customer Support
              </p>
              {/* Details */}
              <div className="*:text-[14px] text-[#4A4A4A]">
                <p>Available Monday - Friday, 9am - 6pm EST</p>
                <p className="flex justify-start items-center gap-2">
                  <span>
                    <Phone size={16} className="text-[#00BF63]" />
                  </span>{" "}
                  000-0000-000
                </p>
                <p className="flex justify-start items-center gap-2">
                  <span>
                    <Mail size={16} className="text-[#00BF63]" />
                  </span>
                  example@gmail.com
                </p>
              </div>
            </div>
            {/* Card 2 - Office Address */}
            <div className="border-b-[1px] border-[#CACACA] py-6 space-y-3">
              {/* Title */}
              <p className="text-[16px] font-medium text-black">
                Customer Support
              </p>
              {/* Details */}
              <div className="*:text-[14px] text-[#4A4A4A]">
                <p>Available Monday - Friday, 9am - 6pm EST</p>
                <p>000-0000-000</p>
                <p>example@gmail.com</p>
              </div>
            </div>
            {/* Card 3 - Social Media */}
            <div className=" py-6 space-y-3">
              {/* Title */}
              <p className="text-[16px] font-medium text-black">Social Media</p>
              {/* Details */}
              <div className="flex justify-start items-center gap-6 *:w-6">
                <img src={facebook} alt="Facebook Logo" />
                <img src={pinterest} alt="Pinterest" />
                <img src={twitter} alt="Twitter" />
                <img src={instagram} alt="Instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
