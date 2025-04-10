import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers';

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

export default store;