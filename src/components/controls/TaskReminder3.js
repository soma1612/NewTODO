import React, { useEffect,useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const TaskReminder3 = ({savedData}) => {

   //const [taskTime, setTaskTime] = useState( savedData.completionTime);
   


   useEffect(() => {

    const taskName = savedData.taskName;
    const taskTime = savedData.completionTime;
    const taskCompletionTime = new Date(taskTime);
    const currentTime = new Date(); 
    const timeDifference = taskCompletionTime - currentTime;
    if (timeDifference > 0 && timeDifference <= 5 * 60 * 1000) {
        const timeoutId = setTimeout(() => {
            NotificationManager.warning('Your task: '+taskName + ' is coming up in 5 minutes!', 'Task Reminder', 5000);
          }, timeDifference - 5 * 60 * 1000);
          return () => clearTimeout(timeoutId);
    }
  }, [taskTime]);

return (
    <div>
      <NotificationContainer />
    </div>
  );
};

export default TaskReminder3;