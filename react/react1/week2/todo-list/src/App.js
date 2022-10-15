import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import tasks from './db/tasks.json';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './components/home/Home';
import Tasks from './components/tasks/Tasks';
import About from './components/about/About';

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

function App() {
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
    <main>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/home'} element={<Home />} />
        <Route
          path="/tasks"
          element={
            <Tasks
              tasks={myTasks}
              addNewTask={addNewTask}
              deleteTask={deleteTask}
              changeStatus={changeStatus}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
