import React from 'react';
import '../App.css'

const About = () => {
  return (
    <div>
      <div>
        <h1>ABOUT</h1>
        <h2> About me</h2>
        <p>
          Hi, my name is Adam Attia. I have a passion for DevSecOps and Cybersecurity, and this will serve as my online portfolio or resume.
        </p>
        <h2>About this page</h2>
        <p>
          This page was created using <a href='https://react.dev/'>React</a>, <a href="https://vitejs.dev/guide/cli.html">Vite</a>, and deployed with Nginx to be served via my Raspberry Pi 3 board, this last bit is still up in the air.
        </p>
      </div>
    </div>
  )
};

export default About;
