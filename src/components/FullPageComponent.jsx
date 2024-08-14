import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from './Hero';
import NavBar from './NavBar';
import '../App.css'

const FullPageComponent = () => (
  <ReactFullpage
    // Fullpage.js options
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Hero />
          </div>
          <div className="section">
            <h1>Section 2</h1>
            <button onClick={() => fullpageApi.moveSectionUp()}>
              Move up
            </button>
          </div>
          <div className="section">
            <h1>Section 3</h1>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default FullPageComponent;
