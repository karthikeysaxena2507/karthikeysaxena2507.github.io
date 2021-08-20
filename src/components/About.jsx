import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import * as data from "../config/data";
import Heading from "../helper/Heading";

const About = () => 
{
    return (
    <div className = "container about upper-margin" id = "about">
        <Heading heading = "About Me" />
        <ScrollAnimation animateIn = "zoomIn" animateOnce = {true} duration = {1.5}>
            <p className = "padding"> 
                {data.introData}
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