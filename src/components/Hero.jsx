import React from "react";
import Caricature from "../assets/2D_caricature.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>Hi, I'm Adam Attia!</h1>
        <p>
          Software Developer based in Philadelphia with a love for Linux, music, and cats. If you're looking for my resume, you'll
          find it{" "}
          <a
            style={{ color: "white", padding: "2px" }}
            href="https://www.adamattia.me/resume"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <a
          style={{
            display: "inline-flex",
            color: "white",
            textDecoration: "none",
            padding: "15px",
            height: "auto"
          }}
          href="https://www.linkedin.com/in/adam-attia2/"
          target="_blank"
        >
          <i class="devicon-linkedin-plain" style={{ fontSize: "40px" }}></i>
        </a>
        <a
          style={{
            display: "inline-flex",
            color: "white",
            textDecoration: "none",
            padding: "15px",
            height: "auto"
          }}
          href="https://github.com/attiaa1"
          target="_blank"
        >
          <i class="devicon-github-plain" style={{ fontSize: "40px" }}></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
