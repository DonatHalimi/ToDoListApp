import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { editTask } from '../redux/actions';

/* 
    EditToDoForm Component
    
   - Provides a form for editing an existing task.
   - Receives the task object as a prop.
   - Initializes the input with the task's current value.
   - Users can update the task value, and upon submission, the editTask action is dispatched.
*/

const EditToDoForm = ({ task }) => {
    const [value, setValue] = useState(task.task);
    const dispatch = useDispatch();

    // Updates the 'value' state based on user input
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the updated task value is empty
        if (value.trim() === '') {
            // Show toast message if the updated task value is empty
            toast.info('Task cannot be empty.');
        } else {
            // Dispatch the editTask action if the task value is not empty
            dispatch(editTask(value, task.id));
        }

        // Clear the input field after submission
        setValue("");
    }

    // JSX Rendering
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' placeholder='Update task' value={value} onChange={handleChange} />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    );
};

export default EditToDoForm;