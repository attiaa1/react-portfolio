import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGuitar,
  faBicycle,
  faPersonHiking,
  faPersonSnowboarding,
  faCat,
  faBook,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const Hobbies = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h3>More about this site!</h3>
        <p>
          This page was created using{" "}
          <a href="https://react.dev/" style={{ color: "white" }}>
            React
          </a>
          ,{" "}
          <a
            style={{ color: "white" }}
            href="https://vitejs.dev/guide/cli.html"
          >
            Vite
          </a>
          , and deployed via Nginx reverse-proxy on my personal Ubuntu server
          via HTTPS with Certbot. I created a Bash script to automate deployment, but
          something like this could also be automated via a CI/CD pipeline and I
          may implement this in the near future!
        </p>

        <h3>Hobbies</h3>
        <p>
          <FontAwesomeIcon
            icon={faBicycle}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faGuitar}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faPersonHiking}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faPersonSnowboarding}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faCat}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faBook}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faComputer}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          ></FontAwesomeIcon>
          <br></br>I also do indoor rock climbing pretty often, but there's not a cohesive icon for that :)
        </p>
      </div>
    </div>
  );
};

export default Hobbies;
