import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import maze from "../assets/grid_empty.png";
import maze_81 from "../assets/81_maze.png";
import mazeSolved from "../assets/grid_solved.png";
import mazeSolved_81 from "../assets/81_maze_solved.png";

const Project_TR = () => {
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
          style={{ height: "100%", width: "100%", overflow: "hidden" }}
        >
          <h1 style={{ textAlign: "center", fontSize: "1.5rem" }}>
            Maze Generator & Solver
          </h1>
          <p style={{ fontSize: "1rem", textAlign: "center" }}>
            <span className="keyword">Rust</span>{" "}
            <span className="keyword">Terminal</span>{" "}
            <span className="keyword">Recursion</span>{" "}
            <span className="keyword">Docker</span>
            <br></br>
            <img
              className="chunkPic"
              style={{ padding: "10px" }}
              src={mazeSolved}
              height="55%"
              width="55%"
            />
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
          <div
            style={{
              fontSize: "1rem",
              backgroundColor: "#0A1128",
              height: "85vh",
              width: "75vw",
              borderRadius: "15px",
              alignItems: "center",
              padding: "15px",
              overflowY: "auto",
              // display: "flex",
              // flexDirection: "column"
            }}
          >
            <FontAwesomeIcon
              onClick={toggleExpanded}
              icon={faCircleXmark}
              style={{ fontSize: "2rem", margin: "0.5rem" }}
            ></FontAwesomeIcon>
            <h1 style={{ textAlign: "center", width: "auto" }}>
              Maze Generator & Solver
            </h1>
            <div
              style={{ textAlign: "center", width: "auto", flexDirection: "row" }}
              class="icon-grid"
            >
              <div class="icon-item">
                <i
                  class="devicon-rust-original"
                  style={{ fontSize: "2.5rem", margin: "0" }}
                ></i>
              </div>
              <div class="icon-item">
                <i
                  class="devicon-bash-plain"
                  style={{ fontSize: "2.5rem", margin: "0" }}
                ></i>
              </div>
              <div class="icon-item">
                <i
                  class="devicon-docker-plain-wordmark"
                  style={{ fontSize: "2.5rem", margin: "0" }}
                ></i>
              </div>
            </div>
            <p>
              I created a Rust command-line app to generate & solve mazes based
              on user input for a maze of nxn at a low-level. The generation
              algorithm was optimized using depth-first search and
              recursive-backtracking. I containerized the application to
              simplify deployments.
            </p>
            <div style={{ width: "100%", overflowX: "auto", whiteSpace: "normal", justifyContent: "center" }}>
              <img src={maze_81} style={{padding: "5px", maxWidth: "100dvw", maxHeight: "50dvh", display: "inline-flex"}}></img>
              <img src={mazeSolved_81} style={{padding: "5px", maxWidth: "100dvw", maxHeight: "50dvh", display: "inline-flex"}}></img>
              <img src={maze} style={{padding: "5px", maxWidth: "100dvw", maxHeight: "50dvh", display: "inline-flex"}}></img>
              <img src={mazeSolved} style={{padding: "5px", maxWidth: "100dvw", maxHeight: "50dvh", display: "inline-flex"}}></img>
              </div> 
          </div>
        </div>
      )}
    </>
  );
};

export default Project_TR;
