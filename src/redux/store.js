import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers';

// Configuring the Redux store using the configureStore function from @reduxjs/toolkit
const store = configureStore({
    reducer: {
        tasks: tasksReducer, // Assigning the tasksReducer to manage the 'tasks' slice of the state
    },
});

export default store;