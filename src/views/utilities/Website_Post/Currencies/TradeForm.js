import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Grid } from '@mui/material';

const currencyPairs = ["AUDUSD","AUDNZD","BTCUSD","CADJPY","CHFJPY","EURCAD","EURUSD","EURCHF","EURNZD","EURJPY","EURCAD","GBPAUD","GBPCAD","GBPCHF","GBPJPY","GBPNZD","GBPUSD","NZDCAD", "NZDJPY", "NZDUSD", "USDCAD","USDCHF","USDJPY","USOIL","XAUUSD"];

const TradeForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    risk: 0,
    gainUSD: 0,
    gainTsh: 0,
    increasePercentage: 0,
    newBalance: 0,
    done: "",
    income: 0,
    currency: "",
    riskedPips: 0,
    gainedPips: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Automatically calculate gainTsh and percentage increase
    if (name === 'gainUSD') {
      const gainTsh = value * 2500;
      const percentageIncrease = ((value / formData.risk) * 100).toFixed(2);
      const newBalance = parseFloat(formData.risk) + parseFloat(value);

      setFormData({
        ...formData,
        gainUSD: value,
        gainTsh: gainTsh.toFixed(2),
        increasePercentage: percentageIncrease,
        newBalance: newBalance.toFixed(2),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save data to the database
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* Date Input */}
          <TextField
            label="Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Time Input */}
          <TextField
            label="Time"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Risk ($)"
            type="number"
            name="risk"
            value={formData.risk}
            onChange={handleInputChange}
            required
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Gain ($)"
            type="number"
            name="gainUSD"
            value={formData.gainUSD}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Gain (Tsh)"
            type="number"
            name="gainTsh"
            value={formData.gainTsh}
            InputProps={{ readOnly: true }}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Increase Percentage (%)"
            type="number"
            name="increasePercentage"
            value={formData.increasePercentage}
            InputProps={{ readOnly: true }}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="New Balance ($)"
            type="number"
            name="newBalance"
            value={formData.newBalance}
            InputProps={{ readOnly: true }}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Done</InputLabel>
            <Select
              name="done"
              value={formData.done}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="WIN">WIN</MenuItem>
              <MenuItem value="LOSS">LOSS</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Currency Pair</InputLabel>
            <Select
              name="currency"
              value={formData.currency}
              onChange={handleInputChange}
              required
            >
              {currencyPairs.map((pair, index) => (
                <MenuItem key={index} value={pair}>
                  {pair}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Risked Pips"
            type="number"
            name="riskedPips"
            value={formData.riskedPips}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit Trade
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TradeForm;
