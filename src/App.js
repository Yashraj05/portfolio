import React from 'react'
import'./index.css';

import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Project from './routes/Project'
import About from './routes/About'
import Contact from './routes/Contact'
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/portfolio' element={<Home></Home>} ></Route>

        <Route path='/portfolio/project' element={<Project></Project>} ></Route>
        <Route path='/portfolio/about' element={<About></About>} ></Route>
        <Route path='/portfolio/contact' element={<Contact></Contact>} ></Route>
      </Routes>
      
    </>
  )
}