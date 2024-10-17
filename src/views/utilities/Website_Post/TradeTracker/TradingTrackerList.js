import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import useAxios from '../../../../routes/useAxios';
import EditTradingSignalModal from './EditTradingSignalModal';
import ImageModal from './ImageModal';

const TradingTrackerList = () => {
  const api = useAxios(); // Axios instance
  const [signals, setSignals] = useState([]); // State to store signals
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors
  const [editSignal, setEditSignal] = useState(null); // State for currently editing signal
  const [openEditModal, setOpenEditModal] = useState(false); // State for opening the edit modal
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [openImageModal, setOpenImageModal] = useState(false); // State for image modal

  // Fetch signals from the backend
  useEffect(() => {
    const fetchSignals = async () => {
      try {
        const response = await api.get('/tracker/tradetracker/');
        setSignals(response.data);
      } catch (err) {
        console.error('Error fetching signals:', err);
        setError('Failed to fetch trading signals');
      } finally {
        setLoading(false);
      }
    };
    
    fetchSignals();
  }, []);

  const handleEdit = (signal) => {
    setEditSignal(signal);
    setOpenEditModal(true); // Open modal with signal data
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tracker/tradetracker/${id}/`);
      setSignals(signals.filter((signal) => signal.id !== id)); // Update state by removing the deleted item
    } catch (err) {
      console.error('Error deleting signal:', err);
      setError('Failed to delete trading signal');
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl); // Set the clicked image
    setOpenImageModal(true); // Open image modal
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Currency Pair</TableCell>
              <TableCell>Signal Image</TableCell>
              <TableCell>Monday Image</TableCell>
              <TableCell>Tuesday Image</TableCell>
              <TableCell>Wednesday Image</TableCell>
              <TableCell>Thursday Image</TableCell>
              <TableCell>Friday Image</TableCell>
              <TableCell>Pips Gained</TableCell>
              <TableCell>Pips Lost</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {signals.map((signal, index) => (
              <TableRow key={signal.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{signal.currency_pair}</TableCell>
                <TableCell>
                  <img 
                    src={signal.signal_image} 
                    alt="Signal" 
                    style={{ width: '50px', height: 'auto', cursor: 'pointer' }} 
                    onClick={() => handleImageClick(signal.signal_image)} // Open modal on click
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src={signal.monday_image} 
                    alt="Monday" 
                    style={{ width: '50px', height: 'auto', cursor: 'pointer' }} 
                    onClick={() => handleImageClick(signal.monday_image)} 
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src={signal.tuesday_image} 
                    alt="Tuesday" 
                    style={{ width: '50px', height: 'auto', cursor: 'pointer' }} 
                    onClick={() => handleImageClick(signal.tuesday_image)} 
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src={signal.wednesday_image} 
                    alt="Wednesday" 
                    style={{ width: '50px', height: 'auto', cursor: 'pointer' }} 
                    onClick={() => handleImageClick(signal.wednesday_image)} 
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src={signal.thursday_image} 
                    alt="Thursday" 
                    style={{ width: '50px', height: 'auto', cursor: 'pointer' }} 
                    onClick={() => handleImageClick(signal.thursday_image)} 
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src={signal.friday_image} 
                    alt="Friday" 
                    style={{ width: '50px', height: 'auto', cursor: 'pointer' }} 
                    onClick={() => handleImageClick(signal.friday_image)} 
                  />
                </TableCell>
                <TableCell>{signal.pips_gained}</TableCell>
                <TableCell>{signal.pips_lost}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(signal)}>
                    <Edit color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(signal.id)}>
                    <Delete color="secondary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Modal */}
      <EditTradingSignalModal
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
        signal={editSignal}
        handleInputChange={(e) => setEditSignal({ ...editSignal, [e.target.name]: e.target.value })}
        handleImageChange={(e) => setEditSignal({ ...editSignal, [e.target.name]: e.target.files[0] })}
        handleEditSubmit={() => {/* Add submission logic */}}
      />

      {/* Image Modal */}
      <ImageModal
        open={openImageModal}
        handleClose={() => setOpenImageModal(false)}
        imageUrl={selectedImage}
      />
    </>
  );
};

export default TradingTrackerList;