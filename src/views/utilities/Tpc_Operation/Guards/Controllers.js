import React, { useState } from 'react';
import { Typography, FormControl, InputLabel, Select, MenuItem, Button, Grid, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useAxios from './../../../../routes/useAxios';
import { useSelector } from 'react-redux';
import ControllerShiftTable from './ControllerShiftTable';

const ControllerShiftInput = () => {

  const api = useAxios();
  const { user } = useSelector((state) => state.auth);
  const [message, setMessage] = useState('');

  // Controllers for shifts
  const dayControllers = ['Issack Mollel', 'Richard Mollel', 'Sesi Alex', 'Jock']; // Controllers for day shift
  const nightControllers = ['Issack Mollel', 'Richard Mollel', 'Sesi Alex', 'Jock']; // Controllers for night shift

  // State to store selected shift, date, and controllers
  const [shift, setShift] = useState('');
  const [date, setDate] = useState('');
  const [dayController1, setDayController1] = useState('');
  const [dayController2, setDayController2] = useState('');
  const [nightController1, setNightController1] = useState('');
  const [nightController2, setNightController2] = useState('');
  const [formData, setFormData] = useState([]);

  // Handle form submission
  const handleSubmit = async () => {
    // Check if there's an existing entry for the same date
    const existingEntryIndex = formData.findIndex(entry => entry.date === date);
    const newEntry = {
      date,
      shift,
      dayController1,
      dayController2,
      nightController1,
      nightController2,
    };

    if (existingEntryIndex !== -1) {
      // Update the existing entry
      const updatedFormData = [...formData];
      if (shift === 'day') {
        updatedFormData[existingEntryIndex].dayController1 = dayController1;
        updatedFormData[existingEntryIndex].dayController2 = dayController2;
      } else {
        updatedFormData[existingEntryIndex].nightController1 = nightController1;
        updatedFormData[existingEntryIndex].nightController2 = nightController2;
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
      day_controller1: dayController1,
      day_controller2: dayController2,
      night_controller1: nightController1,
      night_controller2: nightController2,
    };

    try {
      // Make API call to submit data
      const response = await api.post('/tpc/controller-shift/', payload);
      if (response.status === 201) {
        setMessage('Data submitted successfully!');
        // Reset form fields
        setShift('');
        setDate('');
        setDayController1('');
        setDayController2('');
        setNightController1('');
        setNightController2('');
      } else {
        setMessage('Error submitting Data. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }

    
  };

  return (
    <div className="controller-shift-input">
      <Typography variant="h6" component="h2" gutterBottom>
        Controllers Shift
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
                <InputLabel>Controller 1</InputLabel>
                <Select
                  value={dayController1}
                  onChange={(e) => setDayController1(e.target.value)}
                >
                  {dayControllers.map((controller, index) => (
                    <MenuItem key={index} value={controller}>{controller}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Controller 2</InputLabel>
                <Select
                  value={dayController2}
                  onChange={(e) => setDayController2(e.target.value)}
                >
                  {dayControllers.map((controller, index) => (
                    <MenuItem key={index} value={controller}>{controller}</MenuItem>
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
                <InputLabel>Controller 1</InputLabel>
                <Select
                  value={nightController1}
                  onChange={(e) => setNightController1(e.target.value)}
                >
                  {nightControllers.map((controller, index) => (
                    <MenuItem key={index} value={controller}>{controller}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Controller 2</InputLabel>
                <Select
                  value={nightController2}
                  onChange={(e) => setNightController2(e.target.value)}
                >
                  {nightControllers.map((controller, index) => (
                    <MenuItem key={index} value={controller}>{controller}</MenuItem>
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
                <TableCell>Day Controller 1</TableCell>
                <TableCell>Day Controller 2</TableCell>
                <TableCell>Night Controller 1</TableCell>
                <TableCell>Night Controller 2</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formData.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.shift}</TableCell>
                  <TableCell>{entry.dayController1}</TableCell>
                  <TableCell>{entry.dayController2}</TableCell>
                  <TableCell>{entry.nightController1}</TableCell>
                  <TableCell>{entry.nightController2}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}


      <ControllerShiftTable />
    </div>
  );
};

export default ControllerShiftInput;
