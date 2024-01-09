import React, { useEffect,useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const TaskReminder2 = ({ data }) => {
    const [taskCompletionDataTime, setTaskCompletionDataTime] = useState(data.formattedCompletedDate)

    const convertDateTimeFormat = (inputStr) => {
        const inputDate = new Date(inputStr);
        const formattedDate =
            ("0" + inputDate.getHours()).slice(-2) +
            ":" +
            ("0" + inputDate.getMinutes()).slice(-2) +
            (inputDate.getHours() < 12 ? "AM" : "PM") +
            ", " +
            ("0" + inputDate.getDate()).slice(-2) +
            "/" +
            ("0" + (inputDate.getMonth() + 1)).slice(-2) +
            "/" +
            inputDate.getFullYear();
        return formattedDate;
    };





    // const currentDateStr = new Date();
    // const currentTimeF1 = convertDateTimeFormat(currentDateStr);
    // const currentDate = parseCustomDateString(currentTimeF1);
    // const propDate = parseCustomDateString(taskCompletionDataTime);
    // setTaskCompletionDataTime(propDate)

    useEffect(() => {

        if (data) {
            const abc = () => {
                console.log(data)

                //data.map(element => {
                debugger;
                const TaskName = data.taskName;

                 const taskCompletionTime = data.formattedCompletedDate;

                // const currentDate = new Date();
                  // const currentTime=now.toISOString().slice(0, 16);
                // const currentTime = convertDateTimeFormat(currentDate);

                // console.log(currentTime);


                // const currentTime = new Date();
                // const CurrentformattedTime = currentTime.toLocaleTimeString(undefined, {
                //     hour: '2-digit',
                //     minute: '2-digit',
                //     hour12: false,
                // });
                const currentDateStr = new Date();
                const currentTimeF1 = convertDateTimeFormat(currentDateStr);
               


                
                const date1 = new Date('2022-01-01T12:00:00');
                const date2 = new Date(); 
                const timeDifference = date1 - date2;
                //const timeDifference = taskCompletionDataTime - currentDate;
                console.log("timeDifference: " + timeDifference);

                NotificationManager.warning("TaskName: " + TaskName
                    + ", taskCompletionTime: " + taskCompletionTime
                    + ", CurrentformattedTime: " + currentTime)
            }

            const intervalId = setInterval(abc, 5000);
            return () => clearInterval(intervalId);
        }
    }, []);




    return (
        <div>
            <NotificationContainer />
        </div>
    );
};

export default TaskReminder2;