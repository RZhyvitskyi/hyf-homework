import React from 'react';
import Container from '../layout/container/Container';
import './Tasks.css';
import Task from './task/Task';
import Form from './form/NewForm';

const Tasks = ({ tasks, addNewTask, deleteTask, changeStatus }) => {
  return (
    <Container>
      <div className="tasks">
        <h2 className="tasks__title">My tasks</h2>
        <Form addNewTask={addNewTask} />
        <ul className="tasks__list">
          {tasks.map((task) => {
            return (
              <Task
                task={task}
                key={task.id}
                deleteTask={deleteTask}
                changeStatus={changeStatus}
              />
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Tasks;
