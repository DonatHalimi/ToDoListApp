import { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { addTask, setTasks } from '../redux/actions';
import EditToDoForm from './EditToDoForm';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';

/* 
   ToDoWrapper Component

   - Manages the overall structure of the To-Do application.
   - Utilizes Redux for state management.
   - Includes a progress bar, To-Do form, and a list of To-Do items.
   - Handles the addition, completion, deletion, and editing of tasks.
   - Updates progress based on task completion.
   - Uses local storage to persist tasks.
   - Implements drag and drop reordering functionality with boundaries.
*/
const ToDoWrapper = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        dispatch(setTasks(storedTasks));
        updateProgress(storedTasks);
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        updateProgress(tasks);
    }, [tasks]);

    const addTodo = (todo) => {
        dispatch(addTask({
            id: uuidv4(),
            task: todo,
            completed: false,
            isEditing: false,
        }));
        updateProgress([...tasks, { task: todo, completed: false }]);
    };

    const toggleComplete = (id) => {
        dispatch(setTasks(
            tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
        ));
        updateProgress(tasks);
    };

    const deleteTodo = (id) => {
        const deletedTask = tasks.find((task) => task.id === id)?.task || '';
        dispatch(setTasks(tasks.filter((task) => task.id !== id)));
        toast.info(`Task '${deletedTask}' deleted successfully`);
        updateProgress(tasks.filter(task => task.id !== id));
    };

    const editTodo = (id) => {
        dispatch(setTasks(
            tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task)
        ));
    };

    const editTask = (task, id) => {
        dispatch(setTasks(
            tasks.map(t => t.id === id ? { ...t, task, isEditing: !t.isEditing } : t)
        ));
    };

    const updateProgress = (updatedTasks) => {
        if (updatedTasks.length === 0) {
            setProgress(0);
            return;
        }
        const completedTasks = updatedTasks.filter(task => task.completed);
        const progressPercentage = (completedTasks.length / updatedTasks.length) * 100;
        setProgress(isNaN(progressPercentage) ? 0 : progressPercentage);
    };

    const handleDragEnd = (result) => {
        document.body.classList.remove('dragging');

        if (!result.destination || result.destination.index === result.source.index) {
            return;
        }

        if (result.destination.droppableId !== 'todo-list') {
            toast.error('Tasks can only be moved within the task list');
            return;
        }

        const reorderedTasks = Array.from(tasks);
        const [removed] = reorderedTasks.splice(result.source.index, 1);
        reorderedTasks.splice(result.destination.index, 0, removed);

        dispatch(setTasks(reorderedTasks));

        toast.success('Task order updated');
    };

    const handleDragStart = () => {
        document.body.classList.add('dragging');
    };

    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <ToDoForm addTodo={addTodo} />

            <DragDropContext
                onDragEnd={handleDragEnd}
                onDragStart={handleDragStart}
            >
                <Droppable
                    droppableId="todo-list"
                    mode="standard"
                    direction="vertical"
                >
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={`todo-list-container ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                        >
                            {tasks.map((task, index) => (
                                <Draggable
                                    key={task.id}
                                    draggableId={task.id}
                                    index={index}
                                    isDragDisabled={task.isEditing}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            className={`task-item ${snapshot.isDragging ? 'dragging' : ''}`}
                                        >
                                            {task.isEditing ? (
                                                <EditToDoForm
                                                    key={task.id}
                                                    editTodo={(value) => editTask(value, task.id)}
                                                    task={task}
                                                />
                                            ) : (
                                                <ToDoItem
                                                    key={task.id}
                                                    task={task}
                                                    toggleComplete={() => toggleComplete(task.id)}
                                                    deleteTodo={() => deleteTodo(task.id)}
                                                    editTodo={() => editTodo(task.id)}
                                                    dragHandleProps={provided.dragHandleProps}
                                                    isDragging={snapshot.isDragging}
                                                />
                                            )}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default ToDoWrapper;