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
                    , and uses Nginx as a reverse-proxy to point to my server with a personalized DNS
                    via HTTPS. I created a Bash script to automate deployment in my repo, but
                    I plan to automate this via CI/CD pipeline in the near future!
                </p>

                <h3>Hobbies (cont'd)</h3>
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
