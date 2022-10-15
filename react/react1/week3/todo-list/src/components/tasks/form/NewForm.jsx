import React from 'react';
import { useState } from 'react';
import './NewForm.css';

const NewForm = ({ addNewTask }) => {
  const todayDate = new Date().toISOString().slice(0, 10);

  const [task, setTask] = useState('');
  const [date, setDate] = useState(todayDate);
  const [emptyTask, setEmptyTask] = useState(false);
  const [wrongDate, setWrongDate] = useState(false);

  const addTask = (e) => {
    e.preventDefault();

    const nowDate = new Date().toISOString().slice(0, 10);

    if (task === '') {
      setEmptyTask(true);
    } else if (date < nowDate) {
      setWrongDate(true);
    } else {
      setWrongDate(false);
      setEmptyTask(false);
      addNewTask(task, date);
      setTask('');
      setDate(nowDate);
    }
  };

  const onDate = (e) => {
    const newDate = new Date(e.target.value).toISOString().slice(0, 10);
    setDate(newDate);
  };

  return (
    <form className="form" onSubmit={addTask}>
      <div className="form__fields">
        {emptyTask && <p className="error_message">Task can't be empty</p>}
        <input
          type="text"
          className={`input__text ${emptyTask ? 'input_error' : ''}`}
          value={task}
          placeholder={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {wrongDate && <p className="error_message">Wrong date</p>}
        <input
          type="date"
          className={`input__date ${wrongDate ? 'input_error' : ''}`}
          value={date}
          onChange={onDate}
        />
        <button type="submit" className="button">
          New task
        </button>
      </div>
    </form>
  );
};

export default NewForm;
