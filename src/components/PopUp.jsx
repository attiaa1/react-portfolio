import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const PopUp = ({ collapsedContent, expandedContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {isExpanded ? (
        <div
          className="expandedSection"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: "relative",
              fontSize: "1rem",
              backgroundColor: "rgb(0,0,0,0.5)",
              height: "90vh",
              width: "75vw",
              borderRadius: "15px",
              padding: "15px",
            }}
          >
            <FontAwesomeIcon
              onClick={toggleExpanded}
              icon={faCircleXmark}
              style={{
                fontSize: "2rem",
                position: "absolute",
                top: "10px",
                left: "10px",
                cursor: "pointer",
                padding: "15px",
              }}
            />
            {React.cloneElement(expandedContent, { closeNav: toggleExpanded })}
          </div>
        </div>
      ) : (
        <div
          className="collapsedSection"
          style={{ height: "100%", width: "100%" }}
        >
          {React.cloneElement(collapsedContent, { onClick: toggleExpanded })}
        </div>
      )}
    </>
  );
};

export default PopUp;
