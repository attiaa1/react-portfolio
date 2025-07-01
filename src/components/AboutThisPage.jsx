import React from "react";
import "./Hobbies.css";

const AboutThisPage = () => {
    return (
        <div className="about">
            <div className="about-content">
                <h4>More about this site!</h4>
                <p>
                    I did a lot of manual testing to make this page pleasing in a mobile browser setting, so if you are viewing this on your phone, thank you and I hope you enjoy your experience!
                </p>
                <p>
                    This page was created using{" "}
                    <a href="https://react.dev/" style={{ color: "white" }}>
                        ReactJS
                    </a>
                    , and uses NGINX to point to my server. CloudFlare handles DNS and I generated a SSL certificate via Certbot to encrypt and load the page via HTTPS.
                    A bash script in my {" "}
                    <a href="https://github.com/attiaa1/react-portfolio" style={{ color: "white" }}>
                        repository
                    </a>
                    &nbsp;automates my deployment to a degree, but this will be replaced with a GitHub Actions CI/CD pipeline to test, build, scan, and deploy on my remote server.
                </p>
            </div>
        </div>
    );
};

export default AboutThisPage;
