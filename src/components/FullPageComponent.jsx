import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from './Hero';
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
            <h1>Hi!</h1>
          </div>
          <div id='projects' className="section">
            <div className="slide">Slide 3.1</div>
            <div className="slide">Slide 3.2</div>
            <div className="slide">Slide 3.3</div>
          </div>
          <div id='experience' className="section">
            <h1>Section 4</h1>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default FullPageComponent;
