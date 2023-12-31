import React, { useState } from 'react';
import { Fab, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MuiModal from './CreateNewTaskModal';

const MuiButton = () => {

    const [isopenModal, setIsOpenModal] = useState(false);
    const openModal = () => { setIsOpenModal(true); };
    const closeModal = () => { setIsOpenModal(false); };

    return (
        <Stack direction="row" style={{ display: "flow-root" }}>
            <Fab color="primary"
                aria-label="add"
                style={{ float: "right", marginTop: '10px' }}
                onClick={openModal}
            >
                <AddIcon />
            </Fab>
            <MuiModal open={isopenModal} handleClose={closeModal} name="Add"/>
        </Stack>
    )
}
export default MuiButton;


