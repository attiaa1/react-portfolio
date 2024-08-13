import React from 'react';
import '../App.css'

const Home = () => {
  return (
      <div className='blurb'>
        <h1> Who am I?</h1>
        <p>
        My name is Adam. I'm a full-stack developer.
        If you're looking for my resume, you can find it <a style={{color: "amber"}} href="https://adamattia.me/resume"> here</a>.
        </p> 
      </div>
  );
};

export default Home;