import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
const PricingCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  boxShadow: theme.shadows[5],
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const PriceTag = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const MembershipSection = () => (
  <Box sx={{ padding: '4rem 2rem', textAlign: 'center' }}>
    <Typography variant="h2" gutterBottom>
      Choose Your Plan
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {/* Basic Plan */}
      <Grid item xs={12} sm={6} md={4}>
        <PricingCard>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Basic Plan
            </Typography>
            <PriceTag>$19/month</PriceTag>
            <Typography variant="body1" color="textSecondary" paragraph>
              - Access to basic forex signals
              <br />
              - 7-day trial period available for $1
              <br />
              - Email support
              <br />
              - 30-day money-back guarantee
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" fullWidth>
              Get Started
            </Button>
          </CardActions>
        </PricingCard>
      </Grid>

      {/* Pro Plan */}
      <Grid item xs={12} sm={6} md={4}>
        <PricingCard>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Pro Plan
            </Typography>
            <PriceTag>$49/month</PriceTag>
            <Typography variant="body1" color="textSecondary" paragraph>
              - Access to advanced forex signals
              <br />
              - 7-day trial period available for $5
              <br />
              - Priority email and chat support
              <br />
              - Access to monthly webinars
              <br />
              - 30-day money-back guarantee
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" fullWidth>
              Get Started
            </Button>
          </CardActions>
        </PricingCard>
      </Grid>

      {/* Premium Plan */}
      <Grid item xs={12} sm={6} md={4}>
        <PricingCard>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Premium Plan
            </Typography>
            <PriceTag>$99/month</PriceTag>
            <Typography variant="body1" color="textSecondary" paragraph>
              - Access to all forex signals (basic + advanced + exclusive)
              <br />
              - 7-day trial period available for $9
              <br />
              - Priority email, chat, and phone support
              <br />
              - Access to weekly webinars and exclusive content
              <br />
              - One-on-one mentorship sessions
              <br />
              - 30-day money-back guarantee
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" fullWidth>
              Get Started
            </Button>
          </CardActions>
        </PricingCard>
      </Grid>
    </Grid>
  </Box>
);

export default MembershipSection;
