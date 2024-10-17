import React from 'react';
import { Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
const FooterContainer = styled('div')({
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f8f9fa',
  borderTop: '1px solid #e0e0e0',
});

const SocialIcons = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '10px',
  '& a': {
    margin: '0 10px',
    display: 'inline-block',
    '& img': {
      width: '24px',
      height: '24px',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  },
});

const Footer = () => (
  <FooterContainer>
    <SocialIcons>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
      </a>
      
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" />
      </a>
      <a href="https://t.me/your_telegram_handle" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" />
      </a>
    </SocialIcons>
    <Typography variant="body2" color="textSecondary">
      &copy; {new Date().getFullYear()} All Rights Reserved. Design by{' '}
      <Link href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer">
        Frank Magai
      </Link>
    </Typography>
  </FooterContainer>
);

export default Footer;
