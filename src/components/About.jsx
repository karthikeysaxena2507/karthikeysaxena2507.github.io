import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import * as data from "../config/data";
import Heading from "../helper/Heading";

const About = () => 
{
    return (
    <div className = "container about upper-margin" id = "about">
        <ScrollAnimation animateIn = "fadeIn" duration = {1.5}>
            <Heading heading = "About Me" />
        </ScrollAnimation>
        <ScrollAnimation animateIn = "zoomIn" duration={1.5}>
            <p className = "padding"> 
                I am a software/Full stack Developer enthusiast with an immense interest in 
                competitive programming. 
            <br />
                I am passionate towards coding and building awesome projects to grow and 
                develop my skills as a developer in the IT industry.
            <br />
                Feel free to contact me at any time.
            </p>
            <div class = "text-center">
                <button type = "button" class = "btn btn-dark expand">
                    <a 
                        href = {data.links.RESUME_LINK} 
                        target = "_blank" 
                        rel = "noreferrer"> 
                        Resume 
                    </a> 
                </button>
            </div> 
        </ScrollAnimation>
    </div>);
}

export default About;