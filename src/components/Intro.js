import React from 'react'

export default function Intro() {
  return (
    <div className="initial-view d-flex">
    <div className="name-title">
      <h1 class="name">Tony Leng</h1>
      <h3 className="title">Front-End Web Developer</h3>
      <div className="socialicons">
        <a href="https://github.com/Tony-Leng" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/tony-leng/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="mailto: lengtk@gmail.com"><i class="fa-solid fa-square-envelope"></i></a>
      </div>
    </div>
      <div>
      <img id="home-img" src="images/ProfilePic.png" alt=""></img>
    </div>
    <div className="arrow bounce d-lg-none">
      <div className="fa fa-arrow-down fa-2x" href=""></div>
    </div>
  </div>
  )
}
