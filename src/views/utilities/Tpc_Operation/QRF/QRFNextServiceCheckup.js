import React, { useState } from 'react';
import { TextField, Button, Typography, Modal, Box } from '@mui/material';
import useAxios from './../../../../routes/useAxios'; // Adjust path as per your project structure
import { useSelector } from 'react-redux';

const QRFNextServiceCheckup = ({ open, handleClose }) => {
    const api = useAxios();
    const { user } = useSelector((state) => state.auth);
    const [message, setMessage] = useState('');
    const [newService, setNewService] = useState('');
    const [newCheckup, setNewCheckup] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await api.post('/tpc/next-service-checkup/', {
          next_service: newService,
          next_checkup : newCheckup,
          user: user.id  // Assuming user.id is required for the API request
        });
  
        if (response.status === 201) {
          setMessage('Next Service Checkup submitted successfully!');
          // Clear input fields after successful submission
          setNewService('');
          setNewCheckup('');
        } else {
          setMessage('Error submitting Next Service Checkup. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting Next Service Checkup:', error);
        setMessage(`Error submitting: ${error.response?.data?.detail || error.message}`);
      }
    };
  
    return (
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 8,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Next Check-up and Service
          </Typography>
          <TextField
            label="Update Next Service (kilometers)"
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Update Next Check-up (kilometers)"
            value={newCheckup}
            onChange={(e) => setNewCheckup(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mb: 2 }}
          >
            Submit
          </Button>
          {message && (
            <Typography variant="body1" color="error" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
        </Box>
      </Modal>
    );
  };
  
export default QRFNextServiceCheckup
