import React from 'react';
import Container from '../layout/container/Container';
import './Tasks.css';
import TaskList from './task-list/TaskList';
import Form from './form/NewForm';
import { useTask } from './task-context/TaskContext';

const Tasks = () => {
  const { myTasks: tasks, addNewTask } = useTask();

  const pendingTasks = tasks.filter(({ done }) => !done);
  const doneTasks = tasks.filter(({ done }) => done);

  return (
    <Container>
      <div className="tasks">
        <h2 className="tasks__title">My tasks</h2>
        <Form addNewTask={addNewTask} />
        <div className="tasks__wrapper">
          <TaskList tasks={pendingTasks} title="ToDo tasks" />
          <TaskList tasks={doneTasks} title="Done tasks" />
        </div>
      </div>
    </Container>
  );
};

export default Tasks;
