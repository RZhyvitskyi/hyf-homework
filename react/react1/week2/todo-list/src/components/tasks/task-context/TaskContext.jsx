import React, { useState, useContext } from 'react';
import tasks from './../../../db/tasks.json';

const TaskContext = React.createContext();
const TaskUpdateContext = React.createContext();
const TaskDeleteContext = React.createContext();
const TaskAddContext = React.createContext();

export const useTask = () => {
  return useContext(TaskContext);
};

export const useTaskUpdate = () => {
  return useContext(TaskUpdateContext);
};

export const useTaskDelete = () => {
  return useContext(TaskDeleteContext);
};

export const useTaskAdd = () => {
  return useContext(TaskAddContext);
};

const filterTasks = (tasks) => {
  return tasks.sort((a, b) => {
    const firstDate = new Date(a.date);
    const secondDate = new Date(b.date);
    return secondDate - firstDate;
  });
};

const createNewTask = (task) => {
  return {
    id: Date.now(),
    title: task,
    done: false,
    date: Date.now(),
  };
};

const TaskProvider = ({ children }) => {
  const [myTasks, setMyTasks] = useState(filterTasks(tasks));

  const addNewTask = (task) => {
    const newTasks = [...myTasks, createNewTask(task)];
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

  return (
    <TaskContext.Provider value={myTasks}>
      <TaskUpdateContext.Provider value={changeStatus}>
        <TaskDeleteContext.Provider value={deleteTask}>
          <TaskAddContext.Provider value={addNewTask}>
            {children}
          </TaskAddContext.Provider>
        </TaskDeleteContext.Provider>
      </TaskUpdateContext.Provider>
    </TaskContext.Provider>
  );
};

export default TaskProvider;
