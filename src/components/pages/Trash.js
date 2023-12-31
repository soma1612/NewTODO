import React from 'react';
import MuiCard from '../controls/Card';
import MuiSearchBar from '../controls/SearchBox';

import { useSelector } from 'react-redux';

const Trash = () => {

    const deleteData = useSelector((state) => state.deleteData);
    return (
        <>
            <MuiSearchBar />
            <hr style={{ margin: '25px 0px' }} />
            {deleteData.map((data) => (
                <MuiCard page="trash" data={data} />
            ))}
        </>
    )
}

export default Trash;