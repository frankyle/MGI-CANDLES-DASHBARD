import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const NavigationComponent = () => {

    const handleScroll = (targetId) => {
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 70; // Adjust this offset to match your sticky header height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };


    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/mgiwebsitepaid');
      };

      const handleNavigateToDashboard = () => {
        navigate('/mtego');
      };

      const handleNavigateToHome = () => {
        navigate('/');
      };
    

    return (
        <div>
            <Button color="inherit" onClick={handleNavigateToHome}>
                Home
            </Button>

            <Button 
                color="inherit" 
                sx={{ marginRight: 2 }}
                onClick={() => handleScroll('service-section')}
            >
                Services
            </Button>
            <Button 
                color="inherit" 
                sx={{ marginRight: 2 }}
                onClick={() => handleScroll('about-section')}
            >
                About
            </Button>
            
            <Button 
                color="inherit" 
                sx={{ marginRight: 2 }}
                onClick={() => handleScroll('tutorial-section')}
            >
                Tutorials
            </Button>
            <Button 
                color="inherit" 
                sx={{ marginRight: 2 }}
                onClick={() => handleScroll('membership-section')}
            >
                Membership
            </Button>
            <Button 
                color="inherit" 
                onClick={() => handleScroll('contact-us')}
            >
                Contact Us
            </Button>
            <Button color="inherit" onClick={handleNavigate}>
                Premium Page
            </Button>
            <Button color="inherit" onClick={handleNavigateToDashboard}>
                Dashboard
            </Button>
        </div>
    );
};

export default NavigationComponent;
