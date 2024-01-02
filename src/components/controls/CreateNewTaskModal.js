import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, Button, DialogTitle, TextField, Snackbar, Alert } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


import { useDispatch } from 'react-redux';
import { saveData } from '../funcationality/actions/actions';

const MuiModal = (props) => {

  const { open, handleClose, name } = props;

  // const [value, setValue] = useState();
  // const { task, setTask } = useState('');


  const [taskName, setTaskName] = useState('');
  const [completionTime, setCompletionTime] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();


  const generateTaskId = () => {
    //parseInt(Date.now() * Math.random()).toString()
    return Math.random().toString(36).substring(2, 15);
  };



  const handleButtonClick = () => {

    if (taskName && completionTime) {
     
     // Validate completion time
      const currentTime = new Date();
      const selectedTime = new Date(completionTime);

      if (selectedTime <= currentTime) {
        setError('Completion time should be greater than the current time.');
        return;
      }


      const dataToSave = { id: generateTaskId(), taskName: taskName, completionTime: completionTime }
      dispatch(saveData(dataToSave));

      // Reset form fields and error
      setTaskName('');
      setCompletionTime('');
      setError('');
      handleClose();

    } else if (!taskName && completionTime) {
      setError('Please enter a task.');
    } else if (taskName && !completionTime) {
      setError('Please enter a completion time.');
    } else {
      setError('Please enter a task and completion time.');
    }

  }
  const handleCloseDialog = () => {
    handleClose();
    setTaskName('');
    setCompletionTime('');
    setError('');
  }

  return (
    <> <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={open} onClose={handleClose}>

        <DialogTitle >{name} Task</DialogTitle>

        <DialogContent>
          <TextField
            required
            id="standard-basic"
            label="Task Name"
            variant="standard"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            />

          <br />

          <TextField
            id="datetime-picker"
            type="datetime-local"
            variant="standard"
            style={{ marginTop: '16px' }}
            value={completionTime}
            onChange={(e) => setCompletionTime(e.target.value)}
            required
          />
          {error && <Alert severity="error" style={{ marginTop: '10px' }}>{error}</Alert>}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleButtonClick} autoFocus>{name}</Button>
          <Button onClick={handleCloseDialog} >Cancle</Button>
        </DialogActions>

      </Dialog>
    </LocalizationProvider>
    </>
  )
}

export default MuiModal;

