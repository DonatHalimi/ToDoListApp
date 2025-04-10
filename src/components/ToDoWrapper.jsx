import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { addTask, setTasks } from '../redux/actions';
import EditToDoForm from './EditToDoForm';
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

    const editTask = (id) => {
        dispatch(setTasks(
            tasks.map(task => task.id === id ? { ...task, task, isEditing: !task.isEditing } : task)
        ));
    };

    const updateProgress = (updatedTasks) => {
        const completedTasks = updatedTasks.filter(task => task.completed);
        const progressPercentage = (completedTasks.length / updatedTasks.length) * 100;
        setProgress(progressPercentage);
    };

    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <ToDoForm addTodo={addTodo} />

            {tasks.map((task) =>
                task.isEditing ? (
                    <EditToDoForm key={task.id} editTodo={() => editTask(task.id)} task={task} />
                ) : (
                    <ToDo
                        key={task.id}
                        task={task}
                        toggleComplete={() => toggleComplete(task.id)}
                        deleteTodo={deleteTodo}
                        editTodo={() => editTodo(task.id)}
                    />
                )
            )};
        </div>
    );
};

export default ToDoWrapper;