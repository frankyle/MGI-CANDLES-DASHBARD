import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'; // Importing MUI Button for styling

const LoginSignupButtons = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Navigates to the login page
  };

  const handleSignupClick = () => {
    navigate('/register'); // Navigates to the signup page
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleLoginClick} style={{ marginRight: '10px' }}>
        Login
      </Button>
      <Button variant="contained" color="secondary" onClick={handleSignupClick}>
        Register
      </Button>
    </div>
  );
};

export default LoginSignupButtons;
