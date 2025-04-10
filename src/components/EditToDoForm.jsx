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

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.trim() === '') {
            toast.info('Task cannot be empty.');
        } else {
            dispatch(editTask(value, task.id));
        }

        setValue("");
    };

    return (
        <form onSubmit={handleSubmit} className='TodoForm'>
            <input
                type='text'
                placeholder='Update'
                value={value}
                onChange={handleChange}
                className='todo-input'
            />
            <button type='submit' className='todo-btn'>Update</button>
        </form>
    );
};

export default EditToDoForm;