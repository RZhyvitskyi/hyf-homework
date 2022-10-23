import React, { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { BsFillCircleFill } from 'react-icons/bs';
import './Task.css';
import { useTask } from './../task-context/TaskContext';

const Task = ({ task }) => {
  const date = new Date(task.date);

  const [title, setTitle] = useState(task.title);
  const [edit, setEdit] = useState(false);
  const [emptyTask, setEmptyTask] = useState(false);

  const { deleteTask, changeStatus, editTask } = useTask();

  const deleteThisTasks = (e) => {
    e.stopPropagation();

    deleteTask(task.id);
  };

  const editThisTasks = (e) => {
    e.stopPropagation();
    setEdit(true);
  };

  const updateThisTasks = (e) => {
    e.stopPropagation();

    if (title === '') {
      setEmptyTask(true);
    } else {
      setEmptyTask(false);
      editTask(task.id, title);
      setEdit(false);
    }
  };

  return (
    <li
      className={`task__item ${task.done ? 'task_done' : ''}`}
      onClick={() => changeStatus(task.id)}>
      {task.done ? <BsFillCheckCircleFill /> : <BsFillCircleFill />}
      {edit ? (
        <input
          type="text"
          className={`input__text ${emptyTask ? 'input_error' : ''}`}
          value={title}
          placeholder={title}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <h4>{task.title}</h4>
      )}
      <span>{date.toDateString()}</span>
      {edit ? (
        <button className="button" onClick={updateThisTasks}>
          Update
        </button>
      ) : (
        <button className="button" onClick={editThisTasks}>
          Edit
        </button>
      )}
      <button className="button" onClick={deleteThisTasks}>
        Delete
      </button>
    </li>
  );
};

export default Task;
