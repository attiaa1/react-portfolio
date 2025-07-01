import "./Projects.css";

const Work3 = () => {
    return (
        <div className="projects">
            <div className="projects-content">
                <h4>AWS Java Deployment</h4>
                <h5>DevOps Engineer</h5>
                <ul className="tech-stack-list">
                    <li className="tech-stack-item">AWS</li>
                    <li className="tech-stack-item">Cameo</li>
                    <li className="tech-stack-item">Jira</li>
                    <li className="tech-stack-item">Kubernetes</li>
                    <li className="tech-stack-item">Helm</li>
                    <li className="tech-stack-item">Java</li>
                </ul>
                <p>
                    <ul>
                        <li>Led Agile project management as Scrum Master, managing Jira epics and tickets to drive forward progress of the DevSecOps team.</li>
                        <li>Designed system architecture using Cameo to generate SV-1 and SV-2 deployment-level diagrams within AWS GovCloud enclave.</li>
                        <li>Provisioned cloud infrastructure, AWS Workspaces, EC2 instances for cluster nodes, and EKS cluster for client platform.</li>
                        <li>Configured EKS deployment, managing container images, Helm charts, clusters, ingress, and security policies for seamless integration.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Work3;
