import React, { useState,useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, Button, DialogTitle, TextField, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../funcationality/actions/actions';



const MuiEditModal = (props) => {

    const { open, handleClose } = props;
    const dispatch = useDispatch();
    const selectedItemToEdit = useSelector((state) => state.selectedItemToEdit);
    const savedData = useSelector((state) => state.savedData);
    const [taskName, setTaskName] = useState('');
    const [completionTime, setCompletionTime] = useState('');

    // console.log("before"+ taskName);
    // console.log("after"+ completionTime)
    useEffect(() => {
        // Find the selected item in the savedData array
        const selectedItem = savedData.find((item) => item.id === selectedItemToEdit);
    
        // If the selected item exists, set the taskName state to its taskName
        if (selectedItem) {
          setTaskName(selectedItem.taskName);
          setCompletionTime(selectedItem.formattedCompletedDateTime)
        }
      }, [selectedItemToEdit, savedData]);
    //   console.log("after"+ taskName);
    //   console.log("after"+ completionTime)

    const convertDateTimeFormat = (inputStr) => {
        const inputDate = new Date(inputStr);
        const formattedDate =
            ("0" + inputDate.getHours()).slice(-2) +
            ":" +
            ("0" + inputDate.getMinutes()).slice(-2) +
            (inputDate.getHours() < 12 ? "AM" : "PM") +
            ", " +
            ("0" + inputDate.getDate()).slice(-2) +
            "/" +
            ("0" + (inputDate.getMonth() + 1)).slice(-2) +
            "/" +
            inputDate.getFullYear();
        return formattedDate;
    };


    const handleEditSubmitClick = () => {

        const formattedCompletedDateTime = convertDateTimeFormat(completionTime);
         debugger;
        const taskDetailsToSave = {
            taskName: taskName,
            CompletionTime: formattedCompletedDateTime
        }


        dispatch(updateData(taskDetailsToSave));
        setTaskName('');
        setCompletionTime('');
        handleClose();
    };


    const handleCloseDialog = () => {
        handleClose();
        setTaskName('');
        setCompletionTime('');
        // setError('');
    }

    return (
        <>
            {selectedItemToEdit !== null && (
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle >Edit Task</DialogTitle>

                    <DialogContent>

                        <TextField
                            required
                            id="txtTask"
                            label="Task Name"
                            variant="standard"
                             value={taskName}
                           // value={taskName || savedData.find((item) => item.id === selectedItemToEdit).taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                        />

                        <br />

                     <TextField
                        id="txtDataTime"
                        type="datetime-local"
                        variant="standard"
                        style={{ marginTop: '16px' }}
                        value={completionTime}
                       // value={completionTime || savedData.find((item) => item.id === selectedItemToEdit).completionTime}
                        onChange={(e) => setCompletionTime(e.target.value)}
                        required
                    />

                      {/*  {error && <Alert severity="error" style={{ marginTop: '10px' }}>{error}</Alert>} */}

                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleEditSubmitClick} autoFocus>Edit</Button>
                        <Button onClick={handleCloseDialog} >Cancle</Button>
                    </DialogActions>

                </Dialog>
            )}
        </>)

}
export default MuiEditModal;