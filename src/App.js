import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skill from './components/Skill';
import Projects from './components/Projects';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skill />
      <Projects />
    </div>
  );
}

export default App;
