import React from 'react';
import '../App.css'

const About = () => {
  return (
      <div className='centered-block'>
          <p>
          <h1 style={{textDecorationLine: "underline"}}>About</h1>
            I am extremely sociable, well-rounded in hardware, software, and spoken languages. I'm also a passionate advocate for diversity, equity, and inclusion. In my free time, I play guitar, like to sew, bike around my town, and am a dedicated volunteer at the <a className='myLink' href='https://www.youtube.com/watch?v=kDy0CcCEcL4'>Kitkat Playroom</a> in the south New Jersey area, where I care for fostered kittens. 
          </p>

          <p>
            In my current role, I specialize in DevOps, primarily utilizing <span style={{backgroundColor:"var(--accent-color)"}}>Microsoft Azure</span>. I have honed my skills in containerization and orchestration through tools such as  <span style={{backgroundColor:"var(--accent-color)"}}>Docker</span> and <span style={{backgroundColor:"var(--accent-color)"}}>Kubernetes</span> services, and I am adept at deploying Infrastructure as a Code (IaaC) through <span style={{backgroundColor:"var(--accent-color)"}}>Terraform</span>.
            I deploy these containerized applications in to cloud environment clusters and orchestrate the pods by use of <span style={{backgroundColor:"var(--accent-color)"}}>Helm</span> charts to provide scalable solutions. These technical competencies, coupled with my problem-solving abilities, have enabled me to drive operational efficiency and security in my projects. <br></br>
          </p>

          <p>
            I also have a robust experience in full-stack development. On the front-end, I have worked extensively with <span style={{backgroundColor:"var(--accent-color)"}}>React</span>, creating dynamic and user-friendly interfaces. On the back-end, I utilize <span style={{backgroundColor:"var(--accent-color)"}}>JavaScript</span>, <span style={{backgroundColor:"var(--accent-color)"}}>Python</span>, and <span style={{backgroundColor:"var(--accent-color)"}}>FastAPI/ExpressJS</span> to build efficient and lightweight APIs. My interest in Cybersecurity is another aspect that sets me apart. I have hands-on experience with <span style={{backgroundColor:"var(--accent-color)"}}>Kali Linux</span> tools and have conducted <span style={{backgroundColor:"var(--accent-color)"}}>penetration testing</span> for personal projects, which has honed my skills in identifying and mitigating security risks.
          </p>
          
          <h2>Page Info</h2>
          <p>
            This page was created using <a href='https://react.dev/' className='myLink'>React</a>, <a className='myLink' href="https://vitejs.dev/guide/cli.html">Vite</a>, and deployed with Nginx on my personal Ubuntu Server via HTTPS with Certbot.
          </p>

          <h2>Image Credits</h2>
          <p>
            The high quality images used in this website are from <a className='myLink' href='https://unsplash.com/developers'>Unsplash API</a>, while the icons are via <a className='myLink' href='https://dashboard.clearbit.com/docs#logo-api'>Clearbit API</a> or FontAwesome.
          </p>
      </div>
  )
};

export default About;
