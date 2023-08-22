
import './App.css';

import { BrowserRouter , Route, Routes } from 'react-router-dom'
import React from 'react';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/project';






function App() {
  return (
    <BrowserRouter>
    
    <div>
      
      
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Project/>}/>
        
    
      </Routes>
      
    

    </div>
    </BrowserRouter>
  );
}

export default App;
