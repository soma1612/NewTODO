export const saveData = (data) => ({
    type: 'SAVE_DATA',
    payload: data,
  });

  export const completeTaskData = (taskId) => ({
    type: 'COMPLETE_TASK_DATA',
    payload: taskId,
  });


  export const deleteData = (taskId) => ({
    type: 'DELETE_DATA',
    payload: taskId,
  });

