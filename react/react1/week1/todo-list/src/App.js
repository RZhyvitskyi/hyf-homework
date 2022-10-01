import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Tasks from './components/tasks';
import About from './components/about';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/home' && '/'} element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
