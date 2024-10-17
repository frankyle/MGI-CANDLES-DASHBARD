
import React, { useState } from 'react';
import { Typography,  Button, Grid, TextField, Autocomplete } from '@mui/material';

// List of staff names
const staffNames = [
  'Pniel Meliyo',
  'Godwin Ondoro',
  'Rashid Bwato',
  'Hassan Sheria',
  'Luka Katabi',
  'John Mwashambo',
  'Noel Myema',
  'Pendael Songambele',
  'Sadiki Kaoneka',
  'Gwakisa Mwakioma',
  'Michael Kimbe',
  'Aisha Kitundu',
  'Abdallah Mgude',
  'Simon Benedict',
  'Jacob Kitundu',
  'Alfayo Silasi',
  'Michael Sarabanzi',
  'Hussen Mhina',
  'Abdi Hamza',
  'David Mollel',
  'Juma Mwena'
];

function PatrolManPower({ handleSubmission }) {
  const [cc, setCC] = useState('');
  const [cd, setCD] = useState('');
  const [crs, setCRS] = useState([]);

  const handleInputChange = (event, value, fieldName) => {
    if (fieldName === 'cc') {
      setCC(value);
    } else if (fieldName === 'cd') {
      setCD(value);
    } else if (fieldName === 'crs') {
      setCRS(value);
    }
  };

  const handleSubmit = () => {
    const formData = {
      cc,
      cd,
      crs
    };
    handleSubmission(formData);
  };

  return (
    <Grid container spacing={2}>
<Typography variant="h6" component="h2" gutterBottom>
        PATROL MAN POWER
      </Typography>
     {user && <p>Logged in as: {user.username}</p>}
      {message && (
        <Typography variant="body1" color="error" marginTop={2}>
          {message}
        </Typography>
      )}
           <Grid item xs={12} sm={6}>
          <TextField
            label="Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>


      <Grid item xs={12} sm={6}>
        <Autocomplete
          options={staffNames}
          value={cc}
          renderInput={(params) => <TextField {...params} label="CC" />}
          onChange={(event, value) => handleInputChange(event, value, 'cc')}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Autocomplete
          options={staffNames}
          value={cd}
          renderInput={(params) => <TextField {...params} label="CD" />}
          onChange={(event, value) => handleInputChange(event, value, 'cd')}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Autocomplete
          options={staffNames}
          value={crs}
          renderInput={(params) => <TextField {...params} label="CRs" />}
          onChange={(event, value) => handleInputChange(event, value, 'crs')}
          multiple
        />
      </Grid>
      <Grid item xs={12}>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      </Grid>
    </Grid>
  );
}

export default PatrolManPower;
