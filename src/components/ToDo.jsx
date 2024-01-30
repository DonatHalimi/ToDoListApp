import React from 'react';
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* 
   ToDo Component
   
   - Displays a task with options to toggle completion, edit, and delete.
   - Task appearance changes based on completion status.
   - Clicking on the task toggles its completion status.
   - Provides edit and delete buttons for task actions.
*/

const ToDo = ({ task, toggleComplete, editTodo, deleteTodo }) => {
    return (
        <div className='Todo'>
            <p className={`${task.completed ? "completed" : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            {/* Edit and delete buttons per task */}
            <div>
                <FontAwesomeIcon className='edit-button' icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className='delete-button' icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
};

export default ToDo;
