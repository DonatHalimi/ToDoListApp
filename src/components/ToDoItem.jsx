import { faPenToSquare, faTrash, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import ConfirmDelete from "./ConfirmDelete";

const ToDoItem = ({ task, toggleComplete, editTodo, deleteTodo, dragHandleProps, isDragging }) => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showPopup]);

    const handleClick = () => toggleComplete(task.id);

    const handleEdit = (e) => {
        e.stopPropagation();
        editTodo(task.id);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        setShowPopup(true);
    };

    const confirmDelete = () => {
        deleteTodo(task.id);
        setShowPopup(false);
    };

    const cancelDelete = () => setShowPopup(false);

    return (
        <div
            onClick={handleClick}
            className={`Todo ${isDragging ? 'is-dragging' : ''}`}
        >
            <div className="todo-content">
                <div {...dragHandleProps} className="drag-handle">
                    <FontAwesomeIcon
                        icon={faGripVertical}
                        className='drag-icon'
                    />
                </div>
                <p className={`task-text ${task.completed ? "completed" : "incompleted"}`}>
                    {task.task}
                </p>
            </div>
            <div className="icons">
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={handleEdit}
                    className='edit-button'
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={handleDelete}
                    className='delete-button'
                />
            </div>

            {showPopup && <ConfirmDelete onCancel={cancelDelete} onConfirm={confirmDelete} />}
        </div>
    );
};

export default ToDoItem;