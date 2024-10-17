import React from 'react';
import { Typography, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import image1 from "./../../../../assets/images/websites/hero/hero1.jpg";

// Custom styled components
const AboutContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[3],
}));

const ImgBox = styled('div')({
  marginBottom: '20px',
});

const AboutSection = () => (
  <div className="about_section layout_padding">
    <div className="container">
      <Grid container spacing={4} alignItems="center">
        <Grid item md={6}>
          <ImgBox>
            <img src={image1} alt="About Us" style={{ width: '100%', borderRadius: '8px' }} />
          </ImgBox>
        </Grid>
        <Grid item md={6}>
          <AboutContainer>
            <Typography variant="h2" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              At MGI Candles, we specialize in providing expert forex advisory services to help you navigate the complexities of the global currency markets. With years of experience and a team of skilled analysts, we offer tailored insights and strategies to optimize your trading decisions and maximize your returns.
            </Typography>
            <Typography variant="body1" paragraph>
              Our mission is to empower traders and investors with the knowledge and tools needed to succeed in the forex market. Whether you're a seasoned trader or just starting out, our comprehensive educational resources, real-time forex signals, and personalized mentorship will guide you towards achieving your financial goals.
            </Typography>
            <Typography variant="body1" paragraph>
              Discover how we can support your trading journey and elevate your forex trading strategy with our dedicated advisory services. Contact us today to learn more about how we can help you make informed and strategic trading decisions.
            </Typography>
            <div className="d-flex justify-content-end">
              <Button variant="contained" color="primary" href="#">
                Read More
              </Button>
            </div>
          </AboutContainer>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default AboutSection;
