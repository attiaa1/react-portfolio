import "./Projects.css";

const Work1 = () => {
    return (
        <div className="projects">
            <div className="projects-content">
                <h4>Data Correlation for Unity Frontend</h4>
                <h5>Backend Developer</h5>
                <ul className="tech-stack-list">
                    <li className="tech-stack-item">Java</li>
                    <li className="tech-stack-item">Maven</li>
                    <li className="tech-stack-item">Spring Boot</li>
                    <li className="tech-stack-item">ActiveMQ</li>
                    <li className="tech-stack-item">Protobuf</li>
                    <li className="tech-stack-item">Unity</li>
                </ul>
                <p>
                    <ul>
                        <li>Designed and developed Spring Boot application to handle asynchronous event processing efficiently. </li>

                        <li>Integrated with an ActiveMQ broker to facilitate real-time data exchange, ensuring smooth and scalable messaging.</li>

                        <li>Implemented Protocol Buffer serialization for lightweight, structured communication, optimizing performance and reducing overhead.</li>

                        <li>Engineered track correlation logic based on requirements, ensuring accurate association of incoming data streams to properly serve to frontend.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Work1;
