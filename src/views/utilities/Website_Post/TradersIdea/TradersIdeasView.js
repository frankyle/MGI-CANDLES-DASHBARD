import React, { useState, useEffect } from 'react';
import { Modal, Card, CardContent, CardMedia, Typography, Grid, Checkbox, FormControlLabel, CardActions } from '@mui/material';
import useAxios from '../../../../routes/useAxios';

const TradersIdeasView = ({ open, onClose, candleId }) => {
  const api = useAxios();
  const [candle, setCandle] = useState(null);
  const [signalCandleUrl, setSignalCandleUrl] = useState(null);
  const [hourCandleUrl, setHourCandleUrl] = useState(null);

  useEffect(() => {
    const fetchCandle = async () => {
      try {
        const response = await api.get(`/mgi/mgicandles/${candleId}/`);
        setCandle(response.data);
        setSignalCandleUrl(response.data.signal_candle);
        setHourCandleUrl(response.data.hour_candle);
      } catch (error) {
        console.error('Error fetching candle:', error);
      }
    };

    if (candleId) {
      fetchCandle();
    }
  }, [candleId, api]);

  if (!candle) {
    return null;
  }

  return (
    <Modal open={open} onClose={onClose}>
      
      <Card sx={{ width: '90%', maxWidth: 600, margin: 'auto', padding: 3 }}>
      <Typography variant="h6">MGI Strategy PREVIEW</Typography>
        
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>Currency Pair</Typography>
              <Typography>{candle.currency_pair}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>Trade Signal</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{candle.trade_signal}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              {signalCandleUrl && (
                <CardMedia
                  component="img"
                  image={signalCandleUrl}
                  alt="Signal Candle"
                  style={{ maxHeight: 150, borderRadius: 4, border: '2px solid #ccc', objectFit: 'cover' }}
                />
              )}
            </Grid>
            <Grid item xs={6}>
              {hourCandleUrl && (
                <CardMedia
                  component="img"
                  image={hourCandleUrl}
                  alt="Hour Candle"
                  style={{ maxHeight: 150, borderRadius: 4, border: '2px solid #ccc', objectFit: 'cover' }}
                />
              )}
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox checked={candle.flip_four_hour_candle} />} label="Flip 4 Hour Candle" disabled />
              <FormControlLabel control={<Checkbox checked={candle.four_hour_break_of_structure} />} label="4 Hour Break of Structure" disabled />
              <FormControlLabel control={<Checkbox checked={candle.five_min_break_of_structure} />} label="5 Min Break of Structure" disabled />
              <FormControlLabel control={<Checkbox checked={candle.five_min_order_block} />} label="5 Min Order Block" disabled />
              <FormControlLabel control={<Checkbox checked={candle.change_color_ut_alert} />} label="Change Color UT Alert" disabled />
              <FormControlLabel control={<Checkbox checked={candle.is_active} />} label="Is Active" disabled />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {/* Card actions can be removed if not needed */}
        </CardActions>
      </Card>
    </Modal>
  );
};

export default TradersIdeasView;
