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
        <i class="devicon-terraform-plain-wordmark"></i>,
        <i class="devicon-html5-plain-wordmark"></i>,
        <i class="devicon-css3-plain-wordmark"></i>,
        <i class="devicon-cplusplus-plain"></i>,
        <i class="devicon-java-plain-wordmark"></i>,
        <i class="devicon-git-plain-wordmark"></i>,
        <i class="devicon-gitlab-plain-wordmark"></i>,
        <i class="devicon-mongodb-plain-wordmark"></i>,
        <i class="devicon-postgresql-plain-wordmark"></i>
    ]

    return (
        <div className='about'>
            <div className='about-content'>
                <p>At my core, I'm a <span style={{ fontStyle: "italic" }}>problem solver</span>, and that's influenced everything from my hobbies to my studies. I've always had a knack for taking things apart to see how they work, and it wasn't until my freshman year of undergrad that I realized that this was part of reverse-engineering.</p>
                <p>From my over two years of experience as a Software Engineer, I've had some time to familiarize myself with some incredible tech stacks, mentor newer developers, update existing codebases, and learn so much from my colleagues.</p>
                <p>
                    As you scroll, you will find significant projects I've led and contributed to.
                </p>
                <div>
                    <ImageSlider images={images} />
                </div>
            </div>
        </div>
    );
}

export default About;
