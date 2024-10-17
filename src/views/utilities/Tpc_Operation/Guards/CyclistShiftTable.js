import React, { useEffect, useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useAxios from '../../../../routes/useAxios';

const CyclistShiftTable = () => {
  const api = useAxios();
  const [cyclistData, setCyclistData] = useState([]);

  // Fetch data from the database
  const fetchCyclistData = async () => {
    try {
      const response = await api.get('/tpc/cyclist-shift/');
      if (response.status === 200) {
        setCyclistData(response.data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCyclistData();
  }, []);

  // Sort data by date in descending order and limit to 10 entries
  const sortedCyclistData = cyclistData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10);

  return (
    <div className="cyclist-shift-table">
      <Typography variant="h4" component="h2" gutterBottom>
        DATABASE: Cyclist Shift Saved
      </Typography>

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
            {sortedCyclistData.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.shift}</TableCell>
                <TableCell>{entry.day_cyclist1}</TableCell>
                <TableCell>{entry.day_cyclist2}</TableCell>
                <TableCell>{entry.night_cyclist1}</TableCell>
                <TableCell>{entry.night_cyclist2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CyclistShiftTable;
