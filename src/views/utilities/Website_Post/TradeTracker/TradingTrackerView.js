import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const TradingTrackerView = ({ open, onClose, signal }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>View Trading Signal</DialogTitle>
      <DialogContent>
        <p><strong>Currency Pair:</strong> {signal.currency_pair}</p>
        <img src={signal.signal_image} alt="Signal" style={{ width: '100%', height: 'auto' }} />
        <img src={signal.monday_image} alt="Monday Signal" style={{ width: '100%', height: 'auto' }} />
        <img src={signal.tuesday_image} alt="Tuesday Signal" style={{ width: '100%', height: 'auto' }} />
        <img src={signal.wednesday_image} alt="Wednesday Signal" style={{ width: '100%', height: 'auto' }} />
        <img src={signal.thursday_image} alt="Thursday Signal" style={{ width: '100%', height: 'auto' }} />
        <img src={signal.friday_image} alt="Friday Signal" style={{ width: '100%', height: 'auto' }} />
        <p><strong>Pips Gained:</strong> {signal.pips_gained}</p>
        <p><strong>Pips Lost:</strong> {signal.pips_lost}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TradingTrackerView;
