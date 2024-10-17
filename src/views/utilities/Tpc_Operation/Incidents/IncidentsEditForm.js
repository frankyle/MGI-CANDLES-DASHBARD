import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Button, Paper, Grid, TextField
} from '@mui/material';
import useAxios from '../../../../routes/useAxios';

const IncidentsEditForm = ({ onClose, incident, fetchIncidents }) => {
  const api = useAxios();
  const [editedIncident, setEditedIncident] = useState({
    type_of_incident: '',
    description: '',
    time_of_incident: '',
    department: '',
    incident_location: '',
    specific_location: '',
    security_provider: '',
    tpcltd_or_private: '',
    reported_by: '',
    response_time: '',
    item_stolen: '',
    investigator: '',
    hazard_wri_option: '',
    value_of_stolen_items: '',
    fine: '',
    ammunition_used: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (incident) {
      setEditedIncident(incident);
    }
  }, [incident]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedIncident({
      ...editedIncident,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!editedIncident.type_of_incident) {
      setMessage('Incident Type check');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await api.put(`/tpc/incidents/${editedIncident.id}/`, editedIncident);
      console.log('Response:', response);
      setMessage('Incident updated successfully!');
      fetchIncidents(); // This should now correctly call the fetchIncidents function passed as a prop
      onClose();
    } catch (error) {
      console.error('Error saving incident:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        setMessage(`Error saving incident: ${JSON.stringify(error.response.data)}`);
      } else {
        setMessage('Error saving incident.');
      }
    }
  };

  return (
    <Paper sx={{ width: '80%', margin: '50px auto', padding: 2, backgroundColor: 'white', borderRadius: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Edit Incident</Typography>
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Box>
      {message && <Typography color={message.includes('successfully') ? 'primary' : 'error'}>{message}</Typography>}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="type-of-incident"
              label="Incident Type"
              fullWidth
              variant="outlined"
              name="type_of_incident"
              value={editedIncident.type_of_incident}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              id="incident-description"
              label="Description"
              fullWidth
              variant="outlined"
              name="description"
              value={editedIncident.description}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={4}
            />
            <TextField
              id="time-of-incident"
              label="Time of Incident"
              fullWidth
              variant="outlined"
              name="time_of_incident"
              value={editedIncident.time_of_incident}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              id="department"
              label="Department"
              fullWidth
              variant="outlined"
              name="department"
              value={editedIncident.department}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="incident-location"
              label="Incident Location"
              fullWidth
              variant="outlined"
              name="incident_location"
              value={editedIncident.incident_location}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              id="specific-location"
              label="Specific Location"
              fullWidth
              variant="outlined"
              name="specific_location"
              value={editedIncident.specific_location}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              id="security-provider"
              label="Security Provider"
              fullWidth
              variant="outlined"
              name="security_provider"
              value={editedIncident.security_provider}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              id="reported-by"
              label="Reported By"
              fullWidth
              variant="outlined"
              name="reported_by"
              value={editedIncident.reported_by}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="tpcltd-or-private"
              label="TPCLTD or Private"
              fullWidth
              variant="outlined"
              name="tpcltd_or_private"
              value={editedIncident.tpcltd_or_private}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              id="response-time"
              label="Response Time"
              fullWidth
              variant="outlined"
              name="response_time"
              value={editedIncident.response_time}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              id="investigator"
              label="Investigator"
              fullWidth
              variant="outlined"
              name="investigator"
              value={editedIncident.investigator}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              id="item-stolen"
              label="Item Stolen"
              fullWidth
              variant="outlined"
              name="item_stolen"
              value={editedIncident.item_stolen}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="hazard-wri-option"
              label="Hazard WRI Option"
              fullWidth
              variant="outlined"
              name="hazard_wri_option"
              value={editedIncident.hazard_wri_option}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              id="value-of-stolen-items"
              label="Value of Stolen Items"
              fullWidth
              variant="outlined"
              name="value_of_stolen_items"
              value={editedIncident.value_of_stolen_items}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              id="fine"
              label="Fine"
              fullWidth
              variant="outlined"
              name="fine"
              value={editedIncident.fine}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              id="ammunition-used"
              label="Ammunition Used"
              fullWidth
              variant="outlined"
              name="ammunition_used"
              value={editedIncident.ammunition_used}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default IncidentsEditForm;
