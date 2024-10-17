import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'; // Importing Material-UI icons
import image1 from "./../../../../assets/images/websites/hero/hero1.jpg";
import image4 from "./../../../../assets/images/websites/hero/hero4.jpg";
import image5 from "./../../../../assets/images/websites/hero/hero5.jpg";
import "./webstyles.css";

const images = [
  {
    src: image1,
    alt: 'Forex Signals',
    content: (
      <>
        <h2>Forex Signals</h2>
        <p>
          Receive timely and accurate <strong>forex signals</strong> to make informed trading decisions. 
          Our expert analysts provide high-quality signals for various currency pairs. 
          Stay ahead in the market with real-time updates and insights.
        </p>
        <a href="#" className="contact-link">Join Us</a>
      </>
    ),
  },
  {
    src: image4,
    alt: 'Forex Education',
    content: (
      <>
        <h2>Forex Education</h2>
        <p>
          Master the art of <em>forex trading</em> with our comprehensive education programs. 
          Learn from industry experts through structured courses and practical examples. 
          Empower yourself with the knowledge to succeed in the forex market.
        </p>
        <a href="#" className="contact-link">Start Learning</a>
      </>
    ),
  },
  {
    src: image5,
    alt: 'Forex Mentorship',
    content: (
      <>
        <h2>Forex Mentorship</h2>
        <p>
          Benefit from personalized <u>mentorship</u> tailored to your trading style. 
          Our mentors offer one-on-one guidance to help you navigate the complexities of forex trading. 
          Achieve your trading goals with expert support at every step.
        </p>
        <a href="#" className="contact-link">Get Mentored</a>
      </>
    ),
  },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800, // Slower slide speed for smoother interaction
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjusted speed for a more relaxed pace
    prevArrow: <CustomPrevArrow />, // Custom previous arrow
    nextArrow: <CustomNextArrow />, // Custom next arrow
  };

  return (
    <div className="slider-section">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={image.alt} className="slide-image" />
            <div className="slide-content">
              {image.content}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Previous Arrow
const CustomPrevArrow = ({ onClick }) => (
  <div className="arrow prev-arrow" onClick={onClick}>
    <ArrowBackIos />
  </div>
);

// Custom Next Arrow
const CustomNextArrow = ({ onClick }) => (
  <div className="arrow next-arrow" onClick={onClick}>
    <ArrowForwardIos />
  </div>
);

export default HeroSection;
