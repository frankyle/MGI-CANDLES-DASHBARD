import React, { useState } from 'react';
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import useAxios from '../../../../routes/useAxios'; // Adjust path as per your project structure
import QRFNextServiceCheckup from './QRFNextServiceCheckup';

const QRFMovement = () => {
  const api = useAxios(); // Assuming useAxios provides Axios instance
  const { user } = useSelector((state) => state.auth); // Access user information from Redux state

  const [dateTime, setDateTime] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [kilometers, setKilometers] = useState('');


  const [qrfMovements, setQrfMovements] = useState([]);
  const [nextServiceKilometers, setNextServiceKilometers] = useState('');

  const [nextCheckupKilometers, setNextCheckupKilometers] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddQrfMovement = async () => {
    const newMovement = {
      from: fromLocation,
      to: toLocation,
      kilometers: parseFloat(kilometers),
      dateTime: new Date(dateTime).toISOString(), // Convert date/time to ISO string
    };
    try {
      const response = await api.post('/tpc/qrf-movements/', {
        user: user.id,
        movement: newMovement,
      });
      setQrfMovements([...qrfMovements, newMovement]);
      setFromLocation('');
      setToLocation('');
      setKilometers('');
      setDateTime('');
      console.log(response.data); // Assuming you want to log the response data
    } catch (error) {
      console.error('Error:', error);
    }
  };

 

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1>QRF Movements</h1>
      <TextField
        label="Date and Time"
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="From Location"
        value={fromLocation}
        onChange={(e) => setFromLocation(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="To Location"
        value={toLocation}
        onChange={(e) => setToLocation(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Kilometers"
        value={kilometers}
        onChange={(e) => setKilometers(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddQrfMovement}
        style={{ marginTop: '10px' }}
      >
        Add Movement
      </Button>

      <Typography variant="h6" style={{ marginTop: '20px' }}>
        Next Service: {nextServiceKilometers} km
      </Typography>
      <Typography variant="h6">
        Next Checkup: {nextCheckupKilometers} km
      </Typography>

      <Table style={{ marginTop: '20px', border: '1px solid #ccc' }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Date and Time</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>From</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>To</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Kilometers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {qrfMovements.map((movement, index) => (
            <TableRow key={index}>
              <TableCell>{new Date(movement.dateTime).toLocaleString()}</TableCell>
              <TableCell>{movement.from}</TableCell>
              <TableCell>{movement.to}</TableCell>
              <TableCell>{movement.kilometers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => setModalOpen(true)}
        style={{ marginTop: '20px' }}
      >
        Next Service & Check-up
      </Button>

      <QRFNextServiceCheckup
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        nextServiceKilometers={nextServiceKilometers}
        nextCheckupKilometers={nextCheckupKilometers}
        setNextServiceKilometers={setNextServiceKilometers}
        setNextCheckupKilometers={setNextCheckupKilometers}
      />
    </div>
  );
};



export default QRFMovement
