import React from 'react';
import Container from '../layout/container/Container';
import './Tasks.css';
import TaskList from './task-list/TaskList';
import Form from './form/NewForm';

const Tasks = ({ tasks, addNewTask, deleteTask, changeStatus }) => {
  const pendingTasks = tasks.filter(({ done }) => !done);
  const doneTasks = tasks.filter(({ done }) => done);

  return (
    <Container>
      <div className="tasks">
        <h2 className="tasks__title">My tasks</h2>
        <Form addNewTask={addNewTask} />
        <div className="tasks__wrapper">
          <TaskList
            tasks={pendingTasks}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
            title="ToDo tasks"
          />
          <TaskList
            tasks={doneTasks}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
            title="Done tasks"
          />
        </div>
      </div>
    </Container>
  );
};

export default Tasks;
