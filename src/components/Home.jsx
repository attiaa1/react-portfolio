import React from 'react';
import ContactForm from './ContactForm';

const Home = () => {
  return (
      <div className='centered-block'>
        <p className='centered-block'> 
          Hi, my name is <br></br> <span style={{fontWeight: "bold",fontSize: "64px", color: "var(--text-color)", fontStyle: "italic"}}>Adam Attia</span>
        </p>
        <p className='centered-block'>I'm a Software Engineer, currently specializing in DevOps and proficient in:</p> 
        <div className='skillsGrid'>
          <div className='tech-logo'> 
              <i class="devicon-azure-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>Azure
            </div>
            <div className='tech-logo'> 
              <i class="devicon-amazonwebservices-plain-wordmark" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>AWS
            </div>

            <div className='tech-logo'> 
                <i class="devicon-docker-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>Docker
              </div>
              
            <div className='tech-logo'> 
                <i class="devicon-kubernetes-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>Kubernetes
            </div>
            
            <div className='tech-logo'> 
              <i class="devicon-python-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>Python
            </div>

        </div>

        <div className='skillsGrid'>
        <div className='tech-logo'> 
          <i class="devicon-react-original" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>React
        </div>

        <div className='tech-logo'> 
          <i class="devicon-html5-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>HTML
        </div>
          <div className='tech-logo'> 
            <i class="devicon-css3-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>CSS
          </div>

          <div className='tech-logo'> 
            <i class="devicon-javascript-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>JavaScript
          </div>
          
          <div className='tech-logo'> 
            <i class="devicon-bash-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>Shell
          </div>
          
        </div>

        <div className='skillsGrid'>

          <div className='tech-logo'> 
              <i class="devicon-linux-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>Linux
            </div>
            
          <div className='tech-logo'> 
            <i class="devicon-vim-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>Vim
          </div>
            
            <div className='tech-logo'> 
              <i class="devicon-cplusplus-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>C++
            </div>

            <div className='tech-logo'> 
              <i class="devicon-git-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>Git
            </div>

            <div className='tech-logo'> 
              <i class="devicon-flask-original" style={{fontSize:"64px", margin: "20px"}}></i> <br></br>Flask
          </div>


        

        </div>
        <p className='centered-block'>Explore my page and learn some more about me. <br></br> We're both constantly improving!</p>
        <br></br>
        <span style={{fontSize: "32px", fontStyle: "italic"}}>Feeling Social?</span> <br></br>
        <a style={{display: "inline-block", color: "#ecf0f1"}} href='https://www.linkedin.com/in/adam-attia2/'>
        <div className='contact-logo'> 
                <i class="devicon-linkedin-plain" style={{fontSize:"30px"}}></i>
              </div>
        </a>
        <a style={{display: "inline-block", color: "#ecf0f1"}} href='https://github.com/attiaa1'>
            <div className='contact-logo'> 
                <i class="devicon-github-plain" style={{fontSize:"30px"}}></i>
            </div>
        </a>
          <br></br>
          <div className='emailBox'>
              <ContactForm></ContactForm>
          </div>
      </div>
  );
};

export default Home;
