// Reducer for managing the tasks state in Redux
const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            // Action type: 'ADD_TASK'
            //  Adds a new task to the state by spreading the existing state and appending the new task
            return [...state, action.payload];
        case 'SET_TASKS':
            // Action type: 'SET_TASKS'
            // Sets the tasks in the state to the provided tasks array
            return action.payload;
        case 'EDIT_TASK':
            // Action type: 'EDIT_TASK'
            // Edits an existing task by mapping through the state, updating the specified task with edited data
            return state.map(task =>
                task.id === action.payload.id
                    ? { ...task, task: action.payload.editedTask, isEditing: !task.isEditing }
                    : task
            );
        default:
            // Return the current state if the action type doesn't match any handled cases
            return state;
    }
};

export default tasksReducer;