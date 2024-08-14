import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import login from "../assets/dashboard_login.png"
import register from "../assets/dashboard_registration.png"
import taskGui from "../assets/dashboard_task_gui.png"
import addTask from "../assets/dashboard_add_task.png"

const Project_BR = () => {
  const [isExpanded, setIsExpanded] = useState("False");
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {isExpanded ? (
        <div
        onClick={toggleExpanded}
        className="collapsedSection"
        style={{ height: "100%", width: "100%" }}
        >
          <h1 style={{textAlign: "center", fontSize: "1.5rem"}}>Taskboard Planner App</h1>
          <p style={{fontSize: "1rem", textAlign: "center"}}>
            <span className="keyword">React</span> <span className="keyword">RESTful API</span> <span className="keyword">MongoDB</span> <span className="keyword">Docker</span> 
            <br></br>
            <img className="chunkPic" style={{padding: "10px", width: "90%", height: "90%"}} src={taskGui}></img>
          </p>
        </div>
      ) : (
        <div
          className="expandedSection"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div style={{ 
            fontSize: "1rem",
            backgroundColor: "#0A1128",
            height: "85vh",
            width: "75vw",
            borderRadius: "15px",
            alignItems: "center",
            padding: "15px",
            }}>
            <FontAwesomeIcon
              onClick={ toggleExpanded }
              icon={ faCircleXmark }
              style={{ fontSize: "2rem", margin: "0.5rem"}}>
            </FontAwesomeIcon>
            <h1 style={{textAlign: "center", width: "auto"}}>Taskboard Planner Web App</h1>
            <div style={{textAlign: "center", width: "auto"}} class="icon-grid">
              <div class="icon-item">
                <i class="devicon-nodejs-plain-wordmark" style={{fontSize: "2.5rem", "margin": "0"}}></i>
              </div>
              <div class="icon-item">
                <i class="devicon-react-original-wordmark" style={{fontSize: "2.5rem", "margin": "0"}}></i>
              </div>
              <div class="icon-item">
                <i class="devicon-mongodb-plain-wordmark" style={{fontSize: "2.5rem", "margin": "0"}}></i>
              </div>
              <div class="icon-item">
                <i class="devicon-docker-plain-wordmark" style={{fontSize: "2.5rem", "margin": "0"}}></i>
              </div>
            </div>
            <p>
            I developed a Node.js taskboard planner with a backend API using Express.js and an asynchronous frontend in React. The project features user authentication with JSON Web Tokens for efficient login and session management, and an asynchronous RESTful API to retrieve and manage data from a containerized MongoDB database.
            </p>
            <div style={{ width: "100%", overflow: "auto", whiteSpace: "nowrap"}}>
              <img src={taskGui} style={{padding: "5px", maxWidth: "100dvw", maxHeight: "50dvh", display: "inline-block"}}></img>
              <img src={register} style={{padding: "5px", maxWidth: "50dvw", maxHeight: "50dvh", display: "inline-block"}}></img>
              <img src={login} style={{padding: "5px", maxWidth: "50dvw", maxHeight: "50dvh", display: "inline-block"}}></img>
              <img src={addTask} style={{padding: "5px", maxWidth: "50dvw", maxHeight: "50dvh", display: "inline-block"}}></img>
              </div> 
          </div>
        </div>
      )}
    </>
  );
};

export default Project_BR;
