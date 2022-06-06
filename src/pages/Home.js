import React from "react";
import { Link } from "react-router-dom";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Testimonial from "../components/Testimonial";
import CarouselBanner from "../components/CarouselBanner";

const home = () => {
  return (
    <>
      <CarouselBanner/>
      {/* <Hero> */}
        {/* <Banner
          title="Unlock Your Positioning Mobility"
          subtitle="The Compact RTK with Advanced IMU Sensor"
        >
          <Link to="/rooms" className="btn-primary">
            our Products
          </Link>
        </Banner> */}
      {/* </CarouselBanner> */}
      {/* </Hero> */}
      <Services />
      <FeaturedRooms />
      <Testimonial />
    </>
  );
};

export default home;
