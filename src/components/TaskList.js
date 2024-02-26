import React from 'react';
import Task from './Task';
import './TodoList.css';

const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onEdit={(editedTask) => onEditTask(index, editedTask)}
          onDelete={() => onDeleteTask(index)}
          
        />
      ))}
    </ul>
  );
};

export default TaskList;