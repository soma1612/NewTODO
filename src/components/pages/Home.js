import React from 'react';
import MuiCard from '../controls/Card';
import MuiSearchBar from '../controls/SearchBox';
import { useSelector } from 'react-redux';

const Home = () => {

    const savedData = useSelector((state) => state.savedData);

    return (
        <>
            <MuiSearchBar />
            <hr style={{ margin: '25px 0px' }} />
            {savedData.map((data) => (
                <MuiCard page="home" data={data} />
            ))}
        </>
    )
}

export default Home;

