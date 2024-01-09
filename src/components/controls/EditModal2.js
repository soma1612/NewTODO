import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../funcationality/actions/actions';
import { Dialog, DialogActions, DialogContent, Button, DialogTitle, TextField, Alert } from '@mui/material';



const EditableComponent2 = (props) => {

    const { open, handleClose } = props;
    debugger;
    const selectedItemToEdit = useSelector((state) => state.selectedItemToEdit);
    const savedData = useSelector((state) => state.savedData);

    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState({
       
        taskName: savedData.taskName,
        CompletionTime: savedData.formattedCompletedDate,

    });

    // const [prevData, setPrevData] = useState({
    //     taskName: "Soma",
    //     CompletionTime: savedData.formattedCompletedDate,
    // });

    // const handleEditClick = () => {
    //     setEditMode(true);
    //     setPrevData({ ...editedData });
    // };

    const handleEditSubmitClick = () => {
        debugger;
        e.preventDefault();
       // setPrevData({ ...editedData });
        dispatch(updateData(...editedData));
       
    };

    const handleCloseDialog = () => {
        handleClose();
        setEditedData({ ...prevData });
    };

    const handleChange = (e) => {
        debugger;
        setEditedData({ ...editedData, [e.target.name]: e.target.value });
    };

    return (
        <div>
           {selectedItemToEdit !== null &&(
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle >Edit Task</DialogTitle>

                    <DialogContent>

                        <TextField
                            required
                            id="txtTask"
                            label="Task Name"
                            variant="standard"
                            value={editedData.taskName}
                            onChange={handleChange}
                        />
                        <br />


                        <TextField
                            required
                            id="txtDataTime"
                            type="datetime-local"
                            variant="standard"
                            style={{ marginTop: '16px' }}
                            value={editedData.CompletionTime}
                            onChange={handleChange}
                        />

                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleEditSubmitClick} autoFocus>Edit</Button>
                        <Button onClick={handleCloseDialog} >Cancle</Button>
                    </DialogActions>

                </Dialog>
            )
            }
        </div>
    );
};

export default EditableComponent2;
