import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PopUp from "./PopUp";
import MobileNav from "./MobileNav";
import './NavBar.css';

const NavBar = () => {
    const handleNavigation = (id) => {
        const sectionIndex = {
            "#home": 0,
            "#about": 1,
            "#projects": 2,
            "#experience": 3
        }[id];

        if (sectionIndex !== undefined) {
            fullpage_api.moveTo(sectionIndex + 1); // fullpage.js sections are 1-indexed
        }
    };

    return (
        <div className="navBar">
            <div className="navBarJustifyStart">
                <div onClick={() => handleNavigation("#home")} style={{ cursor: "pointer" }} className="navItem">Home</div>
                <div onClick={() => handleNavigation("#about")} style={{ cursor: "pointer" }} className="navItem">About</div>
                <div onClick={() => handleNavigation("#projects")} style={{ cursor: "pointer" }} className="navItem">Experience</div>
                <div onClick={() => handleNavigation("#experience")} style={{ cursor: "pointer" }} className="navItem">More</div>
                <div className="navItemMobile">
                    <PopUp
                        collapsedContent={<FontAwesomeIcon style={{ cursor: "pointer" }} icon={faBars} />}
                        expandedContent={<MobileNav closeNav={() => setIsExpanded(false)} />}
                    />
                </div>
            </div>
            <div style={{ cursor: "pointer" }} className="navBarJustifyEnd">
                <div className="navItem">
                    <a href="mailto:adduma.attia@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
