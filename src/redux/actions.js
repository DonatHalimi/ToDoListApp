// Action creator for adding a new task to the state
export const addTask = (task) => {
    return {
        type: 'ADD_TASK', // Action type indicating the intention to add a task
        payload: task,    // Payload containing the task data to be added
    };
};

// Action creator for setting the entire tasks array in the state
export const setTasks = (tasks) => {
    return {
        type: 'SET_TASKS', // Action type indicating the intention to set tasks
        payload: tasks,    // Payload containing the tasks array to be set
    };
};

// Action creator for editing an existing task in the state
export const editTask = (editedTask, id) => {
    return {
        type: 'EDIT_TASK',       // Action type indicating the intention to edit a task
        payload: { editedTask, id }, // Payload containing the edited task data and its ID
    };
};