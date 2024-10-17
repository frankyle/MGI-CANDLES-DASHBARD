import React from 'react';
import { Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
const InfoSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[3],
  borderRadius: '8px',
}));

const InfoHeading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
}));

const InfoList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  '& li': {
    marginBottom: '10px',
  },
  '& a': {
    textDecoration: 'none',
    color: '#1976d2',
    fontSize: '14px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const InfoSectionContent = styled('div')({
  marginBottom: '20px',
});

const SubscribeForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& input': {
    marginBottom: '10px',
    width: '100%',
    maxWidth: '300px',
  },
  '& button': {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#1976d2',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#155a8a',
    },
  },
});

const Information = () => (
  <div className="info_section layout_padding">
    <div className="container">
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        Forex Insights & Resources
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={3}>
          <InfoSection>
            <InfoHeading variant="h6">
              Forex Signals
            </InfoHeading>
            <InfoList>
              <li><a href="#">Real-Time Forex Signals</a></li>
              <li><a href="#">Daily Market Analysis</a></li>
              <li><a href="#">Technical Analysis Updates</a></li>
              <li><a href="#">Trading Alerts & Notifications</a></li>
            </InfoList>
          </InfoSection>
        </Grid>
        <Grid item md={3}>
          <InfoSection>
            <InfoHeading variant="h6">
              Forex Education
            </InfoHeading>
            <InfoList>
              <li><a href="#">Forex Trading Basics</a></li>
              <li><a href="#">Advanced Trading Strategies</a></li>
              <li><a href="#">Market Trends & Insights</a></li>
              <li><a href="#">Educational Webinars & Workshops</a></li>
            </InfoList>
          </InfoSection>
        </Grid>
        <Grid item md={3}>
          <InfoSection>
            <InfoHeading variant="h6">
              Forex Mentorship
            </InfoHeading>
            <InfoList>
              <li><a href="#">Personalized Trading Mentorship</a></li>
              <li><a href="#">One-on-One Coaching Sessions</a></li>
              <li><a href="#">Mentorship Programs & Plans</a></li>
              <li><a href="#">Expert Guidance & Support</a></li>
            </InfoList>
          </InfoSection>
        </Grid>
        <Grid item md={3}>
          <InfoSection>
            <InfoHeading variant="h6">
              Forex Advice & Services
            </InfoHeading>
            <InfoList>
              <li><a href="#">Expert Forex Advice</a></li>
              <li><a href="#">Market Forecasts</a></li>
              <li><a href="#">Custom Trading Strategies</a></li>
              <li><a href="#">Wakala Agent Services</a></li>
            </InfoList>
          </InfoSection>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" mt={4}>
        <Grid item md={6}>
          <SubscribeForm>
            <TextField
              variant="outlined"
              label="Enter your email"
              type="email"
              fullWidth
              required
            />
            <Button type="submit" variant="contained">
              Subscribe
            </Button>
          </SubscribeForm>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default Information;
