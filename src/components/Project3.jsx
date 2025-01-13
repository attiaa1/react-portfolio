import React, { useState } from "react";
import "./Projects.css";
import big_grid from "../assets/81_maze.png";
import big_grid_solved from "../assets/81_maze_solved.png";
import grid from "../assets/grid_empty.png";
import grid_solved from "../assets/grid_solved.png";


const Project3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [grid, grid_solved, big_grid, big_grid_solved];

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="projects">
      <div className="projects-content">
        <h3>Low-level Maze Generator & Solver</h3>
        <p>
          I engineered a Rust command-line app to generate & solve mazes based
          on user input for a maze of nxn at a low-level. The generation
          algorithm was optimized using depth-first search and
          recursive-backtracking. I containerized the application to
          simplify deployments.
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

export default Project3;