import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TaskProvider from './components/tasks/task-context/TaskContext';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './components/home/Home';
import Tasks from './components/tasks/Tasks';
import About from './components/about/About';

function App() {
  return (
    <main>
      <TaskProvider>
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/home'} element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </TaskProvider>
    </main>
  );
}

export default App;
