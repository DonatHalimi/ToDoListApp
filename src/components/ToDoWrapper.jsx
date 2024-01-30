import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import { addTask, setTasks } from '../redux/actions';
import EditToDoForm from './EditToDoForm';
import ProgressBar from './ProgressBar';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

/* 
   ToDoWrapper Component

   - Manages the overall structure of the To-Do application.
   - Utilizes Redux for state management.
   - Includes a progress bar, To-Do form, and a list of To-Do items.
   - Handles the addition, completion, deletion, and editing of tasks.
   - Updates progress based on task completion.
   - Uses local storage to persist tasks.
*/

const ToDoWrapper = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Loading stored tasks from local storage or initializing as an empty array
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        dispatch(setTasks(storedTasks)); // Setting tasks in the Redux store
        updateProgress(storedTasks); // Updating the progress bar based on stored tasks
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Saving tasks to local storage
        updateProgress(tasks); // Updating the progress bar based on current tasks
    }, [tasks]);

    // Function to add a new task
    const addTodo = (todo) => {
        dispatch(addTask({
            id: uuidv4(),
            task: todo,
            completed: false,
            isEditing: false,
        }));
        updateProgress([...tasks, { task: todo, completed: false }]); // Updating progress after adding a new task
    };

    // Function to toggle the completion status of a task
    const toggleComplete = (id) => {
        dispatch(setTasks(
            tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
        ));
        updateProgress(tasks); // Updating progress after toggling completion status
    };

    // Function to delete a task
    const deleteTodo = (id) => {
        const deletedTask = tasks.find((task) => task.id === id)?.task || '';
        dispatch(setTasks(tasks.filter((task) => task.id !== id))); // Removing the task from the Redux store
        toast.info(`Task '${deletedTask}' deleted successfully!`);
        updateProgress(tasks.filter(task => task.id !== id)); // Updating progress after deleting a task
    };

    // Function to initiate editing a task
    const editTodo = (id) => {
        dispatch(setTasks(
            tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task)
        ));
    };

    // Function to save edited task
    const editTask = (id) => {
        dispatch(setTasks(
            tasks.map(task => task.id === id ? { ...task, task, isEditing: !task.isEditing } : task)
        ));
    };

    // Function to update the progress based on tasks
    const updateProgress = (updatedTasks) => {
        const completedTasks = updatedTasks.filter(task => task.completed);
        const progressPercentage = (completedTasks.length / updatedTasks.length) * 100;
        setProgress(progressPercentage);
    };

    return (
        <div className='TodoWrapper'>
            <ProgressBar />

            <h1>Get Things Done!</h1>
            <ToDoForm addTodo={addTodo} />

            {/* Mapping through tasks to render ToDo or EditToDoForm component */}
            {tasks.map((task) =>
                task.isEditing ? (
                    <EditToDoForm key={task.id} editTodo={() => editTask(task.id)} task={task} />
                ) : (
                    <ToDo
                        key={task.id}
                        task={task}
                        toggleComplete={() => toggleComplete(task.id)}
                        deleteTodo={() => deleteTodo(task.id)}
                        editTodo={() => editTodo(task.id)}
                    />
                )
            )}

            <ToastContainer />
        </div>
    );
};

export default ToDoWrapper;