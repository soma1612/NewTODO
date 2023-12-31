import React from 'react';
import './App.css';
import { Paper } from '@mui/material';
import MuiButton from './components/controls/FloatingAddButton';
import Routing from './components/layout/Routing';

const App = () => {
    return (
        <div className='App'>
            <Paper sx={{ padding: '32px' }}>
                <Routing />
                <MuiButton />
            </Paper>
        </div>
    )
}

export default App;