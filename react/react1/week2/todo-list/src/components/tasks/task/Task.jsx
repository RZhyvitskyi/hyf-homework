import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { BsFillCircleFill } from 'react-icons/bs';
import './Task.css';

const Task = ({ task, deleteTask, changeStatus }) => {
  const date = new Date(task.date);

  const deleteThisTasks = (e) => {
    e.stopPropagation();

    deleteTask(task.id);
  };

  return (
    <li
      className={`task__item ${task.done ? 'task_done' : ''}`}
      onClick={() => changeStatus(task.id)}>
      {task.done ? <BsFillCheckCircleFill /> : <BsFillCircleFill />}
      <h4>{task.title}</h4>
      <span>{date.toDateString()}</span>
      <button className="button" onClick={deleteThisTasks}>
        Delete
      </button>
    </li>
  );
};

export default Task;
