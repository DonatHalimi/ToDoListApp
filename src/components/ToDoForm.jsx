import { useState } from 'react';
import { toast } from 'react-toastify';

/* 
   ToDoForm Component

   - Allows users to input a task and submit it.
   - Displays a form with an input field and an "Add Task" button.
   - Displays toast notifications for success and error scenarios.
   - Calls the addTodo function with the entered value on form submission.
*/
const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value) {
            toast.error('Please enter a valid task');
            return;
        }

        addTodo(value);
        toast.success('Task added successfully');
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit} className='TodoForm'>
            <input type='text' placeholder='Enter your task here...' value={value} onChange={handleChange} className='todo-input' />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
};

export default ToDoForm;