import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import azure from "../assets/azure.jpeg";

const Project_BL = () => {
  const [isExpanded, setIsExpanded] = useState("False");
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {isExpanded ? (
        <div
          onClick={toggleExpanded}
          className="collapsedSection"
          style={{ height: "100%", width: "100%" }}
        >
          <h1 style={{ textAlign: "center", fontSize: "1.5rem" }}>
            Azure DevSecOps
          </h1>
          <p style={{ fontSize: "1rem", textAlign: "center" }}>
            <span className="keyword">CI/CD Pipelines</span>{" "}
            <span className="keyword">Kubernetes</span>{" "}
            <span className="keyword">Terraform</span>
            <br></br>
            <img
              style={{
                padding: "10px",
                width: "80%",
                height: "80%",
                borderRadius: "25px",
              }}
              src={azure}
            ></img>
          </p>
        </div>
      ) : (
        <div
          className="expandedSection"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              fontSize: "1rem",
              backgroundColor: "#0A1128",
              height: "85vh",
              width: "75vw",
              borderRadius: "15px",
              alignItems: "center",
              padding: "15px",
              overflowY: "auto",
            }}
          >
            <FontAwesomeIcon
              onClick={toggleExpanded}
              icon={faCircleXmark}
              style={{ fontSize: "2rem", margin: "0.5rem" }}
            ></FontAwesomeIcon>
            <h1 style={{ textAlign: "center", width: "auto" }}>
              Azure DevSecOps
            </h1>
            <div
              style={{ textAlign: "center", width: "auto" }}
              class="icon-grid"
            >
              <div class="icon-item">
                <i
                  class="devicon-gitlab-plain-wordmark"
                  style={{ fontSize: "2.5rem", margin: "0" }}
                ></i>
              </div>
              <div class="icon-item">
                <i
                  class="devicon-terraform-plain-wordmark"
                  style={{ fontSize: "2.5rem", margin: "0" }}
                ></i>
              </div>
              <div class="icon-item">
                <i
                  class="devicon-kubernetes-plain-wordmark"
                  style={{ fontSize: "3rem", margin: "0" }}
                ></i>
              </div>
              <div class="icon-item">
                <i
                  class="devicon-redhat-plain-wordmark"
                  style={{ fontSize: "2.5rem", margin: "0" }}
                ></i>
              </div>
            </div>
            <p style={{ display: "flex", fontSize: "1rem", width: "100%" }}>
              I developed an innovative Node.js application to display tracking
              simulators on map tiles from geospatial and broker data in a secure,
              airgapped Azure plane. By containerizing and orchestrating
              applications with Docker and Kubernetes, I ensured seamless
              deployment in our CI/CD process. Leveraging
              Terraform, I deployed scalable Azure cloud infrastructure,
              including hardened VMs, registries, and Kubernetes clusters. I also built
              robust GitLab CI/CD pipelines to keep private registry
              applications up-to-date and conducted regular security audits and
              risk assessments to maintain compliance with Azure IL4 and 6
              standards. Going forward I act as the SysAdmin as the cloud 
              has been adopted at an enterprise level and began scaling. 
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Project_BL;
