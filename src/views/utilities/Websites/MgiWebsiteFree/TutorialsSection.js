import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Box, IconButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import image1 from "./../../../../assets/images/websites/hero/hero1.jpg"; // Update with your image path
import image2 from "./../../../../assets/images/websites/hero/hero2.jpg"; // Update with your image path

// Custom styled components
const ConceptSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 2),
  textAlign: 'center',
  backgroundColor: theme.palette.background.default,
}));

const ImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&:hover .search-icon': {
    opacity: 1,
  },
}));

const SearchBox = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.common.white,
  opacity: 0,
  transition: 'opacity 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const TutorialsSection = () => (
  <div id="tutorial-section" className="tutorial-section layout_padding">
    <ConceptSection>
      <Typography variant="h2" gutterBottom>
        OUR CONCEPT
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Explore our advanced trading concepts
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <ImageBox>
              <CardMedia
                component="img"
                alt="Price Action"
                height="200"
                image={image1}
              />
              <SearchBox className="search-icon">
                <SearchIcon />
              </SearchBox>
            </ImageBox>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Price Action
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Understand market movements with Price Action, a trading technique that uses historical price data.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <ImageBox>
              <CardMedia
                component="img"
                alt="Fibonacci Retracement"
                height="200"
                image={image2}
              />
              <SearchBox className="search-icon">
                <SearchIcon />
              </SearchBox>
            </ImageBox>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Fibonacci Retracement
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Learn how to predict market reversals with Fibonacci Retracement, a tool used in technical analysis.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Button variant="contained" color="primary" href="#learn-more">
          Learn More
        </Button>
      </Box>
    </ConceptSection>
  </div>
);

export default TutorialsSection;
