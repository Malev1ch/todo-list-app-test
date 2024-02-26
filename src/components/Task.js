import React, { useState } from 'react';
import './TodoList.css';

const Task = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setEditedTask(event.target.value);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <div>
          <input type="text" value={editedTask} onChange={handleInputChange} className="edit-input" />
          <button onClick={handleSaveEdit} className="save-button">Save</button>
        </div>
      ) : (
        <div className='task-buttons'>
          <span>{task}</span>
          <div className='inputs-edit-del'>
            <button onClick={handleEdit} className="edit-button">Edit</button>
          <button onClick={onDelete} className="task-delete-button">Delete</button>
          </div>
          
        </div>
      )}
    </li>
  );
};

export default Task;