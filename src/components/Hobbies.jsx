import React from "react";
import "./Hobbies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFloppyDisk,
    faLanguage,
    faUtensils,
    faGuitar,
    faBicycle,
    faPersonHiking,
    faPersonSnowboarding,
    faBook,
} from "@fortawesome/free-solid-svg-icons";

const Hobbies = () => {
    return (
        <div className="about">
            <div className="about-content">
                <h4>My Hobbies</h4>
                <h6>Tech Recycling&nbsp;
                    <FontAwesomeIcon
                        icon={faFloppyDisk}
                    />
                </h6>
                <p>Repairing and installing Linux on secondhand systems to bring them new life, using them to self-host my media, music, images, and smart home setup.
                </p>

                <h6>Learning Language&nbsp;
                    <FontAwesomeIcon
                        icon={faLanguage}
                    />
                </h6>
                <p>Currently I'm learning Arabic, to add to my arsenal of Spanish, and French. I love speaking to people in their native language and seeing their face light up.</p>

                <h6>Cooking&nbsp;
                    <FontAwesomeIcon
                        icon={faUtensils}
                    />
                </h6>
                <p>I have been cooking dishes such as red lentil daal and KBBQ marinated chicken thighs recently to explore these flavor profiles and save money on eating out.</p>
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
                        icon={faBook}
                        style={{ fontSize: "2rem", padding: "0.5rem" }}
                    ></FontAwesomeIcon>
                </p>
            </div>
        </div>
    );
};

export default Hobbies;
