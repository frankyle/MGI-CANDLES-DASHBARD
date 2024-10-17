import React, { useEffect, useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useAxios from '../../../../routes/useAxios';

const ControllerShiftTable = () => {
  const api = useAxios();
  const [controllerData, setControllerData] = useState([]);

  // Fetch data from the database
  const fetchControllerData = async () => {
    try {
      const response = await api.get('/tpc/controller-shift/');
      if (response.status === 200) {
        setControllerData(response.data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchControllerData();
  }, []);

  // Sort data by date in descending order and limit to 10 entries
  const sortedControllerData = controllerData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10);

  return (
    <div className="controller-shift-table">
      <Typography variant="h6" component="h2" gutterBottom>
        DATABASE: Controller Shift Saved
      </Typography>

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
            {sortedControllerData.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.shift}</TableCell>
                <TableCell>{entry.day_controller1}</TableCell>
                <TableCell>{entry.day_controller2}</TableCell>
                <TableCell>{entry.night_controller1}</TableCell>
                <TableCell>{entry.night_controller2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ControllerShiftTable;
