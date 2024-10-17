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

const SetupsSection = () => {
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
    <Box sx={{ m: 3, position: 'relative' }}>
      <Typography
        variant="h1"
        component="h1"
        align="center"
        gutterBottom
        className="section-title"
        sx={{ mt: 5, mb: 5 }}  // Add top and bottom margins
      >
       Forecast / Setups Pairs
</Typography>

      <Grid container spacing={3}>
        {candles
          .filter((candle) => candle.signal_candle) // Only include candles with images
          .sort((a, b) => b.is_active - a.is_active || b.id - a.id) // Sort by active status first, then by ID
          .slice(0, 8) // Limit to 8 cards
          .map((candle) => (
            <Grid item xs={12} sm={6} md={3} key={candle.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={candle.signal_candle}
                  alt="Entry Candle"
                  onClick={() => handleOpenImageModal(candle.signal_candle)}
                  sx={{ cursor: 'pointer' }}
                />
                <CardContent>
                  {/* Currency Pair */}
                  <Typography variant="h3" gutterBottom>
                    <strong>{candle.currency_pair}</strong>
                  </Typography>

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
                        color: candle.is_active ? 'green' : 'red',
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

      {/* "More >" Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ bgcolor: 'primary.main' }}>
          More
        </Button>
      </Box>
    </Box>
  );
};

export default SetupsSection;
