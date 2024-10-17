import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const EditTradingSignalModal = ({ open, handleClose, signal, handleInputChange, handleImageChange, handleEditSubmit }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Trading Signal</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Currency Pair"
          name="currency_pair"
          value={signal?.currency_pair || ''}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Pips Gained"
          name="pips_gained"
          type="number"
          value={signal?.pips_gained || ''}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Pips Lost"
          name="pips_lost"
          type="number"
          value={signal?.pips_lost || ''}
          onChange={handleInputChange}
          fullWidth
        />
        {/* Image Upload Fields */}
        <input type="file" name="signal_image" onChange={handleImageChange} />
        <input type="file" name="monday_image" onChange={handleImageChange} />
        {/* Add other days' image inputs similarly */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleEditSubmit(signal)}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTradingSignalModal;
