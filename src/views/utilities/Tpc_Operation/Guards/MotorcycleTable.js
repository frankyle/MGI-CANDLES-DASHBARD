import React, { useEffect, useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useAxios from '../../../../routes/useAxios';

const MotorcycleTable = () => {
  const api = useAxios();
  const [motorcycleData, setMotorcycleData] = useState([]);

  // Fetch data from the database
  const fetchMotorcycleData = async () => {
    try {
      const response = await api.get('/tpc/motorcycle-shift/');
      if (response.status === 200) {
        setMotorcycleData(response.data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchMotorcycleData();
  }, []);

  // Sort data by date in descending order and limit to 10 entries
  const sortedMotorcycleData = motorcycleData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10);

  return (
    <div className="motorcycle-shift-table">
      <Typography variant="h4" component="h2" gutterBottom>
        DATABASE: Motorcycle Shift Saved
      </Typography>

      <TableContainer component={Paper} style={{ marginTop: '30px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Shift</TableCell>
              <TableCell>Day Motorcycle 1</TableCell>
              <TableCell>Day Motorcycle 2</TableCell>
              <TableCell>Night Motorcycle 1</TableCell>
              <TableCell>Night Motorcycle 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedMotorcycleData.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.shift}</TableCell>
                <TableCell>{entry.day_motorcycle1}</TableCell>
                <TableCell>{entry.day_motorcycle2}</TableCell>
                <TableCell>{entry.night_motorcycle1}</TableCell>
                <TableCell>{entry.night_motorcycle2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MotorcycleTable;
