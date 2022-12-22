import React, { useState } from 'react';

function ToDoApp() {
  const [tasks, setTasks] = useState([]); // Initialize an empty task list

  const addTask = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    const newTask = event.target.elements.task.value; // Get the value of the task input field
    setTasks([...tasks, newTask]); // Add the new task to the list
  }

  const deleteTask = (index) => {
    const newTasks = [...tasks]; // Make a copy of the task list
    newTasks.splice(index, 1); // Remove the task at the specified index
    setTasks(newTasks); // Update the task list
  }

  return (
    <div>
      <form onSubmit={addTask}>
        <input type="text" name="task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
