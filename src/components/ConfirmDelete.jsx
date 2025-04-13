/*
    ConfirmDelete Component
    
   - Provides a modal window for confirming whether to delete a task.
   - Receives onCancel and onConfirm functions as props.
   - When the user clicks outside the modal, the onCancel function is called.
   - When the user clicks the "Cancel" button, the onCancel function is called.
   - When the user clicks the "Delete" button, the onConfirm function is called.
*/
const ConfirmDelete = ({ onCancel, onConfirm }) => {
    const handleCancel = (e) => {
        e.stopPropagation();
        onCancel();
    };

    const handleConfirm = (e) => {
        e.stopPropagation();
        onConfirm();
    };

    return (
        <>
            <div onClick={handleCancel} className="modal-overlay active"></div>
            <div onClick={e => e.stopPropagation()} className="confirm-delete">
                <div className="confirm-delete-text">Confirm delete</div>
                <div className="confirm-delete-buttons">
                    <button
                        onClick={handleCancel}
                        className="cancel-btn"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="confirm-btn"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default ConfirmDelete;
