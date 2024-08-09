import React from "react";
import "../App.css";

const Experience = () => {
  const jobs = [
    {
      company: "Lockheed Martin",
      location: "Moorestown, NJ",
      duration: "June 2023 - Present",
      title: "Software Engineer II",
      responsibilities: [
        {
          title: "DevSecOps Engineer",
          tasks: [
            "Created React application to display tracking simulators and map tiles from geospatial data in airgapped setting",
            "Containerized and orchestrated applications to deploy in DoD Impact Level 4 and 6 with Docker and Kubernetes",
            "Deployed Azure cloud infrastructure, including scalable virtual machines and kubernetes clusters via Terraform",
            "Assembled GitLab CI/CD pipelines in the cloud environment to ensure private registry applications are up-to-date",
            "Conducted regular security audits and risk assessments to ensure compliance with Azure IL4 and 6 environments.",
          ],
        },
        {
          title: "Front-End Developer",
          tasks: [
            "Utilized Gitlab RESTful API to pull pipeline security scan information, container information, and integration and testing procedures.",
            "Encapsulated and presented team-wide projects to executives and VPs on a deployed website page using React, HTML, and CSS.",
            "Implemented a feedback loop on the GitLab page to gather and incorporate suggestions from team members and stakeholders.",
            "Developed custom scripts to automate the update and maintenance of the documentation, reducing manual effort by 50%.",
          ],
        },
      ],
    },
    {
      company: "Universal Instruments Co.",
      location: "Conklin, NY",
      duration: "June 2022 - June 2023",
      title: "Electrical Engineer I",
      responsibilities: [
        {
          title: "Electrical Design Engineer",
          tasks: [
            "Facilitated field operations, maintenance, and upgrades of insertion mount and surface mount technology",
            "Reduced expected lead time by 6 weeks via retrofitting systems with parts ensured through available supply chain",
            "Documented and captured electrical design modifications via AutoCAD Electrical and presented changes to team",
          ],
        },
      ],
    },
  ];

  const icons = {
    "DevSecOps Engineer": (
      <i
        class="devicon-azure-plain"
        style={{ fontSize: "24px", margin: "5px" }}
      ></i>
    ),
    "Front-End Developer": (
      <i
        class="devicon-react-original"
        style={{ fontSize: "24px", margin: "5px" }}
      ></i>
    ),
    "Electrical Design Engineer": (
      <i
        class="devicon-lumen-original"
        style={{ fontSize: "24px", margin: "5px" }}
      ></i>
    ),
  };

  return (
    <div className="centered-block">
      <h1 style={{ textDecorationLine: "underline" }}> Experience</h1>
      <p className="centered-block">
        {jobs.map((job, index) => (
          <p key={index} className="job">
            <p className="title">
              {job.title} @ {job.company} - {job.location}
            </p>
            <p className="duration">{job.duration}</p>
            {job.responsibilities.map((responsibility, i) => (
              <p key={i}>
                <h2>
                  {responsibility.title} {icons[responsibility.title]}
                </h2>
                <ul>
                  {responsibility.tasks.map((task, j) => (
                    <li key={j}>{task}</li>
                  ))}
                </ul>
              </p>
            ))}
          </p>
        ))}
      </p>
    </div>
  );
};

export default Experience;
