import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useAxios from '../../../../routes/useAxios';

const SignalsSection = () => {
  const api = useAxios();
  const [candles, setCandles] = useState([]);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchCandles = async () => {
    try {
      const response = await api.get('/mgi/mgicandles/');
      setCandles(response.data);
    } catch (error) {
      console.error('Error fetching MGI candles:', error);
    }
  };

  useEffect(() => {
    fetchCandles();
  }, []);

  const handleOpenImageModal = (image) => {
    setSelectedImage(image);
    setOpenImageModal(true);
  };

  const handleCloseImageModal = () => {
    setOpenImageModal(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ m: 3 }}>
      <Typography 
      variant="h1" 
      component="h1" 
      align="center" 
      gutterBottom 
      className="section-title"
      sx={{ mt: 5, mb: 5 }}
      >
        Daily Forex Entries
      </Typography>
      <Grid container spacing={3}>
        {candles
          .filter((candle) => candle.entry_candle) // Only include candles that have an image
          .sort((a, b) => b.id - a.id) // Sort by ID in descending order (latest first)
          .slice(0, 6) // Get only the latest 6 candles
          .map((candle) => (
            <Grid item xs={12} sm={6} md={3} key={candle.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={candle.entry_candle}
                  alt="Entry Candle"
                  onClick={() => handleOpenImageModal(candle.entry_candle)}
                  sx={{ cursor: 'pointer' }}
                />
                <CardContent>
                  {/* Trade Signal */}
                  <Typography variant="body1">
                    <strong>Trade Signal:</strong>{' '}
                    <span
                      style={{
                        color: candle.trade_signal.toUpperCase() === 'BUY' ? 'blue' : 'red',
                        fontWeight: 'bold',
                      }}
                    >
                      {candle.trade_signal.toUpperCase()}
                    </span>
                  </Typography>

                  {/* Status */}
                  <Typography variant="body1">
                    <strong>Status:</strong>{' '}
                    <span
                      style={{
                        color: candle.is_active ? 'blue' : 'red',
                        fontWeight: 'bold',
                      }}
                    >
                      {candle.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </Typography>

                  {/* 4hr Flip Candle */}
                  <Typography variant="body1">
                    <strong>4hr Flip Candle:</strong>{' '}
                    <span
                      style={{
                        color: candle.flip_four_hour_candle ? 'blue' : 'red',
                        fontWeight: 'bold',
                      }}
                    >
                      {candle.flip_four_hour_candle ? 'Yes' : 'No'}
                    </span>
                  </Typography>

                  {/* 4hr Break of Structure */}
                  <Typography variant="body1">
                    <strong>4hr Break of Structure:</strong>{' '}
                    <span
                      style={{
                        color: candle.four_hour_break_of_structure ? 'blue' : 'red',
                        fontWeight: 'bold',
                      }}
                    >
                      {candle.four_hour_break_of_structure ? 'Yes' : 'No'}
                    </span>
                  </Typography>

                  {/* Session */}
                  <Typography variant="body1">
                    <strong>Session:</strong>{' '}
                    <span
                      style={{
                        color: candle.session.toLowerCase() === 'london' ? 'blue' : candle.session.toLowerCase() === 'newyork' ? 'orange' : 'black',
                        fontWeight: 'bold',
                      }}
                    >
                      {candle.session}
                    </span>
                  </Typography>

                  {/* Candle Pattern */}
                  <Typography variant="body1">
                    <strong>Candle Pattern:</strong> {candle.candle_pattern}
                  </Typography>

                  {/* Fibonacci Level */}
                  <Typography variant="body1">
                    <strong>Fibonacci Level:</strong> {candle.fibonacci_level}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>

      {/* Full Image Modal */}
      <Dialog open={openImageModal} onClose={handleCloseImageModal}>
        <DialogTitle>Full Candle Image</DialogTitle>
        <DialogContent>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full Candle"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </DialogContent>
        <Button onClick={handleCloseImageModal} sx={{ m: 2 }}>Close</Button>
      </Dialog>

      {/* More Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ bgcolor: 'primary.main' }}>
          More
        </Button>
      </Box>
    </Box>
  );
};

export default SignalsSection;
