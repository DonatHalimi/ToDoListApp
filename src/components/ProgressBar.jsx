import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

/* 
    ProgressBar Component
    
  - ProgressBar component calculates the completion progress based on the number of completed tasks.
  - It utilizes the Redux state to fetch the current tasks and updates the progress accordingly.
  - The progress bar is displayed on top of the page, and its width is dynamically adjusted to represent the completion percentage.
  - The useEffect hook ensures that the progress is updated whenever the tasks in the Redux state change.
  - The progress is then used to set the width of the progress bar, creating a visual representation of task completion.
*/

const ProgressBar = () => {
    // Fetch tasks from the Redux state
    const tasks = useSelector((state) => state.tasks);

    // State to store the calculated progress
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Calculate the percentage of completed tasks
        const completedTasks = tasks.filter(task => task.completed);
        const progressPercentage = (completedTasks.length / tasks.length) * 100;

        // Update the progress state
        setProgress(progressPercentage);
    }, [tasks]);

    // JSX Rendering
    return (
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}>
            </div>
        </div>
    );
};

export default ProgressBar;