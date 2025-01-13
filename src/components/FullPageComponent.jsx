import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from './Hero';
import About from './About';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Hobbies from './Hobbies';
import '../App.css'

const FullPageComponent = () => (
  <ReactFullpage
    // Fullpage.js options
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={700} /* Options here */
    loopBottom={'True'}
    navigation={'true'}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div id='home' className="section">
            <Hero />
          </div>
          <div id='about' className="section">
            <About />
          </div>
          <div id='projects' className="section">
            <div className="slide">
              <Project1 />
            </div>
            <div className="slide">
              <Project2 />
            </div>
            <div className="slide">
              <Project3 />
            </div>
          </div>
          <div id='experience' className="section">
            <Hobbies />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default FullPageComponent;
