import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* 
   ToDoForm Component

   - Allows users to input a task and submit it.
   - Displays a form with an input field and an "Add Task" button.
   - Displays toast notifications for success and error scenarios.
   - Calls the addTodo function with the entered value on form submission.
*/

const ToDoForm = ({ addTodo }) => {
    // State to manage the input value
    const [value, setValue] = useState("");

    // handleChange function updates the value state as the user types in the input field
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    // handleSubmit function handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // If the user doesn't type any task, display toast error notification
        if (!value) {
            toast.error('Please enter a valid task!');
            return;
        }

        // Call the addTodo function with the entered value and display toast success notification
        addTodo(value);
        toast.success('Task added successfully!');

        // Clear the input field after submission
        setValue("");
    }

    // JSX Rendering
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' placeholder='Enter your task here...' value={value} onChange={handleChange} />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
};

export default ToDoForm;