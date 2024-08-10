import React from "react";
import headshot from "../assets/headshot-bg.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Home_TR = () => {
  return (
    <div className="blurb">
      <img
        className="headshot"
        src={headshot}
        style={{
          objectFit: "contain",
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: "32px",
        }}
      ></img>
      <h1 style={{ fontStyle: "italic" }}>Feeling Social?</h1>
      <p>Reach me at any one of these:</p>
      <div
        class="icon-grid"
        style={{ display: "flex", gap: "16px", justifyContent: "center" }}
      >
        <div class="icon-item">
          <a
            className="socials"
            href="https://www.linkedin.com/in/adam-attia2/"
          >
            <i class="devicon-linkedin-plain" style={{ fontSize: "1.5em" }}></i>
          </a>
        </div>
        <div class="icon-item">
          <a className="socials" href="https://github.com/attiaa1">
            <i class="devicon-github-plain" style={{ fontSize: "1.5em" }}></i>
          </a>
        </div>
        <div class="icon-item">
          <a className="socials" href="mailto:adduma.attia@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ fontSize: "1.5em" }}
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home_TR;
