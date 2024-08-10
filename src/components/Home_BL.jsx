import React from 'react';
import '../App.css'

const Home_BL = () => {
  return (
      <div className='blurb'>
        <h1>My Skills</h1>
        <div class="icon-grid">
          <div class="icon-item">
            <i class="devicon-azure-plain" style={{fontSize: "3rem", "margin": "0"}}></i> <span style={{fontSize: "1rem"}}>Azure</span>
          </div>
          <div class="icon-item">
            <i class="devicon-amazonwebservices-plain-wordmark" style={{fontSize: "3rem", "margin": "0"}}></i> <span style={{fontSize: "1rem"}}>AWS</span>
          </div>
          <div class="icon-item">
            <i class="devicon-docker-plain" style={{fontSize: "3rem", "margin": "0"}}></i> <span style={{fontSize: "1rem"}}>Docker</span>
          </div>
          <div class="icon-item">
            <i class="devicon-kubernetes-plain" style={{fontSize: "3rem", "margin": "0"}}></i> <span style={{fontSize: "1rem"}}>K8s</span>
          </div>
          <div class="icon-item">
            <i class="devicon-python-plain" style={{fontSize: "3rem", "margin": "0"}}></i> <span style={{fontSize: "1rem"}}>Python</span>
          </div>
          <div class="icon-item">
            <i class="devicon-react-original" style={{fontSize: "3rem", "margin": "0"}}></i> <span style={{fontSize: "1rem"}}>React</span>
          </div>
          <div class="icon-item">
            <i class="devicon-nodejs-plain-wordmark" style={{fontSize: "3rem", "margin": "0"}}></i> <span style={{fontSize: "1rem"}}>Node.js</span>
          </div>
          <div class="icon-item">
            <i class="devicon-cplusplus-plain" style={{fontSize: "3rem", "margin": "0"}}></i> <span style={{fontSize: "1rem"}}>C++</span>
          </div>
          <div class="icon-item">
            <i class="devicon-git-plain" style={{fontSize: "3rem", "margin": "0"}}></i> <span style={{fontSize: "1rem"}}>Git</span>
          </div>
          <div class="icon-item">
            <i class="devicon-mongodb-plain" style={{fontSize: "3rem", "margin": "0"}}></i> <span style={{fontSize: "1rem"}}>MongoDB</span>
          </div>
        </div>
      </div>
  );
};

export default Home_BL;