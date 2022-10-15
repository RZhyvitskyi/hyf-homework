import React from 'react';
import './TaskList.css';
import Task from './../task/Task';

const TaskList = ({ tasks, title }) => {
  return (
    <>
      <h3 className="tasks__status">{title}</h3>
      {tasks.length === 0 && <p className="tasks__empty">No tasks</p>}
      <ul className="tasks__list">
        {tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      </ul>
    </>
  );
};

export default TaskList;
