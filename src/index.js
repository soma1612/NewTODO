import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { Provider } from 'react-redux';
import store from './data/store'
//  import TaskReminder2 from './components/controls/taskReminder2'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            {/* <TaskReminder2/> */}
        </Provider>
    </React.StrictMode>
);