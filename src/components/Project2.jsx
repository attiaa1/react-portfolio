import React, { useState } from "react";
import "./Projects.css";
import login from "../assets/dashboard_login.png";
import register from "../assets/dashboard_registration.png";
import taskGui from "../assets/dashboard_task_gui.png";
import addTask from "../assets/dashboard_add_task.png";

const Project2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [taskGui, addTask, register, login];

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="projects">
      <div className="projects-content">
        <h3>Full-stack Taskboard Web App</h3>
        <p>
          I designed and created a Node.js taskboard planner with a backend API
          using Express.js and Mongoose and an asynchronous frontend in React.
          The project features user authentication with JSON Web Tokens for
          efficient login and session management, and a RESTful API to retrieve
          and manage data from a containerized MongoDB database.
        </p>
        <div className="card-stack" onClick={handleClick}>
          {images.map((image, index) => (
            <img
              key={index}
              className={`card ${index === currentIndex ? 'active' : ''}`}
              src={image}
              alt={`Taskboard GUI ${index + 1}`}
              style={{ zIndex: images.length - index }}
            />
            
          ))}
          <div className="click-prompt" style={{ zIndex: "1000"}}>Click to see more!</div>
        </div>
      </div>
    </div>
  );
};

export default Project2;