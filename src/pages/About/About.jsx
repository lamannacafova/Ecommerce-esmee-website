import React from 'react'
import { NavLink } from 'react-router-dom'
import Team from './components/Team'
import Design from './components/Design'

const About = () => {
  return (
    <>
    <section className="abouts">
    <div className="about-page">
          <p>
            <NavLink to="/">Home</NavLink> <span>|</span> About
          </p>
        </div>
        <Team/>
        <Design/>

    </section>
      
    </>
  )
}

export default About
