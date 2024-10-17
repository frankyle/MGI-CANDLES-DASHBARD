import React from 'react';
import { Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
const ContactSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[3],
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const MapContainer = styled('div')({
  height: '100%',
  width: '100%',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
});

const ContactUs = () => (
  <div className="contact_section layout_padding">
    <div className="container">
      <Typography variant="h2" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        <Grid item md={6}>
          <ContactSection>
            <Typography variant="h5" component="h5" gutterBottom>
              Get in Touch
            </Typography>
            <form noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <TextField
                fullWidth
                variant="outlined"
                label="Name"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Phone Number"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                type="email"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Message"
                multiline
                rows={4}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
              >
                Send
              </Button>
            </form>
          </ContactSection>
        </Grid>
        <Grid item md={6}>
          <MapContainer>
            {/* Replace the below placeholder with your actual map component */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d210.21109116498707!2d39.152942658574126!3d-6.7978418337190245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2stz!4v1724271539403!5m2!1sen!2stz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d210.21109116498707!2d39.152942658574126!3d-6.7978418337190245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2stz!4v1724271539403!5m2!1sen!2stz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </MapContainer>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default ContactUs;
