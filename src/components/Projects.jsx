import React from 'react';
import '../App.css'

const Projects = () => {
  return (
    <div className='centered-block'>
      <h1 style={{textDecorationLine: "underline"}}> Projects</h1>
      <p className='blurb'>
        <h2>Sudoku Generator and Solver</h2>
        <div className='skillsGrid'>
          <div className='tech-logo'> 
                <i class="devicon-python-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>Python
              </div>
              
            <div className='tech-logo'> 
                <i class="devicon-numpy-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>NumPy
            </div>
            
            <div className='tech-logo'> 
              <i class="devicon-amazonwebservices-plain-wordmark" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>AWS
            </div>
        </div>
      </p>
      <ul className='blurbUL'>
        <li>Built a fast and efficient Sudoku Generator and Solver using Python, with NumPy handling the heavy lifting for computations and matrix operations.</li>
        <li>Solved Sudoku puzzles using a backtracking algorithm, showcasing problem-solving skills and a deep understanding of algorithmic principles.</li>
        <li>Leveraged AWS for deploying the application via EC2 instance, ensuring accessibility and that it can handle varying user demand.</li>
      </ul>
      <div className='tech-logo'> 
              <i class="devicon-github-original" style={{fontSize:"32px", margin: "5px"}}></i> <a className='myLink' href='https://github.com/attiaa1/sudoku'>Github Repository</a>
            </div>

      <p className='blurb'>
        <h2>React Portfolio Website</h2>
        <div className='skillsGrid'>
        <div className='tech-logo'> 
                <i class="devicon-react-original" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>React
              </div>
              
            <div className='tech-logo'> 
                <i class="devicon-html5-plain" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>HTML
            </div>
            
            <div className='tech-logo'> 
              <i class="devicon-nginx-original" style={{fontSize:"64px", margin: "5px"}}></i> <br></br>Nginx
            </div>
        </div>
      </p>
      <ul className='blurbUL'>
        <li>Crafted an interactive Portfolio Website using React, showcasing proficiency in modern web development practices and component-based architecture.</li>
        <li>Utilized HTML for structuring the website content, demonstrating a solid understanding of semantic web design principles.</li>
        <li>Deployed the website using Nginx, ensuring efficient handling of HTTP requests and seamless delivery of static content.</li>
      </ul>
      <div className='tech-logo'> 
              <i class="devicon-github-original" style={{fontSize:"32px", margin: "5px"}}></i> <a className='myLink' href='https://github.com/attiaa1/react-portfolio'>Github Repository</a>
            </div>

    </div>
  );
};

export default Projects;
