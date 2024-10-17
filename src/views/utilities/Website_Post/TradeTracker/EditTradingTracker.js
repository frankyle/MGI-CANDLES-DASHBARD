import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Input } from '@mui/material';
import useAxios from '../../../../routes/useAxios';

const EditTradingTracker = ({ open, onClose, signal, fetchSignals }) => {
  const api = useAxios();
  const [updatedSignal, setUpdatedSignal] = useState(signal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedSignal((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setUpdatedSignal((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleUpdateSignal = async () => {
    const formData = new FormData();
    for (const key in updatedSignal) {
      formData.append(key, updatedSignal[key]);
    }

    try {
      await api.put(`/api/trading-signals/${signal.id}/`, formData);
      fetchSignals();
      onClose();
    } catch (error) {
      console.error('Error updating trading signal:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Trading Signal</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Currency Pair"
          type="text"
          fullWidth
          name="currency_pair"
          value={updatedSignal.currency_pair}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Date"
          type="date"
          fullWidth
          name="date"
          value={updatedSignal.date}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Day of Week"
          type="text"
          fullWidth
          name="day_of_week"
          value={updatedSignal.day_of_week}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Pips Gained"
          type="number"
          fullWidth
          name="pips_gained"
          value={updatedSignal.pips_gained}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Pips Lost"
          type="number"
          fullWidth
          name="pips_lost"
          value={updatedSignal.pips_lost}
          onChange={handleChange}
        />
        <Input
          type="file"
          fullWidth
          onChange={handleImageChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleUpdateSignal} color="primary">
          Update Signal
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTradingTracker;
