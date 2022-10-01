import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Tasks from './components/tasks/Tasks';
import About from './components/about/About';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/home'} element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
