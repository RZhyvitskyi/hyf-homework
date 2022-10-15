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

const createNewTask = (task) => {
  return {
    id: Date.now(),
    title: task,
    done: false,
    date: Date.now(),
  };
};

function App() {
  const [myTasks, setMyTasks] = useState(tasks);

  const addNewTask = (task) => {
    setMyTasks([...myTasks, createNewTask(task)]);
  };

  const deleteTask = (taskId) => {
    setMyTasks(myTasks.filter(({ id }) => id !== taskId));
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
