// Initial state
const initialState = {
  savedData: [],
  deleteData: [],
  completeTaskData: [],
  selectedItemToEdit: null,
};

// Reducer function
const dataReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case 'SAVE_DATA':
      return {
        ...state,
        savedData: [...state.savedData, action.payload],
      };

    case 'SELECT_DATA_TO_EDIT':
      return {
        ...state,
        selectedItemToEdit: action.payload,
      };

    case 'EDIT_DATA':
      return {
        ...state,
        savedData: state.savedData.map((data) => data.id === state.selectedItemToEdit
          ? { ...data, ...action.payload } : data

          // ? action.payload : data

          // ? { ...data, text: action.payload }:  data

          //? { ...data, savedData: action.payload }:  data
          //action.payload.id ? action.payload : data

        ),
        selectedItemToEdit: null,
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