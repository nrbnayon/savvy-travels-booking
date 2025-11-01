import { useState } from "react";
import { Instagram, Send, Twitter } from "lucide-react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiPinterestLogo } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#000D4A] py-7 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start pt-10">
        {/* Logo and Tagline */}
        <div className="mb-6 md:mb-0">
          <div className="w-10 mb-3">
            <Link to="/">
              <img src="/logo/logo.png" alt="Logo" />
            </Link>
          </div>
          <p className="text-sm max-w-xs">
            We aim to provide modern explorers with innovative, functional and
            comfortable stays around the world
          </p>
          <div className="flex space-x-4 mt-3">
            <a href="#">
              <span className="text-white text-2xl">
                <RiFacebookCircleLine />
              </span>
            </a>
            <a href="#">
              <span className="text-white text-2xl">
                <PiPinterestLogo />
              </span>
            </a>
            <a href="#">
              <span className="text-white">
                <Twitter />
              </span>
            </a>
            <a href="#">
              <span className="text-white">
                <Instagram />
              </span>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faq" className="text-white hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="text-white hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="text-white hover:underline">
                About Us
              </Link>
            </li>
            {/* <li>
              <Link to="#" className="text-white hover:underline">
                Guest review
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="tel:(000) 000-0000"
                className="text-white hover:underline"
              >
                (000) 000-0000
              </a>
            </li>
            <li>
              <a
                href="mailto:example@gmail.com"
                className="text-white hover:underline"
              >
                example@gmail.com
              </a>
            </li>
            <li className="text-white">
              24 Royal Lane, Mesa, New Jersey 45435
            </li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div>
          <h3 className="font-semibold mb-4">Get the latest Updates</h3>
          <form onSubmit={handleSubscribe} className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full md:w-[200px] h-10 px-4 bg-gray-200 text-black rounded-l-lg outline-none"
            />
            <button
              type="submit"
              className="h-10 px-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <Send />
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-5 flex justify-evenly items-center text-center text-xs text-gray-400 mt-12">
        <p className="">© 2023 StayFinder. All rights reserved.</p>
        <p className="">
          <span className="underline cursor-pointer">Terms & Conditions</span>{" "}
          and <span className="underline cursor-pointer">Privacy & Policy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
