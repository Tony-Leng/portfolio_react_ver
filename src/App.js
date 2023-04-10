import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skill from './components/Skill';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skill />
    </div>
  );
}

export default App;
