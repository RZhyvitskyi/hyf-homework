import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import tasks from './db/tasks.json';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './components/home/Home';
import Tasks from './components/tasks/Tasks';
import About from './components/about/About';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/home'} element={<Home />} />
        <Route path="/tasks" element={<Tasks tasks={tasks} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
