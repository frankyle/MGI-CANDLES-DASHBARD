import React from 'react'
import { TextField, Typography } from '@mui/material';

const ViewNextServiceCheckup = () => {
  return (
    <div>
       <Typography variant="h6" gutterBottom>
           QRF Next Check-up and Service
        </Typography>
        <TextField
          label="Update Next Service (kilometers)"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Update Next Check-up (kilometers)"
          value={newCheckup}
          onChange={(e) => setNewCheckup(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ mb: 2 }}
        />
    </div>
  )
}

export default ViewNextServiceCheckup
