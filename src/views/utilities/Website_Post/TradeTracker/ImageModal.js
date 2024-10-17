import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText } from '@mui/material';

const ImageModal = ({ open, handleClose, imageUrl }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Trader Idea Image</DialogTitle>
      <DialogContent>
        {imageUrl ? (
          <DialogContentText>
            <img src={imageUrl} alt="Trading Idea" style={{ width: '100%' }} />
          </DialogContentText>
        ) : (
          <DialogContentText>No image available for this idea.</DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageModal;
