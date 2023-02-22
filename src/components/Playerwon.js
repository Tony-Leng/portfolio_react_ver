import React from 'react'

export default function Intro() {
  return (
    <div>
      <h2 id="myprojects">My Projects</h2>
      <div class="container">
        <div class="card-projects d-flex">
          <div class="card-description">
              <h4>PlayerWON</h4>
              <p>Inspired by AirBnB, PlayerWON is a marketplace app that allows gamers to connect and find coaching or provide coaching. (Desktop only)</p>
              <p>My role for this project was <strong>Front End Lead</strong>.</p>
              <p>Html | CSS | JS | Stimulus | Ruby on Rails | PostgreSQL</p>
          </div>
          <div class="projectimg"  id="playerwon">
            <img class="projectimg" src="images/playerwon.png" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  )
}
