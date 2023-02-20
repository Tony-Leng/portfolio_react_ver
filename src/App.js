import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import StackIcons from './components/StackIcons';
import AboutMe from './components/AboutMe';
import Playerwon from './components/Playerwon';
import Healthway from './components/Healthway';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <StackIcons />
      <AboutMe />
      <Playerwon />
      <Healthway />
    </div>
  );
}

export default App;
