import React from 'react';
import { useState } from 'react';
import './NewForm.css';

const NewForm = ({ addNewTask }) => {
  const [task, setTask] = useState(null);

  const addTask = (e) => {
    e.preventDefault();

    addNewTask(task);
  };

  return (
    <form className="form" onSubmit={addTask}>
      <input
        type="text"
        className="input__text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="button">
        New task
      </button>
    </form>
  );
};

export default NewForm;
