import React, { useState } from 'react';
import { Typography, FormControl, InputLabel, Select, MenuItem, Button, Grid, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useAxios from './../../../../routes/useAxios';
import { useSelector } from 'react-redux';
import CyclistShiftTable from './CyclistShiftTable';

const Cyclists = () => {

  const api = useAxios();
  const { user } = useSelector((state) => state.auth);
  const [message, setMessage] = useState('');

  // Cyclists for shifts
  const dayCyclists = ['John Doe', 'Jane Doe', 'Michael Smith', 'Emily Davis']; // Cyclists for day shift
  const nightCyclists = ['John Doe', 'Jane Doe', 'Michael Smith', 'Emily Davis']; // Cyclists for night shift

  // State to store selected shift, date, and cyclists
  const [shift, setShift] = useState('');
  const [date, setDate] = useState('');
  const [dayCyclist1, setDayCyclist1] = useState('');
  const [dayCyclist2, setDayCyclist2] = useState('');
  const [nightCyclist1, setNightCyclist1] = useState('');
  const [nightCyclist2, setNightCyclist2] = useState('');
  const [formData, setFormData] = useState([]);

  // Handle form submission
  const handleSubmit = async () => {
    // Check if there's an existing entry for the same date
    const existingEntryIndex = formData.findIndex(entry => entry.date === date);
    const newEntry = {
      date,
      shift,
      dayCyclist1,
      dayCyclist2,
      nightCyclist1,
      nightCyclist2,
    };

    if (existingEntryIndex !== -1) {
      // Update the existing entry
      const updatedFormData = [...formData];
      if (shift === 'day') {
        updatedFormData[existingEntryIndex].dayCyclist1 = dayCyclist1;
        updatedFormData[existingEntryIndex].dayCyclist2 = dayCyclist2;
      } else {
        updatedFormData[existingEntryIndex].nightCyclist1 = nightCyclist1;
        updatedFormData[existingEntryIndex].nightCyclist2 = nightCyclist2;
      }
      setFormData(updatedFormData);
    } else {
      // Add a new entry
      setFormData([...formData, newEntry]);
    }

    // Prepare data for API submission
    const payload = {
      user: user.id,
      date,
      shift,
      day_cyclist1: dayCyclist1,
      day_cyclist2: dayCyclist2,
      night_cyclist1: nightCyclist1,
      night_cyclist2: nightCyclist2,
    };

    try {
      // Make API call to submit data
      const response = await api.post('/tpc/cyclist-shift/', payload);
      if (response.status === 201) {
        setMessage('Data submitted successfully!');
        // Reset form fields
        setShift('');
        setDate('');
        setDayCyclist1('');
        setDayCyclist2('');
        setNightCyclist1('');
        setNightCyclist2('');
      } else {
        setMessage('Error submitting data. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }

    
  };

  return (
    <div className="cyclist-shift-input">
      <Typography variant="h6" component="h2" gutterBottom>
        Cyclists Shift
      </Typography>
      {user && <p>Logged in as: {user.username}</p>}
      {message && (
        <Typography variant="body1" color="error" marginTop={2}>
          {message}
        </Typography>
      )}

      <Grid container spacing={3}>
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
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel htmlFor="shift-selector">Shift</InputLabel>
            <Select
              label="Shift"
              id="shift-selector"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
            >
              <MenuItem value="day">Day Shift</MenuItem>
              <MenuItem value="night">Night Shift</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {shift === 'day' && (
          <>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Cyclist 1</InputLabel>
                <Select
                  value={dayCyclist1}
                  onChange={(e) => setDayCyclist1(e.target.value)}
                >
                  {dayCyclists.map((cyclist, index) => (
                    <MenuItem key={index} value={cyclist}>{cyclist}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Cyclist 2</InputLabel>
                <Select
                  value={dayCyclist2}
                  onChange={(e) => setDayCyclist2(e.target.value)}
                >
                  {dayCyclists.map((cyclist, index) => (
                    <MenuItem key={index} value={cyclist}>{cyclist}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </>
        )}

        {shift === 'night' && (
          <>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Cyclist 1</InputLabel>
                <Select
                  value={nightCyclist1}
                  onChange={(e) => setNightCyclist1(e.target.value)}
                >
                  {nightCyclists.map((cyclist, index) => (
                    <MenuItem key={index} value={cyclist}>{cyclist}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Cyclist 2</InputLabel>
                <Select
                  value={nightCyclist2}
                  onChange={(e) => setNightCyclist2(e.target.value)}
                >
                  {nightCyclists.map((cyclist, index) => (
                    <MenuItem key={index} value={cyclist}>{cyclist}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </>
        )}
      </Grid>

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginTop: '20px' }}
      >
        Submit
      </Button>

      {/* Output Table */}
      {formData.length > 0 && (
        <TableContainer component={Paper} style={{ marginTop: '30px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Shift</TableCell>
                <TableCell>Day Cyclist 1</TableCell>
                <TableCell>Day Cyclist 2</TableCell>
                <TableCell>Night Cyclist 1</TableCell>
                <TableCell>Night Cyclist 2</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formData.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.shift}</TableCell>
                  <TableCell>{entry.dayCyclist1}</TableCell>
                  <TableCell>{entry.dayCyclist2}</TableCell>
                  <TableCell>{entry.nightCyclist1}</TableCell>
                  <TableCell>{entry.nightCyclist2}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <CyclistShiftTable />
    </div>
  );
};

export default Cyclists;
