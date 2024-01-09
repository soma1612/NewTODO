import React from 'react';
import './App.css';
import { Paper } from '@mui/material';
import MuiButton from './components/controls/FloatingAddButton';
import Routing from './components/layout/Routing';
// import TaskReminder2 from './components/controls/taskReminder2'

const App = () => {
    return (
        <div className='App'>
            {/* <TaskReminder2/> */}
            <Paper sx={{ padding: '32px' }}>
                <Routing />
                <MuiButton />
            </Paper>
        </div>
    )
}

export default App;