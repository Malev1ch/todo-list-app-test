import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TodoForm from './TodoForm';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index, editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-container">
      <h1 className="todo-header">To-Do List</h1>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
      <TodoForm onAddTask={handleAddTask} />
    </div>
  );
};

export default TodoList;