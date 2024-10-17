import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Autocomplete,
  Button,
  Typography, FormControl, FormLabel, FormGroup, FormControlLabel,
  Checkbox 

} from '@mui/material';
import {
  incidentTypes,
  departments,
  incidentLocations,
  securityServiceProviders,
  tpcltdOrPrivate,
  investigator,
  hazardWriOptions,
} from '../dummy/dummy'; // Make sure these variables are imported correctly from your dummy data
import useAxios from './../../../../routes/useAxios';
import { useSelector } from 'react-redux';

const Incidents = () => {
  const api = useAxios();
  const { user } = useSelector((state) => state.auth);

  const [incidentData, setIncidentData] = useState({
    incidentType: '',
    description: '',
    department: '',
    incidentLocation: '',
    specificLocation: '',
    securityServiceProvider: '',
    reportedby: '',
    tpcltdOrPrivate: '',
    responseTime: '',
    investigator: '',
    itemStolen: '',
    hazardWri: '',
    valueOfStolen: '',
    fine: '',
    ammunitionUsed: '',


    incidentDate: '',
    incidentTime: '',
    policeRb: '',
    receipt : '',
    attendedBy: [],  // Array to store selected values


  });
  const [message, setMessage] = useState('');

  const handleInputChange = (event, newValue, field) => {
    if (newValue !== undefined) {
      setIncidentData((prevData) => ({ ...prevData, [field]: newValue }));
    } else {
      const { name, value } = event.target;
      setIncidentData((prevData) => ({ ...prevData, [field || name]: value }));
    }
  };

  const handleAttendedByChange = (event) => {
    const { name, checked } = event.target;
    setIncidentData((prevData) => ({
      ...prevData,
      attendedBy: checked
        ? [...prevData.attendedBy, name]
        : prevData.attendedBy.filter((item) => item !== name)
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { incidentType, description } = incidentData;
    const attendedByString = incidentData.attendedBy.join(',');
    
    try {
      const response = await api.post('/tpc/incidents/', {
        user: user.id,
        type_of_incident: incidentType,
        description,
        department: incidentData.department,
        incident_location: incidentData.incidentLocation,
        specific_location: incidentData.specificLocation,
        security_provider: incidentData.securityServiceProvider,
        tpcltd_or_private: incidentData.tpcltdOrPrivate,
        reported_by: incidentData.reportedby,
        response_time: incidentData.responseTime,
        item_stolen: incidentData.itemStolen,
        investigator: incidentData.investigator,
        hazard_wri_option: incidentData.hazardWri,
        value_of_stolen_items: incidentData.valueOfStolen,
        fine: incidentData.fine,
        ammunition_used: incidentData.ammunitionUsed,

        incident_date: incidentData.incidentDate,
        incident_time: incidentData.incidentTime,
        police_rb: incidentData.policeRb,
        receipt: incidentData.receipt,
        attended_by: attendedByString,

      });

      if (response.status === 201) {
        setMessage('Incident submitted successfully!');
        setIncidentData({
          incidentType: '',
          description: '',
          department: '',
          incidentLocation: '',
          specificLocation: '',
          securityServiceProvider: '',
          reportedby: '',
          tpcltdOrPrivate: '',
          responseTime: '',
          investigator: '',
          itemStolen: '',
          hazardWri: '',
          valueOfStolen: '',
          fine: '',
          ammunitionUsed: '',


          incidentDate: '',
          incidentTime: '',
          policeRb: '',
          receipt : '',
          attendedBy: [],  // Array to store selected values

        });
      } else {
        setMessage('Error submitting incident. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting incident:', error);
      setMessage(`Error submitting incident: ${error.response?.data?.detail || error.message}`);
    }
  };

  return (
    <div className="new-incident-form">
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        NEW INCIDENT FORM
      </Typography>
      {user && <p>Logged in as: {user.username}</p>}
      {message && (
        <Typography variant="body1" color="error" marginTop={2}>
          {message}
        </Typography>
      )}

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}> 
            <TextField
              label="Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              margin="normal"
              value={incidentData.incidentDate}
              onChange={(event) => handleInputChange(event, event.target.value, 'incidentDate')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Time"
              type="time"
              InputLabelProps={{ shrink: true }}
              fullWidth
              margin="normal"
              value={incidentData.incidentTime}
              onChange={(event) => handleInputChange(event, event.target.value, 'incidentTime')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              value={incidentData.incidentType}
              onChange={(event, newInputValue) => handleInputChange(event, newInputValue, 'incidentType')}
              options={incidentTypes}
              renderInput={(params) => <TextField {...params} label="Type of Incident" />}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Details of Incident"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={incidentData.description}
              onChange={(event) => handleInputChange(event, undefined, 'description')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              value={incidentData.department}
              onChange={(event, newInputValue) => handleInputChange(event, newInputValue, 'department')}
              options={departments}
              renderInput={(params) => <TextField {...params} label="Department" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              value={incidentData.incidentLocation}
              onChange={(event, newInputValue) =>
                handleInputChange(event, newInputValue, 'incidentLocation')
              }
              options={incidentLocations}
              renderInput={(params) => <TextField {...params} label="Incident Location" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Specific Location"
              fullWidth
              margin="normal"
              value={incidentData.specificLocation}
              onChange={(event) => handleInputChange(event, undefined, 'specificLocation')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              value={incidentData.securityServiceProvider}
              onChange={(event, newInputValue) =>
                handleInputChange(event, newInputValue, 'securityServiceProvider')
              }
              options={securityServiceProviders}
              renderInput={(params) => <TextField {...params} label="Security Service Provider" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Reported by"
              fullWidth
              value={incidentData.reportedby}
              onChange={(event) => handleInputChange(event, undefined, 'reportedby')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              value={incidentData.tpcltdOrPrivate}
              onChange={(event, newInputValue) => handleInputChange(event, newInputValue, 'tpcltdOrPrivate')}
              options={tpcltdOrPrivate}
              renderInput={(params) => <TextField {...params} label="TPC LTD or Private" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}> 
          
          <FormControl sx={{ marginTop: 2 }} fullWidth> 
          <FormLabel component="legend">Attended By</FormLabel> 
              <FormGroup row>
                <FormControlLabel 
                  control={<Checkbox value="RANGERS" />} 
                  label="Rangers" 
                  onChange={handleAttendedByChange} 
                />
                <FormControlLabel 
                  control={<Checkbox value="QRF" />} 
                  label="QRF" 
                  onChange={handleAttendedByChange} 
                />
                
                <FormControlLabel 
                  control={<Checkbox value="OM" />} 
                  label="OM" 
                  onChange={handleAttendedByChange} 
                />
                <FormControlLabel 
                  control={<Checkbox value="FIRE" />} 
                  label="Fire Attendants" 
                  onChange={handleAttendedByChange} 
                />
                <FormControlLabel 
                  control={<Checkbox value="Ambulance" />} 
                  label="Ambulance" 
                  onChange={handleAttendedByChange} 
                />
              </FormGroup>
            </FormControl>
          </Grid>
  
          <Grid item xs={12} sm={6}>
            <TextField
              label="Response Time"
              fullWidth
              margin="normal"
              value={incidentData.responseTime}
              onChange={(event) => handleInputChange(event, undefined, 'responseTime')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              value={incidentData.investigator}
              onChange={(event, newInputValue) => handleInputChange(event, newInputValue, 'investigator')}
              options={investigator}
              renderInput={(params) => <TextField {...params} label="Investigator" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Item Stolen"
              fullWidth
              margin="normal"
              value={incidentData.itemStolen}
              onChange={(event) => handleInputChange(event, undefined, 'itemStolen')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              value={incidentData.hazardWri}
              onChange={(event, newInputValue) => handleInputChange(event, newInputValue, 'hazardWri')}
              options={hazardWriOptions}
              renderInput={(params) => <TextField {...params} label="Hazard WRI Option" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Value of Stolen Items"
              fullWidth
              margin="normal"
              value={incidentData.valueOfStolen}
              onChange={(event) => handleInputChange(event, undefined, 'valueOfStolen')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fine"
              fullWidth
              margin="normal"
              value={incidentData.fine}
              onChange={(event) => handleInputChange(event, undefined, 'fine')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Police RB"
              fullWidth
              margin="normal"
              value={incidentData.policeRb}
              onChange={(event) => handleInputChange(event, undefined, 'policeRb')}
            />
          </Grid>
          <Grid item xs={12} sm={6}> 
          <TextField
            label="Receipt"
            fullWidth
            margin="normal"
            value={incidentData.receipt}
            onChange={(event) => handleInputChange(event, event.target.value, 'receipt')}
          />
        </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Ammunition Used"
              fullWidth
              margin="normal"
              value={incidentData.ammunitionUsed}
              onChange={(event) => handleInputChange(event, undefined, 'ammunitionUsed')}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Submit Incident
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default Incidents;