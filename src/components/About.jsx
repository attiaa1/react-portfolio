import React from 'react';
import ImageSlider from './ImageSlider';
import './About.css'

const About = () => {
    const images = [
        <i class="devicon-azure-plain"></i>,
        <i class="devicon-amazonwebservices-plain-wordmark"></i>,
        <i class="devicon-docker-plain-wordmark"></i>,
        <i class="devicon-kubernetes-plain-wordmark"></i>,
        <i class="devicon-python-plain-wordmark"></i>,
        <i class="devicon-react-original-wordmark"></i>,
        <i class="devicon-nodejs-plain-wordmark"></i>,
        <i class="devicon-typescript-plain"></i>,
        <i class="devicon-html5-plain-wordmark"></i>,
        <i class="devicon-css3-plain-wordmark"></i>,
        <i class="devicon-cplusplus-plain"></i>,
        <i class="devicon-java-plain-wordmark"></i>,
        <i class="devicon-git-plain-wordmark"></i>,
        <i class="devicon-gitlab-plain-wordmark"></i>,
        <i class="devicon-mongodb-plain-wordmark"></i>,
        <i class="devicon-postgresql-plain-wordmark"></i>
    ]

    return(
        <div className='about'>
            <div className='about-content'>
                <p>At my core, I'd like to say I'm a <span style={{fontStyle: "italic"}}>problem solver</span>, and that's influenced everything from my hobbies to my studies. I've always had a knack at taking things apart to see how they work, and it wasn't until my freshman year of undergrad that I realized that this was part of reverse-engineering.</p>
                <p>I started my engineering journey as an Electrical Engineer, and due to the opportunity to work on some embedded systems at my co-op during grad school, I realized my true calling was nested in the software world, and pursued Computer Engineering for the rest of my graduate studies.</p>
                <p>Since then, I've had the opportunity in my current role as a Software Engineer to work with some incredible tech stacks.</p>
                <div>
                    <ImageSlider images={images}/>
                </div>
            </div>
        </div>
    );
}

export default About;