import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

const ToDo = ({ task, toggleComplete, editTodo, deleteTodo }) => {
    const [showPopup, setShowPopup] = useState(false);

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
        <div onClick={handleClick} className='Todo'>
            <p className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
            <div className="icons">
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={handleEdit}
                    className='edit-button'
                />
                <div style={{ position: 'relative' }}>
                    <FontAwesomeIcon
                        icon={faTrash}
                        onClick={handleDelete}
                        className='delete-button'
                    />
                    {showPopup && (
                        <ConfirmDelete
                            onCancel={cancelDelete}
                            onConfirm={confirmDelete}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToDo;