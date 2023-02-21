import React from 'react'

export default function Intro() {
  return (
    <div class="initial-view d-flex">
    <div class="name-title">
      <h1 class="name">Tony Leng</h1>
      <h3 class="title">Front-End Web Developer</h3>
      <div class="socialicons">
        <a href="https://github.com/Tony-Leng" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/tony-leng/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="mailto: lengtk@gmail.com"><i class="fa-solid fa-square-envelope"></i></a>
      </div>
    </div>
      <div>
      <img id="home-img" src="images/ProfilePic.png" alt=""></img>
    </div>
    <div class="arrow bounce d-lg-none">
      <div class="fa fa-arrow-down fa-2x" href=""></div>
    </div>
  </div>
  )
}
