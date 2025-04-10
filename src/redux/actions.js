export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task,
    };
};

export const setTasks = (tasks) => {
    return {
        type: 'SET_TASKS',
        payload: tasks,
    };
};

export const editTask = (editedTask, id) => {
    return {
        type: 'EDIT_TASK',
        payload: { editedTask, id },
    };
};