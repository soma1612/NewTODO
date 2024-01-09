import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, IconButton, Checkbox } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MuiEditModal from './Editmodal';
import EditableComponent2 from './EditModal2';
import { useDispatch, useSelector  } from 'react-redux';
import { completeTaskData, deleteData,selectTaskToEdit } from '../funcationality/actions/actions';


// const MuiCard = (props) => {
//   const { page, data } = props;
const MuiCard = ({ page, data }) => {

  const [checked, setChecked] = useState(false);
  const [isopenModal, setIsOpenModal] = useState(false);
  const openModal = () => { setIsOpenModal(true); };
  const closeModal = () => { setIsOpenModal(false); };

  const dispatch = useDispatch();

  const savedData = useSelector((state) => state.savedData);

  const handleChange = (taskId) => {
    //setChecked(event.target.checked);
    dispatch(completeTaskData(taskId));
  };

  const onDelete = (taskId) => {
    dispatch(deleteData(taskId));
  }

 
  const onEdit = (taskId) => {
    debugger;
    dispatch(selectTaskToEdit(taskId));
    //console.log('Edit clicked ' + taskDetails);
      openModal(); 
  }
  return (
    <>
      <Card key={data.id} style={{ margin: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <CardContent style={{ display: 'flex', alignItems: 'center' }}>
          {page.includes("home") ? (
            <Checkbox checked={checked} onChange={() => handleChange(data.id)} style={{ paddingLeft: "0px" }} />
          ) : null}
          <Typography style={{ marginLeft: '8px', textTransform: 'uppercase' }}>
            <div>{data.taskName}</div>
            <div>{data.formattedCompletedDate}</div>
          </Typography>
        </CardContent>
        {page.includes("home") ? (
          <CardActions>
            {/* <IconButton aria-label="edit" color="success" 
            onClick={openModal} >
              <EditIcon />
              <MuiModal open={isopenModal} handleClose={closeModal} name="Edit" taskDetails={data}/>
            </IconButton> */}
            <IconButton aria-label="edit" color="success" onClick={() => onEdit(data.id)}>
              <EditIcon />
            </IconButton>
            <MuiEditModal open={isopenModal} handleClose={closeModal} />

            {/* <EditableComponent2 open={isopenModal} handleClose={closeModal} /> */}
            <IconButton aria-label="delete" color="error" onClick={() => onDelete(data.id)}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        ) : (
          null
        )}

      </Card>
    </>
  );
}

export default MuiCard;

