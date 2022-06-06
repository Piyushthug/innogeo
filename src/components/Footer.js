import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import logo from "../images/innogeo.jpg";
import { FaPhone, FaMapMarked, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLocationArrow } from "react-icons/fa";


const Footer = () => {
return (
	<div className="footer-section">
	<Box>
	{/* <img src={logo} alt="Beach Resort" className="footerImg"/> */}
	<Container>
		<Row>
		<Column>
			<img src={logo} alt="Beach Resort" className="footerImg"/>
			<FooterLink href="#"><span className="footerspan"><FaLocationArrow/></span>
			<p>
				Jambrotts Prastvag, 2 421 47 Vastra Frolunda Goteborg, Sweden
			</p>
			</FooterLink>
			<FooterLink href="#"><span className="footerspan"><FaPhone/></span>+46(0)79 330 0652</FooterLink>
		</Column>
		<div className="footer-services">
			<Column>
				<Heading>Services</Heading>
					<FooterLink href="#">Writing</FooterLink>
					<FooterLink href="#">Internships</FooterLink>
					<FooterLink href="#">Coding</FooterLink>
					<FooterLink href="#">Teaching</FooterLink>
			</Column>
		</div>
		<div className="footer-services">
			<Column>
				<Heading>Contact Us</Heading>
				<FooterLink href="#">Uttar Pradesh</FooterLink>
				<FooterLink href="#">Ahemdabad</FooterLink>
				<FooterLink href="#">Indore</FooterLink>
				<FooterLink href="#">Mumbai</FooterLink>
			</Column>
		</div>
		<div className="footer-services">
			<Column>
				<Heading>Social Media</Heading>
				
				<FooterLink href="#"><span><FaFacebook/></span></FooterLink>
				<FooterLink href="#"><span><FaInstagram/></span></FooterLink>
				<FooterLink href="#"><span><FaTwitter/></span></FooterLink>
				<FooterLink href="#"><span><FaYoutube/></span></FooterLink>
				
			</Column>
		</div>
		</Row>
	</Container>
	</Box>
	</div>
);
};
export default Footer;
