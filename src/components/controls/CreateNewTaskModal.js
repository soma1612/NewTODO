import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, Button, DialogTitle, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';

import { useDispatch } from 'react-redux';
import { saveData } from '../funcationality/actions/actions';

const MuiModal = (props) => {

  const { open, handleClose, name } = props;

  // const [value, setValue] = useState();
  // const { task, setTask } = useState('');


  const [taskName, setTaskName] = useState('');
  const [completionTime, setCompletionTime] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();


  const generateTaskId = () => {
    //parseInt(Date.now() * Math.random()).toString()
    return Math.random().toString(36).substring(2, 15);
};


  
  const handleButtonClick = () => {
    
    if (taskName.trim() === '' && completionTime.trim() === '') {
      console.log('Please provide a value.');
      setError('Please provide a value.'); // Show error message if input is empty
    } else {

      // Validate completion time
      const currentTime = new Date();
      const selectedTime = new Date(completionTime);

      if (selectedTime <= currentTime) {
        console.log('Completion time should be greater than the current time.')
        setError('Completion time should be greater than the current time.');
        return;
      }

      // Handle button click (you can replace this with your logic)
      console.log('Task Name:', taskName);
      console.log('Completion Time:', completionTime);

      const dataToSave = {id: generateTaskId(), taskName: taskName, completionTime: completionTime}
      dispatch(saveData(dataToSave));

      // Reset form fields and error
      setTaskName('');
      setCompletionTime('');
      setError('');

      handleClose();
    }
  }
  const handleCloseDialog = () => {
    handleClose();
  }
  return (
    <> <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle >{name} Task</DialogTitle>
        <DialogContent>
          <TextField required id="standard-basic" label="Task Name" variant="standard" 
          value={taskName}  onChange={(e) => setTaskName(e.target.value)} />
          <br />

          {/* <DateTimeField
            label="complete Date time"
            variant="standard"
            value={completionTime}
            // onChange={(newValue) => setValue(newValue)}
            onChange={(e) => setCompletionTime(e.target.value)}
          /> */}
          <input
              id="datetime-picker"
              type="datetime-local"
              variant="standard"
              value={completionTime}
              onChange={(e) => setCompletionTime(e.target.value)}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
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













// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// export default function AlertDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Let Google help apps determine location. This means sending anonymous
//             location data to Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }
