import React from "react";
import './NavBar.css';

const MobileNav = ({ closeNav }) => {
  const handleNavigation = (id) => {
    closeNav();
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
    <div className="mobileNav">
      <div
        className="mobileNavItem"
        onClick={() => handleNavigation("#home")}
        style={{ cursor: "pointer" }}
      >
        Home
      </div>
      <div
        className="mobileNavItem"
        onClick={() => handleNavigation("#about")}
        style={{ cursor: "pointer" }}
      >
        About
      </div>
      <div
        className="mobileNavItem"
        onClick={() => handleNavigation("#projects")}
        style={{ cursor: "pointer" }}
      >
        Work
      </div>
      <div
        className="mobileNavItem"
        onClick={() => handleNavigation("#experience")}
        style={{ cursor: "pointer" }}
      >
        More
      </div>
    </div>
  );
};

export default MobileNav;
