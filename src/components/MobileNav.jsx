import React from "react";
import './NavBar.css';

const MobileNav = () => {
  const handleNavigation = (id) => {
    window.location.href = id;
  };

  return (
    <div className="mobileNav">
      <div
        className="mobileNavItem"
        onClick={() => handleNavigation("#about")}
        style={{ cursor: "pointer" }}
      >
        ABOUT
      </div>
      <div
        className="mobileNavItem"
        onClick={() => handleNavigation("#projects")}
        style={{ cursor: "pointer" }}
      >
        PROJECTS
      </div>
      <div
        className="mobileNavItem"
        onClick={() => handleNavigation("#experience")}
        style={{ cursor: "pointer" }}
      >
        EXPERIENCE
      </div>
    </div>
  );
};

export default MobileNav;