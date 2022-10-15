import React from 'react';
import { useState } from 'react';
import './NewForm.css';

const NewForm = ({ addNewTask }) => {
  const [task, setTask] = useState('');
  const [emptyTask, setEmptyTask] = useState(false);

  const addTask = (e) => {
    e.preventDefault();

    if (task === '') {
      setEmptyTask(true);
    } else {
      setEmptyTask(false);
      addNewTask(task);
      setTask('');
    }
  };

  return (
    <form className="form" onSubmit={addTask}>
      {emptyTask && <p className="error_message">Task can't be empty</p>}
      <div className="form__fields">
        <input
          type="text"
          className={`input__text ${emptyTask ? 'input_error' : ''}`}
          value={task}
          placeholder={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="button">
          New task
        </button>
      </div>
    </form>
  );
};

export default NewForm;
