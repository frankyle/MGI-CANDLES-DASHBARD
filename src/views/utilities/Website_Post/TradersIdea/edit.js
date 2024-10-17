import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  MenuItem,
  Box,
} from '@mui/material';

function EditTraderIdeaModal({ open, onClose, ideaToEdit, onSave }) {
  const [formData, setFormData] = useState({
    trade_signal: '',
    currency_pair: '',
    publisher_trader: '',
    trader_platform: '',
  });

  useEffect(() => {
    if (ideaToEdit) {
      setFormData({
        trade_signal: ideaToEdit.trade_signal || '',
        currency_pair: ideaToEdit.currency_pair || '',
        publisher_trader: ideaToEdit.publisher_trader || '',
        trader_platform: ideaToEdit.trader_platform || '',
      });
    }
  }, [ideaToEdit]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave({
      ...ideaToEdit,
      ...formData,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Edit Trader Idea</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 2,
          }}
        >
          <TextField
            label="Trade Signal"
            name="trade_signal"
            value={formData.trade_signal}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />

          <TextField
            select
            label="Currency Pair"
            name="currency_pair"
            value={formData.currency_pair}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          >
            {/* Currency Pair options */}
            <MenuItem value="AUDUSD">AUDUSD</MenuItem>
            <MenuItem value="AUDJPY">AUDJPY</MenuItem>
            <MenuItem value="BTCUSD">BTCUSD</MenuItem>
            <MenuItem value="EURUSD">EURUSD</MenuItem>
            <MenuItem value="GBPUSD">GBPUSD</MenuItem>
            <MenuItem value="USDJPY">USDJPY</MenuItem>
            {/* Add more pairs if needed */}
          </TextField>

          <TextField
            label="Publisher Trader"
            name="publisher_trader"
            value={formData.publisher_trader}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Trader Platform"
            name="trader_platform"
            value={formData.trader_platform}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditTraderIdeaModal;
