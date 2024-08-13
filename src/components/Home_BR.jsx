import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar, faBicycle, faPersonHiking, faPersonSnowboarding, faCat, faBook, faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import '../App.css'

const Home_BR = () => {
  return (
  <div className='blurb'>
  
  <h1>Hobbies</h1>
      <p>
      <FontAwesomeIcon
              icon={faBicycle}
              style={{ fontSize: "1.5rem", margin: "10px"}}
            ></FontAwesomeIcon>
      <FontAwesomeIcon
              icon={faGuitar}
              style={{ fontSize: "1.5rem", margin: "10px"}}
            ></FontAwesomeIcon>
      <FontAwesomeIcon
              icon={faPersonHiking}
              style={{ fontSize: "1.5rem", margin: "10px"}}
              ></FontAwesomeIcon>
      <FontAwesomeIcon
              icon={faPersonSnowboarding}
              style={{ fontSize: "1.5rem", margin: "10px"}}
              ></FontAwesomeIcon>
      <FontAwesomeIcon
              icon={faCat}
              style={{ fontSize: "1.5rem", margin: "10px"}}
              ></FontAwesomeIcon>
      <FontAwesomeIcon
              icon={faBookBookmark}
              style={{ fontSize: "1.5rem", margin: "10px"}}
              ></FontAwesomeIcon>
      </p>
  
  </div>);
};

export default Home_BR;