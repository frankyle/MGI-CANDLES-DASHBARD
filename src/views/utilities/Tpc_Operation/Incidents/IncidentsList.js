import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
import useAxios from './../../../../routes/useAxios'; // Adjust import path as per your project
import IncidentsEditForm from './IncidentsEditForm';
import IncidentsView from './IncidentsView';

function IncidentsList() {
  const [incidentData, setIncidentData] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [incidentToDelete, setIncidentToDelete] = useState(null);
  
  const api = useAxios();

  useEffect(() => {
    fetchIncidents();
  }, [api]);

  const fetchIncidents = async () => {
    try {
      const response = await api.get('/tpc/incidents/');
      setIncidentData(response.data);
    } catch (error) {
      console.error('Error fetching incident data:', error);
    }
  };

  const handleDelete = (incidentId) => {
    setIncidentToDelete(incidentId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await api.delete(`/tpc/incidents/${incidentToDelete}/`);
      setIncidentData(incidentData.filter(incident => incident.id !== incidentToDelete));
      setDeleteDialogOpen(false);
      setIncidentToDelete(null);
    } catch (error) {
      console.error('Error deleting incident:', error);
    }
  };

  const handleEdit = (incident) => {
    setSelectedIncident(incident);
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedIncident(null);
    setEditModalOpen(false);
  };

  const handleView = (incident) => {
    setSelectedIncident(incident);
    setViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setSelectedIncident(null);
    setViewModalOpen(false);
  };

  const incidentHeaders = [
    'Date', 'Time', 'Incident Location', 'Department', 'Incident Type',
    'Specific Location', 'Security Service Provider', 'Reported By',
    'Details of Incident', 'TPCLTD or Private', 'Response Time',
    'Investigator', 'Item Stolen', 'Hazard WRI', 'Value of Stolen Items',
    'Fine', 'Ammunition Used', 'Actions',
  ];

  return (
    <div className="incidents-form-container">
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="incidents-table">
            <TableHead>
              <TableRow>
                {incidentHeaders.map((header) => (
                  <TableCell key={header} align="left">
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {incidentData.map((incident) => (
                <TableRow key={incident.id}>
                  <TableCell>{incident.date}</TableCell>
                  <TableCell>{incident.time}</TableCell>
                  <TableCell>{incident.incident_location}</TableCell>
                  <TableCell>{incident.department}</TableCell>
                  <TableCell>{incident.type_of_incident}</TableCell>
                  <TableCell>{incident.specific_location}</TableCell>
                  <TableCell>{incident.security_provider}</TableCell>
                  <TableCell>{incident.reported_by}</TableCell>
                  <TableCell>{incident.description}</TableCell>
                  <TableCell>{incident.tpcltd_or_private}</TableCell>
                  <TableCell>{incident.response_time}</TableCell>
                  <TableCell>{incident.investigator}</TableCell>
                  <TableCell>{incident.item_stolen}</TableCell>
                  <TableCell>{incident.hazard_wri_option}</TableCell>
                  <TableCell>{incident.value_of_stolen_items}</TableCell>
                  <TableCell>{incident.fine}</TableCell>
                  <TableCell>{incident.ammunition_used}</TableCell>
                  <TableCell>
                    <IconButton size="small" color="default" onClick={() => handleView(incident)}>
                      <Visibility fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="primary" onClick={() => handleEdit(incident)}>
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="secondary" onClick={() => handleDelete(incident.id)}>
                      <Delete fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Edit Incident Modal */}
      {selectedIncident && (
        <Dialog
          open={editModalOpen}
          onClose={handleCloseModal}
        >
          <DialogTitle>Edit Incident</DialogTitle>
          <DialogContent>
            {/* Pass incident and any necessary props to the edit form */}
            <IncidentsEditForm incident={selectedIncident} onClose={handleCloseModal} />
          </DialogContent>
        </Dialog>
      )}

      {/* View Incident Modal */}
      {selectedIncident && (
        <Dialog
          open={viewModalOpen}
          onClose={handleCloseViewModal}
        >
          <DialogTitle>View Incident</DialogTitle>
          <DialogContent>
            {/* Pass incident and any necessary props to the view form */}
            <IncidentsView incident={selectedIncident} onClose={handleCloseViewModal} />
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this incident?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default IncidentsList;
