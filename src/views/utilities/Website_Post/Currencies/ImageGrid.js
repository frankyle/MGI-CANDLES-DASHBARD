import React, { useState } from 'react';
import { Grid, Typography, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const initialLabels = [
  '5 Min Black Candles',
  '15 Min Black Candles',
  '5 Min UT Alert Candles',
  '15 Min UT Alert Candles',
  '1 hr Black Candles',
  '2 hrs Black Candles',
  '1 hr UT Alert Candles',
  '2 hrs UT Alert Candles',
  'MGI Signal Candle',
  'Breakeven Candle',
  'Take Profit',
  'Trader\'s Idea Image 1',
  'Trader\'s Related Idea Image 2',
  'Trader\'s Related Idea Image 3',
];

const ImageGrid = () => {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [newImage, setNewImage] = useState({ src: '', label: '' });
  const [availableLabels, setAvailableLabels] = useState(initialLabels);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewImage({ src: '', label: '' });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage({ ...newImage, src: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleLabelChange = (e) => {
    setNewImage({ ...newImage, label: e.target.value });
  };

  const handleAddImage = () => {
    setImages([...images, newImage]);
    setAvailableLabels(availableLabels.filter(label => label !== newImage.label));
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box
              component="img"
              src={image.src}
              alt={image.label}
              sx={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <Typography variant="subtitle1" align="center">
              {image.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="success"
        startIcon={<AddIcon />}
        sx={{ textTransform: 'none', mt: 2 }}
        onClick={handleClickOpen}
      >
        Chart Image
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Image</DialogTitle>
        <DialogContent>
          <input
            accept="image/*"
            type="file"
            onChange={handleImageChange}
            style={{ display: 'block', margin: '20px 0' }}
          />
          <FormControl fullWidth variant="standard" sx={{ mt: 2 }}>
            <InputLabel id="image-label">Image Label</InputLabel>
            <Select
              labelId="image-label"
              value={newImage.label}
              onChange={handleLabelChange}
            >
              {availableLabels.map((label) => (
                <MenuItem key={label} value={label}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddImage} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ImageGrid;
 