import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const CarouselBanner = () => {
    return (
        <div className="">
            <Carousel autoPlay showStatus={false} showThumbs={false}>
                <div className="hero-banner">
                    <Banner
                    title="Unlock Your Positioning Mobility"
                    subtitle="The Compact RTK with Advanced IMU Sensor"
                    >
                    <Link to="/rooms" className="btn-primary">
                        our Products
                    </Link>
                    </Banner>
                    <img alt="" src="https://www.satlab.com.se/wp-content/uploads/2022/03/Ferjya-homepage-banner-scaled.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img alt="" src="	https://www.satlab.com.se/wp-content/uploads/2022/03/SL900-2570x1427banner-02-scaled.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>

            </Carousel>

        </div>
    )//<header className={hero}>{children}</header>;

};

export default CarouselBanner;

