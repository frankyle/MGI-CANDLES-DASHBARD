import React, { useState } from 'react';
import { Typography, FormControl, InputLabel, Select, MenuItem, Button, Grid, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useAxios from './../../../../routes/useAxios';
import { useSelector } from 'react-redux';
import MotorcycleTable from './MotorcycleTable';

const MotorcycleForm = () => {

  const api = useAxios();
  const { user } = useSelector((state) => state.auth);
  const [message, setMessage] = useState('');

  // Motorcyclists for shifts
  const dayMotorcyclists = ['John Doe', 'Jane Doe', 'Michael Smith', 'Emily Davis']; // Motorcyclists for day shift
  const nightMotorcyclists = ['John Doe', 'Jane Doe', 'Michael Smith', 'Emily Davis']; // Motorcyclists for night shift

  // State to store selected shift, date, and motorcyclists
  const [shift, setShift] = useState('');
  const [date, setDate] = useState('');
  const [dayMotorcyclist1, setDayMotorcyclist1] = useState('');
  const [dayMotorcyclist2, setDayMotorcyclist2] = useState('');
  const [nightMotorcyclist1, setNightMotorcyclist1] = useState('');
  const [nightMotorcyclist2, setNightMotorcyclist2] = useState('');
  const [formData, setFormData] = useState([]);

  // Handle form submission
  const handleSubmit = async () => {
    // Check if there's an existing entry for the same date
    const existingEntryIndex = formData.findIndex(entry => entry.date === date);
    const newEntry = {
      date,
      shift,
      dayMotorcyclist1,
      dayMotorcyclist2,
      nightMotorcyclist1,
      nightMotorcyclist2,
    };

    if (existingEntryIndex !== -1) {
      // Update the existing entry
      const updatedFormData = [...formData];
      if (shift === 'day') {
        updatedFormData[existingEntryIndex].dayMotorcyclist1 = dayMotorcyclist1;
        updatedFormData[existingEntryIndex].dayMotorcyclist2 = dayMotorcyclist2;
      } else {
        updatedFormData[existingEntryIndex].nightMotorcyclist1 = nightMotorcyclist1;
        updatedFormData[existingEntryIndex].nightMotorcyclist2 = nightMotorcyclist2;
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
      day_motorcyclist1: dayMotorcyclist1,
      day_motorcyclist2: dayMotorcyclist2,
      night_motorcyclist1: nightMotorcyclist1,
      night_motorcyclist2: nightMotorcyclist2,
    };

    try {
      // Make API call to submit data
      const response = await api.post('/tpc/motorcyclist-shift/', payload);
      if (response.status === 201) {
        setMessage('Data submitted successfully!');
        // Reset form fields
        setShift('');
        setDate('');
        setDayMotorcyclist1('');
        setDayMotorcyclist2('');
        setNightMotorcyclist1('');
        setNightMotorcyclist2('');
      } else {
        setMessage('Error submitting data. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      setMessage('Error submitting data. Please try again.');
    }
  };

  return (
    <div className="motorcycle-shift-input">
      <Typography variant="h6" component="h2" gutterBottom>
        Motorcyclists Shift
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
                <InputLabel>Motorcyclist 1</InputLabel>
                <Select
                  value={dayMotorcyclist1}
                  onChange={(e) => setDayMotorcyclist1(e.target.value)}
                >
                  {dayMotorcyclists.map((motorcyclist, index) => (
                    <MenuItem key={index} value={motorcyclist}>{motorcyclist}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Motorcyclist 2</InputLabel>
                <Select
                  value={dayMotorcyclist2}
                  onChange={(e) => setDayMotorcyclist2(e.target.value)}
                >
                  {dayMotorcyclists.map((motorcyclist, index) => (
                    <MenuItem key={index} value={motorcyclist}>{motorcyclist}</MenuItem>
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
                <InputLabel>Motorcyclist 1</InputLabel>
                <Select
                  value={nightMotorcyclist1}
                  onChange={(e) => setNightMotorcyclist1(e.target.value)}
                >
                  {nightMotorcyclists.map((motorcyclist, index) => (
                    <MenuItem key={index} value={motorcyclist}>{motorcyclist}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Motorcyclist 2</InputLabel>
                <Select
                  value={nightMotorcyclist2}
                  onChange={(e) => setNightMotorcyclist2(e.target.value)}
                >
                  {nightMotorcyclists.map((motorcyclist, index) => (
                    <MenuItem key={index} value={motorcyclist}>{motorcyclist}</MenuItem>
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
                <TableCell>Day Motorcyclist 1</TableCell>
                <TableCell>Day Motorcyclist 2</TableCell>
                <TableCell>Night Motorcyclist 1</TableCell>
                <TableCell>Night Motorcyclist 2</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formData.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.shift}</TableCell>
                  <TableCell>{entry.dayMotorcyclist1}</TableCell>
                  <TableCell>{entry.dayMotorcyclist2}</TableCell>
                  <TableCell>{entry.nightMotorcyclist1}</TableCell>
                  <TableCell>{entry.nightMotorcyclist2}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <MotorcycleTable />
    </div>
  );
};

export default MotorcycleForm;
