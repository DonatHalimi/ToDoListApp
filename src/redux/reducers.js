const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'SET_TASKS':
            return action.payload;
        case 'EDIT_TASK':
            return state.map(task =>
                task.id === action.payload.id
                    ? { ...task, task: action.payload.editedTask, isEditing: !task.isEditing }
                    : task
            );
        default:
            return state;
    }
};

export default tasksReducer;