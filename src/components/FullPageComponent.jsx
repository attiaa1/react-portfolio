import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from './Hero';
import About from './About';
import Work1 from './Work1';
import Work2 from './Work2';
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
                        <Work1 />
                    </div>
                    <div id='projects' className="section">
                        <Work2 />
                    </div>
                    <div id='projects' className="section">
                        <h1>Hello World 3!</h1>
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
