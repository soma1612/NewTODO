import React from 'react';
import MuiCard from '../controls/Card';
import MuiSearchBar from '../controls/SearchBox';
import { Box, Grid } from '@mui/material';

import { useSelector } from 'react-redux';


const Home = () => {
    const savedData = useSelector((state) => state.savedData);

    return (
        <>
            <MuiSearchBar />
            <hr style={{ margin: '25px 0px' }} />
            {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <MuiCard page="home"/>
                        </Grid>
                    ))}
                </Grid>
            </Box> */}
            {/* <MuiCard page="home"/> */}
            {savedData.map((data) => (
                 <MuiCard page="home" data={data}/>
        //   <li key={index}>{data.taskName} - {index} - {data.completionTime}</li>
        ))}
        </>
    )
}

export default Home;

