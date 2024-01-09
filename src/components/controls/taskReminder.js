import React, { useEffect } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const TaskReminder = ({ taskTime }) => {
  useEffect(() => {
    // Calculate the time difference between now and the task time
    const now = new Date();
    const timeDifference = taskTime - now;

    // Display the notification 5 minutes before the task time
    if (timeDifference > 0 && timeDifference <= 5 * 60 * 1000) {
      const timeoutId = setTimeout(() => {
        NotificationManager.info('Your task is coming up in 5 minutes!', 'Task Reminder', 5000);
      }, timeDifference - 5 * 60 * 1000);

      // Clean up the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [taskTime]);

  return (
    <div>
      {/* This container is required for react-notifications to work */}
      <NotificationContainer />
    </div>
  );
};

export default TaskReminder;
