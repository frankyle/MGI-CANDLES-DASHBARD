import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

const IncidentsView = ({ incident, onClose }) => {
  if (!incident) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>View Incident</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1">
          <strong>Date:</strong> {incident.date}
        </Typography>
        <Typography variant="body1">
          <strong>Time:</strong> {incident.time}
        </Typography>
        <Typography variant="body1">
          <strong>Incident Location:</strong> {incident.incident_location}
        </Typography>
        <Typography variant="body1">
          <strong>Department:</strong> {incident.department}
        </Typography>
        <Typography variant="body1">
          <strong>Incident Type:</strong> {incident.type_of_incident}
        </Typography>
        <Typography variant="body1">
          <strong>Specific Location:</strong> {incident.specific_location}
        </Typography>
        <Typography variant="body1">
          <strong>Security Service Provider:</strong> {incident.security_provider}
        </Typography>
        <Typography variant="body1">
          <strong>Reported By:</strong> {incident.reported_by}
        </Typography>
        <Typography variant="body1">
          <strong>Details of Incident:</strong> {incident.description}
        </Typography>
        <Typography variant="body1">
          <strong>TPCLTD or Private:</strong> {incident.tpcltd_or_private}
        </Typography>
        <Typography variant="body1">
          <strong>Response Time:</strong> {incident.response_time}
        </Typography>
        <Typography variant="body1">
          <strong>Investigator:</strong> {incident.investigator}
        </Typography>
        <Typography variant="body1">
          <strong>Item Stolen:</strong> {incident.item_stolen}
        </Typography>
        <Typography variant="body1">
          <strong>Hazard WRI:</strong> {incident.hazard_wri_option}
        </Typography>
        <Typography variant="body1">
          <strong>Value of Stolen Items:</strong> {incident.value_of_stolen_items}
        </Typography>
        <Typography variant="body1">
          <strong>Fine:</strong> {incident.fine}
        </Typography>
        <Typography variant="body1">
          <strong>Ammunition Used:</strong> {incident.ammunition_used}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default IncidentsView;
