// import React from 'react';
import BrandMarquee from "../../components/marquee/BrandMarquee";
import Achievements from "./Achievements/Achievements";
import GroupBooking from "./GroupBooking/GroupBooking";
import Hero from "./Hero/Hero";

const Homepage = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-8">
        <Hero />
      </div>
      <GroupBooking />
      <BrandMarquee />
      <Achievements />
    </div>
  );
};

export default Homepage;
