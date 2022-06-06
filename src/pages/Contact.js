import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our products">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <h1>
        GeeksforGeeks is a Computer 
        Science portal for geeks.
      </h1>
    </>
  );
};

export default Rooms;
