import React from 'react';
import Container from '../layout/container/Container';
import './Tasks.css';
import Task from './task/Task';

const Tasks = ({ tasks }) => {
  return (
    <Container>
      <div className="tasks">
        <h2 className="tasks__title">My tasks</h2>
        <ul className="tasks__list">
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Tasks;
