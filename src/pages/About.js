import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
const Rooms = () => {
  return (
    <>
      <Hero hero="aboutHero">
        <Banner title="About Us">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <div className="container about-us">
        <h4><strong>ABOUT SATLAB GEOSOLUTIONS AB</strong></h4>
        <p>&nbsp;</p>
        <p>SatLab Geosolutions is a Swedish based global satellite positioning solutions company with offices strategically located around the world. Founded by a group of passionate and pioneering engineers, with a total of more than 40 years of experience in the <span><a href="https://www.satlab.com.se/product_category/gnss/">GNSS</a></span> industry, the management team is made up of veteran industry experts who value our customers’ needs. Focusing on research and development, the SatLab Geosolutions team works around the clock to create innovative products for surveying professionals across the globe, providing superior complete solutions.</p>
        <h4></h4>
        <h4><strong>SWEDISH ENGINEERING AND TECHNOLOGY</strong></h4>
        <p>&nbsp;</p>
        <p>In the geospatial world, surveying professionals depend on the most accurate and precise measurements to build the world we live in. At SatLab Geosolutions, we pride ourselves in creating solutions with Swedish engineering and technology. <span>We ensure that all our products meet our rigorous quality check and assurance, delivering the Swedish innovation the moment you power it up for your work, the technology you can rely on that are designed and engineered in Sweden.</span></p>
        <h4></h4>
        <h4><strong>SATLAB GEOSOLUTIONS MISSION STATEMENT</strong></h4>
        <p>&nbsp;</p>
        <p>SatLab Geosolutions strives to maintain the quality of producing high-performance and premium products coupled with innovative solutions.</p>
        <h5></h5>
        <h5></h5>
            <h4>
                <strong>OUR STRATEGIC PARTNERS</strong>
            </h4>
            <p className="partner">
                <a href="https://www.geo-plus.com/">
                    <img width="300" height="85" src="https://www.satlab.com.se/wp-content/uploads/2022/04/Geo-Plus-300x85-1.png" alt="" className="alignnone size-full wp-image-492"/>
                </a>
                <a href="https://www.aplitop.com/">
                    <img loading="lazy" width="300" height="85" src="https://www.satlab.com.se/wp-content/uploads/2022/04/Aplitop-1-300x85-1.png" alt="" className="alignnone size-full wp-image-491"/>
                </a>
            </p>
            <p className="partner">
                <a href="https://www.esri.com/en-us/home">
                    <img loading="lazy" width="300" height="85" src="https://www.satlab.com.se/wp-content/uploads/2022/04/Esri-1-300x85-1.png" alt="" className="alignnone size-full wp-image-493"/>
                </a>
                <a href="https://us.yuneec.com/">
                    <img loading="lazy" width="300" height="85" src="https://www.satlab.com.se/wp-content/uploads/2022/04/Yuneec-300x85-1.png" alt="" className="alignnone size-full wp-image-494"/>
                </a>
            </p>
      </div>
    </>
  );
};

export default Rooms;
