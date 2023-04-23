import React from 'react';
import { useState, useEffect } from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import github from './images/github-logo_icon.png';
import linkedin from './images/linkedin_logo.png';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // onScroll is to detect when user scrolls down to change background color of Navbar
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    // remove when the component is removed from the DOM
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand='lg' className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href='#home'>
          {/* <img src={logo} alt='logo'/> */}
          [TL]
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {/* <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link> */}
            <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>My Stack</Nav.Link>
            <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>My Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://github.com/Tony-Leng'><img src={github} alt=''/></a>
              <a href='https://www.linkedin.com/in/tony-leng/'><img src={linkedin} alt=''/></a>
            </div>
            <button className='contactme' onClick={() => window.location = 'mailto:lengtk@gmail.com'}>
              <span>Contact Me</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
