import React from 'react';
import { useState, useEffect } from 'react';
import {Navbar, Container} from "react-bootstrap";

export default function Navbar() {
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

  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.brand href='#home'>
          <img src={''} alt='logo'/>
        </Navbar.brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#skills'>Skills</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#'><img src={''} alt=''/></a>
              <a href='#'><img src={''} alt=''/></a>
              <a href='#'><img src={''} alt=''/></a>
            </div>
            <button className='contactme' onClick={() => console.log('contact me')}>
              <span>Contact Me</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
