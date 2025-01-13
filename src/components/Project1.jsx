import React from 'react';
import './Projects.css'

const Project1 = () => {
    return(
        <div className='projects'>
            <div className='projects-content'>
                <h3>Azure DevSecOps</h3>
                <p>
                    I developed an innovative Node.js application to display ActiveMQ tracking
                    simulators on map tiles from geospatial data in a secure,
                    airgapped Azure plane. By containerizing and orchestrating
                    applications with Docker and Kubernetes, I ensured seamless
                    deployment in our CI/CD process. Leveraging
                    Terraform, I created scalable cloud infrastructure,
                    including hardened VMs, registries, and Kubernetes clusters. I also built
                    robust GitLab CI/CD pipelines to keep private registry
                    applications up-to-date and conducted regular security audits and
                    risk assessments to maintain compliance with DoD Impact Level 4 and 6
                    standards. Going forward I act as the SysAdmin as the cloud 
                    has been adopted at an enterprise level and has begun scaling up for more users. 
                </p>
            </div>
        </div>
    );
}

export default Project1;