import React, { useState } from 'react';
import './TodoList.css';

const TodoForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="todo-form">
      <input type="text" value={newTask} onChange={handleInputChange} className="todo-input" />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TodoForm;