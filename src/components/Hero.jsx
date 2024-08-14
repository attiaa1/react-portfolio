import React from 'react'
import Caricature from '../assets/2D_caricature.png'
import './Hero.css'

const Hero = () => {
    return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Adam Attia!</h1>
        <p>
          Full-stack Dev & Software Engineer with a love for scalable solutions, music, and art. <br></br>
          If you're looking for my resume, you can find it <a style={{ color: "white" }} href="https://www.adamattia.me/resume" target="_blank">here</a>.
        </p>
        <img alt='Caricature of my cat and I' src={Caricature}></img>
      </div>
    </section>
    );
        
}

export default Hero