import React from 'react';
import MuiCard from '../controls/Card';
import MuiSearchBar from '../controls/SearchBox';
import { useSelector } from 'react-redux';
//import TaskReminder2 from '../controls/taskReminder2'
import TaskReminder3 from '../controls/TaskReminder3'
const Home = () => {

    const savedData = useSelector((state) => state.savedData);

    return (
        <>
            {/* <TaskReminder3 /> */}
            <MuiSearchBar />
            <hr style={{ margin: '25px 0px' }} />
            {savedData.map((data) => (
                <>
                <MuiCard page="home" data={data} />
                <TaskReminder3  savedData={data} />
                </>
            ))}
        </>
    )
}

export default Home;

