import React, { useState, useContext } from 'react';
import tasks from './../../../db/tasks.json';

const TaskContext = React.createContext({});

export const useTask = () => {
  return useContext(TaskContext);
};

const filterTasks = (tasks) => {
  return tasks.sort((a, b) => {
    const firstDate = new Date(a.date);
    const secondDate = new Date(b.date);
    return secondDate - firstDate;
  });
};

const createNewTask = (task, date) => {
  return {
    id: Date.now(),
    title: task,
    done: false,
    date: date,
  };
};

const TaskProvider = ({ children }) => {
  const [myTasks, setMyTasks] = useState(filterTasks(tasks));

  const addNewTask = (task, date) => {
    const newTasks = [...myTasks, createNewTask(task, date)];
    setMyTasks(filterTasks(newTasks));
  };

  const deleteTask = (taskId) => {
    setMyTasks(myTasks.filter(({ id }) => id !== taskId));
  };

  const changeStatus = (taskId) => {
    const newTasks = myTasks.map((task) => {
      if (task.id === taskId) {
        task.done = !task.done;
      }

      return task;
    });

    setMyTasks(filterTasks(newTasks));
  };

  const editTask = (taskId, title) => {
    const editedTasks = myTasks.map((task) => {
      if (task.id === taskId) {
        task.title = title;
      }

      return task;
    });

    setMyTasks(filterTasks(editedTasks));
  };

  return (
    <TaskContext.Provider
      value={{ myTasks, changeStatus, deleteTask, addNewTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
