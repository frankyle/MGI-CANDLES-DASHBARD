import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import useAxios from './../../../../routes/useAxios'; // Assuming useAxios is a custom hook for API requests

const ViewNextServiceCheckup = () => {
  const api = useAxios();
  const [next_service, setNewService] = useState('');
  const [next_checkup, setNewCheckup] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error message

  useEffect(() => {
    const fetchLatestServiceCheckup = async () => {
      setIsLoading(true); // Set loading indicator to true
      setError(null); // Clear any previous error

      try {
        const response = await api.get('/tpc/next-service-checkup/'); 
        
        console.log(response.data)
        setNewService(response.data.next_service);
        setNewCheckup(response.data.next_checkup);
      } catch (error) {
        console.error('Error fetching latest service checkup:', error);
        setError('An error occurred while fetching data. Please try again later.'); // User-friendly error message
      } finally {
        setIsLoading(false); // Set loading indicator to false after successful fetch or error
      }
    };

    fetchLatestServiceCheckup();
  }, [api]);

  return (
    <div>
      {isLoading ? (
        <Typography variant="body2" color="textSecondary">
          Loading data...
        </Typography>
      ) : error ? (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      ) : (
        <>
           <Typography variant="h6" style={{ marginTop: '20px' }}>
          Next Service: {next_service}
        </Typography>
        <Typography variant="h6">
          Next Checkup: {next_checkup}
        </Typography>
        </>
      )}
    </div>
  );
};

export default ViewNextServiceCheckup;
