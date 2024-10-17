import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import useAxios from '../../../../routes/useAxios';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';

function TradersIdeasEditForm({ open, onClose, candleToEdit, fetchCandles }) {
  const api = useAxios();
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    trade_signal: '',
    currency_pair: '',
    post_date_time: '',
    publisher_trader: '',
    trader_platform: '',
    trader_idea: '', // Image URL
    user: user ? parseInt(user.id) : '', 
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (candleToEdit) {
      setFormData({
        trade_signal: candleToEdit.trade_signal || '',
        currency_pair: candleToEdit.currency_pair || '',
        post_date_time: candleToEdit.post_date_time || '',
        publisher_trader: candleToEdit.publisher_trader || '',
        trader_platform: candleToEdit.trader_platform || '',
        trader_idea: candleToEdit.trader_idea || '',
        user: user ? parseInt(user.id) : '', // Make sure user is set as an integer
      });
    }
  }, [candleToEdit, user]);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file); // Store the file
  };

  const handleSubmit = async () => {
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('trade_signal', formData.trade_signal || candleToEdit.trade_signal);
    formDataToSubmit.append('currency_pair', formData.currency_pair || candleToEdit.currency_pair);
    formDataToSubmit.append('post_date_time', formData.post_date_time || candleToEdit.post_date_time);
    formDataToSubmit.append('publisher_trader', formData.publisher_trader || candleToEdit.publisher_trader);
    formDataToSubmit.append('trader_platform', formData.trader_platform || candleToEdit.trader_platform);
  
    // Ensure user ID is an integer
    formDataToSubmit.append('user', parseInt(user.id, 10));
  
    if (imageFile) {
      formDataToSubmit.append('trader_idea', imageFile);
    }
  
    try {
      await api.put(`/newidea/traderideas/${candleToEdit.id}/`, formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      fetchCandles();
      onClose();
    } catch (error) {
      console.error('Error updating trader idea:', error);
    }
  };
  
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Edit Trader Idea</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2}>

          <FormControl fullWidth>
            <InputLabel>Currency Pair</InputLabel>
            <Select
              name="currency_pair"
              value={formData.currency_pair}
              onChange={handleInputChange}
            >
              <MenuItem value="AUDUSD">AUDUSD</MenuItem>
              <MenuItem value="AUDJPY">AUDNZD</MenuItem>
              <MenuItem value="AUDJPY">AUDJPY</MenuItem>
              <MenuItem value="BTCUSD">BTCUSD</MenuItem>
              <MenuItem value="CADJPY">CADJPY</MenuItem>
              <MenuItem value="CHFJPY">CHFJPY</MenuItem>
              <MenuItem value="EURCAD">EURCAD</MenuItem>
              <MenuItem value="EURUSD">EURUSD</MenuItem>
              <MenuItem value="EURCHF">EURCHF</MenuItem>
              <MenuItem value="EURNZD">EURNZD</MenuItem>
              <MenuItem value="EURJPY">EURJPY</MenuItem>
              <MenuItem value="GBPAUD">GBPAUD</MenuItem>
              <MenuItem value="GBPCAD">GBPCAD</MenuItem>
              <MenuItem value="GBPCHF">GBPCHF</MenuItem>
              <MenuItem value="GBPJPY">GBPJPY</MenuItem>
              <MenuItem value="GBPNZD">GBPNZD</MenuItem>
              <MenuItem value="GBPUSD">GBPUSD</MenuItem>
              <MenuItem value="NZDCAD">NZDCAD</MenuItem>
              <MenuItem value="NZDJPY">NZDJPY</MenuItem>
              <MenuItem value="NZDUSD">NZDUSD</MenuItem>
              <MenuItem value="USDCAD">USDCAD</MenuItem>
              <MenuItem value="USDCHF">USDCHF</MenuItem>
              <MenuItem value="USDJPY">USDJPY</MenuItem>
              <MenuItem value="USOIL">USOIL</MenuItem>
              <MenuItem value="XAGUSD">XAGUSD</MenuItem>
              <MenuItem value="XAUUSD">XAUUSD</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Trade Signal</InputLabel>
            <Select
              name="trade_signal"
              value={formData.trade_signal}
              onChange={handleInputChange}
            >
              <MenuItem value="buy">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowUpward color="primary" fontSize="small" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    Buy
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem value="sell">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowDownward color="error" fontSize="small" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    Sell
                  </Typography>
                </Box>
              </MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="publisher-trader"
            name="publisher_trader"
            select
            label="Publisher Trader"
            fullWidth
            variant="outlined"
            value={formData.publisher_trader}
            onChange={handleInputChange}
            margin="normal"
          >
             {['FX_Elite_Club', 'Golden Engine', 'Mobbie_zw', 'Mjuni Fx', 'KhabiFx', 'Sir Drapo', 'SetupFx', 'StockSniper', 'TransparentFx', 'Other Trader'].map((platform) => (
              <MenuItem key={platform} value={platform}>
                {platform}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="trader-platform"
            name="trader_platform"
            select
            label="Trader Platform"
            fullWidth
            variant="outlined"
            value={formData.trader_platform}
            onChange={handleInputChange}
            margin="normal"
          >
            {['Trading View', 'YouTube', 'Whatsapp'].map((platform) => (
              <MenuItem key={platform} value={platform}>
                {platform}
              </MenuItem>
            ))}
          </TextField>

          <Typography variant="body1">Current Image</Typography>
          {formData.trader_idea && (
            <img
              src={formData.trader_idea}
              alt="Trader Idea"
              style={{ width: '150px', height: '100px' }}
            />
          )}

          <Button variant="contained" component="label">
            Upload New Image
            <input type="file" hidden onChange={handleImageChange} />
          </Button>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TradersIdeasEditForm;
