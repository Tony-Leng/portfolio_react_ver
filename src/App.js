import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import StackIcons from './components/StackIcons';
import AboutMe from './components/AboutMe';
import Playerwon from './components/Playerwon';
import Healthway from './components/Healthway';
// import logo from './logo.svg';
import './App.css';
import useWindowSize from './components/useWindowSize';

function App() {

  const size = useWindowSize();

  return (
    <div className='App'>
      {size.width > 540 && <Navbar />}
      <Intro />
      <StackIcons />
      <AboutMe />
      <Playerwon />
      <Healthway />
    </div>
  );
}

export default App;
