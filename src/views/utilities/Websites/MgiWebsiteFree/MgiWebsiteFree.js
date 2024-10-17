import React from 'react';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import AboutSection from './AboutSection';
import TutorialsSection from './TutorialsSection';
import MembershipSection from './MembershipSection';
import Footer from './Footer';
import ContactUs from './ContactUs';
import Information from './Information';

const MgiWebsiteFree = () => {
  return (
    <div>
      <div id="hero-section"><HeroSection/></div>
      <div id="service-section"><ServiceSection/></div>
      <div id="about-section"><AboutSection/></div>
      <div id="advertise-section"><TutorialsSection/></div>
      <div id="membership-section"><MembershipSection/></div>
      <div id="contact-us"><ContactUs/></div>
      <div id="info"><Information/></div>
      <div id="footer"><Footer/></div>
    </div>
  );
}

export default MgiWebsiteFree;
