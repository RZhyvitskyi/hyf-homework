import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { BsFillCircleFill } from 'react-icons/bs';
import './Task.css';

const Task = ({ task, deleteTask }) => {
  const date = new Date(task.date);

  return (
    <li className="task__item">
      <p>{task.done ? <BsFillCheckCircleFill /> : <BsFillCircleFill />}</p>
      <h4>{task.title}</h4>
      <span>{date.toDateString()}</span>
      <button className="button" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
};

export default Task;
