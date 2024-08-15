import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PopUp from "./PopUp";
import MobileNav from "./MobileNav";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBarJustifyStart">
        <div style={{cursor: "pointer"}} className="navItem">ABOUT</div>
        <div style={{cursor: "pointer"}} className="navItem">PROJECTS</div>
        <div style={{cursor: "pointer"}} className="navItem">EXPERIENCE</div>
        <div className="navItemMobile">
          <PopUp
            collapsedContent={<FontAwesomeIcon style={{cursor: "pointer"}} icon={faBars}/>}
            expandedContent={<MobileNav />}
          />
        </div>
      </div>
      <div style={{cursor: "pointer"}} className="navBarJustifyEnd">
        <div className="navItem">
          <a href="mailto:adduma.attia@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
