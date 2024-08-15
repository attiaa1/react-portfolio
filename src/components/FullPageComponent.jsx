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
            <h1>Section 2</h1>
            <button onClick={() => fullpageApi.moveSectionUp()}>
              Move up
            </button>
          </div>
          <div id='projects' className="section">
            <h1>Section 3</h1>
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
