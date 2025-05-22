import "./Projects.css";

const Work2 = () => {
    return (
        <div className="projects">
            <div className="projects-content">
                <h4>Azure React Deployment</h4>
                <h5>DevOps Engineer</h5>
                <ul className="tech-stack-list">
                    <li className="tech-stack-item">Azure</li>
                    <li className="tech-stack-item">Kubernetes</li>
                    <li className="tech-stack-item">Helm</li>
                    <li className="tech-stack-item">React</li>
                    <li className="tech-stack-item">Terraform</li>
                    <li className="tech-stack-item">CI/CD</li>
                </ul>
                <p>
                    <ul>
                        <li>Developed React app to display ActiveMQ plane tracks via OpenStreetMap API.</li>
                        <li>Designed Terraform modules to spin-up cost-effective dev environments and worker nodes in Azure.</li>
                        <li>Containerized and wrote helm charts to deploy scalable cluster of apps with Kubernetes.</li>
                        <li>Created Gitlab CI/CD pipelines to validate code, apply any changes from developers to staging environment, and maximize uptime.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Work2;
