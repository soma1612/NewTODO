// Initial state
const initialState = {
    savedData: [],
    deleteData:[],
    completeTaskData:[],
  };
  
  // Reducer function
  const dataReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
      case 'SAVE_DATA':
        return {
          ...state,
          savedData: [...state.savedData, action.payload],
        };

        case 'COMPLETE_TASK_DATA':
        const completeTaskData = state.savedData.find((data) => data.id === action.payload);
        return {
          ...state,
          savedData: state.savedData.filter((data) => data.id !== action.payload),
          completeTaskData: [...state.completeTaskData, completeTaskData],
        };

        case 'DELETE_DATA':
        const deleteData = state.savedData.find((data) => data.id === action.payload);
        return {
          ...state,
          savedData: state.savedData.filter((data) => data.id !== action.payload),
          deleteData: [...state.deleteData, deleteData],
        };

        
      default:
        return state;
    }
  };

  export default dataReducer;