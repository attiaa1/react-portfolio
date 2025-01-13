import React from 'react';
import FullPageComponent from './components/FullPageComponent';
import NavBar from './components/NavBar';
import './App.css'; // Assuming you have a CSS file for styles

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <FullPageComponent />
    </div>
  );
};

export default App;
