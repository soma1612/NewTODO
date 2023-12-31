import React from 'react';
import MuiCard from '../controls/Card';
import MuiSearchBar from '../controls/SearchBox';
import { useSelector } from 'react-redux';

const Comlpleted = () => {
    const completeTaskData = useSelector((state) => state.completeTaskData);
    return (
        <>
            <MuiSearchBar />
            <hr style={{ margin: '25px 0px' }} />
            {completeTaskData.map((data) => (
                <MuiCard page="completed" data={data} />
            ))}
        </>
    )
}

export default Comlpleted;