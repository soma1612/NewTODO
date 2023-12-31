import { createStore } from 'redux';
import dataReducer from '../components/funcationality/reducers/reduser';

// Create Redux store
const store = createStore(dataReducer);

export default store;