import React from 'react';
import { Typography, Button, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import image1 from "./../../../../assets/images/websites/hero/hero1.jpg";
import image2 from "./../../../../assets/images/websites/hero/hero4.jpg";
import image3 from "./../../../../assets/images/websites/hero/hero5.jpg";
import image4 from "./../../../../assets/images/websites/hero/hero5.jpg";
import image5 from "./../../../../assets/images/websites/hero/hero5.jpg";

// Custom styled components
const ServiceCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  textAlign: 'center',
}));

const ServiceSectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 2),
  textAlign: 'center',
  backgroundColor: theme.palette.background.default,
  marginTop: theme.spacing(8), // Adjust this margin as needed to ensure the section is visible when scrolled
}));

const ServiceSection = () => (
  <ServiceSectionContainer id="service-section">
    <Typography variant="h2" gutterBottom>
      Our Services
    </Typography>
    <Typography variant="body1">
      We offer a range of services to help you succeed in the forex market and beyond.
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <ServiceCard>
          <CardMedia
            component="img"
            height="200" // Adjusted height for better visibility
            image={image1}
            alt="Forex Signals"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Forex Signals
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Receive timely and accurate forex signals to make informed trading decisions. Our expert analysts provide high-quality signals for various currency pairs.
            </Typography>
            <Button variant="contained" color="primary" href="#">
              Learn More
            </Button>
          </CardContent>
        </ServiceCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ServiceCard>
          <CardMedia
            component="img"
            height="200"
            image={image2}
            alt="Forex Education"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Forex Education
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Master the art of forex trading with our comprehensive education programs. Learn from industry experts through structured courses and practical examples.
            </Typography>
            <Button variant="contained" color="primary" href="#">
              Start Learning
            </Button>
          </CardContent>
        </ServiceCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ServiceCard>
          <CardMedia
            component="img"
            height="200"
            image={image4}
            alt="Forex Mentorship"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Forex Mentorship
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Benefit from personalized mentorship tailored to your trading style. Our mentors offer one-on-one guidance to help you navigate the complexities of forex trading.
            </Typography>
            <Button variant="contained" color="primary" href="#">
              Get Mentored
            </Button>
          </CardContent>
        </ServiceCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ServiceCard>
          <CardMedia
            component="img"
            height="200"
            image={image5}
            alt="Forex Advice"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Forex Advice
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Get expert advice on forex trading strategies and market analysis. Our advisors provide personalized recommendations to help you make strategic decisions.
            </Typography>
            <Button variant="contained" color="primary" href="#">
              Get Advice
            </Button>
          </CardContent>
        </ServiceCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ServiceCard>
          <CardMedia
            component="img"
            height="200"
            image={image3}
            alt="Wakala Agent"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Wakala Agent
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Connect with our Wakala agents for seamless forex transactions. We provide trusted and efficient services for currency exchange and trading.
            </Typography>
            <Button variant="contained" color="primary" href="#">
              Contact Us
            </Button>
          </CardContent>
        </ServiceCard>
      </Grid>
    </Grid>
  </ServiceSectionContainer>
);

export default ServiceSection;
